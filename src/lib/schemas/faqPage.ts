import { Thing, WithContext } from 'schema-dts';

/**
 * Generate FAQPage schema for documentation pages
 */
export function generateFAQPageSchema(questions: Array<{ question: string; answer: string }>): WithContext<any> {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: answer
            }
        }))
    };
}

/**
 * Common FAQ for AEO Labs
 */
export const AEO_LABS_FAQ = generateFAQPageSchema([
    {
        question: 'What is the Miracle Berry Protocol?',
        answer: 'The Miracle Berry Protocol is a structured methodology for optimizing entity visibility in Large Language Models and answer engines like Perplexity, ChatGPT, and Google SGE. It focuses on entity recognition, knowledge graph integration, and semantic relationship mapping rather than traditional keyword rankings.'
    },
    {
        question: 'How long is the experiment?',
        answer: 'The experiment runs for 21 days, from January 20 to February 9, 2026. The timeline is divided into Foundation (Days 1-3), Indexing (Days 4-7), Recognition (Days 8-14), and Citation (Days 15-21) phases.'
    },
    {
        question: 'What is Answer Engine Optimization (AEO)?',
        answer: 'Answer Engine Optimization (AEO) is the practice of optimizing content and entities for AI-powered answer engines rather than traditional search engines. It focuses on structured data, entity disambiguation, and knowledge graph integration to help AI systems recognize, understand, and cite your entities accurately.'
    },
    {
        question: 'How do I track experiment progress?',
        answer: 'Progress is tracked publicly via the /progress page and /api/metrics endpoint. Metrics include Google Search Console indexing status, entity recognition in Perplexity/ChatGPT, and citation achievements. All data is transparent and updated in real-time.'
    },
    {
        question: 'Can I replicate this experiment?',
        answer: 'Yes! The entire codebase is open source on GitHub under MIT license. You can fork the repository, follow the implementation guide, and run your own AEO experiment. All schemas, methodology, and tracking systems are documented.'
    },
    {
        question: 'What makes this different from traditional SEO?',
        answer: 'Traditional SEO targets keyword rankings in search results. AEO focuses on entity-first optimization for AI systems. Instead of ranking for "best X", you optimize for being recognized and cited as an authoritative entity when AI answers questions in your domain.'
    }
]);
