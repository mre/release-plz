"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="release",i={unversionedId:"usage/release",id:"usage/release",title:"release",description:"The release-plz release command releases all the unpublished packages.",source:"@site/docs/usage/release.md",sourceDirName:"usage",slug:"/usage/release",permalink:"/docs/usage/release",draft:!1,editUrl:"https://github.com/MarcoIeni/release-plz/tree/main/website/docs/usage/release.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"release-pr",permalink:"/docs/usage/release-pr"},next:{title:"Shell completion",permalink:"/docs/usage/shell-completion"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release"},"release"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz release")," command releases all the unpublished packages."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, let's say you have a workspace with two packages: ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg-a"),"\n(version 0.3.1) and ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg-b")," (version 0.2.2).\nThe crates.io registry contains ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg-a")," version 0.3.1, but it doesn't contain\n",(0,a.kt)("inlineCode",{parentName:"p"},"pkg-b")," version 0.2.2 because you didn't publish this version yet.\nIn this case, release-plz would release ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg-b"),".")),(0,a.kt)("p",null,"For every release, release-plz:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creates a git tag named ",(0,a.kt)("inlineCode",{parentName:"li"},"<package_name>-v<version>")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"tokio-v1.8.1"),")."),(0,a.kt)("li",{parentName:"ul"},"Publishes the package to the cargo registry by running ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo publish"),"."),(0,a.kt)("li",{parentName:"ul"},"Publishes a GitHub/Gitea release based on the git tag.")),(0,a.kt)("p",null,"In the tag name, ",(0,a.kt)("inlineCode",{parentName:"p"},"<package_name>-")," is omitted if there's only one\npackage to publish (i.e. with ",(0,a.kt)("inlineCode",{parentName:"p"},"publish != false")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file)."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz release")," doesn't edit your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," files and doesn't\npush new commits. It releases the packages as they are in your repository.\nFor this reason, you typically use the ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz release")," command in the main branch\nafter you run ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz update"),"\nor you merge a pull request opened with ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz release-pr"),"."),(0,a.kt)("p",null,"If all packages are already published, the ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz release")," command does nothing."),(0,a.kt)("p",null,"To learn more, run ",(0,a.kt)("inlineCode",{parentName:"p"},"release-plz release --help"),"."))}m.isMDXComponent=!0}}]);