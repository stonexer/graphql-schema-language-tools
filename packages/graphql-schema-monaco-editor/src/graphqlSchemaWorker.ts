import type { Position, worker } from 'monaco-editor';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { GraphQLSchemaLanguageService } from 'graphql-schema-language-service';

export interface ICreateData {
  languageId: string;
}

export class GraphQLSchemaWorker {
  private _ctx: worker.IWorkerContext;
  private _languageId: string;
  private _languageService: GraphQLSchemaLanguageService;

  constructor(ctx: worker.IWorkerContext) {
    this._ctx = ctx;
    this._languageId = 'graphql-schema';
    this._languageService = new GraphQLSchemaLanguageService();
  }

  async doComplete(uri: string, position: Position) {
    const document = this._getTextDocument(uri);
    const offset = document.offsetAt({
      line: position.lineNumber - 1,
      character: position.column - 1,
    });
    const value = document.getText();
    return this._languageService.doComplete(value, offset);
  }

  private _getTextDocument(uri: string): TextDocument {
    let models = this._ctx.getMirrorModels();
    for (let model of models) {
      if (model.uri.toString() === uri) {
        return TextDocument.create(
          uri,
          this._languageId,
          model.version,
          model.getValue()
        );
      }
    }
    throw new Error('no model');
  }
}
