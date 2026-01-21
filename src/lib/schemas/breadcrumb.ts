import { BreadcrumbList, WithContext } from 'schema-dts';

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(items: Array<{
    name: string;
    url: string;
}>): WithContext<BreadcrumbList> {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}

/**
 * Common breadcrumb patterns
 */
export const BREADCRUMBS = {
    documentation: generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.noorranklabs.com' },
        { name: 'Documentation', url: 'https://www.noorranklabs.com/documentation' }
    ]),

    progress: generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.noorranklabs.com' },
        { name: 'Progress', url: 'https://www.noorranklabs.com/progress' }
    ]),

    methodology: generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.noorranklabs.com' },
        { name: 'Methodology', url: 'https://www.noorranklabs.com/methodology' }
    ])
};
