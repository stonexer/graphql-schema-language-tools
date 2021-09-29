import { Lexer } from 'chevrotain';

import * as T from './token';

// ---
export const GRAPHQL_TOKENS = [
  T.WhiteSpace,
  T.LineTerminator,
  T.Comment,
  T.Comma,
  T.Exclamation,
  T.Dollar,
  T.Ampersand,
  T.LeftParenthesis,
  T.RightParenthesis,
  T.DotDotDot,
  T.Colon,
  T.Equals,
  T.At,
  T.LeftSquareBracket,
  T.RightSquareBracket,
  T.LeftCurlyBrace,
  T.Pipe,
  T.RightCurlyBrace,
  T.Name,
  T.Query,
  T.Mutation,
  T.Subscription,
  T.True,
  T.False,
  T.Null,
  T.Extend,
  T.Scalar,
  T.Implements,
  T.Interface,
  T.Union,
  T.Input,
  T.Type,
  // T.EnumValue,
  T.Identifier,

  //
  T.StringValue,
];

export const lexer = new Lexer(GRAPHQL_TOKENS);
