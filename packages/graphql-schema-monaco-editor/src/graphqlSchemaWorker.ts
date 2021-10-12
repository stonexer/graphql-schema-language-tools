import type { worker } from 'monaco-editor';

export interface ICreateData {
  languageId: string;
}

export class GraphQLSchemaWorker {
  private _ctx: worker.IWorkerContext;
  private _languageId: string;

  constructor(ctx: worker.IWorkerContext) {
    this._ctx = ctx;
    this._languageId = 'graphql-schema';
  }

  async doComplete() {
    console.log('do complete', this._ctx, this._languageId);

    return [];
  }
}
