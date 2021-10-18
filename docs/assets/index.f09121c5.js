import{l as i,W as p,e as m}from"./vendor.b52fc6a8.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};f();function d(){return new Worker("/graphql-schema-language-tools/assets/graphqlSchema.worker.a076febf.js",{type:"module"})}const g="modulepreload",l={},h="/graphql-schema-language-tools/",y=function(o,s){return!s||s.length===0?o():Promise.all(s.map(n=>{if(n=`${h}${n}`,n in l)return;l[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":g,e||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),e)return new Promise((c,u)=>{t.addEventListener("load",c),t.addEventListener("error",u)})})).then(()=>o())};function k(){return y(()=>import("./graphqlSchemaMode.e097f0e9.js"),["assets/graphqlSchemaMode.e097f0e9.js","assets/vendor.b52fc6a8.js","assets/vendor.e6e77dd6.css","assets/graphql.5d27a1d6.js"])}i.register({id:"graphql-schema",extensions:[".graphql"],mimetypes:["application/graphql"]});i.onLanguage("graphql-schema",()=>{k().then(a=>a.setupMode())});self.MonacoEnvironment={getWorker(a,o){return o==="graphql-schema"?new d:new p}};function S(a){const o=document.getElementById("monaco-editor");m.create(o,{language:"graphql-schema",glyphMargin:!0,formatOnPaste:!0,formatOnType:!0,theme:"vs-dark",fontSize:16,value:a})}S(`# Example
"Scalar JSON"
scalar JSON

"Enum SaleType"
enum SaleType {
  DIGITAL
}

"Input Book"
input BookInput {
  name: String
}

"Interface Book"
interface IBook {
  name: String
}

"Type Book"
type Book {
  name: String
}

type ExampleType {
  # Type a space or press ctrl+space after ':'
  # to trigger the completion.
  book:
}

input ExampleInput {
  book:
}
`);
