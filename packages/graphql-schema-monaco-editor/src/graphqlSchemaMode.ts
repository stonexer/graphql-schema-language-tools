import * as monaco from 'monaco-editor';

import * as languageFeatures from './languageFeatures';

export function setupMode() {
  monaco.languages.registerCompletionItemProvider(
    'graphql-schema',
    new languageFeatures.CompletionAdapter()
  );
}
