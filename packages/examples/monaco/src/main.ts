import * as monaco from 'monaco-editor';

// @ts-ignore
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
// @ts-ignore
import GraphQLWorker from 'graphql-schema-monaco-editor/lib/graphqlSchema.worker?worker';
import 'graphql-schema-monaco-editor/lib/monaco.contribution';

(self as any).MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    if (label === 'graphql-schema') {
      return new GraphQLWorker();
    }
    return new EditorWorker();
  }
};

export function initMonaco(value: string) {
  const editorContainer = document.getElementById('monaco-editor');

  monaco.editor.create(editorContainer!, {
    language: 'graphql-schema',
    glyphMargin: true,
    formatOnPaste: true,
    formatOnType: true,
    theme: 'vs-dark',
    fontSize: 16,
    value
  });
}

initMonaco(`"Haha"
type Book {
  name: String
}
`);
