import { NextResponse } from 'next/server';
import { deleteSession } from '@/lib/utils/auth';
import { cookies } from 'next/headers';

export async function POST() {
    try {
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get('admin_session')?.value;

        if (sessionToken) {
            deleteSession(sessionToken);
        }

        // Clear the cookie
        const response = NextResponse.json({ success: true });
        response.cookies.delete('admin_session');

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
