import{l as i,W as p,e as m}from"./vendor.b52fc6a8.js";const d=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};d();function f(){return new Worker("/graphql-schema-language-tools/assets/graphqlSchema.worker.8d27dc65.js",{type:"module"})}const g="modulepreload",l={},h="/graphql-schema-language-tools/",y=function(o,a){return!a||a.length===0?o():Promise.all(a.map(n=>{if(n=`${h}${n}`,n in l)return;l[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":g,e||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),e)return new Promise((c,u)=>{t.addEventListener("load",c),t.addEventListener("error",u)})})).then(()=>o())};function k(){return y(()=>import("./graphqlSchemaMode.805e74a0.js"),["assets/graphqlSchemaMode.805e74a0.js","assets/vendor.b52fc6a8.js","assets/vendor.e6e77dd6.css","assets/graphql.5d27a1d6.js"])}i.register({id:"graphql-schema",extensions:[".graphql"],mimetypes:["application/graphql"]});i.onLanguage("graphql-schema",()=>{k().then(s=>s.setupMode())});self.MonacoEnvironment={getWorker(s,o){return o==="graphql-schema"?new f:new p}};function q(s){const o=document.getElementById("monaco-editor");m.create(o,{language:"graphql-schema",glyphMargin:!0,formatOnPaste:!0,formatOnType:!0,theme:"vs-dark",fontSize:16,value:s})}q(`# Example
"Scalar JSON"
scalar JSON

"Input Book"
input BookInput {
  name: String
}

"Type Book"
type Book {
  name: String
}

type ExampleType {
  book:
}

input ExampleInput {
  book:
}
`);
