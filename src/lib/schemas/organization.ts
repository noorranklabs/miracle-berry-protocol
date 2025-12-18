// Organization schema stuff
// Using schema.org Organization type for entity definition

export interface OrganizationSchemaProps {
    name: string;
    url: string;
    logoUrl: string;
    sameAs?: string[];
    description?: string;
}

export function generateOrganizationSchema(props: OrganizationSchemaProps) {
    // just checking URLs in dev mode, helps catch mistakes
    if (process.env.NODE_ENV === 'development') {
        if (!props.url.startsWith('http')) {
            console.warn('⚠️  Hey, the URL should probably start with https://');
        }
    }

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${props.url}/#organization`, // this ID is important for entity linking
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

// our org entity - reused across all pages
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
