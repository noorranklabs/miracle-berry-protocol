import { SchemaScript } from '@/components/SchemaScript';
import { format, differenceInDays, parseISO } from 'date-fns';

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
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/metrics`, {
            next: { revalidate: 3600 },
            cache: 'no-store'
        });

        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        return [
            { date: '2024-12-19', metric: 'Domain registered', status: 'complete', notes: 'Project launched' },
        ];
    }
}

export const metadata = {
    title: 'Experiment Log | MB-AEO Protocol',
    description: 'Daily experiment log tracking entity visibility and AI indexing progress.',
};

const START_DATE = parseISO('2024-12-19');

export default async function ProgressPage() {
    const metrics = await getMetrics();

    // Sort metrics by date descending
    const sortedMetrics = [...metrics].sort((a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <>
            <SchemaScript schema={DATASET_SCHEMA} />

            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-border pb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Experiment Log</h1>
                    <p className="text-xl text-muted-foreground font-serif italic">
                        "Observing the emergence of entity knowledge in answer engines."
                    </p>
                </header>

                <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="journal-card p-6 rounded relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">📊</div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Protocol Status</h3>
                        <p className="text-2xl font-serif text-primary">Active Phase 1</p>
                    </div>
                    <div className="journal-card p-6 rounded relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🗓️</div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Experiment Day</h3>
                        <p className="text-2xl font-serif text-primary">
                            Day {differenceInDays(new Date(), START_DATE) + 1} of 21
                        </p>
                    </div>
                    <div className="journal-card p-6 rounded relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">📈</div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Data Points</h3>
                        <p className="text-2xl font-serif text-primary">{metrics.length} Recorded</p>
                    </div>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12 pb-12">
                    {sortedMetrics.map((row: any, index: number) => {
                        const dayNum = differenceInDays(parseISO(row.date), START_DATE) + 1;

                        return (
                            <div key={index} className="relative pl-8 md:pl-12">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 border-background ${row.status === 'complete' ? 'bg-primary' : 'bg-muted'
                                    }`} />

                                <div className="journal-card p-8 rounded-lg group transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-border/50 pb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-sm bg-muted text-muted-foreground px-2 py-1 rounded">
                                                DAY {dayNum}
                                            </span>
                                            <time className="font-serif font-bold text-lg text-primary">
                                                {format(parseISO(row.date), 'MMMM do, yyyy')}
                                            </time>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            {row.status === 'complete' ? (
                                                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary">
                                                    <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                                    Verified
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                    Pending
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-foreground font-serif">
                                        {row.metric}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed font-serif">
                                        {row.notes}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Note */}
                <div className="text-center py-12 border-t border-border mt-12">
                    <p className="text-muted-foreground text-sm font-mono">
                        END OF LOG // NOORRANK LABS
                    </p>
                </div>
            </div>
        </>
    );
}
