declare const BaseGraphQLVisitor: new (...args: any[]) => import("chevrotain").ICstVisitor<any, any>;
export declare class CstSchemaVisitor extends BaseGraphQLVisitor {
    objectTypes: any[];
    constructor();
    visit(cstNode: any, params?: {}): any;
    ObjectTypeDefinition(ctx: any): void;
}
export {};
