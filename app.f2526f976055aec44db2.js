(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[2143],{40945:(e,t,i)=>{"use strict";var n=i(85893),r=(i(29232),i(76487),i(73935)),s=i(67294),o=i(29163),a=i(39711),c=i(75703),d=i(47810),l=i(93197),u=i(19760);const m=()=>{const[e]=(0,l.Z)(),t=(0,u.Z)("(prefers-color-scheme: dark)");return"dark"===e||"auto"===e&&t},v={isDarkMode:!1,border:"#aaa solid 1px"},h={isDarkMode:!0,border:"#222 solid 1px"},f=o.vJ`
  body {
    font-family: Tahoma, Arial, sans-serif;
    color: ${e=>e.theme.isDarkMode?"white":""};
    background-color: ${e=>e.theme.isDarkMode?"#272a33":""};
  }
`,x=o.ZP.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${1e8};
`,g=o.F4`
  from {
    opacity: 0;
  }
  to {}
`,w=(0,o.ZP)(x)`
  background-color: ${e=>e.theme.isDarkMode?"#222":"white"};
  opacity: 0.75;

  ${e=>e.animate&&o.iv`
    animation: ${g} 0.25s ease-out;
  `}
`,j=(0,o.ZP)(x)`
  display: flex;
  justify-content: center;
  align-items: center;
`,p=(0,s.memo)((({noAnimation:e,children:t})=>(0,n.jsxs)("div",{children:[(0,n.jsx)(w,{animate:!e},void 0),(0,n.jsx)(j,{children:t},void 0)]},void 0))),b=o.ZP.div`
  font-size: 5vw;
  color: ${e=>e.theme.isDarkMode?"":"#808080"};
  user-select: none;

  @media (max-width: 999px) {
    font-size: 8vw;
  }
`,k=(0,s.memo)((({noAnimation:e,children:t})=>(0,n.jsx)(p,Object.assign({noAnimation:e},{children:(0,n.jsx)(b,{children:t},void 0)}),void 0)));var Z=i(89311);const y=(0,s.memo)((()=>{const[e]=(0,d.Z)(),t=(0,s.useCallback)((t=>(0,n.jsx)(k,Object.assign({},t,{noAnimation:e.initial}),void 0)),[e.initial]),{error:i,waiting:r}=e;return i?(0,n.jsx)(t,{children:i},void 0):r?(0,n.jsxs)(t,{children:["wait",(0,n.jsx)(Z.Z,{initialNum:3,maxNum:3,interval:1e3},void 0)]},void 0):null})),S=(0,s.lazy)(c(Promise.all([i.e(4593),i.e(7770)]).then(i.bind(i,7666)))),z=(0,s.lazy)(c(Promise.all([i.e(4593),i.e(6451)]).then(i.bind(i,63478)))),P=o.ZP.div`
  & * {
    box-sizing: border-box;
  }
`,E=()=>{const[e,t]=(0,d.Z)(),i=m();return(0,s.useEffect)((()=>{e.initial&&!e.waiting&&t({initial:!1})}),[e.waiting]),(0,n.jsxs)(o.f6,Object.assign({theme:i?h:v},{children:[(0,n.jsx)(f,{},void 0),(0,n.jsxs)(P,{children:[(0,n.jsx)(y,{},void 0),(0,n.jsx)(s.Suspense,Object.assign({fallback:!1},{children:(0,n.jsx)(a.UT,{children:(0,n.jsx)(S,{},void 0)},void 0)}),void 0),(0,n.jsx)(s.Suspense,Object.assign({fallback:!1},{children:(0,n.jsx)(z,{},void 0)}),void 0)]},void 0)]}),void 0)};r.render((0,n.jsx)(E,{},void 0),document.getElementById("app"))},47810:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(67294),r=i(71174);const s=(0,r.Z)({initial:!0,waiting:!0,error:null}),o=()=>{const[e,t]=s();var i;return[e,(0,n.useCallback)((i=t,(0,n.useCallback)((e=>i((t=>({...t,...e instanceof Function?e(t):e})))),[i])),[t])]}},93197:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(6557),r=i(84719);const s=["light","dark","auto"],o=(0,r.Z)("store:theme","light",{parse:n,serialize:n,validate:e=>s.includes(e)})},89311:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var n=i(85893),r=i(67294);const s=i(29163).ZP.span`
  opacity: 0;
`,o=(0,r.memo)((({initialNum:e,maxNum:t,interval:i})=>{const[o,a]=(0,r.useState)(e);return(0,r.useEffect)((()=>{let e;const n=()=>{e=setTimeout((()=>{a((e=>(e+1)%(t+1))),n()}),i)};return n(),()=>{clearTimeout(e)}}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:".".repeat(o)},void 0),(0,n.jsx)(s,{children:".".repeat(t-o)},void 0)]},void 0)}))},72660:(e,t,i)=>{"use strict";i.d(t,{vU:()=>s,G6:()=>o});var n=i(51206);const r=i.n(n)().getParser(window.navigator.userAgent),s=(r.getPlatformType(),"Firefox"===r.getBrowserName()),o="Safari"===r.getBrowserName()},19760:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(67294),r=i(72660);const s=e=>{const t=(0,n.useMemo)((()=>window.matchMedia(e)),[e]);r.G6&&(t.addEventListener=(e,i)=>t.addListener(i),t.removeEventListener=(e,i)=>t.removeListener(i));const[i,s]=(0,n.useState)(t.matches);return(0,n.useEffect)((()=>{const e=e=>{s(e.matches)};return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}),[t]),i}},71174:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(67294),r=i(97019);const s=e=>{let t=e instanceof Function?e():e;const i=[];return()=>{const e=(0,n.useState)(t)[1];(0,n.useEffect)((()=>(i.push(e),()=>{r(i,e)})),[]);const s=(0,n.useCallback)((e=>{t=e instanceof Function?e(t):e;for(const e of i)e(t)}),[t,i]);return[t,s]}}},84719:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(67294),r=i(97527),s=i(71174);const o={parse:e=>JSON.parse(e),serialize:e=>JSON.stringify(e),validate:r},a=(e,t,i)=>{const r={...o,...i},a=(0,s.Z)((()=>{try{const t=window.localStorage.getItem(e);if(t){const e=r.parse(t);if(r.validate(e))return e}}catch(e){console.error(e)}try{window.localStorage.setItem(e,r.serialize(t))}catch(e){console.error(e)}return t}));return()=>{const[i,s]=a(),o=(0,n.useCallback)((t=>{try{const n=t instanceof Function?t(i):t;s(n),window.localStorage.setItem(e,r.serialize(n))}catch(e){console.error(e)}}),[s]),c=(0,n.useCallback)((()=>{s(t);try{window.localStorage.removeItem(e)}catch(e){console.error(e)}}),[s]);return[i,o,c]}}}},e=>{"use strict";e.O(0,[5514,4736],(()=>{return t=40945,e(e.s=t);var t}));e.O()}]);