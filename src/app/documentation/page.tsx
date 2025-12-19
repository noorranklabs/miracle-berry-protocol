import { SchemaScript } from '@/components/SchemaScript';
import { generateTechArticleSchema } from '@/lib/schemas/techArticle';
import { IMPLEMENTATION_GUIDE } from '@/lib/schemas/howTo';

const DOCS_SCHEMA = generateTechArticleSchema({
    articleUrl: 'https://aeo-labs.noorrank.com/documentation',
    headline: 'Miracle Berry Protocol: Technical Documentation',
    description: 'Complete implementation guide for entity-first optimization in LLM-powered answer engines',
    datePublished: '2024-12-19',
    dateModified: '2024-12-19',
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

        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Technical Framework</h1>

            {/* Core Principles */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Core Principles</h2>
                <p className="text-lg text-gray-700 mb-4">
                    The Miracle Berry Protocol is built on three foundational concepts:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li><strong>Entity-First Architecture:</strong> Every page defines clear entities with persistent @id references</li>
                    <li><strong>Semantic Relationship Mapping:</strong> Explicit connections between entities using schema.org properties like founder, author, sameAs</li>
                    <li><strong>Multi-Source Validation:</strong> Answer engines trust entities corroborated across multiple authoritative domains</li>
                </ol>
            </section>

            {/* Schema Architecture */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Schema Architecture</h2>
                <p className="text-gray-700 mb-4">
                    Our implementation uses modular schema factories that ensure consistency:
                </p>

                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-4">
                    <pre className="text-sm">
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

                <p className="text-sm text-gray-600">
                    ✅ The <code className="bg-gray-200 px-2 py-1 rounded">@id</code> reference creates bidirectional entity relationships
                    that AI systems use to build knowledge graphs.
                </p>
            </section>

            {/* Implementation Steps */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Implementation Steps</h2>
                {IMPLEMENTATION_GUIDE.step.map((step: any, index: number) => (
                    <div key={index} className="mb-6 p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                            {index + 1}. {step.name}
                        </h3>
                        <p className="text-gray-700">{step.text}</p>
                    </div>
                ))}
            </section>

            {/* Key Components */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Key Components</h2>
                <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-semibold text-lg mb-1">Schema Factories</h3>
                        <p className="text-gray-600">Reusable functions that generate Organization, ResearchProject, TechArticle, and HowTo schemas with consistent formatting</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-semibold text-lg mb-1">Schema Registry</h3>
                        <p className="text-gray-600">Centralized registry for all structured data, providing type-safe access across the application</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                        <h3 className="font-semibold text-lg mb-1">SchemaScript Component</h3>
                        <p className="text-gray-600">Universal JSON-LD injector with XSS protection and development-mode validation</p>
                    </div>
                </div>
            </section>

            {/* Code Repository */}
            <section className="mb-12 bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Full Source Code</h2>
                <p className="text-gray-700 mb-4">
                    The complete implementation is open-source and available on GitHub:
                </p>
                <a
                    href="https://github.com/noorranklabs/miracle-berry-protocol"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Repository
                </a>
            </section>
        </div>
    </>;
}
