import * as monaco from 'monaco-editor';

// @ts-ignore
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

(self as any).MonacoEnvironment = {
  getWorker() {
    return new editorWorker();
  }
};

export function initMonaco(value: string) {
  const editorContainer = document.getElementById('monaco-editor');

  monaco.languages.register({
    id: 'graphql-sdl',
    extensions: ['.graphql', '.gql'],
    aliases: ['graphql'],
    mimetypes: ['application/graphql', 'text/graphql']
  });

  monaco.editor.create(editorContainer!, {
    language: 'graphql-sdl',
    glyphMargin: true,
    formatOnPaste: true,
    formatOnType: true,
    theme: 'vs-dark',
    fontSize: 16,
    value
  });
}

initMonaco(`type Query {
  hello: String
}`);
