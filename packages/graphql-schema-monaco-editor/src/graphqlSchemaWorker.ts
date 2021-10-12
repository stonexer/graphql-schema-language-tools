import type { worker } from 'monaco-editor';

export interface ICreateData {
  languageId: string;
}

export class GraphQLSchemaWorker {
  private _ctx: worker.IWorkerContext;
  private _languageId: string;

  constructor(ctx: worker.IWorkerContext, createData: ICreateData) {
    this._ctx = ctx;
    this._languageId = createData.languageId;
  }

  async doComplete() {
    console.log('do complete', this._ctx, this._languageId);

    return [];
  }
}
