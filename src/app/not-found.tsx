export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
                <p className="text-xl text-gray-600 mb-6">Page not found</p>
                <p className="text-gray-500 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <a
                    href="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-block"
                >
                    Return to homepage
                </a>
            </div>
        </div>
    );
}
