import * as monaco from 'monaco-editor';

export class CompletionAdapter
  implements monaco.languages.CompletionItemProvider
{
  private _worker: any;

  triggerCharacters = [' '];

  constructor(_worker: any) {
    this._worker = _worker;
  }

  async provideCompletionItems(
    model: monaco.editor.IReadOnlyModel,
    position: monaco.Position
  ) {
    const resource = model.uri;
    const worker = await this._worker(resource);
    const suggestions = await worker.doComplete(resource.toString(), position);

    return Promise.resolve({ suggestions });
  }
}
