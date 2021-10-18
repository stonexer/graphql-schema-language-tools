import{l as a,W as d,e as p}from"./vendor.b52fc6a8.js";const m=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};m();function f(){return new Worker("/assets/graphqlSchema.worker.8d27dc65.js",{type:"module"})}const h="modulepreload",l={},g="/",y=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${g}${o}`,o in l)return;l[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":h,e||(t.as="script",t.crossOrigin=""),t.href=o,document.head.appendChild(t),e)return new Promise((c,u)=>{t.addEventListener("load",c),t.addEventListener("error",u)})})).then(()=>n())};function k(){return y(()=>import("./graphqlSchemaMode.805e74a0.js"),["assets/graphqlSchemaMode.805e74a0.js","assets/vendor.b52fc6a8.js","assets/vendor.1f19cb17.css","assets/graphql.5d27a1d6.js"])}a.register({id:"graphql-schema",extensions:[".graphql"],mimetypes:["application/graphql"]});a.onLanguage("graphql-schema",()=>{k().then(i=>i.setupMode())});self.MonacoEnvironment={getWorker(i,n){return n==="graphql-schema"?new f:new d}};function E(i){const n=document.getElementById("monaco-editor");p.create(n,{language:"graphql-schema",glyphMargin:!0,formatOnPaste:!0,formatOnType:!0,theme:"vs-dark",fontSize:16,value:i})}E(`# Example
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
