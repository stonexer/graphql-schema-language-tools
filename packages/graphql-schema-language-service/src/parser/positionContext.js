import { parser } from './parser';
const BaseGraphQLVisitor = parser.getBaseCstVisitorConstructorWithDefaults();
export class PositionContextVisitor extends BaseGraphQLVisitor {
    constructor(targetOffset) {
        super();
        this.found = false;
        this.result = null;
        this.targetOffset = targetOffset;
        this.validateVisitor();
    }
    ObjectTypeDefinition(ctx) {
        if (ctx.Name) {
            this.visit(ctx.FieldsDefinition, {
                TypeDefinition: 'TypeSystemDefinition'
            });
        }
    }
    FieldsDefinition(ctx) {
        if (ctx.FieldDefinition) {
            ctx.FieldDefinition.map((item) => {
                this.visit(item);
            });
        }
    }
    FieldDefinition(ctx) {
        if (ctx.Colon) {
            if (ctx.TypeRule == null ||
                ctx.TypeRule.length == 0 ||
                ctx.TypeRule[0].recoveredNode) {
                if (this.targetOffset > ctx.Colon[0].endOffset) {
                    this.result = 'NamedType';
                }
            }
            else {
                this.visit(ctx.TypeRule);
            }
        }
    }
    NamedType(ctx) {
        if (ctx.Name) {
            const valueTok = ctx.Name[0];
            if (valueTok.startOffset <= this.targetOffset &&
                valueTok.endOffset + 1 >= this.targetOffset) {
                this.result = 'NamedType';
            }
        }
    }
}
