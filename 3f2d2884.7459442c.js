(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},h=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(t),d=r,b=h["".concat(i,".").concat(d)]||h[d]||u[d]||a;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(107)),i={title:"Storage with/without annotations",author:"Roxane Letourneau"},c={unversionedId:"storage_annotations",id:"storage_annotations",isDocsHomePage:!1,title:"Storage with/without annotations",description:"This section shows how to write storage when :",source:"@site/../docs/storage_annotations.md",slug:"/storage_annotations",permalink:"/docs/storage_annotations",version:"current",sidebar:"docs",previous:{title:"Working with contracts having complex storage/parameters",permalink:"/docs/complex_parameters"},next:{title:"Drain an account",permalink:"/docs/drain_account"}},s=[{value:"When all the properties are annotated",id:"when-all-the-properties-are-annotated",children:[]},{value:"When there is no annotation",id:"when-there-is-no-annotation",children:[]},{value:"When some arguments are annotated and others are not",id:"when-some-arguments-are-annotated-and-others-are-not",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section shows how to write storage when :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"it has annotations"),Object(a.b)("li",{parentName:"ul"},"it has no annotation"),Object(a.b)("li",{parentName:"ul"},"it has a mix of properties which are annotated and others which are not")),Object(a.b)("p",null,"To do so, let's look at three examples of contract origination showing initial values in the storage."),Object(a.b)("h3",{id:"when-all-the-properties-are-annotated"},"When all the properties are annotated"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"//storage representation in Michelson\n\n(pair\n    (pair\n        (pair (address %theAddress) (bool %theBool))\n        (pair (nat %theNat) (int %theNumber)))\n    (mutez %theTez))\n")),Object(a.b)("p",null,"We need to write the storage as a Javascript object and include the annotated names in it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/delphinet');\n\nTezos.contract\n  .originate({\n    code: contractStorageAnnot,\n    storage: {\n      theAddress: 'tz1PgQt52JMirBUhhkq1eanX8hVd1Fsg71Lr',\n      theBool: true,\n      theNat: '3',\n      theNumber: '5',\n      theTez: '10',\n    },\n  })\n  .then((originationOp) => {\n    println(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);\n    return originationOp.contract();\n  })\n  .then(() => {\n    println(`Origination completed.`);\n  })\n  .catch((error) => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(a.b)("h3",{id:"when-there-is-no-annotation"},"When there is no annotation"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"//storage representation in Michelson\n\n(pair\n    (pair\n        (pair (address) (bool))\n        (pair (nat) (int)))\n    (mutez))\n")),Object(a.b)("p",null,"All properties in storage are accessible by the index corresponding to the order that the storage is defined."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/delphinet');\n\nTezos.contract\n  .originate({\n    code: contractStorageWithoutAnnot,\n    storage: {\n      0: 'tz1PgQt52JMirBUhhkq1eanX8hVd1Fsg71Lr', //address\n      1: true, //bool\n      2: '3', //nat\n      3: '5', //int\n      4: '10', //mutez\n    },\n  })\n  .then((originationOp) => {\n    println(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);\n    return originationOp.contract();\n  })\n  .then(() => {\n    println(`Origination completed.`);\n  })\n  .catch((error) => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(a.b)("h3",{id:"when-some-arguments-are-annotated-and-others-are-not"},"When some arguments are annotated and others are not"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"//storage representation in Michelson\n\n(pair\n    (pair\n        (pair (address) (bool))\n        (pair (nat %theNat) (int %theNumber)))\n    (mutez))\n")),Object(a.b)("p",null,"In the following example, only the elements in positions 2 and 3 have an annotation. We need to access these elements with their annotated name and the others with corresponding indexes."),Object(a.b)("p",null,'Note that when proprieties have annotations, we cannot access them by index. For example, if you replace "theNat" by 2 and "theNumber" by 3 in this code example, it will fail.'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/delphinet');\n\nTezos.contract\n  .originate({\n    code: contractStorageWithAndWithoutAnnot,\n    storage: {\n      0: 'tz1PgQt52JMirBUhhkq1eanX8hVd1Fsg71Lr', //address\n      1: true, //bool\n      theNat: '3',\n      theNumber: '5',\n      4: '10', //mutez\n    },\n  })\n  .then((originationOp) => {\n    println(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);\n    return originationOp.contract();\n  })\n  .then(() => {\n    println(`Origination completed.`);\n  })\n  .catch((error) => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")))}p.isMDXComponent=!0}}]);