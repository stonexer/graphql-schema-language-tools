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
        const $$ = this;
        $.RULE('Document', () => {
            $.MANY(() => $.SUBRULE($$.Definition));
        });
        $.RULE('Definition', () => {
            $.OR([{ ALT: () => $.SUBRULE($$.TypeSystemDefinition) }]);
        });
        $.RULE('TypeSystemDefinition', () => {
            $.OR([{ ALT: () => $.SUBRULE($$.TypeDefinition) }]);
        });
        $.RULE('TypeDefinition', () => {
            $.OR([{ ALT: () => $.SUBRULE($$.ObjectTypeDefinition) }]);
        });
        $.RULE('ObjectTypeDefinition', () => {
            $.OPTION(() => $.SUBRULE($$.Description));
            $.CONSUME(T.Type);
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
