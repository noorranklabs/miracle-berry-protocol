import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { isAuthorizedForWrite } from '@/lib/utils/auth';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const DATA_FILE = path.join(DATA_DIR, 'metrics.json');

// make sure data dir and file exist
async function ensureDataDir() {
    try {
        await fs.access(DATA_DIR);
    } catch {
        // directory doesn't exist, create it
        await fs.mkdir(DATA_DIR, { recursive: true });
    }

    try {
        await fs.access(DATA_FILE);
    } catch {
        // initialize with first metric
        const initialData = [
            {
                date: new Date().toISOString().split('T')[0],
                metric: "Project launched",
                status: 'complete',
                googleIndexed: false,
                perplexityRecognition: false,
                chatgptRecognition: false,
                notes: "Initial deployment to Vercel",
                timestamp: new Date().toISOString()
            }
        ];
        await fs.writeFile(DATA_FILE, JSON.stringify(initialData, null, 2));
    }
}

// fetch all metrics (public endpoint)
export async function GET() {
    try {
        await ensureDataDir();
        const data = await fs.readFile(DATA_FILE, 'utf-8');

        // Add CORS headers for transparency
        return NextResponse.json(JSON.parse(data), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
            }
        });
    } catch (error) {
        console.error('Error reading metrics:', error);
        return NextResponse.json([], { status: 200 }); // just return empty if something breaks
    }
}

// add new metric (protected endpoint)
export async function POST(request: NextRequest) {
    // Check authorization
    const authCheck = isAuthorizedForWrite(request);
    if (!authCheck.authorized) {
        return NextResponse.json(
            { error: 'Unauthorized', reason: authCheck.reason },
            { status: 401 }
        );
    }

    try {
        await ensureDataDir();
        const newMetric = await request.json();

        // basic validation - need at least date and metric name
        if (!newMetric.date || !newMetric.metric) {
            return NextResponse.json(
                { error: 'Missing required fields: date, metric' },
                { status: 400 }
            );
        }

        // Sanitize input to prevent injection attacks
        const sanitizedMetric = {
            date: String(newMetric.date).trim(),
            metric: String(newMetric.metric).trim(),
            status: newMetric.status ? String(newMetric.status).trim() : 'pending',
            googleIndexed: Boolean(newMetric.googleIndexed),
            perplexityRecognition: Boolean(newMetric.perplexityRecognition),
            chatgptRecognition: Boolean(newMetric.chatgptRecognition),
            notes: newMetric.notes ? String(newMetric.notes).trim() : ''
        };

        const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
        data.push({
            ...sanitizedMetric,
            timestamp: new Date().toISOString()
        });

        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

        return NextResponse.json({ success: true, data: sanitizedMetric });
    } catch (error) {
        console.error('Error adding metric:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// update existing metric (protected endpoint)
export async function PATCH(request: NextRequest) {
    // Check authorization
    const authCheck = isAuthorizedForWrite(request);
    if (!authCheck.authorized) {
        return NextResponse.json(
            { error: 'Unauthorized', reason: authCheck.reason },
            { status: 401 }
        );
    }

    try {
        await ensureDataDir();
        const update = await request.json();

        const data = JSON.parse(await fs.readFile(DATA_FILE, 'utf-8'));
        const idx = data.findIndex((m: any) => m.date === update.date && m.metric === update.metric);

        if (idx === -1) {
            return NextResponse.json({ error: "Metric not found" }, { status: 404 });
        }

        data[idx] = { ...data[idx], ...update, updatedAt: new Date().toISOString() };
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

        return NextResponse.json({ success: true, data: data[idx] });
    } catch (error) {
        console.error('Error updating metric:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    });
}
