import{e as S,U as T,M as H,a as N,R as V,l as b,t as B}from"./vendor.b52fc6a8.js";var U=function(t,r,e,i){function u(n){return n instanceof e?n:new e(function(o){o(n)})}return new(e||(e=Promise))(function(n,o){function c(a){try{s(i.next(a))}catch(f){o(f)}}function l(a){try{s(i.throw(a))}catch(f){o(f)}}function s(a){a.done?n(a.value):u(a.value).then(c,l)}s((i=i.apply(t,r||[])).next())})},z=function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,u,n,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(a){return l([s,a])}}function l(s){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,u&&(n=s[0]&2?u.return:s[0]?u.throw||((n=u.return)&&n.call(u),0):u.next)&&!(n=n.call(u,s[1])).done)return n;switch(u=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,u=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){e.label=s[1];break}if(s[0]===6&&e.label<n[1]){e.label=n[1],n=s;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(s);break}n[2]&&e.ops.pop(),e.trys.pop();continue}s=r.call(t,e)}catch(a){s=[6,a],u=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},G=function(){function t(r,e){var i=this;this._modeId=r,this._defaults=e,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(function(){return i._stopWorker()}),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(function(){return i._updateExtraLibs()})}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},t.prototype._updateExtraLibs=function(){return U(this,void 0,void 0,function(){var r,e;return z(this,function(i){switch(i.label){case 0:return this._worker?(r=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return e=i.sent(),this._updateExtraLibsToken!==r?[2]:(e.updateExtraLibs(this._defaults.getExtraLibs()),[2])}})})},t.prototype._getClient=function(){var r=this;if(!this._client){this._worker=S.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});var e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then(function(i){return r._worker?r._worker.withSyncedResources(S.getModels().filter(function(u){return u.getModeId()===r._modeId}).map(function(u){return u.uri})):i})),this._client=e}return this._client},t.prototype.getLanguageServiceWorker=function(){for(var r=this,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var u;return this._getClient().then(function(n){u=n}).then(function(n){if(r._worker)return r._worker.withSyncedResources(e)}).then(function(n){return u})},t}(),p={};p["lib.d.ts"]=!0;p["lib.dom.d.ts"]=!0;p["lib.dom.iterable.d.ts"]=!0;p["lib.es2015.collection.d.ts"]=!0;p["lib.es2015.core.d.ts"]=!0;p["lib.es2015.d.ts"]=!0;p["lib.es2015.generator.d.ts"]=!0;p["lib.es2015.iterable.d.ts"]=!0;p["lib.es2015.promise.d.ts"]=!0;p["lib.es2015.proxy.d.ts"]=!0;p["lib.es2015.reflect.d.ts"]=!0;p["lib.es2015.symbol.d.ts"]=!0;p["lib.es2015.symbol.wellknown.d.ts"]=!0;p["lib.es2016.array.include.d.ts"]=!0;p["lib.es2016.d.ts"]=!0;p["lib.es2016.full.d.ts"]=!0;p["lib.es2017.d.ts"]=!0;p["lib.es2017.full.d.ts"]=!0;p["lib.es2017.intl.d.ts"]=!0;p["lib.es2017.object.d.ts"]=!0;p["lib.es2017.sharedmemory.d.ts"]=!0;p["lib.es2017.string.d.ts"]=!0;p["lib.es2017.typedarrays.d.ts"]=!0;p["lib.es2018.asyncgenerator.d.ts"]=!0;p["lib.es2018.asynciterable.d.ts"]=!0;p["lib.es2018.d.ts"]=!0;p["lib.es2018.full.d.ts"]=!0;p["lib.es2018.intl.d.ts"]=!0;p["lib.es2018.promise.d.ts"]=!0;p["lib.es2018.regexp.d.ts"]=!0;p["lib.es2019.array.d.ts"]=!0;p["lib.es2019.d.ts"]=!0;p["lib.es2019.full.d.ts"]=!0;p["lib.es2019.object.d.ts"]=!0;p["lib.es2019.string.d.ts"]=!0;p["lib.es2019.symbol.d.ts"]=!0;p["lib.es2020.bigint.d.ts"]=!0;p["lib.es2020.d.ts"]=!0;p["lib.es2020.full.d.ts"]=!0;p["lib.es2020.intl.d.ts"]=!0;p["lib.es2020.promise.d.ts"]=!0;p["lib.es2020.sharedmemory.d.ts"]=!0;p["lib.es2020.string.d.ts"]=!0;p["lib.es2020.symbol.wellknown.d.ts"]=!0;p["lib.es2021.d.ts"]=!0;p["lib.es2021.full.d.ts"]=!0;p["lib.es2021.promise.d.ts"]=!0;p["lib.es2021.string.d.ts"]=!0;p["lib.es2021.weakref.d.ts"]=!0;p["lib.es5.d.ts"]=!0;p["lib.es6.d.ts"]=!0;p["lib.esnext.d.ts"]=!0;p["lib.esnext.full.d.ts"]=!0;p["lib.esnext.intl.d.ts"]=!0;p["lib.esnext.promise.d.ts"]=!0;p["lib.esnext.string.d.ts"]=!0;p["lib.esnext.weakref.d.ts"]=!0;p["lib.scripthost.d.ts"]=!0;p["lib.webworker.d.ts"]=!0;p["lib.webworker.importscripts.d.ts"]=!0;p["lib.webworker.iterable.d.ts"]=!0;var A=function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,u){i.__proto__=u}||function(i,u){for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(i[n]=u[n])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function i(){this.constructor=r}r.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}(),P=function(){return P=Object.assign||function(t){for(var r,e=1,i=arguments.length;e<i;e++){r=arguments[e];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},P.apply(this,arguments)},k=function(t,r,e,i){function u(n){return n instanceof e?n:new e(function(o){o(n)})}return new(e||(e=Promise))(function(n,o){function c(a){try{s(i.next(a))}catch(f){o(f)}}function l(a){try{s(i.throw(a))}catch(f){o(f)}}function s(a){a.done?n(a.value):u(a.value).then(c,l)}s((i=i.apply(t,r||[])).next())})},_=function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,u,n,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(s){return function(a){return l([s,a])}}function l(s){if(i)throw new TypeError("Generator is already executing.");for(;e;)try{if(i=1,u&&(n=s[0]&2?u.return:s[0]?u.throw||((n=u.return)&&n.call(u),0):u.next)&&!(n=n.call(u,s[1])).done)return n;switch(u=0,n&&(s=[s[0]&2,n.value]),s[0]){case 0:case 1:n=s;break;case 4:return e.label++,{value:s[1],done:!1};case 5:e.label++,u=s[1],s=[0];continue;case 7:s=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){e=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){e.label=s[1];break}if(s[0]===6&&e.label<n[1]){e.label=n[1],n=s;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(s);break}n[2]&&e.ops.pop(),e.trys.pop();continue}s=r.call(t,e)}catch(a){s=[6,a],u=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},I;(function(t){t[t.None=0]="None",t[t.Block=1]="Block",t[t.Smart=2]="Smart"})(I||(I={}));function M(t,r,e){if(e===void 0&&(e=0),typeof t=="string")return t;if(t===void 0)return"";var i="";if(e){i+=r;for(var u=0;u<e;u++)i+="  "}if(i+=t.messageText,e++,t.next)for(var n=0,o=t.next;n<o.length;n++){var c=o[n];i+=M(c,r,e)}return i}function D(t){return t?t.map(function(r){return r.text}).join(""):""}var F=function(){function t(r){this._worker=r}return t.prototype._textSpanToRange=function(r,e){var i=r.getPositionAt(e.start),u=r.getPositionAt(e.start+e.length),n=i.lineNumber,o=i.column,c=u.lineNumber,l=u.column;return{startLineNumber:n,startColumn:o,endLineNumber:c,endColumn:l}},t}(),J=function(){function t(r){this._worker=r,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return t.prototype.isLibFile=function(r){return r&&r.path.indexOf("/lib.")===0?!!p[r.path.slice(1)]:!1},t.prototype.getOrCreateModel=function(r){var e=S.getModel(r);return e||(this.isLibFile(r)&&this._hasFetchedLibFiles?S.createModel(this._libFiles[r.path.slice(1)],"typescript",r):null)},t.prototype._containsLibFile=function(r){for(var e=0,i=r;e<i.length;e++){var u=i[e];if(this.isLibFile(u))return!0}return!1},t.prototype.fetchLibFilesIfNecessary=function(r){return k(this,void 0,void 0,function(){return _(this,function(e){switch(e.label){case 0:return this._containsLibFile(r)?[4,this._fetchLibFiles()]:[2];case 1:return e.sent(),[2]}})})},t.prototype._fetchLibFiles=function(){var r=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(function(e){return e.getLibFiles()}).then(function(e){r._hasFetchedLibFiles=!0,r._libFiles=e})),this._fetchLibFilesPromise},t}(),L;(function(t){t[t.Warning=0]="Warning",t[t.Error=1]="Error",t[t.Suggestion=2]="Suggestion",t[t.Message=3]="Message"})(L||(L={}));var Q=function(t){A(r,t);function r(e,i,u,n){var o=t.call(this,n)||this;o._libFiles=e,o._defaults=i,o._selector=u,o._disposables=[],o._listener=Object.create(null);var c=function(a){if(a.getModeId()===u){var f=function(){var m=o._defaults.getDiagnosticsOptions().onlyVisible;m?a.isAttachedToEditor()&&o._doValidate(a):o._doValidate(a)},d,g=a.onDidChangeContent(function(){clearTimeout(d),d=setTimeout(f,500)}),h=a.onDidChangeAttached(function(){var m=o._defaults.getDiagnosticsOptions().onlyVisible;m&&(a.isAttachedToEditor()?f():S.setModelMarkers(a,o._selector,[]))});o._listener[a.uri.toString()]={dispose:function(){g.dispose(),h.dispose(),clearTimeout(d)}},f()}},l=function(a){S.setModelMarkers(a,o._selector,[]);var f=a.uri.toString();o._listener[f]&&(o._listener[f].dispose(),delete o._listener[f])};o._disposables.push(S.onDidCreateModel(function(a){return c(a)})),o._disposables.push(S.onWillDisposeModel(l)),o._disposables.push(S.onDidChangeModelLanguage(function(a){l(a.model),c(a.model)})),o._disposables.push({dispose:function(){for(var a=0,f=S.getModels();a<f.length;a++){var d=f[a];l(d)}}});var s=function(){for(var a=0,f=S.getModels();a<f.length;a++){var d=f[a];l(d),c(d)}};return o._disposables.push(o._defaults.onDidChange(s)),o._disposables.push(o._defaults.onDidExtraLibsChange(s)),S.getModels().forEach(function(a){return c(a)}),o}return r.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},r.prototype._doValidate=function(e){return k(this,void 0,void 0,function(){var i,u,n,o,c,l,s,a,f,d=this;return _(this,function(g){switch(g.label){case 0:return[4,this._worker(e.uri)];case 1:return i=g.sent(),e.isDisposed()?[2]:(u=[],n=this._defaults.getDiagnosticsOptions(),o=n.noSyntaxValidation,c=n.noSemanticValidation,l=n.noSuggestionDiagnostics,o||u.push(i.getSyntacticDiagnostics(e.uri.toString())),c||u.push(i.getSemanticDiagnostics(e.uri.toString())),l||u.push(i.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(u)]);case 2:return s=g.sent(),!s||e.isDisposed()?[2]:(a=s.reduce(function(h,m){return m.concat(h)},[]).filter(function(h){return(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(h.code)===-1}),f=a.map(function(h){return h.relatedInformation||[]}).reduce(function(h,m){return m.concat(h)},[]).map(function(h){return h.file?T.parse(h.file.fileName):null}),[4,this._libFiles.fetchLibFilesIfNecessary(f)]);case 3:return g.sent(),e.isDisposed()?[2]:(S.setModelMarkers(e,this._selector,a.map(function(h){return d._convertDiagnostics(e,h)})),[2])}})})},r.prototype._convertDiagnostics=function(e,i){var u=i.start||0,n=i.length||1,o=e.getPositionAt(u),c=o.lineNumber,l=o.column,s=e.getPositionAt(u+n),a=s.lineNumber,f=s.column,d=[];return i.reportsUnnecessary&&d.push(H.Unnecessary),i.reportsDeprecated&&d.push(H.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(i.category),startLineNumber:c,startColumn:l,endLineNumber:a,endColumn:f,message:M(i.messageText,`
`),code:i.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,i.relatedInformation)}},r.prototype._convertRelatedInformation=function(e,i){var u=this;if(!i)return[];var n=[];return i.forEach(function(o){var c=e;if(o.file){var l=T.parse(o.file.fileName);c=u._libFiles.getOrCreateModel(l)}if(!!c){var s=o.start||0,a=o.length||1,f=c.getPositionAt(s),d=f.lineNumber,g=f.column,h=c.getPositionAt(s+a),m=h.lineNumber,y=h.column;n.push({resource:c.uri,startLineNumber:d,startColumn:g,endLineNumber:m,endColumn:y,message:M(o.messageText,`
`)})}}),n},r.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case L.Error:return N.Error;case L.Message:return N.Info;case L.Warning:return N.Warning;case L.Suggestion:return N.Hint}return N.Info},r}(F),$=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(r.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),r.prototype.provideCompletionItems=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,l,s,a,f,d;return _(this,function(g){switch(g.label){case 0:return o=e.getWordUntilPosition(i),c=new V(i.lineNumber,o.startColumn,i.lineNumber,o.endColumn),l=e.uri,s=e.getOffsetAt(i),[4,this._worker(l)];case 1:return a=g.sent(),e.isDisposed()?[2]:[4,a.getCompletionsAtPosition(l.toString(),s)];case 2:return f=g.sent(),!f||e.isDisposed()?[2]:(d=f.entries.map(function(h){var m,y=c;if(h.replacementSpan){var w=e.getPositionAt(h.replacementSpan.start),C=e.getPositionAt(h.replacementSpan.start+h.replacementSpan.length);y=new V(w.lineNumber,w.column,C.lineNumber,C.column)}var E=[];return((m=h.kindModifiers)===null||m===void 0?void 0:m.indexOf("deprecated"))!==-1&&E.push(b.CompletionItemTag.Deprecated),{uri:l,position:i,offset:s,range:y,label:h.name,insertText:h.name,sortText:h.sortText,kind:r.convertKind(h.kind),tags:E}}),[2,{suggestions:d}])}})})},r.prototype.resolveCompletionItem=function(e,i){return k(this,void 0,void 0,function(){var u,n,o,c,l,s;return _(this,function(a){switch(a.label){case 0:return u=e,n=u.uri,o=u.position,c=u.offset,[4,this._worker(n)];case 1:return l=a.sent(),[4,l.getCompletionEntryDetails(n.toString(),c,u.label)];case 2:return s=a.sent(),s?[2,{uri:n,position:o,label:s.name,kind:r.convertKind(s.kind),detail:D(s.displayParts),documentation:{value:r.createDocumentationString(s)}}]:[2,u]}})})},r.convertKind=function(e){switch(e){case v.primitiveType:case v.keyword:return b.CompletionItemKind.Keyword;case v.variable:case v.localVariable:return b.CompletionItemKind.Variable;case v.memberVariable:case v.memberGetAccessor:case v.memberSetAccessor:return b.CompletionItemKind.Field;case v.function:case v.memberFunction:case v.constructSignature:case v.callSignature:case v.indexSignature:return b.CompletionItemKind.Function;case v.enum:return b.CompletionItemKind.Enum;case v.module:return b.CompletionItemKind.Module;case v.class:return b.CompletionItemKind.Class;case v.interface:return b.CompletionItemKind.Interface;case v.warning:return b.CompletionItemKind.File}return b.CompletionItemKind.Property},r.createDocumentationString=function(e){var i=D(e.documentation);if(e.tags)for(var u=0,n=e.tags;u<n.length;u++){var o=n[u];i+=`

`+W(o)}return i},r}(F);function W(t){var r="*@"+t.name+"*";if(t.name==="param"&&t.text){var e=t.text,i=e[0],u=e.slice(1);r+="`"+i.text+"`",u.length>0&&(r+=" \u2014 "+u.map(function(n){return n.text}).join(" "))}else Array.isArray(t.text)?r+=" \u2014 "+t.text.map(function(n){return n.text}).join(" "):t.text&&(r+=" \u2014 "+t.text);return r}var q=function(t){A(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e.signatureHelpTriggerCharacters=["(",","],e}return r._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case b.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case b.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case b.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},r.prototype.provideSignatureHelp=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,l,s,a;return _(this,function(f){switch(f.label){case 0:return o=e.uri,c=e.getOffsetAt(i),[4,this._worker(o)];case 1:return l=f.sent(),e.isDisposed()?[2]:[4,l.getSignatureHelpItems(o.toString(),c,{triggerReason:r._toSignatureHelpTriggerReason(n)})];case 2:return s=f.sent(),!s||e.isDisposed()?[2]:(a={activeSignature:s.selectedItemIndex,activeParameter:s.argumentIndex,signatures:[]},s.items.forEach(function(d){var g={label:"",parameters:[]};g.documentation={value:D(d.documentation)},g.label+=D(d.prefixDisplayParts),d.parameters.forEach(function(h,m,y){var w=D(h.displayParts),C={label:w,documentation:{value:D(h.documentation)}};g.label+=w,g.parameters.push(C),m<y.length-1&&(g.label+=D(d.separatorDisplayParts))}),g.label+=D(d.suffixDisplayParts),a.signatures.push(g)}),[2,{value:a,dispose:function(){}}])}})})},r}(F),X=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideHover=function(e,i,u){return k(this,void 0,void 0,function(){var n,o,c,l,s,a,f;return _(this,function(d){switch(d.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=d.sent(),e.isDisposed()?[2]:[4,c.getQuickInfoAtPosition(n.toString(),o)];case 2:return l=d.sent(),!l||e.isDisposed()?[2]:(s=D(l.documentation),a=l.tags?l.tags.map(function(g){return W(g)}).join(`  

`):"",f=D(l.displayParts),[2,{range:this._textSpanToRange(e,l.textSpan),contents:[{value:"```typescript\n"+f+"\n```\n"},{value:s+(a?`

`+a:"")}]}])}})})},r}(F),Y=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentHighlights=function(e,i,u){return k(this,void 0,void 0,function(){var n,o,c,l,s=this;return _(this,function(a){switch(a.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=a.sent(),e.isDisposed()?[2]:[4,c.getOccurrencesAtPosition(n.toString(),o)];case 2:return l=a.sent(),!l||e.isDisposed()?[2]:[2,l.map(function(f){return{range:s._textSpanToRange(e,f.textSpan),kind:f.isWriteAccess?b.DocumentHighlightKind.Write:b.DocumentHighlightKind.Text}})]}})})},r}(F),Z=function(t){A(r,t);function r(e,i){var u=t.call(this,i)||this;return u._libFiles=e,u}return r.prototype.provideDefinition=function(e,i,u){return k(this,void 0,void 0,function(){var n,o,c,l,s,a,f,d,g,h,m,y;return _(this,function(w){switch(w.label){case 0:return n=e.uri,o=e.getOffsetAt(i),[4,this._worker(n)];case 1:return c=w.sent(),e.isDisposed()?[2]:[4,c.getDefinitionAtPosition(n.toString(),o)];case 2:return l=w.sent(),!l||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(l.map(function(C){return T.parse(C.fileName)}))];case 3:if(w.sent(),e.isDisposed())return[2];for(s=[],a=0,f=l;a<f.length;a++)if(d=f[a],g=T.parse(d.fileName),h=this._libFiles.getOrCreateModel(g),h)s.push({uri:g,range:this._textSpanToRange(h,d.textSpan)});else if(m=B.getExtraLibs()[d.fileName],m)return y=S.createModel(m.content,"typescript",g),[2,{uri:g,range:this._textSpanToRange(y,d.textSpan)}];return[2,s]}})})},r}(F),ee=function(t){A(r,t);function r(e,i){var u=t.call(this,i)||this;return u._libFiles=e,u}return r.prototype.provideReferences=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,l,s,a,f,d,g,h,m;return _(this,function(y){switch(y.label){case 0:return o=e.uri,c=e.getOffsetAt(i),[4,this._worker(o)];case 1:return l=y.sent(),e.isDisposed()?[2]:[4,l.getReferencesAtPosition(o.toString(),c)];case 2:return s=y.sent(),!s||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(s.map(function(w){return T.parse(w.fileName)}))];case 3:if(y.sent(),e.isDisposed())return[2];for(a=[],f=0,d=s;f<d.length;f++)g=d[f],h=T.parse(g.fileName),m=this._libFiles.getOrCreateModel(h),m&&a.push({uri:h,range:this._textSpanToRange(m,g.textSpan)});return[2,a]}})})},r}(F),te=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentSymbols=function(e,i){return k(this,void 0,void 0,function(){var u,n,o,c,l,s=this;return _(this,function(a){switch(a.label){case 0:return u=e.uri,[4,this._worker(u)];case 1:return n=a.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(u.toString())];case 2:return o=a.sent(),!o||e.isDisposed()?[2]:(c=function(f,d,g){var h={name:d.text,detail:"",kind:x[d.kind]||b.SymbolKind.Variable,range:s._textSpanToRange(e,d.spans[0]),selectionRange:s._textSpanToRange(e,d.spans[0]),tags:[]};if(g&&(h.containerName=g),d.childItems&&d.childItems.length>0)for(var m=0,y=d.childItems;m<y.length;m++){var w=y[m];c(f,w,h.name)}f.push(h)},l=[],o.forEach(function(f){return c(l,f)}),[2,l])}})})},r}(F),v=function(){function t(){}return t.unknown="",t.keyword="keyword",t.script="script",t.module="module",t.class="class",t.interface="interface",t.type="type",t.enum="enum",t.variable="var",t.localVariable="local var",t.function="function",t.localFunction="local function",t.memberFunction="method",t.memberGetAccessor="getter",t.memberSetAccessor="setter",t.memberVariable="property",t.constructorImplementation="constructor",t.callSignature="call",t.indexSignature="index",t.constructSignature="construct",t.parameter="parameter",t.typeParameter="type parameter",t.primitiveType="primitive type",t.label="label",t.alias="alias",t.const="const",t.let="let",t.warning="warning",t}(),x=Object.create(null);x[v.module]=b.SymbolKind.Module;x[v.class]=b.SymbolKind.Class;x[v.enum]=b.SymbolKind.Enum;x[v.interface]=b.SymbolKind.Interface;x[v.memberFunction]=b.SymbolKind.Method;x[v.memberVariable]=b.SymbolKind.Property;x[v.memberGetAccessor]=b.SymbolKind.Property;x[v.memberSetAccessor]=b.SymbolKind.Property;x[v.variable]=b.SymbolKind.Variable;x[v.const]=b.SymbolKind.Variable;x[v.localVariable]=b.SymbolKind.Variable;x[v.variable]=b.SymbolKind.Variable;x[v.function]=b.SymbolKind.Function;x[v.localFunction]=b.SymbolKind.Function;var O=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:I.Smart,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},r.prototype._convertTextChanges=function(e,i){return{text:i.newText,range:this._textSpanToRange(e,i.span)}},r}(F),re=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideDocumentRangeFormattingEdits=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,l,s,a,f=this;return _(this,function(d){switch(d.label){case 0:return o=e.uri,c=e.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),l=e.getOffsetAt({lineNumber:i.endLineNumber,column:i.endColumn}),[4,this._worker(o)];case 1:return s=d.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsForRange(o.toString(),c,l,O._convertOptions(u))];case 2:return a=d.sent(),!a||e.isDisposed()?[2]:[2,a.map(function(g){return f._convertTextChanges(e,g)})]}})})},r}(O),ne=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(r.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}",`
`]},enumerable:!1,configurable:!0}),r.prototype.provideOnTypeFormattingEdits=function(e,i,u,n,o){return k(this,void 0,void 0,function(){var c,l,s,a,f=this;return _(this,function(d){switch(d.label){case 0:return c=e.uri,l=e.getOffsetAt(i),[4,this._worker(c)];case 1:return s=d.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsAfterKeystroke(c.toString(),l,u,O._convertOptions(n))];case 2:return a=d.sent(),!a||e.isDisposed()?[2]:[2,a.map(function(g){return f._convertTextChanges(e,g)})]}})})},r}(O),ie=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideCodeActions=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,l,s,a,f,d,g,h=this;return _(this,function(m){switch(m.label){case 0:return o=e.uri,c=e.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),l=e.getOffsetAt({lineNumber:i.endLineNumber,column:i.endColumn}),s=O._convertOptions(e.getOptions()),a=u.markers.filter(function(y){return y.code}).map(function(y){return y.code}).map(Number),[4,this._worker(o)];case 1:return f=m.sent(),e.isDisposed()?[2]:[4,f.getCodeFixesAtPosition(o.toString(),c,l,a,s)];case 2:return d=m.sent(),!d||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:(g=d.filter(function(y){return y.changes.filter(function(w){return w.isNewFile}).length===0}).map(function(y){return h._tsCodeFixActionToMonacoCodeAction(e,u,y)}),[2,{actions:g,dispose:function(){}}])}})})},r.prototype._tsCodeFixActionToMonacoCodeAction=function(e,i,u){for(var n=[],o=0,c=u.changes;o<c.length;o++)for(var l=c[o],s=0,a=l.textChanges;s<a.length;s++){var f=a[s];n.push({resource:e.uri,edit:{range:this._textSpanToRange(e,f.span),text:f.newText}})}var d={title:u.description,edit:{edits:n},diagnostics:i.markers,kind:"quickfix"};return d},r}(O),se=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideRenameEdits=function(e,i,u,n){return k(this,void 0,void 0,function(){var o,c,l,s,a,f,d,g,h,m,y,w;return _(this,function(C){switch(C.label){case 0:return o=e.uri,c=o.toString(),l=e.getOffsetAt(i),[4,this._worker(o)];case 1:return s=C.sent(),e.isDisposed()?[2]:[4,s.getRenameInfo(c,l,{allowRenameOfImportPath:!1})];case 2:if(a=C.sent(),a.canRename===!1)return[2,{edits:[],rejectReason:a.localizedErrorMessage}];if(a.fileToRename!==void 0)throw new Error("Renaming files is not supported.");return[4,s.findRenameLocations(c,l,!1,!1,!1)];case 3:if(f=C.sent(),!f||e.isDisposed())return[2];for(d=[],g=0,h=f;g<h.length;g++)if(m=h[g],y=T.parse(m.fileName),w=S.getModel(y),w)d.push({resource:y,edit:{range:this._textSpanToRange(w,m.textSpan),text:u}});else throw new Error("Unknown URI "+y+".");return[2,{edits:d}]}})})},r}(F),oe=function(t){A(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.provideInlayHints=function(e,i,u){return k(this,void 0,void 0,function(){var n,o,c,l,s,a,f=this;return _(this,function(d){switch(d.label){case 0:return n=e.uri,o=n.toString(),c=e.getOffsetAt({lineNumber:i.startLineNumber,column:i.startColumn}),l=e.getOffsetAt({lineNumber:i.endLineNumber,column:i.endColumn}),[4,this._worker(n)];case 1:return s=d.sent(),e.isDisposed()?[2,[]]:[4,s.provideInlayHints(o,c,l)];case 2:return a=d.sent(),[2,a.map(function(g){return P(P({},g),{position:e.getPositionAt(g.position),kind:f._convertHintKind(g.kind)})})]}})})},r.prototype._convertHintKind=function(e){switch(e){case"Parameter":return b.InlayHintKind.Parameter;case"Type":return b.InlayHintKind.Type;default:return b.InlayHintKind.Other}},r}(F),R,K;function ue(t){K=j(t,"typescript")}function ce(t){R=j(t,"javascript")}function le(){return new Promise(function(t,r){if(!R)return r("JavaScript not registered!");t(R)})}function fe(){return new Promise(function(t,r){if(!K)return r("TypeScript not registered!");t(K)})}function j(t,r){var e=new G(r,t),i=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return e.getLanguageServiceWorker.apply(e,n)},u=new J(i);return b.registerCompletionItemProvider(r,new $(i)),b.registerSignatureHelpProvider(r,new q(i)),b.registerHoverProvider(r,new X(i)),b.registerDocumentHighlightProvider(r,new Y(i)),b.registerDefinitionProvider(r,new Z(u,i)),b.registerReferenceProvider(r,new ee(u,i)),b.registerDocumentSymbolProvider(r,new te(i)),b.registerDocumentRangeFormattingEditProvider(r,new re(i)),b.registerOnTypeFormattingEditProvider(r,new ne(i)),b.registerCodeActionProvider(r,new ie(i)),b.registerRenameProvider(r,new se(i)),b.registerInlayHintsProvider(r,new oe(i)),new Q(u,t,r,i),i}export{le as getJavaScriptWorker,fe as getTypeScriptWorker,ce as setupJavaScript,ue as setupTypeScript};
