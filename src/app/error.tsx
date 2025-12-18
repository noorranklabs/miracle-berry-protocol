'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log to error tracking service in production
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
                <p className="text-gray-600 mb-6">
                    We encountered an error while loading this page.
                </p>
                <button
                    onClick={reset}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    Try again
                </button>
                <div className="mt-4">
                    <a href="/" className="text-sm text-gray-500 hover:text-gray-700 underline">
                        Return to homepage
                    </a>
                </div>
            </div>
        </div>
    );
}
