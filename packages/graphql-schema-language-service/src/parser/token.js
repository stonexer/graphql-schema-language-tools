import XRegExp from 'xregexp';
import { createToken, Lexer } from 'chevrotain';
// B2. Ingored Tokens -- https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Ignored-Tokens
export const WhiteSpace = createToken({
    name: 'WhiteSpace',
    pattern: /[ \t]+/,
    group: Lexer.SKIPPED
});
export const LineTerminator = createToken({
    name: 'LineTerminator',
    pattern: /\r\n|\r|\n/,
    group: Lexer.SKIPPED
});
export const Comment = createToken({
    name: 'Comment',
    pattern: /#[^\n\r]*/,
    group: Lexer.SKIPPED
});
export const Comma = createToken({
    name: 'Comma',
    pattern: ',',
    group: Lexer.SKIPPED
});
// B.3 Lexical Tokens -- https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Lexical-Tokens
/*
 *  Punctuators -- https://spec.graphql.org/draft/#sec-Punctuators
 *  ! $ & ( ) ... : = @ [ ] { | }
 */
export const Exclamation = createToken({
    name: 'Exclamation',
    pattern: '!'
});
export const Dollar = createToken({
    name: 'Dollar',
    pattern: '$'
});
export const Ampersand = createToken({
    name: 'Ampersand',
    pattern: '&'
});
export const LeftParenthesis = createToken({
    name: 'LeftParenthesis',
    pattern: '('
});
export const RightParenthesis = createToken({
    name: 'RightParenthesis',
    pattern: ')'
});
export const DotDotDot = createToken({
    name: 'DotDotDot',
    pattern: '...'
});
export const Colon = createToken({
    name: 'Colon',
    pattern: ':'
});
export const Equals = createToken({
    name: 'Equals',
    pattern: '='
});
export const At = createToken({
    name: 'At',
    pattern: '@'
});
export const LeftSquareBracket = createToken({
    name: 'LeftSquareBracket',
    pattern: '['
});
export const RightSquareBracket = createToken({
    name: 'RightSquareBracket',
    pattern: ']'
});
export const LeftCurlyBrace = createToken({
    name: 'LeftCurlyBrace',
    pattern: '{'
});
export const Pipe = createToken({
    name: 'Pipe',
    pattern: '|'
});
export const RightCurlyBrace = createToken({
    name: 'RightCurlyBrace',
    pattern: '}'
});
export const Name = createToken({
    name: 'Name',
    pattern: Lexer.NA
});
export const Keyword = createToken({
    name: 'Keyword',
    pattern: Lexer.NA,
    categories: [Name]
});
export const Query = createToken({
    name: 'Query',
    pattern: 'query',
    categories: [Keyword]
});
export const Mutation = createToken({
    name: 'Mutation',
    pattern: 'mutation',
    categories: [Keyword]
});
export const Subscription = createToken({
    name: 'Subscription',
    pattern: 'subscription',
    categories: [Keyword]
});
export const True = createToken({
    name: 'True',
    pattern: 'true',
    categories: [Keyword]
});
export const False = createToken({
    name: 'False',
    pattern: 'false',
    categories: [Keyword]
});
export const Null = createToken({
    name: 'Null',
    pattern: 'null',
    categories: [Keyword]
});
export const Extend = createToken({
    name: 'Extend',
    pattern: 'extend',
    categories: [Keyword]
});
export const Scalar = createToken({
    name: 'Scalar',
    pattern: 'scalar',
    categories: [Keyword]
});
export const Implements = createToken({
    name: 'Implements',
    pattern: 'implements',
    categories: [Keyword]
});
export const Interface = createToken({
    name: 'Interface',
    pattern: 'interface',
    categories: [Keyword]
});
export const Union = createToken({
    name: 'Union',
    pattern: 'union',
    categories: [Keyword]
});
export const Input = createToken({
    name: 'Input',
    pattern: 'input',
    categories: [Keyword]
});
export const Type = createToken({
    name: 'Type',
    pattern: 'type',
    categories: [Keyword]
});
// export const EnumValue = createToken({
// name: "EnumValue",
// categories: [Keyword],
// });
export const Identifier = createToken({
    name: 'Identifier',
    pattern: /[_A-Za-z][_0-9A-Za-z]*/,
    categories: [Name]
});
export const StringValue = createToken({
    name: 'StringValue',
    pattern: XRegExp.build('"""(?:{{BlockStringCharacter}})*"""|"(?:{{StringCharacter}})*"', {
        BlockStringCharacter: XRegExp.build('\\\\"""|[^"]|"(?!"")', {}),
        StringCharacter: XRegExp.build('(?:[^\\\\"\\n\\r]|\\\\(?:{{EscapedUnicode}}|u{{EscapedCharacter}}))', {
            EscapedCharacter: XRegExp.build('[\\\\/"bfnrt]', {}),
            EscapedUnicode: XRegExp.build('[0-9a-fA-F]{4}', {})
        })
    })
});
