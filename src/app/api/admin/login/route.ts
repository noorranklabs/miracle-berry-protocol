import { NextRequest, NextResponse } from 'next/server';
import { validateAdminPassword, createSession, generateSessionToken } from '@/lib/utils/auth';

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();

        if (!password) {
            return NextResponse.json(
                { error: 'Password required' },
                { status: 400 }
            );
        }

        // Validate password
        if (!validateAdminPassword(password)) {
            return NextResponse.json(
                { error: 'Invalid password' },
                { status: 401 }
            );
        }

        // Create session
        const sessionToken = generateSessionToken();
        createSession(sessionToken, 24); // 24 hour session

        // Set secure HTTP-only cookie
        const response = NextResponse.json({ success: true });

        response.cookies.set('admin_session', sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60, // 24 hours
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
