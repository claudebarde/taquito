(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},136:function(e,t,n){"use strict";var a=n(0),r=n(137);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},137:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(136),i=n(117),c=n(56),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,u=e.groupId,m=e.className,b=Object(o.a)(),h=b.tabGroupChoices,f=b.setTabGroupChoices,T=Object(a.useState)(c),g=T[0],O=T[1],w=a.Children.toArray(e.children);if(null!=u){var j=h[u];null!=j&&j!==g&&d.some((function(e){return e.value===j}))&&O(j)}var v=function(e){O(e),null!=u&&f(u,e)},z=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return z.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(z,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(a.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(110)),i=n(160),c=n(161),s={title:"TZIP-16 Contract Metadata and Views",author:"Roxane Letourneau"},l={unversionedId:"metadata-tzip16",id:"metadata-tzip16",isDocsHomePage:!1,title:"TZIP-16 Contract Metadata and Views",description:"The @taquito/tzip16 package allows retrieving metadata associated with a smart contract. These metadata can be stored on-chain (tezos-storage) or off-chain (HTTP(S) or IPFS). The package also provides a way to execute the MichelsonStorageView found in the metadata. More information about the TZIP-16 standard can be found here.",source:"@site/../docs/metadata-tzip16.md",slug:"/metadata-tzip16",permalink:"/docs/metadata-tzip16",version:"current",sidebar:"docs",previous:{title:"The MichelsonMap class",permalink:"/docs/michelsonmap"},next:{title:"TZIP-12 Token Metadata",permalink:"/docs/tzip12"}},p=[{value:"How to use the tzip16 package",id:"how-to-use-the-tzip16-package",children:[]},{value:"Get the metadata",id:"get-the-metadata",children:[]},{value:"Execute off-chain views",id:"execute-off-chain-views",children:[]},{value:"Execute a custom view",id:"execute-a-custom-view",children:[]}],d={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@taquito/tzip16")," package allows retrieving metadata associated with a smart contract. These metadata can be stored on-chain (tezos-storage) or off-chain (HTTP(S) or IPFS). The package also provides a way to execute the ",Object(o.b)("inlineCode",{parentName:"p"},"MichelsonStorageView")," found in the metadata. More information about the TZIP-16 standard can be found ",Object(o.b)("a",{parentName:"p",href:"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-16/tzip-16.md#introduction"},"here"),"."),Object(o.b)("h2",{id:"how-to-use-the-tzip16-package"},"How to use the tzip16 package"),Object(o.b)("p",null,"The package can be used as an extension to the well known Taquito contract abstraction. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"We first need to create an instance of ",Object(o.b)("inlineCode",{parentName:"strong"},"Tzip16Module")," and add it as an extension to our ",Object(o.b)("inlineCode",{parentName:"strong"},"TezosToolkit")))),Object(o.b)(i.a,{defaultValue:"defaultMetadataProvider",values:[{label:"Using the default Metadata Provider",value:"defaultMetadataProvider"},{label:"Using a custom Metadata Provider",value:"customMetadataProvider"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"defaultMetadataProvider",mdxType:"TabItem"},Object(o.b)("p",null,"The constructor of the ",Object(o.b)("inlineCode",{parentName:"p"},"Tzip16Module")," takes an optional ",Object(o.b)("inlineCode",{parentName:"p"},"MetadataProvider")," as a parameter. When none is passed, the default ",Object(o.b)("inlineCode",{parentName:"p"},"MetadataProvider")," of Taquito is instantiated and the default handlers (",Object(o.b)("inlineCode",{parentName:"p"},"HttpHandler"),", ",Object(o.b)("inlineCode",{parentName:"p"},"IpfsHandler"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"TezosStorageHandler"),") are used."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { TezosToolkit } from '@taquito/taquito';\nimport { Tzip16Module } from '@taquito/tzip16';\n\nconst Tezos = new TezosToolkit('rpcUrl');\nTezos.addExtension(new Tzip16Module());\n\n"))),Object(o.b)(c.a,{value:"customMetadataProvider",mdxType:"TabItem"},Object(o.b)("p",null,"In some cases, we may want to use a customized metadata provider. The constructor of the ",Object(o.b)("inlineCode",{parentName:"p"},"Tzip16Module")," class takes an optional metadata provider as a parameter. This allows to inject a custom metadata provider with custom protocol handlers if desired. For example, if we want to use a different IPFS gateway then the default one, which is ",Object(o.b)("inlineCode",{parentName:"p"},"ipfs.io"),", or if we want to use a different HTTP handler to support authentication or custom headers. Here is an example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Handler, IpfsHttpHandler, TezosStorageHandler, MetadataProvider } from '@taquito/tzip16';\n\nconst Tezos = new TezosToolkit('rpcUrl');\n\n// The constructor of the `MetadataProvider` class takes a `Map<string, Handler>` as a parameter.\nconst customHandler = new Map<string, Handler>([\n  ['ipfs', new IpfsHttpHandler('gateway.ipfs.io')], // Constructor of IpfsHttpHandler takes an optional gateway\n  ['http', 'customHttpHandler'], // Custom HTTP(S) handler\n  ['https', 'customHttpHandler'],\n  ['tezos-storage', new TezosStorageHandler()],\n]);\n\nconst customMetadataProvider = new MetadataProvider(customHandler);\nTezos.addExtension(new Tzip16Module(customMetadataProvider));\n")),Object(o.b)("p",null,"A list of public gateways is accessible ",Object(o.b)("a",{parentName:"p",href:"https://ipfs.github.io/public-gateway-checker/"},"here"),"."))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Use the ",Object(o.b)("inlineCode",{parentName:"strong"},"tzip16")," function to extend a contract abstraction"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const contract = await Tezos.contract.at("contractAddress", tzip16)\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Call the methods of the ",Object(o.b)("inlineCode",{parentName:"strong"},"Tzip16ContractAbstraction")," class"))),Object(o.b)("p",null,"The namespace ",Object(o.b)("inlineCode",{parentName:"p"},"tzip16()")," need to be specified when calling a method of the ",Object(o.b)("inlineCode",{parentName:"p"},"Tzip16ContractAbstraction")," class: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const metadata = await contract.tzip16().getMetadata();\nconst views = await contract.tzip16().metadataViews();\n")),Object(o.b)("p",null,"All other methods of the ",Object(o.b)("inlineCode",{parentName:"p"},"ContractAbstraction")," class can be called as usual on the ",Object(o.b)("inlineCode",{parentName:"p"},"contract")," object. "),Object(o.b)("h2",{id:"get-the-metadata"},"Get the metadata"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"getMetadata")," method returns an object which contains the URI, the metadata in JSON format, an optional SHA256 hash of the metadata and an optional integrity check result."),Object(o.b)("p",null,"A sequence diagram can be found ",Object(o.b)("a",{parentName:"p",href:"tzip16-sequence-diagram#get-the-metadata"},"here"),"."),Object(o.b)("h4",{id:"tezos-storage-example"},"Tezos-storage example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},"// import { TezosToolkit } from '@taquito/taquito';\n// import { Tzip16Module, tzip16 } from \"@taquito/tzip16\";\n// const Tezos = new TezosToolkit('rpc_url');\n\nTezos.addExtension(new Tzip16Module());\n\nconst contractAddress = \"KT1BAQ3nEsLrEeZdkij8KiekaWUVQERNF1Hi\";\n\nTezos.contract.at(contractAddress, tzip16)\n.then(contract => {\n  println(`Fetching the metadata for ${contractAddress}...`);\n  return contract.tzip16().getMetadata();\n})\n.then (metadata => {\n  println(JSON.stringify(metadata, null, 2));\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("h4",{id:"https-examples"},"HTTPS examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},"// import { TezosToolkit } from '@taquito/taquito';\n// import { Tzip16Module, tzip16 } from \"@taquito/tzip16\";\n// const Tezos = new TezosToolkit('rpc_url');\n\nTezos.addExtension(new Tzip16Module());\n\nconst contractAddress = \"KT194AJC8UQPguynGdJfEVynF9wfUghDjHSt\";\n\nTezos.contract.at(contractAddress, tzip16)\n.then(contract => {\n  println(`Fetching the metadata for ${contractAddress}...`);\n  return contract.tzip16().getMetadata();\n})\n.then (metadata => {\n  println(JSON.stringify(metadata, null, 2));\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("p",null,"An example having a SHA256 hash:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},"// import { TezosToolkit } from '@taquito/taquito';\n// import { Tzip16Module, tzip16 } from \"@taquito/tzip16\";\n// const Tezos = new TezosToolkit('rpc_url');\n\nTezos.addExtension(new Tzip16Module());\n\nconst contractAddress = \"KT1PHNmaHvQNjt1LTqdWobJUi2aeDeWUdQUq\";\n\nTezos.contract.at(contractAddress, tzip16)\n.then(contract => {\n  println(`Fetching the metadata for ${contractAddress}...`);\n  return contract.tzip16().getMetadata();\n})\n.then (metadata => {\n  println(JSON.stringify(metadata, null, 2));\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("h4",{id:"ipfs-example"},"IPFS example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},"// import { TezosToolkit } from '@taquito/taquito';\n// import { Tzip16Module, tzip16 } from \"@taquito/tzip16\";\n// const Tezos = new TezosToolkit('rpc_url');\n\nTezos.addExtension(new Tzip16Module());\n\nconst contractAddress = \"KT1BfdzrP3ybxSbQCNZrmdk2Y5AQjRK1KKkz\";\n\nTezos.contract.at(contractAddress, tzip16)\n.then(contract => {\n  println(`Fetching the metadata for ${contractAddress}...`);\n  return contract.tzip16().getMetadata();\n})\n.then (metadata => {\n  println(JSON.stringify(metadata, null, 2));\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("h2",{id:"execute-off-chain-views"},"Execute off-chain views"),Object(o.b)("p",null,"A sequence diagram can be found ",Object(o.b)("a",{parentName:"p",href:"tzip16-sequence-diagram#execute-a-view"},"here"),"."),Object(o.b)("p",null,"In the next example, we will run a view named ",Object(o.b)("inlineCode",{parentName:"p"},"someJson")," that can be found in the metadata of the contract ",Object(o.b)("inlineCode",{parentName:"p"},"KT1S5Q7iN9ybuBuJviDYzXf7Mq94ToETwBJS"),". When we inspect those metadata, we can see that this view takes no parameter, has a returnType of bytes and has the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'"code": \n[\n  {\n    "prim": "DROP",\n    "args": [],\n    "annots": []\n  },\n  {\n    "prim": "PUSH",\n    "args": [\n      {\n        "prim": "bytes",\n        "args": [],\n        "annots": []\n      },\n      {\n        "bytes": "7b2268656c6c6f223a22776f726c64222c226d6f7265223a7b226c6f72656d223a34322c22697073756d223a5b22222c226f6e65222c2232225d7d7d"\n      }\n    ],\n    "annots": []\n  }\n]\n')),Object(o.b)("p",null,"Try to run the view:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},"// import { TezosToolkit } from '@taquito/taquito';\n// import { Tzip16Module, tzip16, bytes2Char } from \"@taquito/tzip16\";\n// const Tezos = new TezosToolkit('rpc_url');\n\nTezos.addExtension(new Tzip16Module());\n\nconst contractAddress = \"KT1S5Q7iN9ybuBuJviDYzXf7Mq94ToETwBJS\";\n\nTezos.contract.at(contractAddress, tzip16)\n.then(contract => {\n  println(`Initialising the views for ${contractAddress}...`);\n  return contract.tzip16().metadataViews();\n})\n.then (views => {\n  println(`The following view names were found in the metadata: ${Object.keys(views)}`);\n  return views.someJson().executeView()\n}).then (result => {\n  println(`Result of the view someJson: ${result}`);\n  println(`Transform result to char: ${bytes2Char(result)}`);\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("p",null,"In the next example, we will run a view named ",Object(o.b)("inlineCode",{parentName:"p"},"multiply-the-nat-in-storage")," that can be found in the metadata of the contract ",Object(o.b)("inlineCode",{parentName:"p"},"KT1BH6iy5DpvYZLjgrzfVh6TUE3nhpa2A4TP"),". When we inspect those metadata, we can see that this view takes a ",Object(o.b)("inlineCode",{parentName:"p"},"nat")," has a parameter, has a returnType of ",Object(o.b)("inlineCode",{parentName:"p"},"nat")," and has the following instructions: ",Object(o.b)("inlineCode",{parentName:"p"},"DUP, CDR, CAR, SWAP, CAR, MUL"),"."),Object(o.b)("p",null,"Try to run the view:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},"// import { TezosToolkit } from '@taquito/taquito';\n// import { Tzip16Module, tzip16 } from \"@taquito/tzip16\";\n// const Tezos = new TezosToolkit('rpc_url');\n\nTezos.addExtension(new Tzip16Module());\n\nconst contractAddress = \"KT1BH6iy5DpvYZLjgrzfVh6TUE3nhpa2A4TP\";\n\nTezos.contract.at(contractAddress, tzip16)\n.then(contract => {\n  return contract.storage()\n.then(storage => {\n  println(`The nat in the storage of the contract is: ${storage[0]}`);\n  println(`Initialising the views for ${contractAddress}...`);\n  return contract.tzip16().metadataViews();\n})})\n.then (views => {\n  println(`The following view names were found in the metadata: ${Object.keys(views)}`);\n  return views['multiply-the-nat-in-storage']().executeView(10)\n}).then (result => {\n  println(`Result of the view 'multiply-the-nat-in-storage': ${result}`);\n})\n.catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n")),Object(o.b)("h2",{id:"execute-a-custom-view"},"Execute a custom view"),Object(o.b)("p",null,"In the next example we execute the view ",Object(o.b)("inlineCode",{parentName:"p"},"multiply-the-nat-in-storage")," in a custom way:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live noInline",live:!0,noInline:!0},'// import { TezosToolkit } from \'@taquito/taquito\';\n// import { MichelsonStorageView } from "@taquito/tzip16";\n// const Tezos = new TezosToolkit(\'rpc_url\');\n\nconst contractAddress = "KT1BH6iy5DpvYZLjgrzfVh6TUE3nhpa2A4TP";\n\nTezos.contract.at(contractAddress)\n.then(contract => {\n  const view = new MichelsonStorageView(\n    \'test\', // view name\n    contract, // contract abstraction\n    Tezos.rpc, // rpc\n    { "prim": "nat" }, // returnType\n    [{ "prim": "DUP" },{ "prim": "CDR" },{ "prim": "CAR" },{ "prim": "SWAP" },{ "prim": "CAR" }, { "prim": "MUL" }], // code of the view\n    { "prim": "nat" } // parameter type\n  )\n              \nview.executeView(2)\n.then(result => {\n  println(`Result of the custom view: ${result}`)\n})}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n')))}u.isMDXComponent=!0}}]);