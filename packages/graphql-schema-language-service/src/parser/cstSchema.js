import { parser } from './parser';
const BaseGraphQLVisitor = parser.getBaseCstVisitorConstructorWithDefaults();
export class CstSchemaVisitor extends BaseGraphQLVisitor {
    constructor() {
        super();
        this.objectTypes = [];
        this.validateVisitor();
    }
    visit(cstNode, params = {}) {
        if (!cstNode) {
            return undefined;
        }
        return super.visit(cstNode, { location: cstNode.location, ...params });
    }
    ObjectTypeDefinition(ctx) {
        if (ctx.Name) {
            this.objectTypes.push({
                value: ctx.Name[0].image,
                description: ctx.Description
                    ? ctx.Description[0].children.StringValue[0].image.replace(/"/g, '')
                    : null
            });
        }
    }
}
