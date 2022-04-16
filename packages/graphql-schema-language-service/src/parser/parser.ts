import { CstParser } from 'chevrotain';

import { GRAPHQL_TOKENS } from './lexer';
import * as T from './token';

export class GraphQLParser extends CstParser {
  constructor() {
    super(GRAPHQL_TOKENS, {
      recoveryEnabled: true,
      nodeLocationTracking: 'full',
    });

    const $ = this;
    const $$ = this as any;

    $.RULE('Document', () => {
      $.MANY(() => $.SUBRULE($$.Definition));
    });

    $.RULE('Definition', () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.TypeSystemDefinition) },
        // TODO
      ]);
    });

    $.RULE('TypeSystemDefinition', () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.TypeDefinition) },
        // TODO:
      ]);
    });

    $.RULE('TypeDefinition', () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.ScalarTypeDefinition) },
        { ALT: () => $.SUBRULE($$.InterfaceTypeDefinition) },
        { ALT: () => $.SUBRULE($$.EnumTypeDefinition) },
        { ALT: () => $.SUBRULE($$.ObjectTypeDefinition) },
        { ALT: () => $.SUBRULE($$.InputObjectTypeDefinition) },
      ]);
    });

    $.RULE('ScalarTypeDefinition', () => {
      $.OPTION(() => $.SUBRULE($$.Description));

      $.CONSUME(T.Scalar);
      $.CONSUME(T.Name);
    });

    $.RULE('InterfaceTypeDefinition', () => {
      $.OPTION(() => $.SUBRULE($$.Description));

      $.CONSUME(T.Interface);
      $.CONSUME(T.Name);
      $.OPTION2(() => {
        $.SUBRULE($$.FieldsDefinition);
      });
    });

    // EnumType

    $.RULE('EnumTypeDefinition', () => {
      $.OPTION(() => $.SUBRULE($$.Description));

      $.CONSUME(T.Enum);
      $.CONSUME(T.Name);
      $.OPTION2(() => {
        $.SUBRULE($$.EnumValuesDefinition);
      });
    });

    $.RULE('EnumValuesDefinition', () => {
      $.CONSUME(T.LeftCurlyBrace);
      $.AT_LEAST_ONE(() => {
        $.SUBRULE($$.EnumValueDefinition);
      });
      $.CONSUME(T.RightCurlyBrace);
    });

    $.RULE('EnumValueDefinition', () => {
      $.OPTION(() => $.SUBRULE($$.Description));

      $.SUBRULE($$.EnumValue);
    });

    $.RULE('EnumValue', () => {
      $.CONSUME(T.Name);
    });

    // ObjectType

    $.RULE('ObjectTypeDefinition', () => {
      $.OPTION(() => $.SUBRULE($$.Description));

      $.CONSUME(T.Type);
      $.CONSUME(T.Name);
      $.AT_LEAST_ONE(() => {
        $.SUBRULE($$.FieldsDefinition);
      });
    });

    // InputObjectType

    $.RULE('InputObjectTypeDefinition', () => {
      $.OPTION(() => $.SUBRULE($$.Description));

      $.CONSUME(T.Input);
      $.CONSUME(T.Name);
      $.AT_LEAST_ONE(() => {
        $.SUBRULE($$.FieldsDefinition);
      });
    });

    $.RULE('Description', () => {
      $.CONSUME(T.StringValue);
    });

    $.RULE('FieldsDefinition', () => {
      $.CONSUME(T.LeftCurlyBrace);
      $.AT_LEAST_ONE(() => {
        $.SUBRULE($$.FieldDefinition);
      });
      $.CONSUME(T.RightCurlyBrace);
    });

    $.RULE('FieldDefinition', () => {
      $.CONSUME(T.Name);
      $.CONSUME(T.Colon);
      $.SUBRULE($$.TypeRule);
    });

    $.RULE('TypeRule', () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.NamedType) },
        { ALT: () => $.SUBRULE($$.ListType) },
      ]);
      $.OPTION(() => {
        $.CONSUME(T.Exclamation);
      });
    });

    $.RULE('NamedType', () => {
      $.CONSUME(T.Name);
    });

    $.RULE('ListType', () => {
      $.CONSUME(T.LeftSquareBracket);
      $.SUBRULE($$.TypeRule);
      $.CONSUME(T.RightSquareBracket);
    });

    this.performSelfAnalysis();
  }
}

export const parser = new GraphQLParser();
