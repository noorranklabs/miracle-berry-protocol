/**
 * Schema Registry
 * Centralized registry for all structured data schemas
 * Provides type-safe access to schema objects
 */

import { NOORRANK_ORG } from './organization';
import { MB_RESEARCH_PROJECT } from './researchProject';
import { IMPLEMENTATION_GUIDE } from './howTo';

export const SchemaRegistry = {
    core: {
        organization: NOORRANK_ORG,
        project: MB_RESEARCH_PROJECT,
    },
    content: {
        implementationGuide: IMPLEMENTATION_GUIDE,
    },
};

/**
 * Type-safe schema getter
 * @param keys - Schema keys in format "category.name" (e.g., "core.organization")
 * @returns Array of schema objects
 */
export function getSchemas(...keys: string[]) {
    const schemas: any[] = [];

    keys.forEach(key => {
        const [category, name] = key.split('.');
        const schema = (SchemaRegistry as any)[category]?.[name];
        if (schema) {
            schemas.push(schema);
        } else if (process.env.NODE_ENV === 'development') {
            console.warn(`⚠️  Schema not found: ${key}`);
        }
    });

    return schemas;
}
