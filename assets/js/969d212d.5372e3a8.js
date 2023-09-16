"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},s="Why yet another release tool",i={unversionedId:"why",id:"why",title:"Why yet another release tool",description:"New Rust apps and rewrites are mushrooming every day.",source:"@site/docs/why.md",sourceDirName:".",slug:"/why",permalink:"/docs/why",draft:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/why.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},l={},p=[{value:"Differences with release-please",id:"differences-with-release-please",level:2},{value:"No configuration needed",id:"no-configuration-needed",level:3},{value:"Versions retrieved from the cargo registry",id:"versions-retrieved-from-the-cargo-registry",level:3},{value:"No multiple programming languages support",id:"no-multiple-programming-languages-support",level:3},{value:"Conventional commits aren&#39;t required",id:"conventional-commits-arent-required",level:3},{value:"Differences with other Rust release tools",id:"differences-with-other-rust-release-tools",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"why-yet-another-release-tool"},"Why yet another release tool"),(0,n.kt)("p",null,"New Rust apps and rewrites are mushrooming every day.\nChoosing which tools to add to your developer toolbox is becoming harder and harder."),(0,n.kt)("p",null,"I feel obliged to explain why I created this project and how it compares with\nsimilar tools."),(0,n.kt)("h2",{id:"differences-with-release-please"},"Differences with release-please"),(0,n.kt)("p",null,"Like release-plz, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/googleapis/release-please"},"release-please"),"\nis an open-source project that manages releases via pull requests.\nHowever, there are some differences."),(0,n.kt)("h3",{id:"no-configuration-needed"},"No configuration needed"),(0,n.kt)("p",null,"Release-please requires two configuration files in cargo workspaces: ",(0,n.kt)("inlineCode",{parentName:"p"},".release-please-manifest.json"),"\nand ",(0,n.kt)("inlineCode",{parentName:"p"},"release-please-config.json"),".\nMost of the fields you have to write in these two files are already in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," files."),(0,n.kt)("p",null,"Release-plz obtains all the information it needs from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," files\nand the cargo registry,\nso no configuration files are required."),(0,n.kt)("h3",{id:"versions-retrieved-from-the-cargo-registry"},"Versions retrieved from the cargo registry"),(0,n.kt)("p",null,"Release-please considers a package \"published\" only when the relative git tag exists.\nRelease-please doesn't interact at all with cargo registries.\nHowever, some Rust projects don't create git tags.\nInstead, they just publish the package to crates.io."),(0,n.kt)("p",null,"Release-plz looks at the cargo registry if the relative git tag doesn't exist,\nmaking it compatible with both workflows and with the majority of the Rust projects."),(0,n.kt)("h3",{id:"no-multiple-programming-languages-support"},"No multiple programming languages support"),(0,n.kt)("p",null,"Release-please supports multiple programming languages, while release-plz only\nsupports Rust projects."),(0,n.kt)("h3",{id:"conventional-commits-arent-required"},"Conventional commits aren't required"),(0,n.kt)("p",null,"Release-please requires conventional commits to work.\nFor example, it only generates a release PR if your commit messages\nstart with ",(0,n.kt)("inlineCode",{parentName:"p"},"fix:"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"feat:"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"deps:")," (there are some exceptions based on the language)."),(0,n.kt)("p",null,"Release-plz, instead, generates a release PR for every commit affecting one of your packages,\nregardless of the commit message.\nRelease-plz also generates a release PR if you change the dependencies of your packages\n(either in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," or in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cargo.lock")," files)."),(0,n.kt)("h2",{id:"differences-with-other-rust-release-tools"},"Differences with other Rust release tools"),(0,n.kt)("p",null,"These are other release tools in the Rust ecosystem, but they primarily focus on\nthe CLI use case, while release-plz focuses mainly on CI."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/crate-ci/cargo-release"},"cargo-release"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bumps the version and publishes Rust packages from the CLI."),(0,n.kt)("li",{parentName:"ul"},"It supports automatic releases with ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo release --unpublished")),(0,n.kt)("li",{parentName:"ul"},"It doesn't have first-class support for changelogs.\nSee ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/crate-ci/cargo-release/issues/231"},"this")," issue."),(0,n.kt)("li",{parentName:"ul"},"It supports hooks (release-plz doesn't)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pksunkara/cargo-workspaces"},"cargo-workspaces"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It's a set of commands to manage cargo workspaces and their crates."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"publish")," command releases the packages from the CLI similarly to ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo-release"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Byron/cargo-smart-release"},"cargo-smart-release"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Updates and publishes packages from the CLI."),(0,n.kt)("li",{parentName:"ul"},"It's very similar to release-plz, but it is not meant to be run in CI (see\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MarcoIeni/release-plz/issues/13#issuecomment-1065790846"},"this"),"\ncomment from the author).")))))}m.isMDXComponent=!0}}]);