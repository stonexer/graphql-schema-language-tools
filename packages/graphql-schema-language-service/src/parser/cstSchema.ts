import { parser } from './parser';

const BaseGraphQLVisitor = parser.getBaseCstVisitorConstructorWithDefaults();

export class CstSchemaVisitor extends BaseGraphQLVisitor {
  objectTypes: any[] = [];
  inputObjectTypes: any[] = [];
  enumTypes: any[] = [];
  scalarTypes: any[] = [];

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

  ObjectTypeDefinition(ctx: any) {
    if (ctx.Name) {
      this.objectTypes.push({
        value: ctx.Name[0].image,
        description: ctx.Description
          ? ctx.Description[0].children.StringValue[0].image.replace(/"/g, '')
          : null,
      });
    }
  }

  InputObjectTypeDefinition(ctx: any) {
    if (ctx.Name) {
      this.inputObjectTypes.push({
        value: ctx.Name[0].image,
        description: ctx.Description
          ? ctx.Description[0].children.StringValue[0].image.replace(/"/g, '')
          : null,
      });
    }
  }

  EnumTypeDefinition(ctx: any) {
    if (ctx.Name) {
      this.enumTypes.push({
        value: ctx.Name[0].image,
        description: ctx.Description
          ? ctx.Description[0].children.StringValue[0].image.replace(/"/g, '')
          : null,
      });
    }
  }

  ScalarTypeDefinition(ctx: any) {
    if (ctx.Name) {
      this.scalarTypes.push({
        value: ctx.Name[0].image,
        description: ctx.Description
          ? ctx.Description[0].children.StringValue[0].image.replace(/"/g, '')
          : null,
      });
    }
  }
}
