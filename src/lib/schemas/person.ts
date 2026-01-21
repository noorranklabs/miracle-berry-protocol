import { Person, WithContext } from 'schema-dts';

/**
 * Generate Person schema for author attribution
 */
export function generatePersonSchema(params: {
    name: string;
    url?: string;
    email?: string;
    jobTitle?: string;
    worksFor?: string;
    sameAs?: string[];
    description?: string;
}): WithContext<Person> {
    const schema: WithContext<Person> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': params.url ? `${params.url}#person` : undefined,
        name: params.name,
    };

    if (params.url) schema.url = params.url;
    if (params.email) schema.email = params.email;
    if (params.jobTitle) schema.jobTitle = params.jobTitle;
    if (params.description) schema.description = params.description;

    if (params.worksFor) {
        schema.worksFor = {
            '@type': 'Organization',
            name: params.worksFor
        };
    }

    if (params.sameAs && params.sameAs.length > 0) {
        schema.sameAs = params.sameAs;
    }

    return schema;
}

/**
 * NoorRank team member schemas
 */
export const NOORRANK_TEAM = generatePersonSchema({
    name: 'NoorRank Research Team',
    url: 'https://noorrank.com',
    jobTitle: 'AEO Research & Development',
    worksFor: 'NoorRank',
    description: 'Entity optimization specialists researching answer engine visibility and AI citation methodologies.',
    sameAs: [
        'https://github.com/noorranklabs',
        'https://www.linkedin.com/company/noorrank/'
    ]
});
