import { SchemaScript } from '@/components/SchemaScript';
import { generateTechArticleSchema } from '@/lib/schemas/techArticle';
import { IMPLEMENTATION_GUIDE } from '@/lib/schemas/howTo';

const DOCS_SCHEMA = generateTechArticleSchema({
    articleUrl: 'https://aeo-labs.noorrank.com/documentation',
    headline: 'Miracle Berry Protocol: Technical Documentation',
    description: 'Complete implementation guide for entity-first optimization in LLM-powered answer engines',
    datePublished: '2026-01-20',
    dateModified: '2026-01-20',
    dependencies: 'Next.js, Schema.org',
    proficiencyLevel: 'Intermediate'
});

export const metadata = {
    title: 'Technical Documentation',
    description: 'Complete implementation guide for the Miracle Berry AEO Protocol, including schema architecture and code examples.',
};

export default function DocumentationPage() {
    return <>
        <SchemaScript schema={[DOCS_SCHEMA, IMPLEMENTATION_GUIDE]} />

        <div className="max-w-4xl mx-auto space-y-16">
            <header className="space-y-4">
                <h1 className="text-5xl font-bold text-foreground tracking-tight">Technical Framework</h1>
                <p className="text-xl text-muted-foreground font-serif italic">The blueprint for entity-first answer engine optimization.</p>
            </header>

            {/* Core Principles */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    <span className="h-10 w-1 bg-primary rounded-full" />
                    Core Principles
                </h2>
                <div className="grid gap-6">
                    {[
                        { title: "Entity-First Architecture", desc: "Every page defines clear, machine-readable entities with persistent @id references." },
                        { title: "Semantic Relationship Mapping", desc: "Explicit connections between entities using schema.org properties like founder, author, and sameAs." },
                        { title: "Multi-Source Validation", desc: "Answer engines trust entities corroborated across multiple authoritative domains (GitHub, Medium, etc.)." }
                    ].map((principle, i) => (
                        <div key={i} className="journal-card p-6 border-l-4 border-l-primary/30">
                            <h3 className="text-xl font-bold mb-2 text-foreground">{principle.title}</h3>
                            <p className="text-muted-foreground">{principle.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Schema Architecture */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-foreground">Schema Architecture</h2>
                    <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider font-bold">JSON-LD v1.0</span>
                </div>

                <p className="text-lg text-muted-foreground">
                    Our implementation uses modular schema factories that ensure consistency across the entire entity graph.
                </p>

                <div className="bg-zinc-950 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 text-white/5 font-mono text-8xl pointer-events-none group-hover:text-primary/10 transition-colors">JSON</div>
                    <pre className="text-sm font-mono text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
                        {`// Organization entity with persistent @id
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://noorrank.com/#organization",
  "name": "NoorRank",
  "sameAs": [
    "https://www.github.com/noorranklabs/",
    "https://www.linkedin.com/company/noorrank/"
  ]
}

// ResearchProject linking to org entity
{
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  "founder": {
    "@type": "Organization",
    "@id": "https://noorrank.com/#organization"
  }
}`}
                    </pre>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 text-sm text-primary/80 italic font-serif">
                    <p>The <code className="bg-primary/10 px-1.5 py-0.5 rounded font-mono text-primary">@id</code> reference creates bidirectional entity relationships that AI systems use to build high-confidence knowledge graphs.</p>
                </div>
            </section>

            {/* Implementation Steps */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">Implementation Path</h2>
                <div className="space-y-6">
                    {IMPLEMENTATION_GUIDE.step.map((step: any, index: number) => (
                        <div key={index} className="journal-card p-8 group relative overflow-hidden">
                            <div className="absolute -right-4 -top-8 text-9xl font-bold text-primary/5 italic pointer-events-none">{index + 1}</div>
                            <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">{index + 1}</span>
                                {step.name}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed pl-11">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Repository */}
            <section className="journal-card p-12 bg-zinc-950 text-white text-center space-y-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-30" />
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Open Source Implementation</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Access the full codebase, reusable schema factories, and modular components directly on GitHub.
                    </p>
                    <a
                        href="https://github.com/noorranklabs/miracle-berry-protocol"
                        className="inline-flex items-center gap-3 bg-white text-zinc-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all text-lg"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Repository
                    </a>
                </div>
            </section>
        </div>

    </>;
}
