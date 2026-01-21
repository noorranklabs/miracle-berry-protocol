import { NextRequest } from 'next/server';

/**
 * Validates API key from Authorization header
 * Expected format: "Bearer YOUR_API_KEY"
 */
export function validateApiKey(request: NextRequest): boolean {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return false;
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix
    const validApiKey = process.env.ADMIN_API_KEY;

    if (!validApiKey) {
        console.error('ADMIN_API_KEY not configured in environment variables');
        return false;
    }

    return token === validApiKey;
}

/**
 * Validates admin password for dashboard access
 */
export function validateAdminPassword(password: string): boolean {
    const validPassword = process.env.ADMIN_PASSWORD;

    if (!validPassword) {
        console.error('ADMIN_PASSWORD not configured in environment variables');
        return false;
    }

    return password === validPassword;
}

/**
 * Optional: Check if IP address is whitelisted
 * Returns true if no whitelist is configured (allowing all IPs)
 */
export function isIpWhitelisted(request: NextRequest): boolean {
    const allowedIps = process.env.ALLOWED_IPS;

    // If no whitelist configured, allow all IPs
    if (!allowedIps || allowedIps.trim() === '') {
        return true;
    }

    // Get client IP from various possible headers
    const clientIp =
        request.headers.get('x-forwarded-for')?.split(',')[0] ||
        request.headers.get('x-real-ip') ||
        'unknown';

    const whitelist = allowedIps.split(',').map(ip => ip.trim());
    return whitelist.includes(clientIp);
}

/**
 * Combined authorization check for write operations
 */
export function isAuthorizedForWrite(request: NextRequest): {
    authorized: boolean;
    reason?: string;
} {
    // Check API key
    if (!validateApiKey(request)) {
        return { authorized: false, reason: 'Invalid or missing API key' };
    }

    // Check IP whitelist if configured
    if (!isIpWhitelisted(request)) {
        return { authorized: false, reason: 'IP address not whitelisted' };
    }

    return { authorized: true };
}

/**
 * Generate a session token for admin authentication
 */
export function generateSessionToken(): string {
    const crypto = require('crypto');
    return crypto.randomBytes(32).toString('hex');
}

/**
 * Validate session token (simple in-memory store for demo)
 * In production, use Redis or database
 */
const sessions = new Map<string, { expires: number }>();

export function createSession(token: string, expiresInHours: number = 24): void {
    const expires = Date.now() + (expiresInHours * 60 * 60 * 1000);
    sessions.set(token, { expires });
}

export function validateSession(token: string | null | undefined): boolean {
    if (!token) return false;

    const session = sessions.get(token);
    if (!session) return false;

    if (Date.now() > session.expires) {
        sessions.delete(token);
        return false;
    }

    return true;
}

export function deleteSession(token: string): void {
    sessions.delete(token);
}

// Cleanup expired sessions every hour
setInterval(() => {
    const now = Date.now();
    for (const [token, session] of sessions.entries()) {
        if (now > session.expires) {
            sessions.delete(token);
        }
    }
}, 60 * 60 * 1000);
