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

// Predefined FAQ for Miracle Berry Protocol
export const MIRACLE_BERRY_FAQ = generateFAQPageSchema([
    {
        question: 'What is the Miracle Berry Protocol?',
        answer: 'The Miracle Berry Protocol is a structured methodology for optimizing entity visibility in AI-powered answer engines like ChatGPT, Perplexity, and Google SGE. It focuses on entity-first optimization rather than traditional keyword-based SEO, using structured data, semantic relationships, and multi-source validation to achieve AI recognition and citation.',
    },
    {
        question: 'How does entity-first optimization differ from traditional SEO?',
        answer: 'Traditional SEO focuses on keyword rankings, backlinks, and domain authority to appear on search engine results pages. Entity-first optimization focuses on defining clear, machine-readable entity definitions that AI systems can understand and cite in generated answers. It prioritizes structured data (Schema.org), semantic relationships, and knowledge graph integration over keyword density and link building.',
    },
    {
        question: 'How long does it take for AI systems to recognize a new entity?',
        answer: 'Based on the Miracle Berry Protocol experiment, ChatGPT recognized the entity in 9 days with proper implementation of structured data and multi-source validation. Perplexity and Claude typically require longer (12-18 days). Traditional knowledge graph integration through search engines may take 14-21 days or more, depending on authority signals and content distribution.',
    },
    {
        question: 'What is Answer Engine Optimization (AEO)?',
        answer: 'Answer Engine Optimization (AEO) is the practice of optimizing content and entity definitions to appear in AI-generated answers from systems like ChatGPT, Perplexity, Claude, and Google AI Overviews. Unlike SEO which targets search result rankings, AEO focuses on citation within synthesized answers, requiring clear entity definitions, structured data, and semantic relationship mapping.',
    },
    {
        question: 'What structured data is required for entity recognition?',
        answer: 'At minimum, implement Organization schema for your company and appropriate content schemas (Article, TechArticle, HowTo, etc.) for your pages. Use persistent @id references for entities, define clear semantic relationships, and ensure all schemas pass validation. The Miracle Berry Protocol uses Organization, ResearchProject, TechArticle, HowTo, Dataset, and FAQPage schemas to create a comprehensive entity definition.',
    },
    {
        question: 'Can this methodology work for any business or domain?',
        answer: 'Yes, the entity-first optimization methodology applies to any business, product, or organization. The core principles—clear entity definition, structured data implementation, multi-source validation, and semantic relationship mapping—are universal. However, results may vary based on industry competitiveness, existing entity disambiguation needs, and the uniqueness of your entity name.',
    },
    {
        question: 'Do I need a high domain authority for AI citation?',
        answer: 'No. The Miracle Berry Protocol achieved ChatGPT citation with zero domain authority (brand new domain) in 9 days. AI systems prioritize entity clarity, structured data, and multi-source validation over traditional SEO metrics like domain authority or PageRank. This is a fundamental shift from traditional search engine optimization.',
    },
    {
        question: 'What are the key components of successful entity optimization?',
        answer: 'The three pillars are: (1) Entity Definition—clear, machine-readable entity definitions using Schema.org with persistent @id references; (2) Multi-Source Validation—corroboration across multiple platforms (website, GitHub, Medium, LinkedIn, etc.); (3) Semantic Relationships—explicit mapping of how your entity relates to other established entities, concepts, and knowledge domains.',
    },
]);

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
