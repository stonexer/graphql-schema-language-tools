import * as monaco from 'monaco-editor';

import { GraphQLSchemaWorker } from './graphqlSchemaWorker';

const STOP_WHEN_IDLE_FOR = 2 * 60 * 1000; // 2min

export class WorkerManager {
  private _idleCheckInterval: number;
  private _lastUsedTime: number;
  // private _configChangeListener: monaco.IDisposable | undefined;

  private _worker: monaco.editor.MonacoWebWorker<GraphQLSchemaWorker> | null;
  private _client: Promise<GraphQLSchemaWorker> | null;

  constructor() {
    this._worker = null;
    this._client = null;

    this._idleCheckInterval = setInterval(() => this._checkIfIdle(), 30 * 1000);
    this._lastUsedTime = 0;
  }

  private _stopWorker(): void {
    if (this._worker) {
      this._worker.dispose();
      this._worker = null;
    }
    this._client = null;
  }

  dispose(): void {
    clearInterval(this._idleCheckInterval);
    this._stopWorker();
  }

  private _checkIfIdle(): void {
    if (!this._worker) {
      return;
    }
    let timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
    if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
      this._stopWorker();
    }
  }

  private _getClient(): Promise<GraphQLSchemaWorker> {
    this._lastUsedTime = Date.now();

    if (!this._client) {
      this._worker = monaco.editor.createWebWorker<GraphQLSchemaWorker>({
        // module that exports the create() method and returns a `graphqlSchemaWorker` instance
        moduleId: 'vs/language/graphql-schema/graphqlSchemaWorker',
        label: 'graphql-schema'
      });

      this._client = <Promise<GraphQLSchemaWorker>>(
        (<any>this._worker.getProxy())
      );
    }

    return this._client;
  }

  getLanguageServiceWorker(
    ...resources: monaco.Uri[]
  ): Promise<GraphQLSchemaWorker> {
    let _client: GraphQLSchemaWorker;
    return this._getClient()
      .then((client) => {
        _client = client;
      })
      .then((_) => {
        return this._worker?.withSyncedResources(resources);
      })
      .then((_) => _client);
  }
}
