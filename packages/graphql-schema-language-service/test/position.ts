import test from 'ava';

import { getGraphQLPositionByOffset } from '../src/parser';
import { dedent } from '../src/utils';

test('Simple field', (t) => {
  const input = dedent`
    type Hello {
      world: _
    }
  `;

  const offset = input.indexOf('_');
  const doc = input.replace('_', '');

  const position = getGraphQLPositionByOffset(doc, offset);

  t.is(position.position, 'NamedType');
  t.deepEqual(position.schema.objectTypes, [
    { value: 'Hello', description: null },
  ]);
});

test('Last field', (t) => {
  const input = dedent`
    type Hello {
      world: String
      world: _
    }
  `;

  const offset = input.indexOf('_');
  const doc = input.replace('_', '');

  const position = getGraphQLPositionByOffset(doc, offset);

  t.is(position.position, 'NamedType');
  t.deepEqual(position.schema.objectTypes, [
    { value: 'Hello', description: null },
  ]);
});

test('Middle field', (t) => {
  const input = dedent`
    type Hello {
      world: String
      world: _
      world: String
    }
  `;

  const offset = input.indexOf('_');
  const doc = input.replace('_', '');

  const position = getGraphQLPositionByOffset(doc, offset);

  t.is(position.position, 'NamedType');
  t.deepEqual(position.schema.objectTypes, [
    { value: 'Hello', description: null },
  ]);
});

test('Multiple type hints', (t) => {
  const input = dedent`
    type Human

    type Hello {
      world: String
      world: _
      world: String
    }

    type Author
  `;

  const offset = input.indexOf('_');
  const doc = input.replace('_', '');

  const position = getGraphQLPositionByOffset(doc, offset);

  t.is(position.position, 'NamedType');
  t.deepEqual(position.schema.objectTypes, [
    { value: 'Human', description: null },
    { value: 'Hello', description: null },
    { value: 'Author', description: null },
  ]);
});
