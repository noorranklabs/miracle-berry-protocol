/**
 * HowTo Schema
 * Perfect for implementation guides and tutorials
 * @see https://schema.org/HowTo
 */

export interface HowToStep {
    name: string;
    text: string;
    url: string;
}

export interface HowToSchemaProps {
    guideUrl: string;
    name: string;
    description: string;
    steps: HowToStep[];
}

export function generateHowToSchema(props: HowToSchemaProps) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "@id": `${props.guideUrl}#howto`,
        "name": props.name,
        "description": props.description,
        "step": props.steps.map((step) => ({
            "@type": "HowToStep",
            "name": step.name,
            "text": step.text,
            "url": step.url
        }))
    };
}

// Implementation guide configuration
export const IMPLEMENTATION_GUIDE = generateHowToSchema({
    guideUrl: "https://noorranklabs.com/documentation",
    name: "How to Implement Entity-First AEO",
    description: "Step-by-step guide to structured data implementation for answer engine visibility",
    steps: [
        {
            name: "Define Core Entities",
            text: "Identify primary entities (Organization, Product, Service) and their relationships using schema.org types",
            url: "https://noorranklabs.com/documentation#step1"
        },
        {
            name: "Implement Modular Schema",
            text: "Deploy component-based schema architecture with consistent @id references across pages",
            url: "https://noorranklabs.com/documentation#step2"
        },
        {
            name: "Validate Structured Data",
            text: "Use Google Rich Results Test and Schema Markup Validator to ensure error-free implementation",
            url: "https://noorranklabs.com/documentation#step3"
        },
        {
            name: "Monitor Entity Recognition",
            text: "Track how AI systems cite and describe your entities over 14-21 day observation period",
            url: "https://noorranklabs.com/documentation#step4"
        }
    ]
});
