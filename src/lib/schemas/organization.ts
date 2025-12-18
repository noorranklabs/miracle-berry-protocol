/**
 * Organization Schema Factory
 * Creates consistent Organization entities across all pages
 * @see https://schema.org/Organization
 */

export interface OrganizationSchemaProps {
    name: string;
    url: string;
    logoUrl: string;
    sameAs?: string[];
    description?: string;
}

export function generateOrganizationSchema(props: OrganizationSchemaProps) {
    // Validation in development
    if (process.env.NODE_ENV === 'development') {
        if (!props.url.startsWith('http')) {
            console.warn('⚠️  Organization URL should be absolute (include https://)');
        }
    }

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${props.url}/#organization`,
        "name": props.name,
        "url": props.url,
        "logo": {
            "@type": "ImageObject",
            "url": props.logoUrl,
            "width": 250,
            "height": 60
        },
        ...(props.description && { "description": props.description }),
        ...(props.sameAs && { "sameAs": props.sameAs })
    };
}

// Pre-configured NoorRank organization entity
export const NOORRANK_ORG = generateOrganizationSchema({
    name: "NoorRank",
    url: "https://noorrank.com",
    logoUrl: "https://noorrank.com/logo.png",
    sameAs: [
        "https://github.com/noorrank",
        "https://www.linkedin.com/company/noorrank"
    ],
    description: "Answer Engine Optimization infrastructure for agencies"
});
