/**
 * ResearchProject Schema
 * Positions the AEO framework as a legitimate research initiative
 * @see https://schema.org/ResearchProject
 */

import { NOORRANK_ORG } from './organization';

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
        "name": props.projectName,
        "alternateName": props.alternateName,
        "description": props.description,
        "url": props.projectUrl,
        "founder": {
            "@type": "Organization",
            "@id": NOORRANK_ORG["@id"], // Links to your org entity
            "name": NOORRANK_ORG.name
        },
        "datePublished": props.datePublished,
        "inLanguage": "en",
        "keywords": props.keywords
    };
}

// Configuration for Miracle Berry Protocol
export const MB_RESEARCH_PROJECT = generateResearchProjectSchema({
    projectUrl: "https://aeo-labs.noorrank.com",
    projectName: "The Miracle Berry AEO Protocol",
    alternateName: "MB-AEO Framework",
    description: "A structured methodology for optimizing entity visibility in answer engines through semantic markup and knowledge graph integration",
    datePublished: "2024-12-19",
    keywords: [
        "Answer Engine Optimization",
        "Entity SEO",
        "Structured Data",
        "Knowledge Graph",
        "LLM Optimization",
        "AI Search",
        "Schema.org"
    ]
});
