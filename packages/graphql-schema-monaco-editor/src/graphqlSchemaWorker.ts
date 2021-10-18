import type { Position, worker } from 'monaco-editor';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { getGraphQLPositionByOffset } from 'graphql-schema-language-service';

export interface ICreateData {
  languageId: string;
}

enum CompletionItemKind {
  Method = 0,
  Function = 1,
  Constructor = 2,
  Field = 3,
  Variable = 4,
  Class = 5,
  Struct = 6,
  Interface = 7,
  Module = 8,
  Property = 9,
  Event = 10,
  Operator = 11,
  Unit = 12,
  Value = 13,
  Constant = 14,
  Enum = 15,
  EnumMember = 16,
  Keyword = 17,
  Text = 18,
  Color = 19,
  File = 20,
  Reference = 21,
  Customcolor = 22,
  Folder = 23,
  TypeParameter = 24,
  User = 25,
  Issue = 26,
  Snippet = 27,
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
      line: position.lineNumber - 1,
      character: position.column - 1,
    });
    const value = document.getText();
    const visitorResult = getGraphQLPositionByOffset(value, offset);

    if (visitorResult.position === 'ObjectNamedType') {
      const completion = [
        ...visitorResult.schema.objectTypes.map(toObjectTypeCompletion),
        ...visitorResult.schema.scalarTypes.map(toScalarCompletion),
        ...visitorResult.schema.enumTypes.map(toEnumCompletion),
      ];

      return completion as any;
    } else if (visitorResult.position === 'InputObjectNamedType') {
      const completion = [
        ...visitorResult.schema.inputObjectTypes.map(
          toInputObjectTypeCompletion
        ),
        ...visitorResult.schema.scalarTypes.map(toScalarCompletion),
        ...visitorResult.schema.enumTypes.map(toEnumCompletion),
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

function toInputObjectTypeCompletion(typeItem: any) {
  return {
    label: typeItem.value,
    kind: CompletionItemKind.Variable,
    insertText: typeItem.value,
    detail: typeItem.description,
    documentation: typeItem.Description,
  };
}

function toObjectTypeCompletion(typeItem: any) {
  return {
    label: typeItem.value,
    kind: CompletionItemKind.Field,
    insertText: typeItem.value,
    detail: typeItem.description,
    documentation: typeItem.Description,
  };
}

function toEnumCompletion(typeItem: any) {
  return {
    label: typeItem.value,
    kind: CompletionItemKind.Enum,
    insertText: typeItem.value,
    detail: typeItem.description,
    documentation: typeItem.Description,
  };
}

function toScalarCompletion(typeItem: any) {
  return {
    label: typeItem.value,
    kind: CompletionItemKind.Unit,
    insertText: typeItem.value,
    detail: typeItem.description,
    documentation: typeItem.Description,
  };
}
