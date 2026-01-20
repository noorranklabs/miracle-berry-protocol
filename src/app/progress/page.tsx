import { SchemaScript } from '@/components/SchemaScript';
import { format, differenceInDays, parseISO } from 'date-fns';

// Dataset schema for tracking page
const DATASET_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Miracle Berry Protocol Experiment Metrics",
    "description": "Real-time tracking of indexing, entity recognition, and AI citation milestones",
    "url": "https://www.noorranklabs.com/progress",
    "temporalCoverage": "2026-01-20/2026-02-09",
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
            { date: '2026-01-20', metric: 'Domain registered', status: 'complete', notes: 'Project launched' },
        ];
    }
}

export const metadata = {
    title: 'Experiment Log | MB-AEO Protocol',
    description: 'Daily experiment log tracking entity visibility and AI indexing progress.',
};

const START_DATE = parseISO('2026-01-20');

export default async function ProgressPage() {
    const metrics = await getMetrics();

    // Sort metrics by date descending
    const sortedMetrics = [...metrics].sort((a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <>
            <SchemaScript schema={DATASET_SCHEMA} />

            <div className="max-w-4xl mx-auto space-y-16">
                <header className="border-b border-border pb-12 text-center space-y-4">
                    <h1 className="text-5xl font-bold text-foreground tracking-tight">Experiment Log</h1>
                    <p className="text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
                        "Longitudinal observation of entity propagation across distributed knowledge graphs."
                    </p>
                    <div className="flex justify-center pt-4">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-primary/20">
                            Live Tracking Active
                        </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Protocol Status", value: "Active Phase 1", color: "text-primary" },
                        { label: "Experiment Day", value: `Day ${differenceInDays(new Date(), START_DATE) + 1} of 21`, color: "text-accent" },
                        { label: "Captured Milestones", value: `${metrics.length} Recorded`, color: "text-indigo-400" }
                    ].map((stat, i) => (
                        <div key={i} className="journal-card p-8 group hover:border-primary/50 transition-all bg-white dark:bg-zinc-950">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</span>
                            </div>
                            <p className={`text-2xl font-bold tracking-tight text-foreground`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Vertical Timeline */}
                <div className="relative space-y-12">
                    <div className="absolute left-6 md:left-10 top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

                    {sortedMetrics.map((row: any, index: number) => {
                        const dayNum = differenceInDays(parseISO(row.date), START_DATE) + 1;

                        return (
                            <div key={index} className="relative pl-16 md:pl-24 group">
                                {/* Timeline Dot */}
                                <div className={`absolute left-[20px] md:left-[36px] top-6 w-3 h-3 rounded-full border-4 border-background z-10 transition-transform group-hover:scale-125 ${row.status === 'complete' ? 'bg-primary shadow-[0_0_0_4px_rgba(79,70,229,0.1)]' : 'bg-zinc-300 dark:bg-zinc-700'
                                    }`} />

                                <div className="journal-card p-8 bg-white dark:bg-zinc-950 group-hover:shadow-lg transition-all border-zinc-200 dark:border-zinc-800">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-zinc-100 dark:border-zinc-900 pb-6">
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono text-[10px] font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-500 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800">
                                                LOG {dayNum.toString().padStart(3, '0')}
                                            </span>
                                            <time className="font-bold text-lg text-foreground">
                                                {format(parseISO(row.date), 'MMMM do, yyyy')}
                                            </time>
                                        </div>
                                        <div className="flex items-center">
                                            {row.status === 'complete' ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
                                                    Verified Milestone
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                                                    In Progress
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-foreground tracking-tight">
                                        {row.metric}
                                    </h3>

                                    <p className="text-muted-foreground text-lg leading-relaxed font-serif italic">
                                        {row.notes}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Note */}
                <div className="text-center py-20 opacity-30 group hover:opacity-100 transition-opacity">
                    <div className="h-px w-24 bg-zinc-300 dark:bg-zinc-700 mx-auto mb-8" />
                    <p className="text-xs font-mono tracking-[0.3em] uppercase">
                        EOF // NOORRANK LABS EXPERIMENT LOG
                    </p>
                </div>
            </div>

        </>
    );
}
