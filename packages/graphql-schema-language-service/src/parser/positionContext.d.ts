declare const BaseGraphQLVisitor: new (...args: any[]) => import("chevrotain").ICstVisitor<any, any>;
export declare class PositionContextVisitor extends BaseGraphQLVisitor {
    found: boolean;
    targetOffset: number;
    result: string | null;
    constructor(targetOffset: number);
    ObjectTypeDefinition(ctx: any): void;
    FieldsDefinition(ctx: any): void;
    FieldDefinition(ctx: any): void;
    NamedType(ctx: any): void;
}
export {};
