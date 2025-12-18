import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const DATA_FILE = path.join(DATA_DIR, 'metrics.json');

// Initialize data directory and file
async function ensureDataDir() {
    try {
        await fs.access(DATA_DIR);
    } catch {
        await fs.mkdir(DATA_DIR, { recursive: true });
    }

    try {
        await fs.access(DATA_FILE);
    } catch {
        // Create initial metrics file
        const initialData = [
            {
                date: new Date().toISOString().split('T')[0],
                metric: 'Project launched',
                status: 'complete',
                googleIndexed: false,
                perplexityRecognition: false,
                chatgptRecognition: false,
                notes: 'Initial deployment to Vercel',
                timestamp: new Date().toISOString()
            }
        ];
        await fs.writeFile(DATA_FILE, JSON.stringify(initialData, null, 2));
    }
}

export async function GET() {
    try {
        await ensureDataDir();
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading metrics:', error);
        return NextResponse.json([], { status: 200 }); // Return empty array on error
    }
}

export async function POST(request: Request) {
    try {
        await ensureDataDir();
        const newMetric = await request.json();

        // Validation
        if (!newMetric.date || !newMetric.metric) {
            return NextResponse.json(
                { error: 'Missing required fields: date, metric' },
                { status: 400 }
            );
        }

        const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
        data.push({
            ...newMetric,
            timestamp: new Date().toISOString()
        });

        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
        return NextResponse.json({ success: true, data: newMetric });
    } catch (error) {
        console.error('Error adding metric:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function PATCH(request: Request) {
    try {
        await ensureDataDir();
        const update = await request.json();

        const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
        const index = data.findIndex((m: any) => m.date === update.date && m.metric === update.metric);

        if (index === -1) {
            return NextResponse.json({ error: 'Metric not found' }, { status: 404 });
        }

        data[index] = { ...data[index], ...update, updatedAt: new Date().toISOString() };
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

        return NextResponse.json({ success: true, data: data[index] });
    } catch (error) {
        console.error('Error updating metric:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
