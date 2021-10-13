import type { Position, worker } from 'monaco-editor';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { getGraphQLPositionByOffset } from 'graphql-schema-language-service';

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

  async doComplete(uri: string, position: Position) {
    const document = this._getTextDocument(uri);
    const offset = document.offsetAt({
      line: position.lineNumber,
      character: position.column
    });
    const value = document.getText();
    const visitorResult = getGraphQLPositionByOffset(value, offset);

    if (visitorResult.position === 'NamedType') {
      const completion = [
        ...visitorResult.schema.objectTypes.map((typeItem) => ({
          label: typeItem.value,
          kind: 2,
          insertText: typeItem.value,
          detail: typeItem.description,
          documentation: typeItem.Description
        }))
      ];

      return completion as any;
    }

    return [];
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
