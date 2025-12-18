export const metadata = {
    title: 'Methodology',
    description: 'Deep dive into the Miracle Berry Protocol methodology: entity-first optimization strategies for answer engines.',
};

export default function MethodologyPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Methodology</h1>

            {/* Introduction */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Research Approach</h2>
                <p className="text-lg text-gray-700 mb-4">
                    The Miracle Berry Protocol represents a systematic approach to understanding how answer engines
                    recognize and cite entities. Our methodology combines technical implementation with transparent
                    measurement.
                </p>
            </section>

            {/* Three Pillars */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Three Pillars of AEO</h2>

                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-blue-900">1. Entity Definition</h3>
                        <p className="text-gray-700 mb-3">
                            Establish clear, machine-readable entity definitions using Schema.org structured data.
                            Each entity must have a persistent <code className="bg-white px-2 py-1 rounded">@id</code> reference
                            that remains consistent across all mentions.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>Organization schema with logo, social profiles, and description</li>
                            <li>ResearchProject schema linking to organizational entities</li>
                            <li>TechArticle schema for documentation and guides</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-green-900">2. Multi-Source Validation</h3>
                        <p className="text-gray-700 mb-3">
                            Answer engines trust entities corroborated across multiple authoritative sources. We establish
                            presence on platforms like GitHub, Medium, and Dev.to to create a network of validation.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>GitHub repository with full documentation</li>
                            <li>Medium articles explaining the methodology</li>
                            <li>Dev.to technical deep-dives</li>
                            <li>Cross-linking between all platforms</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-purple-900">3. Transparent Measurement</h3>
                        <p className="text-gray-700 mb-3">
                            Track entity recognition and citation over a 21-day observation period. We publicly document
                            every milestone to demonstrate the effectiveness of our approach.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>Daily Google Search Console monitoring</li>
                            <li>Weekly AI citation tests (Perplexity, ChatGPT, Claude)</li>
                            <li>Public progress tracking page</li>
                            <li>Open-source code and metrics</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Experimental Timeline</h2>
                <div className="border-l-2 border-gray-300 pl-6 space-y-6">
                    <div>
                        <div className="font-semibold text-sm text-gray-500">Days 1-3: Foundation</div>
                        <p className="text-gray-700">Deploy site, implement schemas, submit to Search Console, publish initial content</p>
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-gray-500">Days 4-7: Indexing</div>
                        <p className="text-gray-700">Monitor Google indexing, publish Medium and Dev.to articles, build initial backlinks</p>
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-gray-500">Days 8-14: Recognition</div>
                        <p className="text-gray-700">Test entity recognition in AI systems, refine content based on initial results</p>
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-gray-500">Days 15-21: Citation</div>
                        <p className="text-gray-700">Achieve full citation in answer engines, document findings, prepare case study</p>
                    </div>
                </div>
            </section>

            {/* Why It Works */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why This Works</h2>
                <p className="text-gray-700 mb-4">
                    Modern answer engines rely on knowledge graphs to understand relationships between entities.
                    By providing:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Clear entity definitions with persistent identifiers</li>
                    <li>Semantic relationships between entities (@id references)</li>
                    <li>Multi-source corroboration (GitHub, Medium, own site)</li>
                    <li>Fresh, structured content</li>
                </ol>
                <p className="text-gray-700 mt-4">
                    We give AI systems exactly what they need to confidently cite and describe our entities.
                </p>
            </section>

            {/* CTA */}
            <section className="text-center border-t pt-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Want to Try This Yourself?</h2>
                <p className="text-gray-600 mb-6">
                    The complete source code, schemas, and documentation are available on GitHub.
                </p>
                <a
                    href="https://github.com/noorrank/miracle-berry-protocol"
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get the Code
                </a>
            </section>
        </div>
    );
}
