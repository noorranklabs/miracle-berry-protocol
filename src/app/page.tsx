import { SchemaScript } from '@/components/SchemaScript';
import { MB_RESEARCH_PROJECT } from '@/lib/schemas/researchProject';

export const metadata = {
  title: 'Miracle Berry AEO Protocol',
  description: 'A transparent experiment in entity-first optimization by NoorRank. Tracking how structured data influences answer engine visibility over 21 days.',
};

export default function HomePage() {
  return <>
    <SchemaScript schema={MB_RESEARCH_PROJECT} />

    <div className="max-w-5xl mx-auto space-y-24">
      {/* main hero */}
      <section className="text-center py-12">
        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6">
          <span>Currently Active: Day 4 of 21</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
          The Miracle Berry <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AEO Protocol</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          A transparent experiment in entity-first optimization for answer engines by NoorRank.
        </p>

        <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900 rounded-lg p-6 max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-300 flex gap-3 items-start text-left">
            <span className="text-xl">🔬</span>
            <span>
              <strong>Research Disclaimer:</strong> This is a live experiment to demonstrate Answer Engine Optimization (AEO) methodologies. All tactics used comply with search engine guidelines.
            </span>
          </p>
        </div>
      </section>

      {/* what this is about */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground">What is this Protocol?</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              The Miracle Berry Protocol is a structured methodology for optimizing entity visibility in Large Language Models
              and answer engines like Perplexity, ChatGPT, and Google SGE.
            </p>
            <p>
              Unlike traditional SEO that targets keywords, AEO focuses on authority, structured knowledge, and entity disambiguation.
            </p>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h3 className="font-semibold text-foreground mb-4">Core Focus Areas</h3>
          <ul className="space-y-3">
            {[
              "Entity recognition and disambiguation",
              "Knowledge graph integration",
              "Semantic relationship mapping",
              "Authority signal construction"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* the 3-pillar approach */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Approach</h2>
          <p className="text-muted-foreground">Three foundational pillars for answer engine visibility</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📐", title: "Schema Architecture", desc: "Modular JSON-LD implementation with consistent entity references." },
            { icon: "🔗", title: "Authority Signals", desc: "Legitimate backlinks from technical platforms constructing a clear digital footprint." },
            { icon: "📊", title: "Measurement", desc: "21-day tracking of indexing, entity recognition, and AI citations." }
          ].map((item, i) => (
            <div key={i} className="bg-surface border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:border-primary/20 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ease-out inline-block">{item.icon}</div>
              <h3 className="font-semibold mb-3 text-xl text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-surface border border-border rounded-2xl">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Explore the Framework</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/documentation"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition shadow-sm w-full sm:w-auto">
            Read Documentation
          </a>
          <a
            href="https://github.com/noorranktools/miracle-berry-protocol"
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:bg-secondary/80 transition shadow-sm w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer">
            View on GitHub
          </a>
          <a
            href="/progress"
            className="border border-border bg-background px-8 py-3 rounded-lg font-medium hover:bg-surface hover:text-foreground transition w-full sm:w-auto">
            Track Live Progress
          </a>
        </div>
      </section>
    </div>
  </>;
}
