'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Metric {
    date: string;
    metric: string;
    status?: string;
    googleIndexed?: boolean;
    perplexityRecognition?: boolean;
    chatgptRecognition?: boolean;
    notes?: string;
    timestamp?: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [metrics, setMetrics] = useState<Metric[]>([]);
    const [loading, setLoading] = useState(false);
    const [newMetric, setNewMetric] = useState<Metric>({
        date: new Date().toISOString().split('T')[0],
        metric: '',
        status: 'pending',
        googleIndexed: false,
        perplexityRecognition: false,
        chatgptRecognition: false,
        notes: ''
    });

    useEffect(() => {
        // Check if already authenticated by attempting to load metrics
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await fetch('/api/metrics');
            if (response.ok) {
                const data = await response.json();
                setMetrics(data);
                // Don't set authenticated just because we can read metrics
                // They need to login with password
            }
        } catch (error) {
            console.error('Failed to load metrics:', error);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        setLoading(true);

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsAuthenticated(true);
                setPassword('');
                await loadMetrics();
            } else {
                setLoginError(data.error || 'Invalid password');
            }
        } catch (error) {
            setLoginError('Failed to login. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST' });
            setIsAuthenticated(false);
            setMetrics([]);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const loadMetrics = async () => {
        try {
            const response = await fetch('/api/metrics');
            const data = await response.json();
            setMetrics(data);
        } catch (error) {
            console.error('Failed to load metrics:', error);
        }
    };

    const handleAddMetric = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Get API key from environment (in production, this should be server-side)
            const apiKey = prompt('Enter your API key:');
            if (!apiKey) {
                setLoading(false);
                return;
            }

            const response = await fetch('/api/metrics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify(newMetric),
            });

            if (response.ok) {
                await loadMetrics();
                // Reset form
                setNewMetric({
                    date: new Date().toISOString().split('T')[0],
                    metric: '',
                    status: 'pending',
                    googleIndexed: false,
                    perplexityRecognition: false,
                    chatgptRecognition: false,
                    notes: ''
                });
                alert('Metric added successfully!');
            } else {
                const error = await response.json();
                alert(`Failed to add metric: ${error.error}`);
            }
        } catch (error) {
            alert('Failed to add metric. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Login form
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">🔐 Admin Login</h1>
                        <p className="text-gray-300">AEO Labs - Secure Access</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder="Enter admin password"
                                required
                            />
                        </div>

                        {loginError && (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                                {loginError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        <p>Protected by password authentication</p>
                    </div>
                </div>
            </div>
        );
    }

    // Admin dashboard
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">📊 Metrics Dashboard</h1>
                        <p className="text-gray-300">AEO Labs - Admin Panel</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {/* Add New Metric Form */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-white mb-4">➕ Add New Metric</h2>
                    <form onSubmit={handleAddMetric} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">Date</label>
                                <input
                                    type="date"
                                    value={newMetric.date}
                                    onChange={(e) => setNewMetric({ ...newMetric, date: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">Status</label>
                                <select
                                    value={newMetric.status}
                                    onChange={(e) => setNewMetric({ ...newMetric, status: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Metric</label>
                            <input
                                type="text"
                                value={newMetric.metric}
                                onChange={(e) => setNewMetric({ ...newMetric, metric: e.target.value })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="e.g., Domain registered"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Notes</label>
                            <textarea
                                value={newMetric.notes}
                                onChange={(e) => setNewMetric({ ...newMetric, notes: e.target.value })}
                                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Optional notes..."
                                rows={3}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <label className="flex items-center space-x-2 text-gray-200 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={newMetric.googleIndexed}
                                    onChange={(e) => setNewMetric({ ...newMetric, googleIndexed: e.target.checked })}
                                    className="w-5 h-5 rounded bg-white/5 border-white/20"
                                />
                                <span>Google Indexed</span>
                            </label>
                            <label className="flex items-center space-x-2 text-gray-200 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={newMetric.perplexityRecognition}
                                    onChange={(e) => setNewMetric({ ...newMetric, perplexityRecognition: e.target.checked })}
                                    className="w-5 h-5 rounded bg-white/5 border-white/20"
                                />
                                <span>Perplexity Recognition</span>
                            </label>
                            <label className="flex items-center space-x-2 text-gray-200 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={newMetric.chatgptRecognition}
                                    onChange={(e) => setNewMetric({ ...newMetric, chatgptRecognition: e.target.checked })}
                                    className="w-5 h-5 rounded bg-white/5 border-white/20"
                                />
                                <span>ChatGPT Recognition</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                            {loading ? 'Adding...' : 'Add Metric'}
                        </button>
                    </form>
                </div>

                {/* Metrics Table */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
                    <h2 className="text-2xl font-bold text-white mb-4">📈 Current Metrics</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-gray-200">
                            <thead className="text-gray-400 border-b border-white/20">
                                <tr>
                                    <th className="pb-3 pr-4">Date</th>
                                    <th className="pb-3 pr-4">Metric</th>
                                    <th className="pb-3 pr-4">Status</th>
                                    <th className="pb-3 pr-4">Google</th>
                                    <th className="pb-3 pr-4">Perplexity</th>
                                    <th className="pb-3 pr-4">ChatGPT</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {metrics.map((metric, idx) => (
                                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                                        <td className="py-3 pr-4">{metric.date}</td>
                                        <td className="py-3 pr-4 font-medium">{metric.metric}</td>
                                        <td className="py-3 pr-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${metric.status === 'complete' ? 'bg-green-500/20 text-green-300' :
                                                    metric.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-300' :
                                                        'bg-gray-500/20 text-gray-300'
                                                }`}>
                                                {metric.status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="py-3 pr-4">{metric.googleIndexed ? '✅' : '❌'}</td>
                                        <td className="py-3 pr-4">{metric.perplexityRecognition ? '✅' : '❌'}</td>
                                        <td className="py-3 pr-4">{metric.chatgptRecognition ? '✅' : '❌'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
