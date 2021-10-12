// @ts-ignore
import * as worker from 'monaco-editor/esm/vs/editor/editor.worker';

import { GraphQLSchemaWorker } from './graphqlSchemaWorker';

self.onmessage = () => {
  // ignore the first message
  worker.initialize((ctx: any, createData: any) => {
    return new GraphQLSchemaWorker(ctx, createData);
  });
};
