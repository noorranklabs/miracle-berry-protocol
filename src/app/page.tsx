import { SchemaScript } from '@/components/SchemaScript';
import { MB_RESEARCH_PROJECT } from '@/lib/schemas/researchProject';
import { differenceInDays, parseISO } from 'date-fns';

const START_DATE = parseISO('2026-01-20');

export const metadata = {
  title: 'Miracle Berry AEO Protocol',
  description: 'A transparent experiment in entity-first optimization by NoorRank. Tracking how structured data influences answer engine visibility over 21 days.',
};

export default function HomePage() {
  const dayCount = Math.min(21, Math.max(1, differenceInDays(new Date(), START_DATE) + 1));

  return <>
    <SchemaScript schema={MB_RESEARCH_PROJECT} />

    <div className="max-w-5xl mx-auto space-y-32">
      {/* main hero */}
      <section className="text-center py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-3xl opacity-50" />

        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Currently Active: Day {dayCount} of 21
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-foreground tracking-tighter leading-[1.1]">
          The Miracle Berry <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">AEO Protocol</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-serif italic">
          A definitive, transparent experiment in "Entity-First" optimization for the next generation of Answer Engines.
        </p>

        <div className="bg-white/50 dark:bg-zinc-900/50 border border-border rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-md shadow-sm">
          <p className="text-sm font-medium text-foreground flex gap-4 items-start text-left">
            <span className="pt-1">
              <strong className="text-primary font-bold">Research Intelligence:</strong> This live experiment demonstrates AEO methodologies that prioritize knowledge graph integration over legacy keyword signals.
            </span>
          </p>
        </div>
      </section>

      {/* what this is about */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-foreground tracking-tight">Redefining Visibility</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Miracle Berry Protocol is more than a strategy; it's a structured methodology for optimizing entity authority in Large Language Models.
            </p>
            <p>
              In an era dominated by Perplexity, ChatGPT, and Google SGE, traditional SEO is no longer sufficient. We focus on <span className="text-foreground font-semibold">disambiguation, semantic mapping, and corroborated trust.</span>
            </p>
          </div>
        </div>
        <div className="journal-card p-10 bg-zinc-50/50 dark:bg-zinc-900/10">
          <h3 className="font-bold text-xl text-foreground mb-6 flex items-center gap-2">
            <span className="h-1.5 w-8 bg-primary rounded-full" />
            Core Focus Areas
          </h3>
          <ul className="grid gap-4">
            {[
              "Entity Recognition & Disambiguation",
              "Knowledge Graph Semantic Integration",
              "Relationship Mapping (Schema Registry)",
              "Digital Authority Signal Construction"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-muted-foreground font-medium">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* the 3-pillar approach */}
      <section className="relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground tracking-tight">The Three Pillars</h2>
          <p className="text-muted-foreground text-lg italic font-serif">A foundational framework for Answer Engine visibility</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Architecture", desc: "Modular JSON-LD implementation with consistent, persistent entity references across the entire stack." },
            { title: "Authority", desc: "Strategic digital footprint construction across technical platforms to corroborate entity validity." },
            { title: "Measurement", desc: "Rigorous 21-day longitudinal tracking of indexing, citation frequency, and model recognition." }
          ].map((item, i) => (
            <div key={i} className="journal-card p-10 group bg-white dark:bg-zinc-950">
              <h3 className="font-bold mb-4 text-2xl text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 bg-zinc-900 dark:bg-zinc-950 rounded-3xl relative overflow-hidden group border border-zinc-800 dark:border-zinc-800/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]" />
        <div className="relative z-10 px-8">
          <h2 className="text-4xl font-bold mb-10 text-white tracking-tight">Explore the Protocol</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/documentation"
              className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-lg">
              Technical Docs
            </a>
            <a
              href="/progress"
              className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md px-10 py-4 rounded-xl font-bold transition-all border border-white/20 w-full sm:w-auto text-lg">
              Live Progress
            </a>
          </div>
          <div className="mt-12">
            <a
              href="https://github.com/noorranklabs/miracle-berry-protocol"
              className="text-white/60 dark:text-black/60 hover:text-white dark:hover:text-black transition-colors font-medium flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer">
              View codebase on GitHub <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </>;
}
