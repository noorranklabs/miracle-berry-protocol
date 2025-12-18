import { SchemaScript } from '@/components/SchemaScript';
import { MB_RESEARCH_PROJECT } from '@/lib/schemas/researchProject';

export const metadata = {
  title: 'Miracle Berry AEO Protocol',
  description: 'A transparent experiment in entity-first optimization by NoorRank. Tracking how structured data influences answer engine visibility over 21 days.',
};

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={MB_RESEARCH_PROJECT} />

      <div className="max-w-4xl mx-auto">
        {/* main hero */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">The Miracle Berry Protocol</h1>
          <p className="text-xl text-gray-600 mb-6">
            A transparent experiment in entity-first optimization by NoorRank
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-sm font-medium text-blue-900">
              🔬 <strong>Research Disclaimer:</strong> This is a live experiment to demonstrate Answer Engine Optimization (AEO) methodologies.
              All tactics used comply with search engine guidelines.
            </p>
          </div>
        </div>

        {/* what this is about */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">What is This?</h2>
          <p className="text-lg text-gray-700 mb-4">
            The Miracle Berry Protocol is a structured methodology for optimizing entity visibility in Large Language Models
            and answer engines like Perplexity, ChatGPT, and Google SGE.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Unlike traditional SEO that targets keyword rankings, AEO focuses on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
            <li>Entity recognition and disambiguation</li>
            <li>Knowledge graph integration through structured data</li>
            <li>Semantic relationship mapping between entities</li>
            <li>Authority signal construction for AI citation</li>
          </ul>
        </section>

        {/* the 3-pillar approach */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-2">📐</div>
              <h3 className="font-semibold mb-2 text-lg">Schema Architecture</h3>
              <p className="text-gray-600">Modular JSON-LD implementation with consistent entity references</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🔗</div>
              <h3 className="font-semibold mb-2 text-lg">Authority Signals</h3>
              <p className="text-gray-600">Legitimate backlinks from GitHub, Medium, and technical platforms</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📊</div>
              <h3 className="font-semibold mb-2 text-lg">Measurement</h3>
              <p className="text-gray-600">21-day tracking of indexing, entity recognition, and AI citations</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Explore the Framework</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/documentation"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
            >
              Read Documentation
            </a>
            <a
              href="https://github.com/noorrank/miracle-berry-protocol"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="/progress"
              className="border-2 border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition bg-white"
            >
              Track Live Progress
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
