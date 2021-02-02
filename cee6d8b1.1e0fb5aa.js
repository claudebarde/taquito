(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(s,".").concat(u)]||b[u]||h[u]||r;return a?o.a.createElement(m,i(i({ref:t},c),{},{components:a})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(107)),s={title:"The MichelsonMap class",id:"michelsonmap",author:"Claude Barde"},i={unversionedId:"michelsonmap",id:"michelsonmap",isDocsHomePage:!1,title:"The MichelsonMap class",description:"One of the most attractive features of smart contracts is the possibility to store a substantial amount of data into them that can then be used in the contract code. Although Michelson provides different structures to store data, the object of this article is going to be its maps. Maps are hash tables that contain key/value pairs, which means that when you want to find a value in a map, you search for its key. This allows you to store complex data that can be referenced to with a single word or number or even more complex data like a pair!",source:"@site/../docs/michelsonmap.md",slug:"/michelsonmap",permalink:"/docs/michelsonmap",version:"current",sidebar:"docs",previous:{title:"Tutorial Links",permalink:"/docs/tutorial_links"},next:{title:"TZIP-16 Contract Metadata and Views",permalink:"/docs/metadata-tzip16"}},l=[{value:"Loading the smart contract storage",id:"loading-the-smart-contract-storage",children:[]},{value:"Creating a <code>MichelsonMap</code> instance",id:"creating-a-michelsonmap-instance",children:[]},{value:"The general properties and methods: <code>isMichelsonMap</code>, <code>size</code>, <code>has</code> and <code>get</code>",id:"the-general-properties-and-methods-ismichelsonmap-size-has-and-get",children:[]},{value:"The key/value methods",id:"the-keyvalue-methods",children:[]},{value:"The update methods",id:"the-update-methods",children:[]},{value:"To go further",id:"to-go-further",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"One of the most attractive features of smart contracts is the possibility to store a substantial amount of data into them that can then be used in the contract code. Although Michelson provides different structures to store data, the object of this article is going to be its maps. Maps are hash tables that contain key/value pairs, which means that when you want to find a value in a map, you search for its key. This allows you to store complex data that can be referenced to with a single word or number or even more complex data like a pair!"),Object(r.b)("p",null,"Unlike big maps, all the values in a map are deserialized, which allows developers to have access to all of them at once. While maps become more expensive to use when the number of key/value pairs increases, they are well-suited for smaller databases because of the extra features Michelson (like mapping or folding) and Taquito offer on maps."),Object(r.b)("p",null,"Taquito reads maps in the storage of smart contracts and translates them into an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://tezostaquito.io/typedoc/classes/_taquito_michelson_encoder.michelsonmap-1.html"}),"instance of the ",Object(r.b)("inlineCode",{parentName:"a"},"MichelsonMap")," class"),". The class and its instances expose different features that give developers a lot of flexibility to use Michelson maps in their dapps. These features can be grouped into four groups:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"The instantiation"),": there are three different ways of creating a new ",Object(r.b)("inlineCode",{parentName:"li"},"MichelsonMap")," in Taquito"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"The general methods"),": they give you information about the map, for example, its size or the elements it contains"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"The key/value methods"),": they allow you to manipulate the keys and values in the map"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"The update methods"),": they transform the map itself, for example by deleting elements or clearing out the map completely.")),Object(r.b)("p",null,"This tutorial is based on a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://better-call.dev/delphinet/KT1FPjRutHDkdrLfLE6dRZw4sjtEJLQkgnxK/storage"}),"simple smart contract deployed on Delphinet")," with a map that contains addresses as keys and tez as values. We will use all the methods available in Taquito's ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," to check the map, extract values and modify them!"),Object(r.b)("p",null,"If you want to see all these functions in action, you can have a look at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://repl.it/@claudebarde/TaquitoMichelsonMap#index.ts"}),"this Replit repo"),' and click on the "Run" button.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: as Taquito is written in TypeScript, we will also use TypeScript to interact with the contract storage.")),Object(r.b)("h2",{id:"loading-the-smart-contract-storage"},"Loading the smart contract storage"),Object(r.b)("p",null,"This paragraph is a little reminder of how to use Taquito to fetch the storage of a smart contract:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { TezosToolkit, MichelsonMap } from '@taquito/taquito';\nimport { BigNumber } from 'bignumber.js';\n\nconst contractAddress: string = 'KT1FPjRutHDkdrLfLE6dRZw4sjtEJLQkgnxK';\n\nconst Tezos = new TezosToolkit('https://delphinet-tezos.giganode.io');\n\nconst contract = await Tezos.contract.at(contractAddress);\nconst storage: MichelsonMap<string, BigNumber> = await contract.storage();\n")),Object(r.b)("p",null,"The setup code is pretty straightforward:",Object(r.b)("br",{parentName:"p"}),"\n","1- We import ",Object(r.b)("inlineCode",{parentName:"p"},"TezosToolkit")," and ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," from the ",Object(r.b)("inlineCode",{parentName:"p"},"@taquito/taquito")," package. We also import ",Object(r.b)("inlineCode",{parentName:"p"},"BigNumber")," from ",Object(r.b)("inlineCode",{parentName:"p"},"bignumber.js")," (the library is installed by Taquito) as TypeScript will need it for this particular example.",Object(r.b)("br",{parentName:"p"}),"\n","2- We instantiate the ",Object(r.b)("inlineCode",{parentName:"p"},"TezosToolkit")," object with the RPC address.",Object(r.b)("br",{parentName:"p"}),"\n","3- We fetch the contract using ",Object(r.b)("inlineCode",{parentName:"p"},"await Tezos.contract.at(contractAddress)"),".",Object(r.b)("br",{parentName:"p"}),"\n","4- We extract the storage from the contract using the ",Object(r.b)("inlineCode",{parentName:"p"},"storage")," method on the ",Object(r.b)("inlineCode",{parentName:"p"},"ContractAbstraction")," object that was created one line above. We also type the ",Object(r.b)("inlineCode",{parentName:"p"},"storage")," variable with the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," type which requires 2 type arguments: the type for the key and the type for the value (the ",Object(r.b)("inlineCode",{parentName:"p"},"address")," is basically a string and the ",Object(r.b)("inlineCode",{parentName:"p"},"tez")," will be converted to a BigNumber by Taquito)."),Object(r.b)("h2",{id:"creating-a-michelsonmap-instance"},"Creating a ",Object(r.b)("inlineCode",{parentName:"h2"},"MichelsonMap")," instance"),Object(r.b)("p",null,"Taquito provides three different ways of creating a new Michelson map: two of them can be used to create an empty map and the third one is used to create a map with default values."),Object(r.b)("p",null,"The most simple way is to create the instance with no argument:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const newEmptyMapWithoutArg = new MichelsonMap();\n")),Object(r.b)("p",null,"If you prefer, you can also pass an argument to the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," constructor to indicate the type you want for the keys and the values:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// this code creates the same map as in the storage of the contract\n\nconst newEmptyMapWithArg = new MichelsonMap({\n  prim: 'map',\n  args: [{ prim: 'string' }, { prim: 'mutez' }],\n});\n")),Object(r.b)("p",null,"Finally, you can also pass some values you want to create the instance with and let Taquito figure out the types using the ",Object(r.b)("inlineCode",{parentName:"p"},"fromLiteral")," static method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const newMapfromLiteral = MichelsonMap.fromLiteral({\n  tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb: new BigNumber(123),\n});\n")),Object(r.b)("h2",{id:"the-general-properties-and-methods-ismichelsonmap-size-has-and-get"},"The general properties and methods: ",Object(r.b)("inlineCode",{parentName:"h2"},"isMichelsonMap"),", ",Object(r.b)("inlineCode",{parentName:"h2"},"size"),", ",Object(r.b)("inlineCode",{parentName:"h2"},"has")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"get")),Object(r.b)("p",null,"The first thing you may want to check after fetching the data from a contract storage is if the part of the storage that you expect to be a map is indeed a map. This can be achieved by using the ",Object(r.b)("inlineCode",{parentName:"p"},"isMichelsonMap")," static method on the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," class:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const isMap: boolean = MichelsonMap.isMichelsonMap(storage); // true or false\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: this is a static method so you can use it without creating a new instance of ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap"),".")),Object(r.b)("p",null,"Once you are sure you are dealing with a map, you can check how many key/value pairs it holds with the ",Object(r.b)("inlineCode",{parentName:"p"},"size")," property:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const size: number = storage.size; // number of elements in the map\n")),Object(r.b)("p",null,"Sometimes, you don't want to do anything with the values in a map but you want to verify whether a key appears in the map, you can then use the ",Object(r.b)("inlineCode",{parentName:"p"},"has")," method and pass it the key you are looking for:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const key: string = 'tz1MnmtP4uAcgMpeZN6JtyziXeFqqwQG6yn6';\nconst existsInMap: boolean = storage.has(key); // true or false\n")),Object(r.b)("p",null,"After that, you can fetch the value associated with the key you are looking for with the ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const key: string = 'tz1MnmtP4uAcgMpeZN6JtyziXeFqqwQG6yn6';\nconst valueInTez: BigNumber = storage.get(key); // value as a big number\nconst value: number = valueInTez.toNumber(); // returns 789000000\n")),Object(r.b)("h2",{id:"the-keyvalue-methods"},"The key/value methods"),Object(r.b)("p",null,"One of the main advantages of maps over big maps is that the key/value pairs are readily available in your dapp without any extra step. If you are looking for a simple solution to loop over all the pairs and get the key and the value, the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," instance exposes a ",Object(r.b)("inlineCode",{parentName:"p"},"forEach")," method that allows you to get these values:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const foreachPairs: { address: string; amount: number }[] = [];\nstorage.forEach((val: BigNumber, key: string) => {\n  foreachPairs.push({ address: key, amount: val.toNumber() / 10 ** 6 });\n});\nconsole.log(foreachPairs);\n")),Object(r.b)("p",null,"The code above will output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"[\n  { address: 'tz1MnmtP4uAcgMpeZN6JtyziXeFqqwQG6yn6', amount: 789 },\n  { address: 'tz1R2oNqANNy2vZhnZBJc8iMEqW79t85Fv7L', amount: 912 },\n  { address: 'tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb', amount: 123 },\n  { address: 'tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6', amount: 456 },\n];\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," instance exposes another method that will yield the same result, albeit in a different way. The ",Object(r.b)("inlineCode",{parentName:"p"},"entries")," method is a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators"}),"generator")," function that you can use if you wish to. This is how it works:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const entriesPairs: { address: string; amount: number }[] = [];\nconst entries = storage.entries();\nfor (let entry of entries) {\n  entriesPairs.push({ address: entry[0], amount: entry[1].toNumber() / 10 ** 6 });\n}\nconsole.log('entries => ' + JSON.stringify(entriesPairs) + '\\n');\n")),Object(r.b)("p",null,"This code will yield the exact same result as the one above. A generator may be preferable according to your use case."),Object(r.b)("p",null,"The same idea is available for keys and values, the ",Object(r.b)("inlineCode",{parentName:"p"},"keys")," and ",Object(r.b)("inlineCode",{parentName:"p"},"values")," methods are generators that will allow you to loop over the keys or the values of the map:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const mapKeys: string[] = [];\nconst keys = storage.keys();\nfor (let key of keys) {\n  mapKeys.push(key);\n}\nconsole.log('keys => ' + mapKeys + '\\n');\n")),Object(r.b)("p",null,"This example will output the following array containing all the keys of the map:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"[\n  'tz1MnmtP4uAcgMpeZN6JtyziXeFqqwQG6yn6',\n  'tz1R2oNqANNy2vZhnZBJc8iMEqW79t85Fv7L',\n  'tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb',\n  'tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6',\n];\n")),Object(r.b)("p",null,"Similarly, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"values")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"keys")," to output some or all the values in the map:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"const mapValues: number[] = [];\nconst values = storage.values();\nfor (let value of values) {\n  mapValues.push(value.toNumber());\n}\nconsole.log('values => ' + mapValues + '\\n');\n")),Object(r.b)("p",null,"This will output all the values of the map inside an array:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"[789000000, 912000000, 123000000, 456000000];\n")),Object(r.b)("h2",{id:"the-update-methods"},"The update methods"),Object(r.b)("p",null,"Although reading and organizing the keys or the values fetched from a Michelson map is a common use case, you may also want to modify a map, for example, before originating a new contract. Taquito also thought about it and provides different methods that will help you add or remove key/value pairs from a map."),Object(r.b)("p",null,"First, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"set")," method to add a new value to an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"console.log(`previous size => ${storage.size} elements`); // 4 elements\n\nstorage.set('tz1TfRXkAxbQ2BFqKV2dF4kE17yZ5BmJqSAP', new BigNumber(345));\n\nconsole.log(`new size => ${storage.size} elements \\n`); // 5 elements\n")),Object(r.b)("p",null,"This adds a new entry in the map with the address being the first argument and the BigNumber being the value."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: it is important to use ",Object(r.b)("inlineCode",{parentName:"p"},"new BigNumber(345)")," for the value and not simply ",Object(r.b)("inlineCode",{parentName:"p"},"345")," as TypeScript will throw a type error because earlier, we set the type argument of the ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," to ",Object(r.b)("inlineCode",{parentName:"p"},"BigNumber"),".")),Object(r.b)("p",null,"You can also delete one of the entries of the map with the ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"console.log(`delete: previous size => ${storage.size} elements`); // 5 elements\n\nstorage.delete('tz1MnmtP4uAcgMpeZN6JtyziXeFqqwQG6yn6');\n\nconsole.log(`delete: new size => ${storage.size} elements \\n`); // 4 elements\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: deleting a key that doesn't exist doesn't throw an error, it will just have no effect on the map.")),Object(r.b)("p",null,"To finish, you can also delete all the entries in a Michelson map if you want with the ",Object(r.b)("inlineCode",{parentName:"p"},"clear")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"storage.clear();\nconsole.log(`clear: new size => ${storage.size} element`); // 0 element\n")),Object(r.b)("h2",{id:"to-go-further"},"To go further"),Object(r.b)("p",null,"If you want to know more about ",Object(r.b)("inlineCode",{parentName:"p"},"MichelsonMap")," and some advanced usages (for example, how to use pairs as the map keys), you can learn in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://tezostaquito.io/docs/maps_bigmaps"}),"advanced tutorial")," available in the Taquito documentation."))}p.isMDXComponent=!0}}]);