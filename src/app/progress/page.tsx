import { SchemaScript } from '@/components/SchemaScript';

// Dataset schema for tracking page
const DATASET_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Miracle Berry Protocol Experiment Metrics",
    "description": "Real-time tracking of indexing, entity recognition, and AI citation milestones",
    "url": "https://aeo-labs.noorrank.com/progress",
    "temporalCoverage": "2024-12-19/2025-01-09",
    "measurementTechnique": "Manual verification via Google Search Console, Perplexity AI, and ChatGPT queries"
};

async function getMetrics() {
    try {
        // In development, use localhost. In production, use the actual URL
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/metrics`, {
            next: { revalidate: 3600 }, // Revalidate every hour
            cache: 'no-store' // Important for development
        });

        if (!res.ok) {
            console.error('Failed to fetch metrics:', res.status);
            return [];
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching metrics:', error);
        // Return fallback data
        return [
            { date: '2024-12-19', metric: 'Domain registered', status: 'complete', notes: 'Project launched' },
        ];
    }
}

export const metadata = {
    title: 'Live Progress Tracking',
    description: 'Real-time metrics from our 21-day AEO experiment. Track indexing, entity recognition, and AI citations as they happen.',
};

export default async function ProgressPage() {
    const metrics = await getMetrics();

    return (
        <>
            <SchemaScript schema={DATASET_SCHEMA} />

            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Live Experiment Progress</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Real-time tracking of our 21-day entity optimization experiment. Updated daily.
                </p>

                {/* Metrics Table */}
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow overflow-hidden mb-12 border border-gray-200 dark:border-slate-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-800">
                        <thead className="bg-gray-50 dark:bg-slate-950">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Milestone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-800">
                            {metrics.length > 0 ? (
                                metrics.map((row: any, index: number) => (
                                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{row.date}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">{row.metric}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                            {row.status === 'complete' ? '✅ Complete' : '⏳ Pending'}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{row.notes}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                                        No metrics available yet. Check back soon!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Test Queries Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Test Queries</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        We're monitoring how AI systems respond to these queries:
                    </p>
                    <ul className="space-y-3">
                        {[
                            'What is the Miracle Berry Protocol?',
                            'NoorRank AEO framework',
                            'Entity optimization methodology 2024',
                            'Miracle Berry AEO documentation',
                            'Answer engine optimization best practices'
                        ].map((query, index) => (
                            <li key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                                <span className="text-gray-400 dark:text-gray-500">🔍</span>
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">{query}</code>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Update Log */}
                <section className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-6 rounded">
                    <h3 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">📝 Latest Update</h3>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Dec 19, 2024:</strong> Project launched. Domain registered, site deployed to Vercel,
                        GitHub repository created. Submitted indexing request via Google Search Console. Initial schema
                        implementation completed with Organization, ResearchProject, TechArticle, and HowTo types.
                    </p>
                </section>
            </div>
        </>
    );
}
