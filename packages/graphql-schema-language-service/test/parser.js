import test from 'ava';
import { parse } from '../src/parser';
import { dedent, fieldNode, nameNode, typeNode } from '../src/utils';
test('Simple type', (t) => {
    const doc = parse(dedent `
    type Hello {
      world: String
    }
  `);
    t.deepEqual(doc, {
        kind: 'Document',
        definitions: [
            {
                kind: 'ObjectTypeDefinition',
                name: nameNode('Hello', { start: 5, end: 10 }),
                description: undefined,
                interfaces: [],
                directives: [],
                fields: [
                    fieldNode(nameNode('world', { start: 15, end: 20 }), typeNode('String', { start: 22, end: 28 }), { start: 15, end: 28 })
                ],
                loc: { start: 0, end: 30 }
            }
        ],
        loc: { start: 0, end: 30 }
    });
});
test('parses type with description string', (t) => {
    const doc = parse(dedent `
    "Description"
    type Hello {
      world: String
    }
  `);
    t.deepEqual(doc.definitions[0].description, {
        kind: 'StringValue',
        value: 'Description',
        block: false,
        loc: { start: 0, end: 13 }
    });
});
test('parses type with description multi-line string', (t) => {
    const doc = parse(dedent `
    """
    Description
    """
    # Even with comments between them
    type Hello {
      world: String
    }
  `);
    t.deepEqual(doc.definitions[0].description, {
        kind: 'StringValue',
        value: 'Description',
        block: true,
        loc: { start: 0, end: 19 }
    });
});
