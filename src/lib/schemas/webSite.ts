import { WebSite, WithContext } from 'schema-dts';

/**
 * Generate WebSite schema with sitelinks searchbox
 */
export function generateWebSiteSchema(params: {
    name: string;
    url: string;
    description?: string;
    potentialActions?: boolean; // Enable sitelinks searchbox
}): WithContext<WebSite> {
    const schema: WithContext<WebSite> = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${params.url}#website`,
        name: params.name,
        url: params.url,
    };

    if (params.description) {
        schema.description = params.description;
    }

    // Add search action for sitelinks searchbox
    if (params.potentialActions) {
        schema.potentialAction = {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${params.url}?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        } as any; // Schema.org property not fully supported in TypeScript types
    }

    return schema;
}

/**
 * AEO Labs website schema
 */
export const AEO_LABS_WEBSITE = generateWebSiteSchema({
    name: 'Miracle Berry AEO Protocol',
    url: 'https://www.noorranklabs.com',
    description: 'A transparent 21-day experiment in entity-first optimization for answer engines, demonstrating structured data implementation and AI citation methodologies.',
    potentialActions: false // Can enable later if we add search
});
