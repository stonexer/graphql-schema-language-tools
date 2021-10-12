import { DocumentNode } from 'graphql';
import { CstSchemaVisitor } from './cstSchema';
export declare function parse(value: string): DocumentNode;
export declare function parseCst(value: string): any;
export declare function getGraphQLPositionByOffset(value: string, offset: number): {
    position: string | null;
    schema: CstSchemaVisitor;
};
