!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var r=n("h6c0i"),a={formEl:document.querySelector(".form"),delayEl:document.querySelector('.form [name="delay"]'),stepEl:document.querySelector('.form [name="step"]'),amountEl:document.querySelector('.form [name="amount"]'),submitEl:document.querySelector(".form .submit"),randomEl:document.querySelector(".form .random")};function l(e){e.then((function(e){var o=e.position,t=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(o+1," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(o+1," in ").concat(t,"ms"))}))}function u(e,o){return new Promise((function(t,n){var r=Math.random()>.3;setTimeout((function(){r&&t({position:e,delay:o}),n({position:e,delay:o})}),o)}))}a.formEl.addEventListener("submit",(function(e){if(e.preventDefault(),!e.currentTarget!==a.formEl){a.submitEl.disabled=!0;var o=function(e,o,t){for(var n=[],r=0;r<t;r+=1){var a=e+o*r;n.push(u(r,a))}return n}(a.delayEl.valueAsNumber,a.stepEl.valueAsNumber,a.amountEl.valueAsNumber);o.map(l),Promise.allSettled(o).then((function(){a.submitEl.disabled=!1}))}})),a.randomEl.addEventListener("click",(function(){Math.random();a.delayEl.value=Math.floor(1e3*Math.random()+500),a.stepEl.value=Math.floor(500*Math.random()+200),a.amountEl.value=Math.floor(10*Math.random()+2)}))}();
//# sourceMappingURL=03-promises.90f9769f.js.map
