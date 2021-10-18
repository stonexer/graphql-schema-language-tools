import * as monaco from 'monaco-editor';
import { specifiedScalarTypes } from 'graphql';

import { getGraphQLPositionByOffset } from '../index';

export class CompletionAdapter
  implements monaco.languages.CompletionItemProvider
{
  public get triggerCharacters(): string[] {
    return [' '];
  }

  async provideCompletionItems(
    model: monaco.editor.ITextModel,
    position: monaco.Position
  ): Promise<monaco.languages.CompletionList> {
    const value = model.getValue();

    const textUntilPosition = model.getValueInRange({
      startLineNumber: 1,
      startColumn: 1,
      endLineNumber: position.lineNumber,
      endColumn: position.column,
    });
    const offset = textUntilPosition.length;

    const visitorResult = getGraphQLPositionByOffset(value, offset);

    if (visitorResult.position === 'NamedType') {
      const completion = {
        suggestions: [
          ...visitorResult.schema.objectTypes.map((typeItem) => ({
            label: typeItem.value,
            kind: 2,
            insertText: typeItem.value,
            detail: typeItem.description,
            documentation: typeItem.Description,
          })),
          ...specifiedScalarTypes.map((scalarItem) => ({
            label: scalarItem.name,
            kind: 3,
            insertText: scalarItem.name,
          })),
        ],
      };

      return completion as any;
    }

    return { suggestions: [] };
  }
}
