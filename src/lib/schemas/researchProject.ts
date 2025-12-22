import { NOORRANK_ORG } from './organization';

// ResearchProject schema - this is what makes it look like legit research
// instead of just another marketing site lol

export interface ResearchProjectSchemaProps {
    projectUrl: string;
    projectName: string;
    alternateName: string;
    description: string;
    datePublished: string;
    keywords: string[];
}

export function generateResearchProjectSchema(props: ResearchProjectSchemaProps) {
    return {
        "@context": "https://schema.org",
        "@type": "ResearchProject",
        "@id": `${props.projectUrl}/#project`,
        name: props.projectName,
        alternateName: props.alternateName,
        description: props.description,
        url: props.projectUrl,
        founder: {
            "@type": "Organization",
            "@id": NOORRANK_ORG["@id"], // linking back to org - this is key for entity connections
            name: NOORRANK_ORG.name
        },
        datePublished: props.datePublished,
        inLanguage: "en",
        keywords: props.keywords
    };
}

// the actual project config
export const MB_RESEARCH_PROJECT = generateResearchProjectSchema({
    projectUrl: 'https://aeo-labs.noorrank.com',
    projectName: 'The Miracle Berry AEO Protocol',
    alternateName: 'MB-AEO Framework',
    description: 'A structured methodology for optimizing entity visibility in answer engines through semantic markup and knowledge graph integration',
    datePublished: '2025-12-22',
    keywords: [
        'Answer Engine Optimization',
        "Entity SEO",
        'Structured Data',
        "Knowledge Graph",
        'LLM Optimization',
        "AI Search",
        'Schema.org'
    ]
});
