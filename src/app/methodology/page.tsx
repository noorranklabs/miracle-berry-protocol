export const metadata = {
    title: 'Methodology',
    description: 'Deep dive into the Miracle Berry Protocol methodology: entity-first optimization strategies for answer engines.',
};

export default function MethodologyPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-20">
            <header className="space-y-6">
                <h1 className="text-5xl font-bold text-foreground tracking-tight">Methodology</h1>
                <p className="text-xl text-muted-foreground font-serif leading-relaxed italic max-w-3xl">
                    "A systematic approach to observing, measuring, and influencing the emergence of entity knowledge in Large Language Models."
                </p>
            </header>

            {/* Research Approach */}
            <section className="journal-card p-10 bg-zinc-50/50 dark:bg-zinc-950/50">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Research Philosophy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    The Miracle Berry Protocol bridges the gap between traditional technical SEO and the new paradigm of Answer Engine Optimization.
                    Our focus is on <span className="text-foreground font-semibold">corroboration over saturation</span>—ensuring that an entity's
                    digital footprint is clear, consistent, and cross-validated across authoritative nodes.
                </p>
            </section>

            {/* Three Pillars */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold text-foreground">The Pillars of AEO</h2>
                <div className="grid gap-8">
                    <div className="journal-card p-8 border-l-4 border-l-primary group">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary text-2xl font-bold">1</span>
                            <h3 className="text-2xl font-bold text-foreground">Entity Definition</h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Establishing machine-readable identities using persistent <code className="bg-primary/5 px-2 py-1 rounded text-primary font-mono text-sm">@id</code> references.
                            This isn't about content; it's about semantic identity.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Logo & Identity Validation",
                                "Social Profile Disambiguation",
                                "Hierarchical Parent/Child Schemas",
                                "Persistent URI Architecture"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="journal-card p-8 border-l-4 border-l-accent group">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent text-2xl font-bold">2</span>
                            <h3 className="text-2xl font-bold text-foreground">Multi-Source Validation</h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Trust is built through corroboration. We establish a footprint on high-authority platforms to create a web of technical validation.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "GitHub Technical Footprint",
                                "Medium Narrative Corroboration",
                                "Dev.to Peer-to-Peer Authority",
                                "Knowledge Graph Link-Back"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="journal-card p-8 border-l-4 border-l-indigo-400 group">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/10 text-indigo-400 text-2xl font-bold">3</span>
                            <h3 className="text-2xl font-bold text-foreground">Transparent Measurement</h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            A 21-day observation period where we publicly document milestones in citation frequency and model recognition accuracy.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Search Console Monitoring",
                                "AI Citation Frequency Analysis",
                                "Perplexity Entity Checks",
                                "Claude/ChatGPT Recognition Tests"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold text-foreground">Experimental Timeline</h2>
                <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 space-y-12 pb-10">
                    {[
                        { days: "1-3", phase: "Foundation", desc: "Site deployment, schema injection, and Search Console submission." },
                        { days: "4-7", phase: "Indexing", desc: "Monitoring propagation across web indices and external platform publication." },
                        { days: "8-14", phase: "Recognition", desc: "Initial qualitative testing with LLMs to detect entity mentions." },
                        { days: "15-21", phase: "Citation", desc: "Final verification of LLM-generated citations and bibliographic references." }
                    ].map((step, i) => (
                        <div key={i} className="relative pl-10">
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-background bg-primary" />
                            <div className="space-y-1">
                                <div className="text-sm font-mono font-bold text-primary uppercase">Days {step.days} • Phase {i + 1}</div>
                                <h3 className="text-xl font-bold text-foreground">{step.phase}</h3>
                                <p className="text-muted-foreground max-w-2xl">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why It Works */}
            <section className="bg-zinc-950 rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-50" />
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Theory of Corroboration</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                        AI systems like GPT-4o and Claude 3.5 Sonnet don't just "read" the web—they build probabilistic networks of truth.
                        By providing structured, persistent identifiers cross-referenced across trusted technical domains, we reduce the "entropy"
                        of entity knowledge, making it statistically probable for these models to cite our research as the primary source.
                    </p>
                    <div className="pt-8">
                        <a
                            href="https://github.com/noorranklabs/miracle-berry-protocol"
                            className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Verify the implementation on GitHub <span>→</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>

    );
}
