var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=r);var n=r("iQIUW");const l={formEl:document.querySelector(".form"),delayEl:document.querySelector('.form [name="delay"]'),stepEl:document.querySelector('.form [name="step"]'),amountEl:document.querySelector('.form [name="amount"]'),submitEl:document.querySelector(".form .submit"),randomEl:document.querySelector(".form .random")};function a(e){e.then((({position:e,delay:o})=>n.Notify.success(`✅ Fulfilled promise ${e+1} in ${o}ms`))).catch((({position:e,delay:o})=>n.Notify.failure(`❌ Rejected promise ${e+1} in ${o}ms`)))}function u(e,o){return new Promise(((t,r)=>{const n=Math.random()>.3;setTimeout((()=>{n&&t({position:e,delay:o}),r({position:e,delay:o})}),o)}))}l.formEl.addEventListener("submit",(e=>{if(e.preventDefault(),!e.currentTarget===l.formEl)return;l.submitEl.disabled=!0;const o=function(e,o,t){const r=[];for(let n=0;n<t;n+=1){const t=e+o*n;r.push(u(n,t))}return r}(l.delayEl.valueAsNumber,l.stepEl.valueAsNumber,l.amountEl.valueAsNumber);o.map(a),Promise.allSettled(o).then((()=>{l.submitEl.disabled=!1}))})),l.randomEl.addEventListener("click",(function(){Math.random();l.delayEl.value=Math.floor(1e3*Math.random()+500),l.stepEl.value=Math.floor(500*Math.random()+200),l.amountEl.value=Math.floor(10*Math.random()+2)}));
//# sourceMappingURL=03-promises.ff868d27.js.map
