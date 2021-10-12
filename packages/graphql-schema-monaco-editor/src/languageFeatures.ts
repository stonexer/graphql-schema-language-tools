import * as monaco from 'monaco-editor';

export class CompletionAdapter
  implements monaco.languages.CompletionItemProvider
{
  provideCompletionItems() {
    console.log('provideCompletionItems');
    return Promise.resolve({
      suggestions: []
    });
  }
}
