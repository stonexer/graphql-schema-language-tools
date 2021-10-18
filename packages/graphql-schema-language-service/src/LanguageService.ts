import { GraphQLSchemaCompletion } from './services/completion';

export class GraphQLSchemaLanguageService {
  private _graphqlSchemaCompletion = new GraphQLSchemaCompletion();

  public doComplete = this._graphqlSchemaCompletion.doComplete.bind(
    this._graphqlSchemaCompletion
  );
}
