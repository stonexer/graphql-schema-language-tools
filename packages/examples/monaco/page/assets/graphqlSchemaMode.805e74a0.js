import{e as a,l as o}from"./vendor.b52fc6a8.js";import{language as l}from"./graphql.5d27a1d6.js";class h{constructor(e){this._worker=e}async provideCompletionItems(e,r){const t=e.uri,n=await(await this._worker(t)).doComplete(t.toString(),r);return Promise.resolve({suggestions:n})}}const c=2*60*1e3;class _{constructor(){this._worker=null,this._client=null,this._idleCheckInterval=setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>c&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=a.createWebWorker({moduleId:"vs/language/graphql-schema/graphqlSchemaWorker",label:"graphql-schema"}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let r;return this._getClient().then(t=>{r=t}).then(t=>{var s;return(s=this._worker)===null||s===void 0?void 0:s.withSyncedResources(e)}).then(t=>r)}}function k(){const i=new _,e=(...r)=>i.getLanguageServiceWorker(...r);o.setMonarchTokensProvider("graphql-schema",l),o.registerCompletionItemProvider("graphql-schema",new h(e))}export{k as setupMode};
