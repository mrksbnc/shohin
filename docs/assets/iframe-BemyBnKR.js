import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const p="modulepreload",O=function(_,i){return new URL(_,i).href},d={},t=function(i,n,m){let e=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");e=Promise.all(n.map(r=>{if(r=O(r,m),r in d)return;d[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!m)for(let a=o.length-1;a>=0;a--){const u=o[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":p,c||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),c)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,l=R({page:"preview"});P.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const T={"./.storybook/docs/changelog.mdx":async()=>t(()=>import("./changelog-Z3DwaArE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/colors.mdx":async()=>t(()=>import("./colors-seXfkvh8.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/fonts/Assistant.mdx":async()=>t(()=>import("./Assistant-c1Oip1gN.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/fonts/Inter.mdx":async()=>t(()=>import("./Inter-QdxC8QRE.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/get-started.mdx":async()=>t(()=>import("./get-started-oNhAASV1.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/license.mdx":async()=>t(()=>import("./license-jOdNZNNv.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8]),import.meta.url),"./src/components/Avatar/__stories__/BoAvatar.stories.ts":async()=>t(()=>import("./BoAvatar.stories-ED-MCUYc.js"),__vite__mapDeps([14,15,16,17,18]),import.meta.url),"./src/components/Badge/__stories__/BoBadge.stories.ts":async()=>t(()=>import("./BoBadge.stories-KiPY0xus.js"),__vite__mapDeps([19,15,16,20,21,17,22]),import.meta.url),"./src/components/Icon/__stories__/BoIcon.stories.ts":async()=>t(()=>import("./BoIcon.stories-RE0nFyXN.js"),__vite__mapDeps([23,20,15,16,21,17]),import.meta.url),"./src/components/Icon/__stories__/Iconography.mdx":async()=>t(()=>import("./Iconography-ZZaJE1B2.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,15,8]),import.meta.url),"./src/components/Input/__stories__/BoInput.stories.ts":async()=>t(()=>import("./BoInput.stories-hchCg1xS.js"),__vite__mapDeps([25,15,20,16,21,26,27,17,28]),import.meta.url),"./src/components/Loader/__stories__/BoShape.stories.ts":async()=>t(()=>import("./BoShape.stories-EY3oF5Q6.js"),__vite__mapDeps([29,26,15,16,27]),import.meta.url),"./src/components/Loader/__stories__/BoSpinner.stories.ts":async()=>t(()=>import("./BoSpinner.stories-eNk6bFIy.js"),__vite__mapDeps([30,26,15,16,27,17]),import.meta.url)};async function f(_){return T[_]()}const{composeConfigs:I,PreviewWeb:L,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const _=await Promise.all([t(()=>import("./entry-preview-s7v2gNI3.js"),__vite__mapDeps([31,15]),import.meta.url),t(()=>import("./entry-preview-docs-Bs_0xIlH.js"),__vite__mapDeps([32,6,4,15]),import.meta.url),t(()=>import("./preview-yHwwxJbV.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([33,5]),import.meta.url),t(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([34,7]),import.meta.url),t(()=>import("./preview-wm7zCcxo.js"),__vite__mapDeps([35,7]),import.meta.url),t(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([36,7]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([37,4]),import.meta.url),t(()=>import("./preview-bicOdALM.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-Hvl6qd-2.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-gSFf5lSR.js"),__vite__mapDeps([38,3,39]),import.meta.url)]);return I(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:f,getProjectAnnotations:y});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./changelog-Z3DwaArE.js","./jsx-runtime-8WJPaYAp.js","./index--B37fK0Q.js","./chunk-ZGA76URP-Uk8hDnuP.js","./_commonjsHelpers-5-cIlDoe.js","./index-ogXoivrg.js","./index-OpicemMp.js","./index-PPLHz8o0.js","./index-RNomFGQr.js","./colors-seXfkvh8.js","./Assistant-c1Oip1gN.js","./Inter-QdxC8QRE.js","./get-started-oNhAASV1.js","./license-jOdNZNNv.js","./BoAvatar.stories-ED-MCUYc.js","./vue.esm-bundler-ikl-1DwA.js","./_plugin-vue_export-helper-x3n3nnut.js","./storybook-j7faMZma.js","./BoAvatar-Kr75XyNu.css","./BoBadge.stories-KiPY0xus.js","./BoIcon-U5t9lCoz.js","./BoIcon-PPaDzfrv.css","./BoBadge-a7OSbw0h.css","./BoIcon.stories-RE0nFyXN.js","./Iconography-ZZaJE1B2.js","./BoInput.stories-hchCg1xS.js","./BoSpinner-sMiPDEWH.js","./BoSpinner-xrc5gRt_.css","./BoInput-JWp5wWcG.css","./BoShape.stories-EY3oF5Q6.js","./BoSpinner.stories-eNk6bFIy.js","./entry-preview-s7v2gNI3.js","./entry-preview-docs-Bs_0xIlH.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-wm7zCcxo.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js","./preview-gSFf5lSR.js","./preview-rV-9ac-S.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}