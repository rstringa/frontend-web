import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_CYjFnRcU.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Section1, b as $$Section2, c as $$Section3, d as $$Footer } from '../chunks/Footer_CVC3uMmu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const isES = url.pathname.includes("/es") ? true : false;
  const language = isES ? "es" : "en";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section1", $$Section1, { "language": language })} ${renderComponent($$result2, "Section2", $$Section2, { "language": language })} ${renderComponent($$result2, "Section3", $$Section3, { "language": language })} ${renderComponent($$result2, "Footer", $$Footer, { "language": language })} ` })}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/pages/es/index.astro", void 0);

const $$file = "E:/wamp/www/robertostringa/2025/web/frontend-web/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
