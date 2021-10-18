import { getGraphQLPositionByOffset } from '../parser';

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

export class GraphQLSchemaCompletion {
  async doComplete(value: string, offset: number) {
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
