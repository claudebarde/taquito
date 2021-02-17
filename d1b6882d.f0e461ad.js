(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(89)),c={title:"Ledger",author:"Roxane Letourneau"},b={unversionedId:"ledger_integration_test",id:"ledger_integration_test",isDocsHomePage:!1,title:"Ledger",description:"The integration tests for the Ledger Signer are disabled by default because they require having a Ledger Device connected to your computer.",source:"@site/../docs/ledger_integration_test.md",permalink:"/docs/ledger_integration_test",sidebar:"docs",previous:{title:"Drain an account",permalink:"/docs/drain_account"}},i=[{value:"Steps to run the tests",id:"steps-to-run-the-tests",children:[]}],p={rightToc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The integration tests for the Ledger Signer are disabled by default because they require having a Ledger Device connected to your computer."),Object(o.b)("h2",{id:"steps-to-run-the-tests"},"Steps to run the tests"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set up your Ledger device with this mnemonic phrase:",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"1-episode",Object(o.b)("br",{parentName:"strong"}),"2-capital",Object(o.b)("br",{parentName:"strong"}),"3-clerk",Object(o.b)("br",{parentName:"strong"}),"4-vanish",Object(o.b)("br",{parentName:"strong"}),"5-goat",Object(o.b)("br",{parentName:"strong"}),"6-result",Object(o.b)("br",{parentName:"strong"}),"7-scan",Object(o.b)("br",{parentName:"strong"}),"8-phrase",Object(o.b)("br",{parentName:"strong"}),"9-air",Object(o.b)("br",{parentName:"strong"}),"10-float",Object(o.b)("br",{parentName:"strong"}),"11-shoot",Object(o.b)("br",{parentName:"strong"}),"12-nasty",Object(o.b)("br",{parentName:"strong"}),"13-wreck",Object(o.b)("br",{parentName:"strong"}),"14-safe",Object(o.b)("br",{parentName:"strong"}),"15-parade",Object(o.b)("br",{parentName:"strong"}),"16-south",Object(o.b)("br",{parentName:"strong"}),"17-outside",Object(o.b)("br",{parentName:"strong"}),"18-urban",Object(o.b)("br",{parentName:"strong"}),"19-bounce",Object(o.b)("br",{parentName:"strong"}),"20-art",Object(o.b)("br",{parentName:"strong"}),"21-boil",Object(o.b)("br",{parentName:"strong"}),"22-mix",Object(o.b)("br",{parentName:"strong"}),"23-front",Object(o.b)("br",{parentName:"strong"}),"24-security"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open ",Object(o.b)("inlineCode",{parentName:"p"},"Tezos Wallet app")," on your Ledger device.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Remove ",Object(o.b)("inlineCode",{parentName:"p"},'"testPathIgnorePatterns": ["./ledger-signer.spec.ts"]')," from package.json.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you only want to run Ledger integration tests, this command can be used : ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test ledger-signer.spec.ts"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"As the tests include operation like transfer of token and contract origination, the tests will take some time to complete. You will be prompt on the Ledger to confirm the operations."))))}s.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,g=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return r?a.a.createElement(g,b(b({ref:t},p),{},{components:r})):a.a.createElement(g,b({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);