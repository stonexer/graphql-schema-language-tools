import { parser } from './parser';

const BaseGraphQLVisitor = parser.getBaseCstVisitorConstructorWithDefaults();

class CstToAstTVisitor extends BaseGraphQLVisitor {
  constructor() {
    super();

    this.validateVisitor();
  }

  override visit(cstNode: any, params = {}) {
    if (!cstNode) {
      return undefined;
    }

    return super.visit(cstNode, { location: cstNode.location, ...params });
  }

  Document(ctx: any, { location }: any) {
    return {
      kind: 'Document',
      definitions: ctx.Definition.map((item: any) => {
        return this.visit(item);
      }),
      loc: {
        start: location.startOffset,
        end: location.endOffset + 1
      }
    };
  }

  Definition(ctx: any) {
    return this.visit(ctx.TypeSystemDefinition[0]);
  }

  TypeSystemDefinition(ctx: any) {
    return this.visit(ctx.TypeDefinition[0]);
  }

  TypeDefinition(ctx: any) {
    return this.visit(ctx.ObjectTypeDefinition[0]);
  }

  ObjectTypeDefinition(ctx: any, { location }: any) {
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

  Description(ctx: any) {
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

  FieldsDefinition(ctx: any) {
    return ctx.FieldDefinition.map((item: any) => {
      return this.visit(item);
    }).filter((item: any) => {
      return item != null;
    });
  }

  FieldDefinition(ctx: any, { location }: any) {
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

  TypeRule(ctx: any) {
    let innerType;

    if (ctx.NamedType) {
      innerType = this.visit(ctx.NamedType[0]);
    } else if (ctx.ListType) {
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

  NamedType(ctx: any, { location }: any) {
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

  ListType(ctx: any) {
    return {
      kind: 'ListType',
      type: this.visit(ctx.TypeRule)
    };
  }
}

export function buildAst(cst: any) {
  return new CstToAstTVisitor().visit(cst);
}
