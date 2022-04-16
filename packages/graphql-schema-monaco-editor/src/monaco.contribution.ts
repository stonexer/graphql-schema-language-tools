import * as monaco from 'monaco-editor';

import * as mode from './graphqlSchemaMode';

// --- Registration to monaco editor ---

function getMode(): Promise<typeof mode> {
  return import('./graphqlSchemaMode');
}

monaco.languages.register({
  id: 'graphql-schema',
  extensions: ['.graphql'],
  mimetypes: ['application/graphql']
});

monaco.languages.onLanguage('graphql-schema', () => {
  getMode().then((mode) => mode.setupMode());
});
