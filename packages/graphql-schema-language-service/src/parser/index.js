import { lexer } from './lexer';
import { parser } from './parser';
import { buildAst } from './buildAst';
import { PositionContextVisitor } from './positionContext';
import { CstSchemaVisitor } from './cstSchema';
export function parse(value) {
    const cstResult = parseCst(value);
    return buildAst(cstResult);
}
export function parseCst(value) {
    const tokensResult = lexer.tokenize(value);
    parser.input = tokensResult.tokens;
    return parser.Document();
}
export function getGraphQLPositionByOffset(value, offset) {
    const cstResult = parseCst(value.slice(0, offset));
    const contextVisitor = new PositionContextVisitor(offset);
    contextVisitor.visit(cstResult);
    const cstSchemaResult = parseCst(value);
    const schemaVisitor = new CstSchemaVisitor();
    schemaVisitor.visit(cstSchemaResult);
    return {
        position: contextVisitor.result,
        schema: schemaVisitor,
    };
}
