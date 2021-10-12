import * as monaco from 'monaco-editor';
import { GraphQLSchemaWorker } from './graphqlSchemaWorker';

import * as languageFeatures from './languageFeatures';
import { WorkerManager } from './WorkerManager';

export function setupMode() {
  const client = new WorkerManager();

  const worker = (...uris: monaco.Uri[]): Promise<GraphQLSchemaWorker> => {
    return client.getLanguageServiceWorker(...uris);
  };

  monaco.languages.registerCompletionItemProvider(
    'graphql-schema',
    new languageFeatures.CompletionAdapter(worker)
  );
}
