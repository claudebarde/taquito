(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),u=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=u(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return a?r.a.createElement(d,c(c({ref:e},l),{},{components:a})):r.a.createElement(d,c({ref:e},l))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return s})),a.d(e,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(107)),i={title:"Tutorial Links",id:"tutorial_links",author:"Claude Barde"},c={unversionedId:"tutorial_links",id:"tutorial_links",isDocsHomePage:!1,title:"Tutorial Links",description:"You will find below a list of different tutorials about Taquito written on various platforms. These tutorials explain core concepts of Taquito and how to implement it and use it in a Tezos dapp.",source:"@site/../docs/tutorial_links.md",slug:"/tutorial_links",permalink:"/docs/tutorial_links",version:"current",sidebar:"docs",previous:{title:"Batch API",permalink:"/docs/batch_API"},next:{title:"The MichelsonMap class",permalink:"/docs/michelsonmap"}},s=[],l={rightToc:s};function u(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You will find below a list of different tutorials about Taquito written on various platforms. These tutorials explain core concepts of Taquito and how to implement it and use it in a Tezos dapp."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://medium.com/better-programming/build-your-first-dapp-on-tezos-270c568d4fe9"}),"Build your first dapp on Tezos")),Object(o.b)("br",{parentName:"li"}),"A guide to build a simple React dapp on Tezos with wallet support using Taquito"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://medium.com/coinmonks/build-a-tezos-dapp-using-taquito-and-the-beacon-sdk-692d7dc822aa"}),"Build a Tezos dapp with Taquito and the Beacon SDK")),Object(o.b)("br",{parentName:"li"}),"A guide to use Taquito and the Beacon SDK to connect to the Beacon extension and emit transactions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v=qYk_17YbPa4&feature=emb_logo&ab_channel=CoinList"}),"Taquito Workshop")),Object(o.b)("br",{parentName:"li"}),"This video is part of the CoinList Hackathon of May 2020 and presents an overview of Taquito, along with how to use Taquito with React to build a voting dapp"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://assets.tqtezos.com/docs/token-contracts/fa12/2-fa12-ligo/"}),"Working with FA1.2 using LIGO and Taquito")),Object(o.b)("br",{parentName:"li"}),"This article explains how to deploy an FA1.2 contract and use Taquito to interact with it"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://medium.com/protofire-blog/tezos-part-4-how-to-integrate-javascript-with-smart-contracts-and-run-unit-tests-c36756149e9d"}),"Protofire tutorial")),Object(o.b)("br",{parentName:"li"}),"A guide to using Taquito to write unit tests that deploy a contract and interact with it"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://gitlab.com/nomadic-labs/training.nomadic-labs.com/-/blob/master/content/download/taquito.pdf"}),"Nomadic Labs Training")),Object(o.b)("br",{parentName:"li"}),"A simple introduction to the main features of Taquito"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://medium.com/tezoscommons/a-delicious-new-typescript-library-for-the-tezos-blockchain-a8fcf776b037"}),"A delicious TypeScript library for the Tezos blockchain")),Object(o.b)("br",{parentName:"li"}),"Taquito official introductory article on Medium"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://hackmd.io/@kinokasai/Sy1v-vtmL"}),"Basic dapp concepts using Taquito")),Object(o.b)("br",{parentName:"li"}),"A guide to dapps on Tezos with a smart contract in Ligo and a web interface using Taquito"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://training.blockmatics.io/courses/tezos-smartpy-developer-course/lectures/13126359"}),"SmartPy lecture about Taquito")),Object(o.b)("br",{parentName:"li"}),"Introduction to Taquito within SmartPy dapp developer course")),Object(o.b)("p",null,"If you want to add a link to this page, please do not hesitate to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ecadlabs/taquito/issues"}),"open an issue")," with the missing resource."))}u.isMDXComponent=!0}}]);