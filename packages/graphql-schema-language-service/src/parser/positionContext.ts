import { parser } from './parser';

const BaseGraphQLVisitor = parser.getBaseCstVisitorConstructorWithDefaults();

export class PositionContextVisitor extends BaseGraphQLVisitor {
  found: boolean = false;
  targetOffset: number;
  result: string | null = null;

  constructor(targetOffset: number) {
    super();

    this.targetOffset = targetOffset;

    this.validateVisitor();
  }

  ObjectTypeDefinition(ctx: any) {
    if (ctx.Name) {
      this.visit(ctx.FieldsDefinition, {
        TypeDefinition: 'TypeSystemDefinition'
      });
    }
  }

  FieldsDefinition(ctx: any) {
    if (ctx.FieldDefinition) {
      ctx.FieldDefinition.map((item: any) => {
        this.visit(item);
      });
    }
  }

  FieldDefinition(ctx: any) {
    if (ctx.Colon) {
      if (
        ctx.TypeRule == null ||
        ctx.TypeRule.length == 0 ||
        ctx.TypeRule[0].recoveredNode
      ) {
        if (this.targetOffset > ctx.Colon[0].endOffset) {
          this.result = 'NamedType';
        }
      } else {
        this.visit(ctx.TypeRule);
      }
    }
  }

  NamedType(ctx: any) {
    if (ctx.Name) {
      const valueTok = ctx.Name[0];

      if (
        valueTok.startOffset <= this.targetOffset &&
        valueTok.endOffset + 1 >= this.targetOffset
      ) {
        this.result = 'NamedType';
      }
    }
  }
}
