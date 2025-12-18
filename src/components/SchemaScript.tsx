/**
 * Universal Schema Script Component
 * Safely injects JSON-LD into page head
 * Prevents XSS by escaping < characters
 * @see https://nextjs.org/docs/app/guides/json-ld
 */

interface SchemaScriptProps {
    schema: object | object[];
}

export function SchemaScript({ schema }: SchemaScriptProps) {
    const schemaArray = Array.isArray(schema) ? schema : [schema];

    // Development-only validation
    if (process.env.NODE_ENV === 'development') {
        schemaArray.forEach((schemaItem, index) => {
            const s = schemaItem as any;

            if (!s['@context']) {
                console.error(`❌ Schema #${index} missing @context:`, schemaItem);
            }
            if (!s['@type']) {
                console.error(`❌ Schema #${index} missing @type:`, schemaItem);
            }
            if (!s['@id'] && s['@type'] !== 'WebSite') {
                console.warn(`⚠️  Schema #${index} missing @id (recommended for entity linking):`, schemaItem);
            }

            console.log(`✅ Schema #${index} validated:`, s['@type']);
        });
    }

    return (
        <>
            {schemaArray.map((schemaItem, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaItem).replace(/</g, '\\u003c')
                    }}
                />
            ))}
        </>
    );
}
