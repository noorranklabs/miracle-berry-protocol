/**
 * TechArticle Schema
 * Optimized for technical documentation pages
 * @see https://schema.org/TechArticle
 */

import { NOORRANK_ORG } from './organization';

export interface TechArticleSchemaProps {
    articleUrl: string;
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    dependencies?: string;
    proficiencyLevel?: 'Beginner' | 'Intermediate' | 'Expert';
}

export function generateTechArticleSchema(props: TechArticleSchemaProps) {
    return {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "@id": `${props.articleUrl}#article`,
        "headline": props.headline,
        "description": props.description,
        "author": {
            "@type": "Organization",
            "@id": NOORRANK_ORG["@id"]
        },
        "publisher": {
            "@type": "Organization",
            "@id": NOORRANK_ORG["@id"],
            "name": NOORRANK_ORG.name,
            "logo": NOORRANK_ORG.logo
        },
        "datePublished": props.datePublished,
        "dateModified": props.dateModified,
        "mainEntityOfPage": props.articleUrl,
        ...(props.dependencies && { "dependencies": props.dependencies }),
        ...(props.proficiencyLevel && { "proficiencyLevel": props.proficiencyLevel })
    };
}
