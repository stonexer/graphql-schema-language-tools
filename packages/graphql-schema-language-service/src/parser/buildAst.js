import { parser } from './parser';
const BaseGraphQLVisitor = parser.getBaseCstVisitorConstructorWithDefaults();
class CstToAstTVisitor extends BaseGraphQLVisitor {
    constructor() {
        super();
        this.validateVisitor();
    }
    visit(cstNode, params = {}) {
        if (!cstNode) {
            return undefined;
        }
        return super.visit(cstNode, { location: cstNode.location, ...params });
    }
    Document(ctx, { location }) {
        return {
            kind: 'Document',
            definitions: ctx.Definition.map((item) => {
                return this.visit(item);
            }),
            loc: {
                start: location.startOffset,
                end: location.endOffset + 1
            }
        };
    }
    Definition(ctx) {
        return this.visit(ctx.TypeSystemDefinition[0]);
    }
    TypeSystemDefinition(ctx) {
        return this.visit(ctx.TypeDefinition[0]);
    }
    TypeDefinition(ctx) {
        return this.visit(ctx.ObjectTypeDefinition[0]);
    }
    ObjectTypeDefinition(ctx, { location }) {
        return {
            kind: 'ObjectTypeDefinition',
            name: {
                kind: 'Name',
                value: ctx.Name[0].image,
                loc: {
                    start: ctx.Name[0].startOffset,
                    end: ctx.Name[0].endOffset + 1
                }
            },
            fields: this.visit(ctx.FieldsDefinition),
            description: this.visit(ctx.Description),
            directives: [],
            interfaces: [],
            loc: {
                start: location.startOffset,
                end: location.endOffset + 1
            }
        };
    }
    Description(ctx) {
        if (ctx.StringValue) {
            const token = ctx.StringValue[0];
            return {
                kind: 'StringValue',
                value: token.image.replace(/["|\n]/g, ''),
                block: token.image.includes('\n'),
                loc: {
                    start: token.startOffset,
                    end: token.endOffset + 1
                }
            };
        }
        return undefined;
    }
    FieldsDefinition(ctx) {
        return ctx.FieldDefinition.map((item) => {
            return this.visit(item);
        }).filter((item) => {
            return item != null;
        });
    }
    FieldDefinition(ctx, { location }) {
        const type = this.visit(ctx.TypeRule);
        if (type == null) {
            return null;
        }
        return {
            kind: 'FieldDefinition',
            name: {
                kind: 'Name',
                value: ctx.Name[0].image,
                loc: {
                    start: ctx.Name[0].startOffset,
                    end: ctx.Name[0].endOffset + 1
                }
            },
            type,
            description: undefined,
            directives: [],
            arguments: [],
            loc: {
                start: location.startOffset,
                end: location.endOffset + 1
            }
        };
    }
    TypeRule(ctx) {
        let innerType;
        if (ctx.NamedType) {
            innerType = this.visit(ctx.NamedType[0]);
        }
        else if (ctx.ListType) {
            innerType = this.visit(ctx.ListType);
        }
        const isNonNullType = ctx.Exclamation != null;
        return isNonNullType
            ? {
                kind: 'NonNullType',
                type: innerType
            }
            : innerType;
    }
    NamedType(ctx, { location }) {
        return {
            kind: 'NamedType',
            name: {
                kind: 'Name',
                value: ctx.Name[0].image,
                loc: {
                    start: ctx.Name[0].startOffset,
                    end: ctx.Name[0].endOffset + 1
                }
            },
            loc: {
                start: location.startOffset,
                end: location.endOffset + 1
            }
        };
    }
    ListType(ctx) {
        return {
            kind: 'ListType',
            type: this.visit(ctx.TypeRule)
        };
    }
}
export function buildAst(cst) {
    return new CstToAstTVisitor().visit(cst);
}
