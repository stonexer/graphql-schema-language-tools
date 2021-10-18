import { DocumentNode } from 'graphql';

import { lexer } from './parser/lexer';
import { parser } from './parser/parser';
import { buildAst } from './parser/buildAst';
import { PositionContextVisitor } from './parser/positionContext';
import { CstSchemaVisitor } from './parser/cstSchema';

export function parse(value: string): DocumentNode {
  const cstResult = parseCst(value);

  return buildAst(cstResult);
}

export function parseCst(value: string) {
  const tokensResult = lexer.tokenize(value);

  parser.input = tokensResult.tokens;

  return (parser as any).Document();
}

export function getGraphQLPositionByOffset(value: string, offset: number) {
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
