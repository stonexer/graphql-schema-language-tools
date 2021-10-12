import * as monaco from 'monaco-editor';

export class CompletionAdapter
  implements monaco.languages.CompletionItemProvider
{
  private _worker: any;

  constructor(_worker: any) {
    this._worker = _worker;
  }

  async provideCompletionItems(model: monaco.editor.IReadOnlyModel) {
    const worker = await this._worker(model.uri);

    const suggestions = await worker.doComplete();

    return Promise.resolve({ suggestions });
  }
}
