import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_BWhX8FnF.mjs';
import { manifest } from './manifest_QAVGgI_g.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/resendemailjson.astro.mjs');
const _page2 = () => import('./pages/es.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/resendEmailJson.ts", _page1],
    ["src/pages/es/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8b69a07c-bcb3-46bc-8cb3-88a1089b79c9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
