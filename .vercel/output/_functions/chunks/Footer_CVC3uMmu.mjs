import { c as createComponent, a as createAstro, r as renderComponent, af as renderScript, b as renderTemplate, ag as renderSlot, n as addAttribute, ah as renderHead, m as maybeRenderHead, ai as Fragment } from './astro/server_CYjFnRcU.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$c = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$b = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const url = new URL(Astro2.request.url);
  const isES = url.pathname.includes("/es");
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><meta name="generator"', "><title>Roberto Stringa - Designer / FrontEnd DEV</title>", '<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="preload" href="/fonts/OpenSans-variable.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="stylesheet" href="https://unpkg.com/lenis@1.3.1/dist/lenis.css">', "</head> <body", "> ", " ", '  <script defer src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"><\/script> ', ' <script type="module">\n  // Initialize Lenis\n  const lenis = new Lenis({\n    duration: 1.2,\n    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),\n    direction: "vertical",\n    gestureDirection: "vertical",\n    smooth: true,\n    smoothTouch: false,\n    touchMultiplier: 2,\n  });\n\n  function raf(time) {\n    lenis.raf(time);\n    requestAnimationFrame(raf);\n  }\n  requestAnimationFrame(raf);\n<\/script></body></html>'])), addAttribute(Astro2.generator, "content"), isES ? renderTemplate`<meta name="description" content="Diseñador web y desarrollador frontend con pasión por la maquetación CSS. Diseño sitios modernos, rápidos y de alta calidad. ¿Te ayudo con el tuyo?">` : renderTemplate`<meta name="description" content="Web designer and frontend developer passionate about CSS layout. I build modern, fast websites with top quality. Need help with yours?">`, renderHead(), addAttribute(isES ? "es" : "en", "class"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Analytics", $$Index, {}), renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/layouts/Layout.astro", void 0);

const frontEndImage = new Proxy({"src":"/_astro/section1-frontend.CZAY_dXU.svg","width":1436,"height":206,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/wamp/www/robertostringa/2025/web/frontend-web/src/assets/section1-frontend.svg";
							}
							
							return target[name];
						}
					});

const $$Frontend = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img class="image-frontend"${addAttribute(frontEndImage.src, "src")} alt="Frontend" fetchpriority="high" loading="eager" height="275" data-astro-cid-sx3j7zso> `;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Frontend.astro", void 0);

const $$Dev = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="image-dev" data-astro-cid-p3fdterg> <svg width="556.07237" height="223.68213" viewBox="0 0 556.07237 223.68213" data-astro-cid-p3fdterg> <defs data-astro-cid-p3fdterg></defs> <title>DEV</title> <path class="letter" d="M189.87006,107.098q0,55.99721-30.82921,86.2915Q128.21,223.68159,72.36859,223.68213H0V0H77.417q53.85213,0,83.15449,27.53914Q189.86736,55.07935,189.87006,107.098Zm-62.72933,2.14182q0-30.75132-12.16293-45.59261Q102.81487,48.80858,78.02927,48.80588H60.4339V174.11093H73.89815q27.54023,0,40.39167-15.98792Q127.14074,142.13725,127.14073,109.23978Z" data-astro-cid-p3fdterg></path> <path class="letter" d="M333.79811,223.68213H200.99562V0H333.79811V48.50083H261.42952V83.6894h67.013v48.50029h-67.013v42.22736h72.36859Z" data-astro-cid-p3fdterg></path> <path class="letter" d="M488.44715,0h67.62522L482.78648,223.68213H411.6424L338.66263,0H406.594l30.44628,113.3709q9.484,37.79174,10.404,52.6314,1.06766-10.70746,4.28363-26.77489,3.21273-16.06365,5.66068-25.24426Z" data-astro-cid-p3fdterg></path> </svg> </div> <div class="band" data-astro-cid-p3fdterg></div>   ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Dev.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Dev.astro", void 0);

const linesImage = new Proxy({"src":"/_astro/section1-bottom-lines.MIKOcNqT.svg","width":1212,"height":181,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/wamp/www/robertostringa/2025/web/frontend-web/src/assets/section1-bottom-lines.svg";
							}
							
							return target[name];
						}
					});

const wheelOutside = new Proxy({"src":"/_astro/section1-wheel-outside.CB8IDYJz.svg","width":186,"height":185,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/wamp/www/robertostringa/2025/web/frontend-web/src/assets/section1-wheel-outside.svg";
							}
							
							return target[name];
						}
					});

const wheelInner = new Proxy({"src":"/_astro/section1-wheel-inner.flsE3pPD.svg","width":200,"height":160,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/wamp/www/robertostringa/2025/web/frontend-web/src/assets/section1-wheel-inner.svg";
							}
							
							return target[name];
						}
					});

const webdesignImage = new Proxy({"src":"/_astro/section1-webdesign.BfaIznft.webp","width":339,"height":239,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/wamp/www/robertostringa/2025/web/frontend-web/src/assets/section1-webdesign.webp";
							}
							
							return target[name];
						}
					});

const $$Webdesign = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img class="image-webdesign"${addAttribute(webdesignImage.src, "src")} alt="Dev" fetchpriority="low" loading="lazy" data-astro-cid-clv5ave4> `;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Webdesign.astro", void 0);

const $$Astro$a = createAstro();
const $$TypeEffect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TypeEffect;
  const language = Astro2.props.language;
  return renderTemplate`${maybeRenderHead()}<p class="typewrite" data-period="2000"${addAttribute(language === "es" ? '["Creativo", "Detallista", "Colaborativo", "Resolutivo"]' : '["Creative", "Detail-oriented", "Collaborative", "Problem-solver"]', "data-type")}> <span class="wrap"></span> </p> ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/TypeEffect.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/TypeEffect.astro", void 0);

const $$Astro$9 = createAstro();
const $$TypeEffect1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TypeEffect1;
  const language = Astro2.props.language;
  return renderTemplate`${maybeRenderHead()}<div class="typewriter" data-astro-cid-pb4okwai> <h1 data-astro-cid-pb4okwai>${language === "es" ? "Roberto Stringa | 10+ a\xF1os de experiencia en Desarrollos Web" : "Roberto Stringa | 10+ years working in Web Development"}</h1> </div> `;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/TypeEffect1.astro", void 0);

const faceMask = new Proxy({"src":"/_astro/face-mask-bn.CQTP2ROj.webp","width":400,"height":306,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/wamp/www/robertostringa/2025/web/frontend-web/src/assets/face-mask-bn.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro();
const $$Facemask = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Facemask;
  const { responsive } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(responsive === "mobile" ? "box-face_mask --mobile" : "box-face_mask", "class")} data-astro-cid-yhj4mb6t> <img class="face-mask"${addAttribute(faceMask.src, "src")} alt="" data-astro-cid-yhj4mb6t> </div>  ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Facemask.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Facemask.astro", void 0);

const $$Astro$7 = createAstro();
const $$Eye = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Eye;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="eye"${addAttribute(`--fill:${fill}`, "style")} data-astro-cid-rdycg2k4> <svg xmlns="http://www.w3.org/2000/svg" width="55" height="40" viewBox="0 0 55 40" data-astro-cid-rdycg2k4> <defs data-astro-cid-rdycg2k4> <style>
        .eye-border {
          fill: var(--fill);
          stroke: #000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 4.86556px;
        }
      </style> </defs> <g id="eye-group" data-astro-cid-rdycg2k4> <path class="eye-border" d="M2.58484,20.31421a2.43276,2.43276,0,0,1,0-1.69321,26.15239,26.15239,0,0,1,48.354,0,2.43276,2.43276,0,0,1,0,1.69321,26.15239,26.15239,0,0,1-48.35395,0" data-astro-cid-rdycg2k4></path> <circle cx="26.76181" cy="19.4676" r="7.2" class="eye-circle" data-astro-cid-rdycg2k4></circle> </g> </svg> </div>  ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Eye.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section1/Eye.astro", void 0);

const $$Dron = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "dotlottie-player", "dotlottie-player", { "src": "https://lottie.host/f694f440-6615-48ba-8ff2-c620dcb781b8/wCz2s9SpPZ.lottie", "background": "transparent", "speed": "1", "style": "width: 300px; height: 300px;", "loop": true, "autoplay": true, "data-astro-cid-ke4rmkk5": true })}  ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Dron.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Dron.astro", void 0);

const $$Astro$6 = createAstro();
const $$Section1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Section1;
  const language = Astro2.props.language;
  return renderTemplate`${renderComponent($$result, "Dron", $$Dron, {})} ${maybeRenderHead()}<section class="section section1"> <div class="top"> <div class="switcher"> <a href="/"${addAttribute(language === "en" ? "active" : "", "class")}>EN</a> <a href="/es"${addAttribute(language === "es" ? "active" : "", "class")}>ES</a> </div> ${renderComponent($$result, "Eye", $$Eye, { "fill": "#787878" })} ${renderComponent($$result, "Frontend", $$Frontend, {})} ${renderComponent($$result, "Facemask", $$Facemask, { "responsive": "mobile" })} </div> <div class="bottom"> <div class="vertical-lines"> <!-- <div class="name">Roberto Stringa</div> --> </div> ${renderComponent($$result, "Dev", $$Dev, {})} ${renderComponent($$result, "TypeEffect1", $$TypeEffect1, { "language": language })} <div class="box-lines"> <div class="box-type_effect"> <span> >> </span>${renderComponent($$result, "TypeEffect", $$TypeEffect, { "language": language })} </div> <div class="wheel"> <img class="wheel-outside"${addAttribute(wheelOutside.src, "src")} alt=""> <img class="wheel-inner"${addAttribute(wheelInner.src, "src")} alt=""> </div> <div class="lines"> <img class="image-lines"${addAttribute(linesImage.src, "src")} alt="" height="186"> ${renderComponent($$result, "Eye", $$Eye, { "fill": "var(--primary-color, #fff)" })} <div class="contact-text"> <a href="#contact"${addAttribute(language === "es" ? "Ir al formulario de contacto" : "Go to contact form", "title")}>${language === "es" ? "Cont\xE1ctame" : "Contact me"}</a> </div> </div> ${renderComponent($$result, "Webdesign", $$Webdesign, {})} ${renderComponent($$result, "Facemask", $$Facemask, {})} </div> </div> </section> <style>
  .section1 {
    --primary-color: #ff9500;
    --light-lines: #ffc107;
    overflow: clip;

    & img {
      max-width: 100%;
    }
  }

  .top {
    background: url(/section1-top-bg-50.webp) no-repeat center;
    background-size: cover;
    width: 100vw;
    height: 40dvh;
    position: relative;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      height: 30dvh;
    }
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
    }
    & .eye {
      position: absolute;
      top: 27px;
      right: 10%;
      z-index: 5;
    }
  }
  .switcher {
    position: absolute;
    top: 32px;
    right: calc(10% + 80px);
    z-index: 5;
    display: flex;
    gap: 5px;
    @media (max-width: 767px) {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
    & a {
      font-size: 12px;
      color: #fff;
      text-decoration: none;
      text-transform: capitalize;
      position: relative;
      display: inline-flex;
      font-weight: 400;
      border: 1px solid #111;
      border-radius: 30px;
      padding: 4px 15px;
      @media (max-width: 767px) {
        font-size: 14px;
      }
      &:hover {
        border-color: #ffffffaf;
        color: #ffffffaf;
      }
      &.active {
        border-color: #ff9800;
        color: #ff9800;
      }
    }
  }
  .bottom {
    background: #ff9500;
    width: 100vw;
    height: 60dvh;
    min-height: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-bottom: 20px;
    @media (max-width: 768px) {
      height: 70dvh;
    }
    & .vertical-lines {
      position: absolute;
      z-index: 2;
      top: 0;
      left: calc(50%);
      transform: translateX(-50%);
      width: 1250px;
      height: 100%;
      border-left: 1px solid var(--light-lines);
      border-right: 1px solid var(--light-lines);
      pointer-events: none;
    }
  }
  .contact-text {
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: calc(50% - 50px);
    animation: glitch-text 5s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite
      alternate;
    &:hover {
      animation-play-state: paused;
      animation-fill-mode: forwards;
    }
    @media (max-width: 768px) {
      left: calc(50% - 25px);
    }
    & a {
      color: #111;
      text-decoration: none;
      text-transform: capitalize;
      position: relative;
      display: inline-flex;
      font-weight: 900;
      border: 1px solid #111;
      border-radius: 8px;
      padding: 5px 15px;
      &:hover {
        border-color: #fff;
        color: #000;
      }
    }
  }
  .box-lines {
    margin-top: 5dvh;
    background: url(/section1-blurtext.webp) no-repeat right 10px;
    background-size: contain;
    position: relative;
    @media (max-width: 767px) {
      aspect-ratio: 16/9;
    }
    & .lines {
      position: relative;
      overflow: hidden;
      max-width: 100vw;
      & .image-lines {
        min-width: 1250px;
      }
    }
    & .eye {
      position: absolute;
      top: 27px;
      left: calc(42% + 5px);
      @media (max-width: 1210px) {
        left: calc(50%);
        top: 0;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    & .wheel {
      position: absolute;
      bottom: -20px;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 5vw;
      width: 135px;
      animation: float-wheel 10s ease-out infinite;
      @media (max-width: 1024px) {
        bottom: 0vh;
        width: 130px;
      }
      .wheel-outside {
        width: 100%;
        height: 100%;
        animation: rotate 10s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
        transform-origin: center;
      }
      .wheel-inner {
        position: absolute;
        top: 0;
        left: -12px;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
    }
  }
  .box-type_effect {
    display: flex;
    position: absolute;
    left: 70px;
    align-items: center;
    justify-content: center;
    & span {
      padding-right: 5px;
    }
    & p {
      background-color: #111;
      color: #fff;
      padding: 0 5px;
    }
  }

  @keyframes glitch-text {
    0% {
      transform: translate(0, 0);
      filter: blur(0px);
    }
    25% {
      transform: translate(5px, -5px);
      filter: blur(0px);
    }
    50% {
      transform: translate(0, -10px);
      filter: blur(20px);
    }
    75% {
      transform: translate(-5px, -2px);
      filter: blur(0px);
    }
    100% {
      transform: translate(0, 0);
      filter: blur(0px);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
      filter: drop-shadow(5px 5px 10px #111);
    }
    to {
      transform: rotate(360deg);
      filter: drop-shadow(2px 2px 0px transparent);
    }
  }

  @keyframes float-wheel {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Section1.astro", void 0);

const work = [
	{
		name: "Kasian Architecture",
		url: "https://kasian.com/",
		image: "./projects/kasian.webp",
		technologies: "WordPress, PHP, CSS, JavaScript"
	},
	{
		name: "Escuela Náutica 'La mar en calma'",
		url: "https://www.lamarencalma.com/",
		image: "./projects/lamarencalma.webp",
		technologies: "WordPress, Elementor, CSS, JavaScript"
	},
	{
		name: "Webstarted",
		url: "https://webstarted.com/",
		image: "./projects/webstarted.webp",
		technologies: "Astro, Tailwind CSS, JavaScript"
	},
	{
		name: "Belvillage",
		url: "https://belvillage.com/",
		image: "./projects/belvillage.webp",
		technologies: "WordPress, Elementor, CSS, JavaScript"
	},
	{
		name: "Strive Training",
		url: "https://strivetraining.co.uk/",
		image: "./projects/strivetraining.webp",
		technologies: "WordPress, PHP, Tailwind, JavaScript"
	},
	{
		name: "Rocket Badge",
		url: "https://www.rocketbadge.co.uk/",
		image: "./projects/rocketbadge.webp",
		technologies: "Astro, CSS, JavaScript"
	}
];

const $$ClickIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12l3 0"></path><path d="M12 3l0 3"></path><path d="M7.8 7.8l-2.2 -2.2"></path><path d="M16.2 7.8l2.2 -2.2"></path><path d="M7.8 16.2l-2.2 2.2"></path><path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/ClickIcon.astro", void 0);

const $$ClickIcon2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/ClickIcon2.astro", void 0);

const $$Close = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/Close.astro", void 0);

const $$Astro$5 = createAstro();
const $$WorkModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$WorkModal;
  const language = Astro2.props.language;
  return renderTemplate`${maybeRenderHead()}<dialog id="modal-work" data-astro-cid-ighy3st2> <div class="modal-inner" data-astro-cid-ighy3st2> <div class="modal-grid" data-astro-cid-ighy3st2> <div class="modal-info" data-astro-cid-ighy3st2> <div class="modal-close" data-astro-cid-ighy3st2> ${renderComponent($$result, "Close", $$Close, { "data-astro-cid-ighy3st2": true })} </div> <div class="modal-arrows" data-astro-cid-ighy3st2> <a href="#" title="Previous work" class="modal-arrow modal-arrow-prev" data-astro-cid-ighy3st2> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ighy3st2><polyline points="15 18 9 12 15 6" data-astro-cid-ighy3st2></polyline></svg> </a> <a href="#" title="Next work" class="modal-arrow modal-arrow-next" data-astro-cid-ighy3st2> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ighy3st2><polyline points="9 18 15 12 9 6" data-astro-cid-ighy3st2></polyline></svg> </a> </div> <p data-astro-cid-ighy3st2> <span class="modal-work-label" data-astro-cid-ighy3st2> ${language === "es" ? "Nombre del Proyecto" : "Project Name"} </span> <span class="modal-work-name" data-astro-cid-ighy3st2></span> </p> <p data-astro-cid-ighy3st2> <span class="modal-work-label" data-astro-cid-ighy3st2> ${language === "es" ? "Tecnolog\xEDas Utilizadas" : "Technologies Used"} </span> <span class="modal-work-technologies" data-astro-cid-ighy3st2></span> </p> <p data-astro-cid-ighy3st2> <span class="modal-work-label" data-astro-cid-ighy3st2> ${language === "es" ? "Sitio web" : "Website"} </span> <a class="modal-work-url" href="#" target="_blank" data-astro-cid-ighy3st2></a> </p> </div> <div class="modal-work-image" data-astro-cid-ighy3st2> ${work.map((workItem, idx) => renderTemplate`<img${addAttribute(workItem.image, "src")}${addAttribute(workItem.name, "alt")} class="modal-work-image-item" width="1250" height="700" loading="lazy" data-astro-cid-ighy3st2>`)} </div> </div> </div> </dialog> `;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/WorkModal.astro", void 0);

const $$Astro$4 = createAstro();
const $$WorkList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WorkList;
  const language = Astro2.props.language;
  return renderTemplate`${work.map((workItem, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-lvnwr5t2": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<a${addAttribute(index, "data-index")}${addAttribute(`work-item work-item-${index}`, "class")}${addAttribute(`animation-delay:${index * 0.15}s`, "style")}${addAttribute(workItem.url, "href")} target="_blank" data-astro-cid-lvnwr5t2><span class="work-name" data-astro-cid-lvnwr5t2>${workItem.url}</span><span class="icon" data-astro-cid-lvnwr5t2>${renderComponent($$result2, "Click2", $$ClickIcon2, { "data-astro-cid-lvnwr5t2": true })}${renderComponent($$result2, "Click", $$ClickIcon, { "data-astro-cid-lvnwr5t2": true })}</span></a>` })}`)}${renderComponent($$result, "WorkModal", $$WorkModal, { "language": language, "data-astro-cid-lvnwr5t2": true })}${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/WorkList.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/WorkList.astro", void 0);

const $$WheelWhite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="290" height="254" viewBox="0 0 290 254" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_14_9)"> <path opacity="0.893" fill-rule="evenodd" clip-rule="evenodd" d="M41.3305 165.306C41.3305 164.208 40.9186 163.109 40.232 162.148C33.7784 139.631 33.3665 116.84 39.1335 94.0487C34.6023 90.3416 35.2888 87.8703 41.1932 86.7719C47.7841 66.5892 58.9063 49.1525 74.285 34.5989C68.3807 34.0497 62.6136 33.9124 56.7093 34.0497C56.7093 31.9903 56.7093 29.9308 56.7093 27.8714C67.0076 28.2833 77.3059 28.6952 87.7415 28.9697C86.643 36.2465 86.2311 43.386 86.2311 50.6627C87.6042 49.1524 89.1146 47.7795 90.8996 46.5438C91.3116 47.093 91.5862 47.6422 91.9981 48.0541C90.3504 50.8 88.2907 53.1341 85.8191 55.3308C85.1326 56.8411 84.858 58.3514 84.7207 59.9989C82.1117 60.2735 79.9148 61.3719 77.9924 63.1568C77.4432 62.7449 76.8939 62.4703 76.482 62.0584C77.9924 60.2735 78.8163 58.2141 79.0909 55.88C79.6402 50.6627 80.0521 45.5827 80.1894 40.3654C66.733 53.8206 56.572 69.4724 49.7064 87.3211C51.7661 87.733 53.8258 88.0076 55.8854 88.4195C57.1212 91.1654 56.16 92.4011 52.7273 91.9892C50.5303 90.8908 48.8826 91.3027 48.0587 93.0876C44.3513 105.17 42.8409 117.664 43.3902 130.295C46.8229 130.295 50.2557 130.295 53.6884 130.295C53.6884 127.549 53.6884 124.803 53.6884 122.057C54.7869 122.057 55.7481 122.057 56.8466 122.057C56.8466 124.803 56.8466 127.549 56.8466 130.295C60.9659 130.295 65.0852 130.295 69.2046 130.295C70.303 130.295 71.2642 130.295 72.3627 130.295C73.5985 130.844 74.285 131.805 74.4224 133.453C74.4224 134.689 74.0104 135.787 73.3239 136.611C72.2254 136.611 71.2642 136.611 70.1657 136.611C65.6345 136.336 61.1032 136.611 56.7093 137.709C58.357 140.181 57.9451 142.24 55.6108 143.888C54.375 141.554 53.6884 139.219 53.5511 136.611C50.1184 136.611 46.6856 136.611 43.2528 136.611C43.5275 145.672 45.3125 154.185 48.4706 162.423C48.196 163.796 48.608 164.757 49.5691 165.581C53.8258 179.585 60.6913 191.942 70.1657 202.788C73.0492 201.552 75.3835 199.63 77.4432 197.159C75.2462 195.786 74.285 194.001 74.285 191.53C77.1686 191.53 79.0909 192.903 79.9148 195.649C82.3864 193.589 84.7206 191.53 87.1922 189.47C88.428 191.255 89.6638 192.903 90.7623 194.688C88.9773 197.159 86.9176 199.218 84.5833 200.866C86.9176 202.788 88.2907 205.259 88.7027 208.143C87.6042 208.28 86.643 208.143 85.5445 207.594C84.7206 205.809 83.4849 204.161 81.9744 202.925C79.3655 204.848 76.7566 206.77 74.285 208.555C82.2491 217.891 91.5862 225.442 102.159 231.209C104.219 231.758 106.278 231.895 108.338 231.758C108.201 233.131 108.475 234.366 109.437 235.328C122.206 241.643 135.526 245.625 149.669 247.272C149.669 244.115 149.669 241.094 149.669 237.936C142.803 236.838 142.803 235.877 149.669 234.778C149.669 230.659 149.669 226.541 149.669 222.422C150.355 220.911 151.316 219.95 152.827 219.264C153.925 219.264 154.886 219.264 155.985 219.264C155.71 228.875 155.985 238.348 157.083 247.684C186.056 248.92 212.008 240.819 235.076 223.383C234.664 220.911 233.291 218.852 230.956 217.204C228.073 220.088 226.7 219.813 226.837 216.106C227.661 215.419 228.485 215.008 229.446 214.596C226.563 211.438 223.816 208.143 221.207 204.848C220.795 203.749 220.109 203.063 219.148 202.788C217.912 200.317 218.598 198.532 221.207 197.159C222.581 196.884 223.542 197.434 224.366 198.669C224.777 199.768 225.464 200.454 226.425 200.729C230.407 207.182 235.35 213.085 240.843 218.303C265.559 196.335 279.29 168.876 282.173 135.65C271.463 135.787 260.753 135.787 250.18 135.65C250.18 133.59 250.18 131.531 250.18 129.471C252.24 129.471 254.299 129.471 256.359 129.471C257.457 130.844 258.419 130.844 259.517 129.471C263.636 129.471 267.756 129.471 271.875 129.471C271.875 128.098 271.875 126.725 271.875 125.352C272.973 125.352 273.935 125.352 275.033 125.352C275.033 126.725 275.033 128.098 275.033 129.471C277.505 129.471 279.839 129.471 282.311 129.471C282.311 92.1265 268.168 61.5092 240.019 37.6195C235.35 39.6789 234.252 42.5622 236.861 46.4065C236.449 46.9557 236.174 47.5049 235.762 47.9168C234.389 47.093 233.153 45.9946 232.192 44.7589C229.034 47.7795 226.151 50.8 223.404 54.0952C222.306 54.507 221.619 55.1935 221.345 56.1546C219.972 56.9784 218.736 57.9395 217.775 59.3124C213.93 57.3903 213.518 54.9189 216.264 52.0357C216.951 52.0357 217.363 51.6238 217.363 50.9373C223.679 45.1708 229.858 39.1297 235.9 32.8141C215.166 17.0249 192.098 8.92434 166.283 8.23786C166.283 11.3957 166.283 14.4162 166.283 17.5741C168.205 17.2995 169.579 17.986 170.402 19.6335C169.167 20.5946 167.794 20.8692 166.283 20.7319C166.283 25.2627 166.283 29.6562 166.283 34.187C164.91 34.8735 163.537 35.56 162.164 36.2465C161.065 36.2465 160.104 36.2465 159.006 36.2465C159.143 35.2854 158.868 34.5989 157.907 34.187C158.045 29.6562 157.907 25.2627 157.358 20.7319C154.474 22.1049 151.591 22.1049 148.57 20.7319C148.845 20.1827 149.119 19.6335 149.669 19.2216C152.415 18.6725 155.161 18.5352 157.907 18.6725C157.907 12.4941 157.907 6.31569 157.907 0.137315C212.008 -0.274577 251.69 23.066 277.23 70.4335C298.788 120.547 292.884 166.954 259.654 209.928C221.894 250.018 176.307 262.924 122.756 248.645C112.595 245.35 102.983 240.819 93.7832 235.19C91.7235 234.641 89.6638 234.504 87.6042 234.641C87.4669 233.268 87.7415 232.032 88.7027 231.071C65.3599 214.596 49.4318 192.765 41.3305 165.306ZM154.886 69.1979C160.104 69.1979 165.185 69.1979 170.402 69.1979C170.402 73.3168 170.402 77.4357 170.402 81.5546C177.268 82.3784 183.447 84.7124 188.939 88.8314C191.96 86.2227 194.981 83.4768 197.727 80.5935C201.572 84.1633 205.142 88.0076 208.575 91.9892C206.103 94.7352 203.769 97.4811 201.297 100.227C204.867 105.994 207.339 112.172 208.575 118.762C212.42 118.762 216.127 118.762 219.972 118.762C219.972 124.254 219.972 129.746 219.972 135.238C216.264 134.963 212.694 135.238 209.124 136.336C208.163 142.515 205.966 148.144 202.396 153.361C204.593 155.832 207.064 158.029 209.673 160.089C206.652 164.619 203.082 168.876 198.826 172.445C196.354 169.974 194.02 167.64 191.548 165.169C185.232 169.837 178.092 172.857 170.402 174.505C170.402 177.937 170.402 181.37 170.402 184.802C164.91 184.802 159.418 184.802 153.925 184.802C154.2 181.232 153.925 177.8 152.827 174.505C146.236 172.995 140.194 170.249 134.702 166.267C132.23 168.738 129.896 171.072 127.424 173.544C123.991 170.111 120.559 166.679 117.126 163.247C116.439 162.56 116.439 161.874 117.126 161.187C119.186 159.265 121.108 157.205 122.756 155.009C118.911 148.968 116.439 142.377 115.478 135.375C112.045 135.375 108.613 135.375 105.18 135.375C105.18 130.158 105.18 125.078 105.18 119.861C109.162 120.41 112.732 119.723 116.027 117.801C117.126 112.172 119.323 106.955 122.756 102.287C120.284 99.5406 117.95 96.7946 115.478 94.0487C118.224 89.6552 121.657 85.8108 125.777 82.653C128.523 85.1243 131.269 87.4584 134.015 89.9297C140.057 85.9481 146.648 82.9276 153.651 81.1427C154.886 77.1611 155.298 73.3168 154.886 69.1979Z" fill="white"></path> <path opacity="0.667" fill-rule="evenodd" clip-rule="evenodd" d="M172.462 18.5351C175.208 18.3978 177.955 18.5351 180.701 19.0843C181.113 19.4962 181.525 20.0454 181.799 20.5946C179.053 21.8303 176.307 21.9675 173.561 21.1438C172.737 20.4573 172.462 19.6335 172.462 18.5351Z" fill="white"></path> <path opacity="0.67" fill-rule="evenodd" clip-rule="evenodd" d="M141.567 19.6335C142.94 19.6335 144.313 19.6335 145.687 19.6335C145.687 20.7319 145.687 21.693 145.687 22.7914C142.528 23.8898 139.508 23.8898 136.349 22.7914C137.86 21.2811 139.508 20.1827 141.567 19.6335Z" fill="white"></path> <path opacity="0.64" fill-rule="evenodd" clip-rule="evenodd" d="M185.919 19.6335C188.39 20.1827 190.724 20.8692 193.196 21.693C194.157 22.5168 194.432 23.6152 194.295 24.8508C191.411 24.439 188.665 23.7525 186.056 22.7914C184.82 21.8303 184.82 20.7319 185.919 19.6335Z" fill="white"></path> <path opacity="0.682" fill-rule="evenodd" clip-rule="evenodd" d="M130.17 22.7913C131.818 22.654 133.191 23.0659 134.29 24.3016C131.818 25.6746 129.209 26.9103 126.6 27.8713C125.914 27.3222 125.365 26.6357 125.09 25.8119C126.738 24.5762 128.385 23.6151 130.17 22.7913Z" fill="white"></path> <path opacity="0.719" fill-rule="evenodd" clip-rule="evenodd" d="M197.315 23.7524C200.611 23.6151 203.357 24.5762 205.554 26.9103C205.279 27.7341 204.73 28.4205 204.044 28.9697C202.121 28.1459 200.336 27.1849 198.414 26.3611C197.59 25.6746 197.178 24.8508 197.315 23.7524Z" fill="white"></path> <path opacity="0.697" fill-rule="evenodd" clip-rule="evenodd" d="M118.774 26.9103C120.284 26.6357 121.657 27.0476 122.893 28.0087C120.421 31.1665 117.263 32.1276 113.556 31.1665C115.204 29.3816 116.851 28.0087 118.774 26.9103Z" fill="white"></path> <path opacity="0.727" fill-rule="evenodd" clip-rule="evenodd" d="M208.712 27.8713C212.008 28.1459 214.754 29.5189 216.951 31.9903C214.479 33.2259 212.008 32.814 209.673 30.8919C208.712 30.2054 208.438 29.107 208.712 27.8713Z" fill="white"></path> <path opacity="0.651" fill-rule="evenodd" clip-rule="evenodd" d="M108.475 31.9902C109.574 31.9902 110.535 31.9902 111.634 31.9902C110.947 35.56 108.75 37.6194 104.905 38.1686C103.67 37.7567 103.258 37.0702 103.807 36.1092C105.592 34.8735 107.102 33.5005 108.475 31.9902Z" fill="white"></path> <path opacity="0.668" fill-rule="evenodd" clip-rule="evenodd" d="M219.972 33.0886C222.306 34.187 224.503 35.56 226.7 37.2075C227.249 38.4432 226.974 39.5416 225.601 40.3654C223.542 38.9924 221.482 37.6194 219.422 36.2465C219.01 35.0108 219.148 34.0497 219.972 33.0886Z" fill="white"></path> <path opacity="0.705" fill-rule="evenodd" clip-rule="evenodd" d="M158.045 34.0498C158.868 34.4617 159.28 35.1481 159.143 36.1092C156.259 37.4822 153.101 37.4822 149.806 36.1092C150.08 35.56 150.355 35.0108 150.904 34.599C153.239 34.0498 155.573 33.9125 158.045 34.0498Z" fill="white"></path> <path opacity="0.624" fill-rule="evenodd" clip-rule="evenodd" d="M166.283 34.0497C168.068 33.7751 169.853 34.0497 171.501 35.1481C168.755 37.4822 165.597 37.894 162.164 36.2465C163.537 35.4227 164.91 34.7362 166.283 34.0497Z" fill="white"></path> <path opacity="0.659" fill-rule="evenodd" clip-rule="evenodd" d="M174.522 34.0498C177.817 34.3244 180.975 35.1482 183.859 36.6585C181.662 38.1687 179.328 38.5806 176.581 37.7568C175.071 36.933 174.384 35.8347 174.522 34.0498Z" fill="white"></path> <path opacity="0.673" fill-rule="evenodd" clip-rule="evenodd" d="M143.627 35.1481C144.725 35.1481 145.687 35.1481 146.785 35.1481C147.06 36.3837 146.648 37.3448 145.687 38.3059C143.627 38.9924 141.567 39.6789 139.508 40.3654C138.409 39.4043 138.272 38.4432 138.958 37.2075C140.606 36.521 142.116 35.8346 143.627 35.1481Z" fill="white"></path> <path opacity="0.637" fill-rule="evenodd" clip-rule="evenodd" d="M187.017 36.1093C190.312 36.5211 193.059 37.8941 195.256 40.2282C192.509 41.052 189.763 40.9147 187.017 39.679C185.781 38.5806 185.781 37.3449 187.017 36.1093Z" fill="white"></path> <path opacity="0.678" fill-rule="evenodd" clip-rule="evenodd" d="M99.1383 38.1687C100.923 38.5806 101.473 39.5417 100.649 41.3265C98.589 43.2487 96.392 44.4844 93.9205 44.8963C93.5085 44.4844 93.2339 44.2098 92.822 43.7979C94.8816 41.7384 96.9413 39.8163 99.1383 38.1687Z" fill="white"></path> <path opacity="0.668" fill-rule="evenodd" clip-rule="evenodd" d="M131.132 39.2671C132.642 38.9925 134.015 39.4044 135.251 40.3655C133.191 42.1503 130.72 43.5233 127.973 44.4844C127.15 44.2098 126.463 43.6606 125.914 42.9741C127.562 41.1893 129.209 39.9536 131.132 39.2671Z" fill="white"></path> <path opacity="0.662" fill-rule="evenodd" clip-rule="evenodd" d="M198.277 40.2281C201.435 40.9146 204.181 42.5622 206.515 44.8963C205.966 45.4454 205.417 45.9946 205.005 46.4065C202.808 45.0336 200.611 43.7979 198.277 42.8368C197.178 42.013 197.178 41.1892 198.277 40.2281Z" fill="white"></path> <path opacity="0.661" fill-rule="evenodd" clip-rule="evenodd" d="M120.833 43.386C121.932 43.386 122.893 43.386 123.991 43.386C124.266 44.6217 123.854 45.5827 122.893 46.5438C120.696 48.0541 118.224 49.1525 115.616 49.7017C115.341 48.466 115.753 47.5049 116.714 46.5438C118.499 45.9946 119.872 44.8963 120.833 43.386Z" fill="white"></path> <path opacity="0.696" fill-rule="evenodd" clip-rule="evenodd" d="M216.951 50.6627C216.951 51.3492 216.539 51.761 215.852 51.761C212.42 51.2119 210.223 49.427 209.124 46.5437C209.811 45.5827 210.772 45.4454 211.733 45.9946C214.067 47.0929 215.715 48.6032 216.951 50.6627Z" fill="white"></path> <path opacity="0.712" fill-rule="evenodd" clip-rule="evenodd" d="M238.646 48.6033C241.392 49.8389 243.864 51.7611 245.923 54.2325C245.099 55.4681 244.138 55.88 242.765 55.3308C240.98 53.546 239.332 51.8984 237.547 50.1135C238.097 49.7016 238.509 49.1525 238.646 48.6033Z" fill="white"></path> <path opacity="0.633" fill-rule="evenodd" clip-rule="evenodd" d="M110.535 49.5643C111.634 49.5643 112.595 49.5643 113.693 49.5643C112.457 52.7222 110.26 55.1935 106.965 56.8411C106.278 56.2919 105.729 55.6054 105.455 54.7816C106.965 52.7222 108.613 51.0746 110.535 49.5643Z" fill="white"></path> <path opacity="0.707" fill-rule="evenodd" clip-rule="evenodd" d="M155.985 50.6627C158.731 50.6627 161.477 50.6627 164.223 50.6627C164.223 51.7611 164.223 52.7222 164.223 53.8206C161.477 53.9579 158.731 53.8206 155.985 53.2714C154.886 52.4476 154.886 51.4865 155.985 50.6627Z" fill="white"></path> <path opacity="0.693" fill-rule="evenodd" clip-rule="evenodd" d="M167.382 50.6627C170.128 50.5254 172.874 50.6627 175.62 51.2119C176.032 51.6238 176.444 52.173 176.719 52.7221C173.973 53.9578 171.226 54.0951 168.48 53.2713C167.519 52.4475 167.244 51.6238 167.382 50.6627Z" fill="white"></path> <path opacity="0.688" fill-rule="evenodd" clip-rule="evenodd" d="M147.746 51.6237C149.806 51.3491 151.454 51.8983 152.964 53.134C150.218 55.0562 147.06 56.0173 143.627 55.7427C143.627 54.6443 143.627 53.6832 143.627 52.5848C145.275 52.9967 146.648 52.5848 147.746 51.6237Z" fill="white"></path> <path opacity="0.72" fill-rule="evenodd" clip-rule="evenodd" d="M179.74 52.7221C183.172 52.4475 186.33 53.2713 189.077 55.3308C188.39 56.2918 187.566 56.7037 186.468 56.841C184.545 56.2918 182.76 55.7427 180.838 55.3308C180.014 54.507 179.602 53.6832 179.74 52.7221Z" fill="white"></path> <path opacity="0.692" fill-rule="evenodd" clip-rule="evenodd" d="M136.349 54.7816C137.86 54.507 139.233 54.9189 140.469 55.88C138.546 58.0768 136.212 59.4497 133.191 59.9989C132.093 59.0378 131.955 58.0768 132.642 56.8411C134.015 56.1546 135.251 55.4681 136.349 54.7816Z" fill="white"></path> <path opacity="0.633" fill-rule="evenodd" clip-rule="evenodd" d="M223.13 53.6832C223.954 55.0562 225.189 56.1546 226.7 56.8411C227.249 59.0378 226.288 59.9989 224.091 59.4497C222.855 58.3513 221.757 57.1157 220.933 55.88C221.345 54.7816 222.031 54.0951 223.13 53.6832Z" fill="white"></path> <path opacity="0.686" fill-rule="evenodd" clip-rule="evenodd" d="M192.098 55.7427C195.393 56.0173 198.139 57.3902 200.336 59.8616C196.903 60.96 193.745 59.9989 190.999 57.2529C191.686 56.9784 191.96 56.4292 192.098 55.7427Z" fill="white"></path> <path opacity="0.639" fill-rule="evenodd" clip-rule="evenodd" d="M101.198 56.8411C103.395 56.8411 104.356 57.9394 103.807 59.9989C95.2936 65.3535 94.4697 64.2551 101.198 56.8411Z" fill="white"></path> <path opacity="0.684" fill-rule="evenodd" clip-rule="evenodd" d="M247.846 56.8411C251.553 59.0378 253.063 61.7838 252.514 65.0789C249.905 63.7059 247.983 61.6465 246.884 58.9005C247.296 58.214 247.571 57.5276 247.846 56.8411Z" fill="white"></path> <path opacity="0.689" fill-rule="evenodd" clip-rule="evenodd" d="M127.012 58.9005C129.759 60.2735 129.759 61.7838 127.012 63.5686C124.953 65.0789 122.893 65.3535 120.833 64.1178C122.893 62.3329 124.953 60.5481 127.012 58.9005Z" fill="white"></path> <path opacity="0.642" fill-rule="evenodd" clip-rule="evenodd" d="M202.396 60.96C205.005 61.6464 207.476 62.8821 209.673 64.5297C211.046 65.9027 210.772 67.1383 209.124 68.0994C207.202 66.8637 205.279 65.6281 203.494 64.5297C202.67 63.5686 202.259 62.3329 202.396 60.96Z" fill="white"></path> <path opacity="0.688" fill-rule="evenodd" clip-rule="evenodd" d="M228.21 60.96C232.33 61.6464 234.801 64.1178 235.488 68.2367C232.055 66.8637 229.721 64.3924 228.21 60.96Z" fill="white"></path> <path opacity="0.674" fill-rule="evenodd" clip-rule="evenodd" d="M73.3239 65.079C74.5597 65.079 75.6581 65.4909 76.482 66.5892C74.8343 68.9233 73.1866 71.2574 71.2642 73.3168C70.1657 72.9049 69.4792 72.2184 69.2046 71.2574C70.5777 69.1979 71.9508 67.1384 73.3239 65.079Z" fill="white"></path> <path opacity="0.748" fill-rule="evenodd" clip-rule="evenodd" d="M91.8608 66.04C92.9593 66.04 93.9205 66.04 95.0189 66.04C94.607 69.1979 92.822 71.6692 89.8011 73.3168C89.3892 72.7676 89.1146 72.2184 88.7027 71.8065C90.0758 70.0217 91.1742 68.0995 91.8608 66.04Z" fill="white"></path> <path opacity="0.704" fill-rule="evenodd" clip-rule="evenodd" d="M116.714 66.04C118.499 66.4519 119.048 67.413 118.224 69.1979C116.439 70.5709 114.792 71.9438 113.007 73.3168C112.32 72.7676 111.771 72.0811 111.496 71.2573C113.007 69.1979 114.654 67.413 116.714 66.04Z" fill="white"></path> <path opacity="0.662" fill-rule="evenodd" clip-rule="evenodd" d="M254.162 67.1384C255.398 66.8638 256.359 67.2757 257.32 68.2368C258.144 70.159 259.105 71.8065 260.478 73.4541C260.204 74.0033 259.929 74.5525 259.38 74.9644C255.947 73.7287 254.299 71.1201 254.162 67.1384Z" fill="white"></path> <path opacity="0.701" fill-rule="evenodd" clip-rule="evenodd" d="M212.831 68.2368C214.616 69.7471 216.402 71.1201 218.461 72.3557C219.285 73.5914 219.01 74.5525 217.912 75.5136C213.93 74.1406 212.145 71.8065 212.831 68.2368Z" fill="white"></path> <path opacity="0.703" fill-rule="evenodd" clip-rule="evenodd" d="M237.547 69.1979C240.843 71.12 242.491 73.7287 242.765 76.8865C238.371 76.2 236.586 73.5914 237.547 69.1979Z" fill="white"></path> <path opacity="0.666" fill-rule="evenodd" clip-rule="evenodd" d="M107.377 74.4152C109.299 74.1406 110.123 74.8271 109.986 76.4746C108.338 77.7103 107.24 79.3579 106.416 81.1427C105.455 81.6919 104.356 81.8292 103.258 81.6919C103.807 78.6714 105.18 76.3373 107.377 74.4152Z" fill="white"></path> <path opacity="0.699" fill-rule="evenodd" clip-rule="evenodd" d="M67.1449 75.3762C68.3807 75.3762 69.4792 75.7881 70.303 76.8865C69.2045 78.6714 68.1061 80.5935 67.1449 82.5157C66.321 83.4768 65.2225 83.7514 63.9867 83.6141C64.536 80.7308 65.4972 77.9849 67.1449 75.3762Z" fill="white"></path> <path opacity="0.685" fill-rule="evenodd" clip-rule="evenodd" d="M85.6818 75.3762C86.643 75.3762 87.4669 75.9254 87.7415 76.8865C87.0549 79.6324 85.6818 81.8292 83.6222 83.6141C82.7983 83.3395 82.1117 82.7903 81.5625 82.1038C82.7983 79.7697 84.1714 77.573 85.6818 75.3762Z" fill="white"></path> <path opacity="0.688" fill-rule="evenodd" clip-rule="evenodd" d="M221.07 76.4746C222.581 76.4746 223.816 77.1611 224.64 78.5341C225.464 80.3189 226.7 81.9665 228.21 83.2022C225.876 85.1243 223.954 84.5751 222.581 81.6919C221.482 80.0443 221.07 78.2595 221.07 76.4746Z" fill="white"></path> <path opacity="0.656" fill-rule="evenodd" clip-rule="evenodd" d="M260.341 77.4357C262.813 78.1222 264.323 79.907 265.009 82.653C265.696 84.3005 265.421 85.6735 263.911 86.7719C261.577 84.1632 260.341 81.0054 260.341 77.4357Z" fill="white"></path> <path opacity="0.724" fill-rule="evenodd" clip-rule="evenodd" d="M243.726 79.4951C247.022 81.1427 248.67 83.8886 248.944 87.733C247.708 88.0076 246.747 87.5957 245.786 86.6346C244.001 84.3005 243.314 81.9665 243.726 79.4951Z" fill="white"></path> <path opacity="0.673" fill-rule="evenodd" clip-rule="evenodd" d="M100.237 83.614C101.335 83.614 102.022 84.1632 102.296 85.1243C101.61 87.8702 100.237 90.067 98.1771 91.8519C97.0786 91.44 96.392 90.7535 96.1174 89.7924C97.4905 87.7329 98.8636 85.6735 100.237 83.614Z" fill="white"></path> <path opacity="0.645" fill-rule="evenodd" clip-rule="evenodd" d="M61.9271 86.772C64.8106 87.0466 67.1449 88.0076 69.2045 89.9298C66.0464 91.1655 63.1629 92.9504 60.4167 95.1471C59.8674 94.7352 59.3182 94.4606 58.9062 94.0487C59.4555 91.3028 60.4167 88.9687 61.9271 86.772Z" fill="white"></path> <path opacity="0.707" fill-rule="evenodd" clip-rule="evenodd" d="M228.21 86.772C231.368 87.8704 233.428 90.2044 234.389 93.4995C233.291 95.1471 232.055 95.2844 230.819 94.0487C229.446 91.7147 228.485 89.3806 228.21 86.772Z" fill="white"></path> <path opacity="0.531" fill-rule="evenodd" clip-rule="evenodd" d="M1.09849 87.733C3.57008 87.5957 5.90436 87.733 8.37595 88.2822C9.74905 89.6552 9.33712 90.7535 7.27746 91.44C5.2178 92.1265 3.15814 92.1265 1.09849 91.44C-0.13731 90.2043 -0.13731 88.9687 1.09849 87.733Z" fill="white"></path> <path opacity="0.602" fill-rule="evenodd" clip-rule="evenodd" d="M13.4564 87.733C15.5161 87.5957 17.5758 87.733 19.6354 88.2822C21.0085 89.3806 21.0085 90.3416 19.6354 91.44C17.5758 92.1265 15.5161 92.1265 13.4564 91.44C12.2206 90.2043 12.2206 88.9687 13.4564 87.733Z" fill="white"></path> <path opacity="0.53" fill-rule="evenodd" clip-rule="evenodd" d="M24.8532 87.733C27.3248 87.5957 29.6591 87.733 32.1307 88.2822C33.5038 89.3806 33.5038 90.3416 32.1307 91.44C29.1098 92.4011 26.3636 91.8519 23.892 89.9297C24.1667 89.106 24.4413 88.4195 24.8532 87.733Z" fill="white"></path> <path opacity="0.583" fill-rule="evenodd" clip-rule="evenodd" d="M78.5417 87.733C78.4044 89.3806 77.7178 90.7535 76.482 91.8519C73.1866 92.1265 72.0881 91.0281 73.3239 88.2822C74.9716 87.733 76.7566 87.5957 78.5417 87.733Z" fill="white"></path> <path opacity="0.578" fill-rule="evenodd" clip-rule="evenodd" d="M84.7206 87.733C87.1922 87.5957 89.5265 87.733 91.9981 88.2822C93.3712 89.3806 93.3712 90.3416 91.9981 91.44C89.9384 92.1265 87.8788 92.1265 85.8191 91.44C84.858 90.3416 84.5833 89.106 84.7206 87.733Z" fill="white"></path> <path opacity="0.664" fill-rule="evenodd" clip-rule="evenodd" d="M264.46 88.8314C266.108 88.6941 267.344 89.3806 268.03 90.8908C269.678 93.4995 269.678 95.8335 268.03 98.1676C266.383 95.2843 265.147 92.1265 264.46 88.8314Z" fill="white"></path> <path opacity="0.714" fill-rule="evenodd" clip-rule="evenodd" d="M76.482 91.9892C77.7178 90.8908 78.4044 89.5179 78.5417 87.8703C79.2282 86.9092 80.3267 86.6346 81.6998 86.7719C81.9744 90.2044 80.7386 92.9503 78.1297 95.0098C76.8939 94.3233 76.3447 93.2249 76.482 91.9892Z" fill="white"></path> <path opacity="0.678" fill-rule="evenodd" clip-rule="evenodd" d="M248.944 90.8909C250.866 91.0282 252.102 91.9893 252.514 94.0487C252.926 95.4217 253.475 96.7947 254.025 98.1676C252.789 99.4033 251.69 99.4033 250.455 98.1676C250.043 96.1082 249.081 94.186 247.846 92.5384C248.532 91.9893 248.807 91.5774 248.944 90.8909Z" fill="white"></path> <path opacity="0.692" fill-rule="evenodd" clip-rule="evenodd" d="M92.9593 95.0098C94.0578 95.0098 95.0189 95.0098 96.1174 95.0098C95.8428 98.0303 94.8816 100.776 92.9593 103.248C91.8608 102.836 91.1742 102.149 90.8996 101.188C91.8608 99.266 92.5473 97.2065 92.9593 95.0098Z" fill="white"></path> <path opacity="0.668" fill-rule="evenodd" clip-rule="evenodd" d="M75.3835 97.0692C76.3447 97.3438 77.0313 98.0303 77.4432 99.1287C76.6193 101.6 75.5208 104.071 74.285 106.405C73.1866 105.994 72.5 105.307 72.2254 104.346C73.1866 101.737 74.1477 99.4033 75.3835 97.0692Z" fill="white"></path> <path opacity="0.635" fill-rule="evenodd" clip-rule="evenodd" d="M57.8078 98.1676C59.0436 98.1676 60.142 98.5795 60.9659 99.6779C60.2794 102.561 59.0436 105.032 57.3958 107.367C55.8854 104.346 56.0227 101.325 57.8078 98.1676Z" fill="white"></path> <path opacity="0.692" fill-rule="evenodd" clip-rule="evenodd" d="M233.428 98.1676C237.135 99.4033 238.92 102.149 238.646 106.405C237.547 106.405 236.586 106.405 235.488 106.405C234.801 103.659 234.115 100.914 233.428 98.1676Z" fill="white"></path> <path opacity="0.683" fill-rule="evenodd" clip-rule="evenodd" d="M269.541 100.227C272.287 102.836 272.974 105.856 271.6 109.563C268.854 106.817 268.168 103.797 269.541 100.227Z" fill="white"></path> <path opacity="0.664" fill-rule="evenodd" clip-rule="evenodd" d="M253.063 102.287C254.025 102.149 254.711 102.561 255.123 103.385C255.81 105.444 256.496 107.504 257.183 109.563C256.908 110.387 256.359 111.074 255.672 111.623C253.338 108.602 252.377 105.582 253.063 102.287Z" fill="white"></path> <path opacity="0.626" fill-rule="evenodd" clip-rule="evenodd" d="M89.8011 105.307C90.8996 105.444 91.5862 106.131 91.8608 107.366C91.1742 109.701 90.7623 112.172 90.7623 114.643C89.6638 114.643 88.7026 114.643 87.6042 114.643C87.7415 111.348 88.428 108.19 89.8011 105.307Z" fill="white"></path> <path opacity="0.675" fill-rule="evenodd" clip-rule="evenodd" d="M72.3627 108.465C73.8731 109.151 74.5597 110.387 74.4224 112.035C74.0104 113.957 73.5985 115.879 73.3239 117.664C72.2254 117.664 71.2642 117.664 70.1657 117.664C70.1657 114.506 70.8523 111.348 72.3627 108.465Z" fill="white"></path> <path opacity="0.728" fill-rule="evenodd" clip-rule="evenodd" d="M55.7481 109.426C57.2585 110.387 57.9451 112.035 57.8078 114.094C57.9451 116.153 57.2585 117.664 55.7481 118.762C54.5123 115.604 54.5123 112.584 55.7481 109.426Z" fill="white"></path> <path opacity="0.682" fill-rule="evenodd" clip-rule="evenodd" d="M237.547 109.426C238.646 109.426 239.607 109.426 240.706 109.426C240.568 111.76 240.98 113.957 241.804 116.153C241.667 117.252 241.117 118.076 240.294 118.762C238.234 116.016 237.273 112.858 237.547 109.426Z" fill="white"></path> <path opacity="0.909" fill-rule="evenodd" clip-rule="evenodd" d="M175.62 111.485C179.053 112.309 181.799 114.231 183.859 117.115C175.758 126.176 167.382 134.963 158.594 143.476C153.101 137.984 147.609 132.492 142.116 127C141.43 125.902 141.43 124.941 142.116 123.842C143.764 122.469 145.549 121.096 147.334 119.723C150.767 123.293 154.337 126.725 158.182 130.021C164.635 124.529 170.54 118.35 175.62 111.485Z" fill="#1F4260"></path> <path opacity="0.642" fill-rule="evenodd" clip-rule="evenodd" d="M270.639 112.584C271.738 112.584 272.699 112.584 273.797 112.584C273.66 114.918 274.072 117.115 274.896 119.311C274.759 120.684 274.072 121.508 272.836 121.92C271.051 119.037 270.365 115.879 270.639 112.584Z" fill="white"></path> <path opacity="0.706" fill-rule="evenodd" clip-rule="evenodd" d="M256.222 113.682C256.908 113.819 257.32 114.094 257.732 114.781C258.007 117.115 258.556 119.311 259.242 121.508C256.084 123.568 254.711 122.469 255.123 118.35C255.26 116.565 255.535 115.055 256.222 113.682Z" fill="white"></path> <path opacity="0.612" fill-rule="evenodd" clip-rule="evenodd" d="M86.7803 117.801C87.8788 117.801 88.84 117.801 89.9384 117.801C90.2131 121.096 89.5265 124.254 87.8788 127.137C86.5057 126.588 85.8191 125.627 85.8191 123.98C86.3684 121.92 86.7803 119.861 86.7803 117.801Z" fill="white"></path> <path opacity="0.705" fill-rule="evenodd" clip-rule="evenodd" d="M72.3627 130.158C71.2642 130.158 70.303 130.158 69.2045 130.158C69.0672 127.412 69.2045 124.666 69.7538 121.92C70.1657 121.508 70.715 121.096 71.2642 120.822C72.2254 123.842 72.6373 127 72.3627 130.158Z" fill="white"></path> <path opacity="0.65" fill-rule="evenodd" clip-rule="evenodd" d="M238.646 121.92C240.019 121.783 241.255 122.057 242.216 123.018C242.902 127.137 242.902 131.256 242.216 135.375C240.568 136.748 239.47 136.336 238.646 134.277C239.882 130.158 239.882 126.039 238.646 121.92Z" fill="white"></path> <path opacity="0.597" fill-rule="evenodd" clip-rule="evenodd" d="M259.242 129.06C258.144 130.432 257.183 130.432 256.084 129.06C256.908 125.215 258.007 125.215 259.242 129.06Z" fill="white"></path> <path opacity="0.676" fill-rule="evenodd" clip-rule="evenodd" d="M86.7803 130.158C88.84 131.256 89.9384 133.178 89.9384 135.787C89.9384 137.297 89.3892 138.396 88.428 139.357C86.2311 136.474 85.8191 133.453 86.7803 130.158Z" fill="white"></path> <path opacity="0.655" fill-rule="evenodd" clip-rule="evenodd" d="M70.303 136.336C71.4015 136.336 72.3627 136.336 73.4612 136.336C73.4612 138.396 73.4612 140.455 73.4612 142.515C72.3627 142.515 71.4015 142.515 70.303 142.515C70.303 140.455 70.303 138.396 70.303 136.336Z" fill="white"></path> <path opacity="0.731" fill-rule="evenodd" clip-rule="evenodd" d="M238.646 139.494C239.882 139.219 240.843 139.631 241.804 140.592C241.392 143.338 240.431 145.81 238.646 147.869C237.41 144.986 237.41 142.24 238.646 139.494Z" fill="white"></path> <path opacity="0.717" fill-rule="evenodd" clip-rule="evenodd" d="M255.123 139.494C256.222 139.494 257.183 139.494 258.281 139.494C258.144 142.24 257.869 144.986 257.183 147.732C256.084 147.732 255.123 147.732 254.025 147.732C254.437 144.986 254.848 142.24 255.123 139.494Z" fill="white"></path> <path opacity="0.736" fill-rule="evenodd" clip-rule="evenodd" d="M271.6 139.494C272.836 139.494 273.935 139.906 274.759 141.004C273.797 143.064 273.523 145.398 273.66 147.732C272.562 147.732 271.6 147.732 270.502 147.732C270.365 144.849 270.777 142.103 271.6 139.494Z" fill="white"></path> <path opacity="0.666" fill-rule="evenodd" clip-rule="evenodd" d="M87.7415 141.553C88.7027 141.416 89.6638 141.828 90.3504 142.652C90.7623 144.574 91.3116 146.496 91.8608 148.281C91.7235 149.654 91.0369 150.478 89.8011 150.89C88.1534 148.006 87.4669 144.849 87.7415 141.553Z" fill="white"></path> <path opacity="0.715" fill-rule="evenodd" clip-rule="evenodd" d="M71.2642 145.672C72.3627 145.672 73.3239 145.672 74.4223 145.672C74.8343 157.892 73.7358 157.892 71.2642 145.672Z" fill="white"></path> <path opacity="0.709" fill-rule="evenodd" clip-rule="evenodd" d="M55.7481 146.634C56.8466 146.634 57.8078 146.634 58.9063 146.634C59.0436 149.379 59.3182 152.125 60.0047 154.871C58.7689 155.146 57.8078 154.734 56.8466 153.773C55.8854 151.576 55.6108 149.105 55.7481 146.634Z" fill="white"></path> <path opacity="0.67" fill-rule="evenodd" clip-rule="evenodd" d="M235.488 150.753C236.998 150.615 238.097 151.302 238.646 152.812C237.547 155.283 236.312 157.755 235.076 160.089C234.115 159.402 233.703 158.578 233.565 157.48C234.252 155.283 234.938 153.087 235.488 150.753Z" fill="white"></path> <path opacity="0.64" fill-rule="evenodd" clip-rule="evenodd" d="M253.063 150.752C254.299 150.752 255.398 151.164 256.222 152.263C255.123 154.734 254.437 157.343 254.162 159.951C253.063 159.951 252.102 159.951 251.004 159.951C251.278 156.931 251.965 153.773 253.063 150.752Z" fill="white"></path> <path opacity="0.619" fill-rule="evenodd" clip-rule="evenodd" d="M269.541 150.753C271.051 150.615 272.15 151.302 272.699 152.812C272.012 154.871 271.326 156.931 270.639 158.99C269.815 159.951 268.717 160.226 267.481 160.089C268.03 156.931 268.717 153.91 269.541 150.753Z" fill="white"></path> <path opacity="0.692" fill-rule="evenodd" clip-rule="evenodd" d="M90.8996 153.91C91.9981 153.91 92.9593 153.91 94.0578 153.91C94.7443 156.656 95.4309 159.402 96.1174 162.148C95.0189 162.148 94.0578 162.148 92.9593 162.148C92.2727 159.402 91.5862 156.656 90.8996 153.91Z" fill="white"></path> <path opacity="0.713" fill-rule="evenodd" clip-rule="evenodd" d="M75.3835 156.931C76.3447 156.931 77.1686 157.48 77.4432 158.441C81.1506 165.169 79.5028 167.503 72.2254 165.169C72.2254 164.07 72.2254 163.109 72.2254 162.011C73.4612 162.285 74.4224 161.873 75.3835 160.912C74.0104 159.677 74.0104 158.304 75.3835 156.931Z" fill="white"></path> <path opacity="0.58" fill-rule="evenodd" clip-rule="evenodd" d="M61.9271 162.148C61.9271 163.247 62.339 164.345 63.0256 165.306C63.0256 166.816 62.339 167.365 60.9659 166.816C59.5928 164.757 58.6316 162.423 57.8078 160.089C60.142 157.48 61.5151 158.167 61.9271 162.148Z" fill="white"></path> <path opacity="0.672" fill-rule="evenodd" clip-rule="evenodd" d="M0 162.148C3.15814 161.874 6.31629 162.148 9.33712 163.246C9.0625 163.796 8.78788 164.345 8.23864 164.757C5.49242 165.306 2.74621 165.443 0 165.306C0 164.208 0 163.246 0 162.148Z" fill="white"></path> <path opacity="0.732" fill-rule="evenodd" clip-rule="evenodd" d="M12.358 162.148C15.1042 162.148 17.8504 162.148 20.5966 162.148C20.5966 163.246 20.5966 164.208 20.5966 165.306C17.8504 165.306 15.1042 165.306 12.358 165.306C12.358 164.208 12.358 163.246 12.358 162.148Z" fill="white"></path> <path opacity="0.699" fill-rule="evenodd" clip-rule="evenodd" d="M23.7547 162.148C26.9129 161.874 30.071 162.148 33.0919 163.246C31.9934 164.757 30.483 165.443 28.4233 165.306C25.6771 165.718 24.1667 164.619 23.7547 162.148Z" fill="white"></path> <path opacity="0.703" fill-rule="evenodd" clip-rule="evenodd" d="M40.232 162.148C40.9186 163.109 41.1932 164.07 41.3305 165.306C39.5455 165.306 37.8977 165.306 36.1127 165.306C36.1127 164.208 36.1127 163.246 36.1127 162.148C37.4858 162.148 38.8589 162.148 40.232 162.148Z" fill="white"></path> <path opacity="0.729" fill-rule="evenodd" clip-rule="evenodd" d="M48.608 162.148C51.3542 162.148 54.1004 162.148 56.8466 162.148C56.8466 163.246 56.8466 164.208 56.8466 165.306C54.375 165.306 52.0407 165.306 49.5691 165.306C48.608 164.482 48.3333 163.521 48.608 162.148Z" fill="white"></path> <path opacity="0.724" fill-rule="evenodd" clip-rule="evenodd" d="M61.9271 162.148C64.3987 161.874 66.8703 162.148 69.2045 163.246C67.6941 165.031 65.4972 165.718 63.0256 165.306C62.339 164.345 62.0644 163.246 61.9271 162.148Z" fill="white"></path> <path opacity="0.721" fill-rule="evenodd" clip-rule="evenodd" d="M231.368 162.148C232.33 162.148 233.153 162.697 233.428 163.658C232.741 166.404 231.368 168.601 229.309 170.386C228.485 170.111 227.798 169.562 227.249 168.876C228.485 166.542 229.858 164.345 231.368 162.148Z" fill="white"></path> <path opacity="0.688" fill-rule="evenodd" clip-rule="evenodd" d="M249.905 162.148C251.004 162.148 251.69 162.697 251.965 163.658C251.004 166.542 249.631 169.15 247.846 171.347C247.022 168.052 247.708 165.031 249.905 162.148Z" fill="white"></path> <path opacity="0.668" fill-rule="evenodd" clip-rule="evenodd" d="M265.421 163.246C266.52 163.246 267.481 163.246 268.58 163.246C268.305 165.718 267.618 168.189 266.52 170.523C265.696 171.484 264.598 171.759 263.362 171.622C264.048 168.738 264.735 165.992 265.421 163.246Z" fill="white"></path> <path opacity="0.714" fill-rule="evenodd" clip-rule="evenodd" d="M97.0786 164.208C99.8248 166.267 101.61 169.013 102.296 172.445C97.9025 171.21 96.1174 168.464 97.0786 164.208Z" fill="white"></path> <path opacity="0.742" fill-rule="evenodd" clip-rule="evenodd" d="M79.5028 168.327C82.2491 169.562 84.0341 171.759 84.7206 175.054C84.3087 175.603 84.0341 176.152 83.6222 176.564C80.876 174.505 79.5028 171.759 79.5028 168.327Z" fill="white"></path> <path opacity="0.617" fill-rule="evenodd" clip-rule="evenodd" d="M63.0256 169.425C65.4972 170.111 67.0076 171.896 67.6941 174.642C68.518 176.564 67.9688 177.937 66.1837 178.761C63.5748 175.878 62.4763 172.72 63.0256 169.425Z" fill="white"></path> <path opacity="0.675" fill-rule="evenodd" clip-rule="evenodd" d="M225.189 172.445C226.974 172.857 227.524 173.818 226.7 175.603C225.189 177.388 223.542 179.036 222.031 180.821C221.207 180.546 220.521 179.997 219.972 179.31C221.619 176.839 223.267 174.505 225.189 172.445Z" fill="white"></path> <path opacity="0.664" fill-rule="evenodd" clip-rule="evenodd" d="M243.726 173.544C244.962 173.269 245.923 173.681 246.884 174.642C245.511 177.388 243.864 179.722 241.667 181.919C240.843 181.644 240.156 181.095 239.607 180.409C241.255 178.075 242.628 175.878 243.726 173.544Z" fill="white"></path> <path opacity="0.684" fill-rule="evenodd" clip-rule="evenodd" d="M262.401 173.544C263.362 173.818 264.048 174.505 264.46 175.603C263.362 178.349 261.851 180.821 259.792 182.88C259.105 182.331 258.556 181.644 258.281 180.821C259.38 178.075 260.753 175.741 262.401 173.544Z" fill="white"></path> <path opacity="0.652" fill-rule="evenodd" clip-rule="evenodd" d="M103.258 174.505C107.652 175.741 109.437 178.487 108.475 182.743C105.043 180.683 103.258 177.937 103.258 174.505Z" fill="white"></path> <path opacity="0.668" fill-rule="evenodd" clip-rule="evenodd" d="M85.6818 178.624C86.643 178.486 87.6042 178.898 88.2907 179.722C90.2131 181.782 91.4489 184.253 91.8608 186.999C88.0161 185.763 85.9564 183.017 85.6818 178.624Z" fill="white"></path> <path opacity="0.675" fill-rule="evenodd" clip-rule="evenodd" d="M68.1061 180.683C71.2642 181.782 73.3239 184.116 74.285 187.411C73.1865 189.058 71.9508 189.196 70.715 187.96C69.3419 185.763 68.3807 183.292 68.1061 180.683Z" fill="white"></path> <path opacity="0.668" fill-rule="evenodd" clip-rule="evenodd" d="M216.951 181.782C218.187 181.782 219.285 182.194 220.109 183.292C218.187 185.763 215.715 187.685 212.831 188.921C211.733 187.96 211.596 186.999 212.282 185.763C214.342 185.077 215.852 183.704 216.951 181.782Z" fill="white"></path> <path opacity="0.672" fill-rule="evenodd" clip-rule="evenodd" d="M111.496 183.841C114.38 184.116 116.577 185.489 118.224 187.96C118.774 189.196 118.499 190.294 117.126 191.118C115.753 189.333 113.968 187.96 111.908 186.999C111.634 185.901 111.359 184.939 111.496 183.841Z" fill="white"></path> <path opacity="0.774" fill-rule="evenodd" clip-rule="evenodd" d="M237.547 183.841C239.332 184.253 239.882 185.214 239.058 186.999C237.822 189.333 235.9 190.706 233.428 191.118C233.977 188.235 235.35 185.763 237.547 183.841Z" fill="white"></path> <path opacity="0.697" fill-rule="evenodd" clip-rule="evenodd" d="M255.123 184.939C256.222 184.939 257.183 184.939 258.281 184.939C258.144 188.646 256.359 191.392 253.063 193.177C252.652 192.628 252.377 192.079 251.965 191.667C252.926 189.196 254.025 186.999 255.123 184.939Z" fill="white"></path> <path opacity="0.701" fill-rule="evenodd" clip-rule="evenodd" d="M92.9593 189.058C95.7055 190.294 98.1771 192.216 100.237 194.688C99.4129 195.923 98.4517 196.335 97.0786 195.786C94.607 194.138 93.2339 191.804 92.9593 189.058Z" fill="white"></path> <path opacity="0.669" fill-rule="evenodd" clip-rule="evenodd" d="M207.614 189.058C209.399 189.47 209.948 190.431 209.124 192.216C207.064 194.138 204.867 195.374 202.396 195.786C201.984 195.374 201.709 195.099 201.297 194.688C203.357 192.491 205.417 190.706 207.614 189.058Z" fill="white"></path> <path opacity="0.673" fill-rule="evenodd" clip-rule="evenodd" d="M120.833 191.118C123.442 191.392 125.777 192.216 128.111 193.726C129.347 194.962 129.347 196.198 128.111 197.296C124.541 196.335 122.069 194.276 120.833 191.118Z" fill="white"></path> <path opacity="0.763" fill-rule="evenodd" clip-rule="evenodd" d="M226.151 200.317C225.052 199.905 224.366 199.218 224.091 198.257C225.601 194.825 228.073 193.452 231.368 194.138C229.583 196.198 227.936 198.257 226.151 200.317Z" fill="white"></path> <path opacity="0.744" fill-rule="evenodd" clip-rule="evenodd" d="M247.846 195.237C248.944 195.237 249.905 195.237 251.004 195.237C250.317 198.944 248.258 201.415 244.825 202.514C245.374 199.768 246.335 197.434 247.846 195.237Z" fill="white"></path> <path opacity="0.651" fill-rule="evenodd" clip-rule="evenodd" d="M132.23 196.198C134.702 197.022 137.173 198.12 139.508 199.356C140.743 200.729 140.331 201.69 138.409 202.514C136.349 201.69 134.29 200.866 132.23 199.905C130.994 198.669 130.994 197.434 132.23 196.198Z" fill="white"></path> <path opacity="0.728" fill-rule="evenodd" clip-rule="evenodd" d="M195.256 196.198C196.766 195.923 198.139 196.335 199.375 197.296C197.178 199.768 194.432 201.141 191.136 201.415C190.862 200.18 191.274 199.218 192.235 198.257C193.333 197.845 194.432 197.159 195.256 196.198Z" fill="white"></path> <path opacity="0.661" fill-rule="evenodd" clip-rule="evenodd" d="M102.296 197.296C104.493 198.257 106.553 199.493 108.475 200.866C109.848 203.337 109.162 204.298 106.416 204.024C104.631 202.239 102.983 200.591 101.198 198.807C101.747 198.395 102.159 197.845 102.296 197.296Z" fill="white"></path> <path opacity="0.663" fill-rule="evenodd" clip-rule="evenodd" d="M183.859 200.317C185.232 200.317 186.605 200.317 187.978 200.317C187.978 201.415 187.978 202.376 187.978 203.475C185.232 204.024 182.486 204.161 179.74 204.024C178.366 203.337 178.366 202.651 179.74 201.964C181.387 201.69 182.76 201.141 183.859 200.317Z" fill="white"></path> <path opacity="0.637" fill-rule="evenodd" clip-rule="evenodd" d="M142.528 201.415C145.687 201.415 148.707 201.827 151.866 202.514C151.866 203.612 151.866 204.573 151.866 205.671C149.119 205.534 146.373 204.985 143.627 204.161C142.803 203.337 142.391 202.376 142.528 201.415Z" fill="white"></path> <path opacity="0.659" fill-rule="evenodd" clip-rule="evenodd" d="M173.561 202.376C175.071 202.239 176.17 202.925 176.719 204.436C173.835 206.083 170.814 206.77 167.382 206.495C167.382 205.397 167.382 204.436 167.382 203.337C169.579 203.749 171.638 203.475 173.561 202.376Z" fill="white"></path> <path opacity="0.71" fill-rule="evenodd" clip-rule="evenodd" d="M219.01 202.376C220.109 202.788 220.795 203.475 221.07 204.436C219.422 206.358 217.363 207.456 214.891 207.594C214.616 204.71 216.127 202.925 219.01 202.376Z" fill="white"></path> <path opacity="0.639" fill-rule="evenodd" clip-rule="evenodd" d="M154.886 203.475C157.633 203.337 160.379 203.475 163.125 204.024C163.537 204.436 163.949 204.985 164.223 205.534C161.477 206.77 158.731 206.907 155.985 206.083C155.161 205.397 154.886 204.436 154.886 203.475Z" fill="white"></path> <path opacity="0.709" fill-rule="evenodd" clip-rule="evenodd" d="M240.705 203.475C242.491 203.887 243.04 204.848 242.216 206.632C240.843 208.417 239.058 209.79 236.998 210.751C236.449 210.339 235.9 210.065 235.488 209.653C237.273 207.594 238.92 205.534 240.705 203.475Z" fill="white"></path> <path opacity="0.677" fill-rule="evenodd" clip-rule="evenodd" d="M111.496 204.436C114.929 205.122 117.675 206.77 119.735 209.653C115.478 210.614 112.732 208.829 111.496 204.436Z" fill="white"></path> <path opacity="0.686" fill-rule="evenodd" clip-rule="evenodd" d="M209.673 207.594C210.772 207.594 211.733 207.594 212.831 207.594C213.106 208.829 212.694 209.79 211.733 210.751C209.673 211.85 207.614 212.811 205.554 213.909C204.455 212.948 204.318 211.987 205.005 210.751C206.79 209.79 208.3 208.692 209.673 207.594Z" fill="white"></path> <path opacity="0.661" fill-rule="evenodd" clip-rule="evenodd" d="M90.8996 208.692C94.1951 209.79 96.9413 211.712 99.1383 214.321C98.589 215.008 97.9025 215.557 97.0786 215.831C93.5085 214.733 91.4489 212.262 90.8996 208.692Z" fill="white"></path> <path opacity="0.727" fill-rule="evenodd" clip-rule="evenodd" d="M121.932 210.751C125.227 211.026 127.973 212.399 130.17 214.87C127.699 216.106 125.227 215.694 122.893 213.772C122.069 212.948 121.657 211.85 121.932 210.751Z" fill="white"></path> <path opacity="0.696" fill-rule="evenodd" clip-rule="evenodd" d="M199.375 212.811C201.435 213.635 201.709 214.733 200.473 216.381C198.002 217.754 195.668 217.891 193.196 216.93C195.118 215.282 197.178 213.909 199.375 212.811Z" fill="white"></path> <path opacity="0.606" fill-rule="evenodd" clip-rule="evenodd" d="M101.198 215.831C104.905 217.067 107.377 219.538 108.475 223.108C105.043 222.422 102.296 220.774 100.237 217.891C100.511 217.204 100.923 216.518 101.198 215.831Z" fill="white"></path> <path opacity="0.622" fill-rule="evenodd" clip-rule="evenodd" d="M133.191 215.831C136.899 215.42 139.92 216.518 142.528 218.989C139.782 220.088 137.036 219.95 134.29 218.44C133.466 217.754 133.191 216.93 133.191 215.831Z" fill="white"></path> <path opacity="0.644" fill-rule="evenodd" clip-rule="evenodd" d="M185.919 216.93C187.292 216.93 188.665 216.93 190.038 216.93C190.038 218.028 190.038 218.989 190.038 220.088C186.88 221.186 183.859 221.186 180.701 220.088C182.211 218.577 183.996 217.479 185.919 216.93Z" fill="white"></path> <path opacity="0.652" fill-rule="evenodd" clip-rule="evenodd" d="M152.827 218.989C151.316 219.676 150.355 220.637 149.669 222.147C146.922 222.422 145.412 221.461 145 218.989C147.609 218.577 150.08 218.577 152.827 218.989Z" fill="white"></path> <path opacity="0.665" fill-rule="evenodd" clip-rule="evenodd" d="M174.522 218.989C175.62 218.852 176.581 218.989 177.68 219.538C179.053 220.225 179.053 220.911 177.68 221.598C175.071 222.834 172.325 223.383 169.441 223.108C169.441 222.01 169.441 221.049 169.441 219.95C171.364 220.225 173.149 219.95 174.522 218.989Z" fill="white"></path> <path opacity="0.667" fill-rule="evenodd" clip-rule="evenodd" d="M221.07 218.989C222.169 218.989 223.13 218.989 224.228 218.989C222.992 222.971 220.246 225.03 215.99 225.168C215.715 223.932 216.127 222.971 217.088 222.01C218.736 221.461 220.109 220.5 221.07 218.989Z" fill="white"></path> <path opacity="0.697" fill-rule="evenodd" clip-rule="evenodd" d="M156.946 219.95C159.692 219.95 162.438 219.95 165.185 219.95C165.185 221.049 165.185 222.01 165.185 223.108C162.438 223.108 159.692 223.108 156.946 223.108C156.946 222.01 156.946 221.049 156.946 219.95Z" fill="white"></path> <path opacity="0.711" fill-rule="evenodd" clip-rule="evenodd" d="M110.535 223.108C113.83 223.383 116.577 224.756 118.774 227.227C116.302 228.463 113.83 228.051 111.496 226.129C110.672 225.305 110.26 224.344 110.535 223.108Z" fill="white"></path> <path opacity="0.667" fill-rule="evenodd" clip-rule="evenodd" d="M209.673 225.168C211.184 224.893 212.557 225.305 213.793 226.266C211.321 229.424 208.163 230.385 204.455 229.424C206.103 227.639 207.751 226.266 209.673 225.168Z" fill="white"></path> <path opacity="0.766" fill-rule="evenodd" clip-rule="evenodd" d="M121.932 228.325C126.738 227.914 129.484 229.973 130.17 234.504C128.111 234.504 126.051 234.504 123.991 234.504C123.305 232.444 122.618 230.385 121.932 228.325Z" fill="white"></path> <path opacity="0.631" fill-rule="evenodd" clip-rule="evenodd" d="M199.375 229.286C202.808 229.836 203.22 230.934 200.473 232.856C191.136 234.641 190.862 233.405 199.375 229.286Z" fill="white"></path> <path opacity="0.727" fill-rule="evenodd" clip-rule="evenodd" d="M3.15814 231.346C5.90436 231.346 8.65057 231.346 11.3968 231.346C11.3968 232.444 11.3968 233.405 11.3968 234.504C8.65057 234.504 5.90436 234.504 3.15814 234.504C3.15814 233.405 3.15814 232.444 3.15814 231.346Z" fill="white"></path> <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M15.5161 231.346C18.2623 231.346 21.0085 231.346 23.7547 231.346C23.7547 232.444 23.7547 233.405 23.7547 234.504C21.0085 234.641 18.2623 234.504 15.5161 233.955C14.4176 233.131 14.4176 232.307 15.5161 231.346Z" fill="white"></path> <path opacity="0.648" fill-rule="evenodd" clip-rule="evenodd" d="M26.9129 231.346C30.071 231.346 33.0919 231.346 36.25 231.346C36.25 232.444 36.25 233.405 36.25 234.504C33.0919 234.504 30.071 234.504 26.9129 234.504C26.9129 233.405 26.9129 232.444 26.9129 231.346Z" fill="white"></path> <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M39.2708 231.346C51.6288 232.444 51.6288 233.405 39.2708 234.504C39.2708 233.405 39.2708 232.444 39.2708 231.346Z" fill="white"></path> <path opacity="0.701" fill-rule="evenodd" clip-rule="evenodd" d="M51.6288 231.346C54.375 231.346 57.1212 231.346 59.8674 231.346C59.8674 232.444 59.8674 233.405 59.8674 234.504C57.1212 234.641 54.375 234.504 51.6288 233.955C50.5303 233.131 50.5303 232.307 51.6288 231.346Z" fill="white"></path> <path opacity="0.647" fill-rule="evenodd" clip-rule="evenodd" d="M63.0256 231.346C66.1837 231.346 69.2045 231.346 72.3627 231.346C72.3627 232.444 72.3627 233.405 72.3627 234.504C69.2045 234.504 66.1837 234.504 63.0256 234.504C63.0256 233.405 63.0256 232.444 63.0256 231.346Z" fill="white"></path> <path opacity="0.645" fill-rule="evenodd" clip-rule="evenodd" d="M75.3835 231.346C78.5417 231.346 81.5625 231.346 84.7206 231.346C84.7206 232.444 84.7206 233.405 84.7206 234.504C81.5625 234.504 78.5417 234.504 75.3835 234.504C75.3835 233.405 75.3835 232.444 75.3835 231.346Z" fill="white"></path> <path opacity="0.646" fill-rule="evenodd" clip-rule="evenodd" d="M111.496 231.346C114.654 231.346 117.675 231.346 120.833 231.346C120.833 232.444 120.833 233.405 120.833 234.504C117.675 234.504 114.654 234.504 111.496 234.504C111.496 233.405 111.496 232.444 111.496 231.346Z" fill="white"></path> <path opacity="0.647" fill-rule="evenodd" clip-rule="evenodd" d="M133.191 232.444C136.899 232.032 139.92 233.131 142.528 235.602C139.782 236.426 137.036 236.289 134.29 235.053C133.466 234.229 133.191 233.405 133.191 232.444Z" fill="white"></path> <path opacity="0.688" fill-rule="evenodd" clip-rule="evenodd" d="M184.957 233.405C186.742 233.405 188.39 233.405 190.175 233.405C190.175 234.504 190.175 235.465 190.175 236.563C187.429 236.975 184.683 237.25 181.937 237.662C181.937 236.563 181.937 235.602 181.937 234.504C183.172 234.641 184.134 234.366 184.957 233.405Z" fill="white"></path> <path opacity="0.687" fill-rule="evenodd" clip-rule="evenodd" d="M158.045 235.465C160.516 235.328 162.85 235.465 165.322 236.014C165.734 236.426 166.146 236.975 166.42 237.524C163.262 238.897 160.241 238.897 157.083 237.524C157.358 236.838 157.77 236.151 158.045 235.465Z" fill="white"></path> <path opacity="0.689" fill-rule="evenodd" clip-rule="evenodd" d="M169.441 235.465C172.599 235.19 175.758 235.465 178.778 236.563C178.504 237.112 178.229 237.662 177.68 238.074C174.934 238.623 172.188 238.76 169.441 238.623C169.441 237.524 169.441 236.563 169.441 235.465Z" fill="white"></path> </g> <defs> <clipPath id="clip0_14_9"> <rect width="290" height="254" fill="white"></rect> </clipPath> </defs> </svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/WheelWhite.astro", void 0);

const $$ArrowUp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-dashed" transform="rotate(180, 0, 0)"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 5v.5m0 3v1.5m0 3v6"></path> <path d="M18 13l-6 6"></path> <path d="M6 13l6 6"></path> </svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/ArrowUp.astro", void 0);

const $$Astro$3 = createAstro();
const $$Section2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section2;
  const language = Astro2.props.language;
  return renderTemplate`${maybeRenderHead()}<section class="section section2"> <div class="wheel-white"> ${renderComponent($$result, "WheelWhite", $$WheelWhite, {})} </div> <div class="vertical-lines"></div> <div class="grid"> <div class="title"> ${renderComponent($$result, "Eye", $$Eye, { "fill": "#ff9800" })} <h2 class="glitch">${language === "es" ? "WORK" : "WORK"}</h2> <div class="work-text"> ${language === "es" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span>Código</span> <span>Creatividad</span> <span>Diseño Web</span> <span>Diseño UI/UX</span> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span>Code</span> <span>Creativity</span> <span>Web Design</span> <span>UI/UX Design</span> ` })}`} </div> </div> <div class="list"> <h2> ${language === "es" ? "Sobre m\xED" : "About me"} </h2> <p> ${language === "es" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
Mi nombre es Roberto, soy diseñador y desarrollador web frontend con <strong>más de 10 años de 
              experiencia.</strong> De Buenos Aires, Argentina.
<br>
He trabajado en Agencias de diseño y marketing, actualmente trabajo
              de forma independiente.
<br>
Cuento con amplia experiencia en el diseño y desarrollo de sitios y
              aplicaciones web.
<br>
Mi objetivo es ayudar a empresas y profesionales a crear sus
              productos digitales brindando mis conocimientos y creatividad.
<br>
Comprometido y responsable con el trabajo, busco que el cliente quede satisfecho con el resultado final.
` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
My name is Roberto, I'm a web frontend designer and developer with <strong>more than 10 years of experience</strong> in web development.
              I'm from Buenos Aires, Argentina.
<br>I have worked for design agencies and marketing, currently I
              work independently.
<br>I have extensive experience in designing and developing
              websites and applications.
<br>
My goal is to help companies and professionals create their digital
              products, providing my knowledge and creativity.
<br>
Committed and responsible with the work, I seek that the client is satisfied with the final result.
` })}`} </p> <h3> ${language === "es" ? "Aqu\xED tienes una selecci\xF3n de mis proyectos m\xE1s recientes" : "Here is a selection of my latest projects"} </h3> ${renderComponent($$result, "WorkList", $$WorkList, { "language": language })} </div> <!-- <div class="more"><span>VIEW MORE PROJECTS<ArrowDown /></span></div> --> </div> </section> <div class="more-container"> <div class="more"> <span> ${language === "es" ? "VER M\xC1S PROYECTOS" : "VIEW MORE PROJECTS"}${renderComponent($$result, "ArrowUp", $$ArrowUp, {})} </span> </div> </div> <style>
  :root {
    --lines: #ffffff45;
    --bg-color: #143d60;
  }
  .section2 {
    background: var(--bg-color);
    border-top: 1px solid #ffffff9b;
    height: fit-content;
    min-height: 100dvh;
    position: relative;
    overflow: clip;
    transition: height 0.2s ease-in-out;
    transition-behavior: allow-discrete;
    @starting-style {
      height: 100dvh;
    }
    /* padding: 60px 0; */
    &::before {
      /* content: "";
      position: absolute;
      z-index: 5;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: #143d6070;
      backdrop-filter: blur(3px);
      pointer-events: none; */
    }
    & .vertical-lines {
      position: absolute;
      z-index: 10;
      top: 0;
      left: calc(50% + 7px);
      transform: translateX(-50%);
      width: 1250px;
      height: 100%;
      border-left: 1px solid var(--lines);
      border-right: 1px solid var(--lines);
      pointer-events: none;
    }
    & .grid {
      position: relative;
      display: grid;
      grid-template-columns: auto 1fr;
      width: 1250px;
      max-width: 100%;
      left: 7px;
      margin: 0 auto;
      height: 100%;
      min-height: 100dvh;
      @media (max-width: 767px) {
        min-height: 120dvh; 
      }
      & .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 145px;
        height: 100%;
        position: relative;
        border-right: 1px solid #ffffff45;
        @media (max-width: 767px) {
            border: none;
          }
        &::after {
          content: "";
          position: absolute;
          z-index: 1;
          width: 7px;
          height: 50px;
          background: #ffffff45;
          bottom: 0;
          right: -8px;
          animation: up 5s 10s ease-out infinite;
        }

        .glitch {
          font-size: 200px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -7px;
          rotate: -90deg;
          margin: 0;
          position: relative;
          z-index: 2;
          line-height: 0;
          left: -4px;
          @media (max-width: 767px) {
            display: none;
          }
        }
        .glitch-clone {
          animation:glitch 10s linear 5;
        }
        .work-text {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 20px;
          position: absolute;
          bottom: 10px;
          @media (max-width: 767px) {
            top: 0;
            bottom: auto;
            left: 20px;
          }
          & span {
            display: block;
            color: #ff9800;
            font-size: 15px;
            margin: 0 10px;
            font-weight: 600;
            text-transform: uppercase;
          }
        }
      }
      & .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        max-width: 710px;
        width: calc(90vw - 145px);
        padding: 80px 0 80px 0;
        position: relative;
        z-index: 15;
        & p {
          text-align: left;   
          text-wrap: pretty;      
          align-self: start;
          color: #fff;
          margin-bottom: 32px;
          font-size: 16px; 
          line-height: 1.75;
          color: #fff;
          opacity: 0.95;
          letter-spacing: 0.025rem;
          font-weight: 200;
        }
        & br {
          margin-bottom: 16px;
        }
        & h2 {
          text-align: left;         
          align-self: start;
          color: #fff;
          margin-bottom:0px;
          font-weight: 600;
        }
        & h3 {
          text-align: left;
          align-self: start;
          color: #fff;
          margin-bottom: 32px;
          font-weight: 600;
          font-size: 24px;
        }
        @media (max-width: 767px) {
          width: calc(100vw - 60px);
          transform: translateX(-120px);
          padding-bottom: 40px;
          padding-top: 120px;
        }
      }
    }
  }
  & .more-container {
    background: #143d60;
    margin-top: 0px;
    position: relative;
    z-index: 20;
    height: 0;
    & .more {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0;
      width: 100%;
      max-width: 1250px;
      cursor: pointer;
      margin: 0 auto 0 auto;
      position: relative;
      bottom: 0;
      z-index: 5;
      left: 7px;
      grid-column: span 2;
      @media (max-width: 767px) {
        width: 100vw;
        margin: 0;
        left: 0px;
      }
      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        inset: 0;
        top: 50%;
        background: var(--lines);
        height: 1px;
      }

      & span {
        color: #ffffffd1;
        font-size: 16px;
        text-align: center;
        padding: 10px 30px;
        display: flex;
        border: 1px solid var(--lines);
        border-radius: 8px;
        z-index: 5;
        background-color: var(--bg-color);
        transition: background-color 0.3s ease;
        display: none;
        & svg {
          /* transform: rotate(180deg); */
          margin-left: 10px;
        }    
        &:hover { 
          color: #fff; 
          background-color: #325675; 
          & svg { 
            animation: down 2.5s ease-in infinite; 
          }
        }
        @media (max-width: 767px) {
          background-color: #ff9800;
          color: #111;
        }
      }
    }
    .more.showing-all {
      pointer-events: none;
      opacity: 0.25;
      & span {
        @media (max-width: 767px) {
          background-color: var(--bg-color);
          color: #ffffffd1;
        }
      }
      & svg {
        animation: none;
      }
    }
  }
  .section2.showing-more {
    height: auto;
    & .more {
      display: none;
    }
    & .list {
      padding: 120px 0 80px 0;
    }
    & .work-item {
      display: flex !important;
    }
  }
  .section2 .eye {
    --width: 70px;
    position: absolute;
    top: 80px;
    left: calc(50% - calc(var(--width) / 2));
    z-index: 5;
    border: 1px solid #ffffff45;
    border-radius: 50%;
    width: var(--width);
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .section2 .wheel-white {
    position: absolute;
    bottom: -9%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: -2%;
    width: fit-content;
    animation: float-wheel 5s ease-out infinite;
    opacity: 0.15;
    scale: 2;
    @media (max-width: 1024px) {
      bottom: 0;
      width: 130px;
    }
  }
  @keyframes down {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(3px);
    }
    20% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(3px);
    }
    40% {
      transform: translateY(0);
    }  
    /* El resto es para esperar */   
    100% {
      transform: translateY(0); 
    }
  }
  @keyframes up {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes glitch {
    0% {
      transform: translateX(0);
    }
    0.5% { 
      transform: translate(25px, 0px); 
      filter:blur(5px);   
    }
    1% {
      transform: translateX(0);
      filter:blur(0px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style> ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Section2.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Section2.astro", void 0);

const photo = new Proxy({"src":"/_astro/face-mask.TMLiywec.webp","width":400,"height":306,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/wamp/www/robertostringa/2025/web/frontend-web/src/assets/face-mask.webp";
							}
							
							return target[name];
						}
					});

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.996 1.284a10.986 10.986 0 0 0-3.472 21.412c.548.095.722-.227.722-.517c0-.263.006-.991 0-1.91c-3.057.662-3.688-1.448-3.688-1.448a2.9 2.9 0 0 0-1.22-1.607c-.997-.682.075-.669.075-.669a2.3 2.3 0 0 1 1.683 1.131a2.34 2.34 0 0 0 3.197.914a2.34 2.34 0 0 1 .697-1.464c-2.439-.279-5.004-1.22-5.004-5.432a4.25 4.25 0 0 1 1.132-2.948a3.94 3.94 0 0 1 .107-2.907s.924-.295 3.02 1.128a10.4 10.4 0 0 1 5.503 0c2.102-1.422 3.018-1.128 3.018-1.128c.405.92.444 1.96.109 2.907a4.24 4.24 0 0 1 1.13 2.95c0 4.223-2.569 5.15-5.016 5.42a2.6 2.6 0 0 1 .752 2.026v3.041c0 .294.177.619.735.512a10.986 10.986 0 0 0-3.48-21.411"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/Github.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="currentColor" d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394M29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/Linkedin.astro", void 0);

const $$ArrowDown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-dashed"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5v.5m0 3v1.5m0 3v6"></path><path d="M18 13l-6 6"></path><path d="M6 13l6 6"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section2/ArrowDown.astro", void 0);

const $$Html = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Html.astro", void 0);

const $$Css = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Css.astro", void 0);

const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Javascript.astro", void 0);

const $$Git = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Git.astro", void 0);

const $$AstroIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="882.997" x2="638.955" y1="27.113" y2="866.902" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#000014"></stop><stop offset="1" stop-color="#150426"></stop></linearGradient><linearGradient id="b" x1="1001.68" x2="790.326" y1="652.45" y2="1094.91" gradientTransform="scale(.1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff1639"></stop><stop offset="1" stop-color="#ff1639" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#a)" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"></path><path fill="#ff5d01" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"></path><path fill="url(#b)" d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/AstroIcon.astro", void 0);

const $$Illustrator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#FAA625" d="M47.955 69h15.371c-2.646-9-5.252-17.32-7.816-25.776C53.022 51.71 50.498 60 47.955 69zm76.157-68H2.873C.687 1 1 1.476 1 3.585v121.394C1 127.086.687 127 2.719 127h121.547c2.031 0 2.734.086 2.734-2.022V3.739C127 1.476 126.298 1 124.112 1zM77.298 96c-1.637 0-3.28-.133-4.909-.016-1.175.088-1.568-.406-1.881-1.426-1.514-4.931-3.123-9.86-4.638-14.79-.305-.992-.741-1.354-1.816-1.341-5.523.064-11.049.058-16.573-.007-1.163-.014-1.698.296-2.03 1.45-1.406 4.904-2.944 9.768-4.365 14.667-.308 1.062-.776 1.433-1.904 1.404-3.318-.083-6.641-.032-10.274-.032.959-3.045 1.829-5.861 2.729-8.665 5.514-17.2 11.047-34.4 16.521-51.611.382-1.198.913-1.567 2.143-1.54 3.886.086 7.775.022 11.663 0 .727-.005 1.223.038 1.489.864 6.505 20.116 13.033 40.356 19.555 60.47.028.091.01.573.025.573h-5.735zM98 96H86V51h12v45zm-6.35-51.071c-3.665-.005-6.289-2.528-6.314-6.07-.024-3.532 2.707-6.159 6.406-6.163 3.728-.004 6.355 2.537 6.384 6.171.026 3.545-2.667 6.068-6.476 6.062z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Illustrator.astro", void 0);

const $$Photoshop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#44b2ff" d="M50.246 41.616c-3.682-.925-7.369-.628-11.26-.022 0 6.805-.014 13.427.037 20.05.002.339.511.929.841.974 4.243.573 8.463.619 12.431-1.315 4.105-2 6.196-6.182 5.654-11.092-.492-4.471-3.139-7.448-7.703-8.595zM127 63.963V3.285c0-2.096.023-2.285-2.012-2.285H3.479C1.5 1 1 1.19 1 3.186v121.509c0 2.018.252 2.021 2.209 2.021 40.555.001 81.231-.009 121.786.037 1.573.002 1.995-.417 1.991-1.959-.054-20.277.014-40.556.014-60.831zm-70.648 5.84C50.795 71.785 45 71.896 39 71.431V94H28v-1.402c0-18.895-.087-37.788-.14-56.682-.006-1.569.243-2.327 2.011-2.507 8.332-.852 16.617-1.81 24.902.133 8.906 2.087 14.041 7.975 14.431 16.11.483 10.074-3.944 16.974-12.852 20.151zm44.31 12.754c-.424 5.771-3.678 9.56-9.015 11.392-7.142 2.452-14.245 1.883-21.225-.891-1.143-.455-1.364-1.031-.987-2.196.687-2.126 1.19-4.312 1.72-6.286 2.951.866 5.757 1.947 8.664 2.458 2.053.361 4.272.149 6.359-.178 1.871-.294 3.217-1.564 3.524-3.572.312-2.041-.303-3.809-2.105-4.895-1.432-.862-3.01-1.479-4.523-2.202-2.433-1.163-5.026-2.075-7.27-3.53-8.831-5.727-5.956-16.383-.063-20.396 3.153-2.146 6.642-3.098 10.377-3.229 4.393-.154 8.623.604 12.778 2.623l-2.195 7.789c-1.74-.616-3.36-1.416-5.07-1.734-2.029-.378-4.157-.589-6.205-.422-2.746.225-4.354 2.12-4.354 4.47 0 1.392.528 2.57 1.689 3.245 1.666.969 3.434 1.768 5.186 2.579 1.896.877 3.898 1.551 5.723 2.552 4.87 2.67 7.405 6.8 6.992 12.423z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Photoshop.astro", void 0);

const $$Woo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#7f54b3" d="M116.3 89.1H11.7C5.2 89.1 0 83.9 0 77.4v-40C0 31 5.2 25.8 11.7 25.8h104.7c6.4 0 11.7 5.2 11.7 11.7v40c-.1 6.4-5.3 11.6-11.8 11.6z"></path><path fill="#FFF" d="M13.8 76.7s2.8 11.8 8.5 3.9 11.2-20.3 11.2-20.3.4-3.1 2 3.7S44 80 44 80s6.3 7.9 8.9-.4c-1-11 2.8-31 6.7-40.6 1.6-8.5-7.3-6.1-8.1-4.1s-6.3 14.8-6.7 28.2c0 0-4.7-12.8-5.1-17.4-.4-4.7-5.3-5.9-8.1-1.4S20.3 66.2 20.3 66.2l-5.5-28.4s-5.5-7.3-8.7 1.6c0 0 5.7 34.9 7.7 37.3zM87 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.7-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.3 2.3 4.1 7.4 3.8 11.4zM118.9 45.7c-8.5-14.2-21.1-3.4-21.1-3.4s-9.6 11.1-5.3 26.2c6.9 14.9 16.6 8.3 19.2 7.1 2.6-1.3 14.1-14.3 7.2-29.9zm-6.5 12.5c0 5.9-4.9 11.4-8.9 10.2-2.2-1.3-3.6-4.8-3.6-10.8 2-9.7 6.4-11 8.7-10.8 4.2 2.3 4 7.4 3.8 11.4z"></path><path fill="#7f54b3" d="M61.3 89.1l22.3 13.1-4.7-13.1-12.8-3.6z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Woo.astro", void 0);

const $$Figma = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Figma.astro", void 0);

const $$Elementor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" ?-->${maybeRenderHead()}<svg style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x31_09-elementor"><g><path d="M462.999,26.001H49c-12.731,0-22.998,10.268-22.998,23v413.998c0,12.732,10.267,23,22.998,23    h413.999c12.732,0,22.999-10.268,22.999-23V49.001C485.998,36.269,475.731,26.001,462.999,26.001" style="fill:#D63362;"></path><rect height="204.329" style="fill:#FFFFFF;" width="40.865" x="153.836" y="153.836"></rect><rect height="40.866" style="fill:#FFFFFF;" width="122.7" x="235.566" y="317.299"></rect><rect height="40.865" style="fill:#FFFFFF;" width="122.7" x="235.566" y="235.566"></rect><rect height="40.865" style="fill:#FFFFFF;" width="122.7" x="235.566" y="153.733"></rect></g></g><g id="Layer_1"></g></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Elementor.astro", void 0);

const $$Wordpress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" ?-->${maybeRenderHead()}<svg id="Lager_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><g><circle cx="64" cy="64" r="50" style="fill:#21759B;"></circle></g></g><path d="M36.5,64c0,10.9,6.3,20.3,15.5,24.7L38.9,52.8C37.4,56.2,36.5,60,36.5,64z M82.5,62.6   c0-3.4-1.2-5.7-2.3-7.6c-1.4-2.3-2.7-4.2-2.7-6.4c0-2.5,1.9-4.9,4.6-4.9c0.1,0,0.2,0,0.4,0c-4.9-4.5-11.4-7.2-18.5-7.2   c-9.6,0-18,4.9-22.9,12.4c0.6,0,1.3,0,1.8,0c2.9,0,7.3-0.4,7.3-0.4c1.5-0.1,1.7,2.1,0.2,2.3c0,0-1.5,0.2-3.1,0.3l10,29.7l6-18   L59,51.1c-1.6-0.1-3-0.2-3-0.2c-1.5-0.1-1.3-2.4,0.2-2.3c0,0,4.5,0.4,7.2,0.4c2.9,0,7.3-0.4,7.3-0.4c1.5-0.1,1.7,2.1,0.2,2.3   c0,0-1.5,0.2-3.1,0.3l9.9,29.5l2.7-9.1C81.8,67.9,82.5,65,82.5,62.6z M64.5,66.4l-8.2,23.9c2.5,0.7,5.1,1.1,7.8,1.1   c3.2,0,6.3-0.6,9.1-1.6c-0.1-0.1-0.1-0.2-0.2-0.4L64.5,66.4z M88.1,50.8c0.1,0.9,0.2,1.8,0.2,2.8c0,2.8-0.5,5.9-2.1,9.8l-8.4,24.2   C86,83,91.5,74.1,91.5,64C91.5,59.2,90.2,54.7,88.1,50.8z M32,64c0,17.6,14.4,32,32,32s32-14.4,32-32S81.6,32,64,32S32,46.4,32,64z    M33.5,64c0-16.8,13.7-30.5,30.5-30.5S94.5,47.2,94.5,64S80.8,94.5,64,94.5S33.5,80.8,33.5,64z" style="fill:#FFFFFF;"></path></g></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/tech/Wordpress.astro", void 0);

const $$Astro$2 = createAstro();
const $$MoreInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MoreInfo;
  const language = Astro2.props.language;
  return renderTemplate`${maybeRenderHead()}<div class="box-more-info-mask" data-astro-cid-uslvflcc></div> <div class="box-more-info" data-astro-cid-uslvflcc> <div class="close" data-astro-cid-uslvflcc>${renderComponent($$result, "Close", $$Close, { "data-astro-cid-uslvflcc": true })}</div> <div class="content" data-astro-cid-uslvflcc> <h2 data-astro-cid-uslvflcc> ${language === "es" ? "M\xE1s sobre m\xED" : "More about me"} </h2> <p data-astro-cid-uslvflcc> ${language === "es" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-uslvflcc": true }, { "default": ($$result2) => renderTemplate`
Mi nombre es Roberto, soy diseñador y desarrollador web frontend con más de 10 años de 
            experiencia en desarrollo web.
<br data-astro-cid-uslvflcc>
He trabajado en Agencias de diseño y marketing, actualmente trabajo
            de forma independiente.
<br data-astro-cid-uslvflcc>
Cuento con amplia experiencia en el diseño y desarrollo de sitios y
            aplicaciones web.
<br data-astro-cid-uslvflcc>
Mi objetivo es ayudar a empresas y profesionales a crear sus
            productos digitales brindando mis conocimientos y creatividad.
` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-uslvflcc": true }, { "default": ($$result2) => renderTemplate`
My name is Roberto, I'm a web frontend designer and developer with over 10 years of experience in web development.
<br data-astro-cid-uslvflcc>I have worked for design agencies and marketing, currently I
            work independently.
<br data-astro-cid-uslvflcc>I have extensive experience in designing and developing
            websites and applications.
<br data-astro-cid-uslvflcc>
My goal is to help companies and professionals create their digital
            products, providing my knowledge and creativity.
` })}`} </p> <br data-astro-cid-uslvflcc> <br class="mobile-hidden" data-astro-cid-uslvflcc> <h3 data-astro-cid-uslvflcc>${language === "es" ? "Tecnolog\xEDas" : "Technologies"}</h3> <div class="grid-tech" data-astro-cid-uslvflcc> ${renderComponent($$result, "Html", $$Html, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "CSS", $$Css, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Javascript", $$Javascript, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Git", $$Git, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Wordpress", $$Wordpress, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Elementor", $$Elementor, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Woo", $$Woo, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Illustrator", $$Illustrator, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Photoshop", $$Photoshop, { "data-astro-cid-uslvflcc": true })} ${renderComponent($$result, "Figma", $$Figma, { "data-astro-cid-uslvflcc": true })} </div> </div> </div> ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/MoreInfo.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/MoreInfo.astro", void 0);

const $$Envelop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-mail-opened"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.872 14.287l6.522 6.52a2.996 2.996 0 0 1 -2.218 1.188l-.176 .005h-14a2.995 2.995 0 0 1 -2.394 -1.191l6.521 -6.522l2.318 1.545l.116 .066a1 1 0 0 0 .878 0l.116 -.066l2.317 -1.545z"></path><path d="M2 9.535l5.429 3.62l-5.429 5.43z"></path><path d="M22 9.535v9.05l-5.43 -5.43z"></path><path d="M12.44 2.102l.115 .066l8.444 5.629l-8.999 6l-9 -6l8.445 -5.63a1 1 0 0 1 .994 -.065z"></path></svg>`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/section3/Envelop.astro", void 0);

const $$Astro$1 = createAstro();
const $$Section3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section3;
  const language = Astro2.props.language;
  return renderTemplate`${maybeRenderHead()}<section class="section section3" id="contact"> <div class="vertical-lines"></div> <div class="grid"> <div class="col-left"> <p> ${language === "es" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
El código es creación,
<br>
el código es arte...
` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
Code is creation,
<br>
Code is art...
` })}`} </p> </div> <div class="col-right"> <div class="title">${language === "es" ? "CONTACTO" : "CONTACT"}</div> <div class="content"> <!-- Card --> <div class="card"> <div class="photo"> <img${addAttribute(photo.src, "src")} alt="Roberto Stringa"> </div> <div class="text"> <span class="name" id="more-info">Roberto Stringa<i>${language === "es" ? "Dise\xF1ador/FrontEnd Dev" : "Designer/FrontEnd Dev"}${renderComponent($$result, "ArrowDown", $$ArrowDown, {})}</i></span> <span class="place">Buenos Aires, Argentina</span> <span class="email">robertostringa@gmail.com</span> </div> <div class="social"> <a href="https://github.com/rstringa" title="GitHub" target="_blank"> ${renderComponent($$result, "Github", $$Github, {})} </a> <a href="https://www.linkedin.com/in/robertostringa/" title="LinkedIn" target="_blank"> ${renderComponent($$result, "LinkedIn", $$Linkedin, {})} </a> </div> <!-- <div class="more-info">
            <span>
              {
                language === "es"
                  ? "más sobre mí"
                  : "more about me"
              }  
            </span><ArrowDown />
          </div> --> </div> <!-- Card After --> <!-- <div class="card-after">
          <p>
            {
              language === "es"
                ? "¿Eres una agencia de desarrollo web o un profesional del rubro?"
                : "Are you a web development agency or a professional in the industry?"
            }
          </p>
        </div> --> <!-- Form --> <div class="form"> <div class="box-envelop">${renderComponent($$result, "Envelop", $$Envelop, {})}</div> <h4>${renderComponent($$result, "ArrowDown", $$ArrowDown, {})}${language === "es" ? "Hablemos" : "Let's talk"}</h4> <div class="card-after"> <p> ${language === "es" ? "Si necesitas un aliado profesional para tu pr\xF3ximo proyecto web, no dudes en contactarme." : "If you need a professional partner for your next web project, don\u2019t hesitate to contact me."} </p> </div> <form id="myForm"> <label for="name">${language === "es" ? "Nombre" : "Name"}</label> <input type="text" id="name" name="name" required${addAttribute(
    language === "es" ? "Tu nombre" : "Your name",
    "placeholder"
  )}> <label for="email">${language === "es" ? "Email" : "Email"}</label> <input type="email" id="email" name="email" required${addAttribute(language === "es" ? "Tu email" : "Your email", "placeholder")}> <label for="subject">${language === "es" ? "Mensaje" : "Message"}</label> <textarea id="text_area" name="text_area" required${addAttribute(language === "es" ? "D\xE9jame tu mensaje..." : "Leave your message...", "placeholder")}></textarea> <p class="mini">${language === "es" ? "Todos los campos son requeridos." : "Complete all fields please."}</p> <input type="submit"${addAttribute(language === "es" ? "Enviar" : "Send", "value")} class="btn-send"> <div class="message"></div> </form> </div> <!-- Side Text --> <div class="side-text"><span>Dev</span></div> </div> </div> </div> ${renderComponent($$result, "MoreInfo", $$MoreInfo, { "language": language })} </section> <style>
  .section3 {
    --lines: #ffffff45;
    --bg-color: #143d60;
    background: var(--bg-color);
    /* border-top: 1px solid var(--lines); */
    padding: 0 0 40px 0;
    height: fit-content;
    min-height: 100vh;
    position: relative;
    overflow: clip;
  }
  .vertical-lines {
    position: absolute;
    z-index: 10;
    top: 0;
    left: calc(50% + 7px);
    transform: translateX(-50%);
    width: 1250px;
    height: 100%;
    border-left: 1px solid var(--lines);
    border-right: 1px solid var(--lines);
    pointer-events: none;
  }
  .grid {
    position: relative;
    display: grid;
    grid-template-columns: 145px 1fr;
    width: 1250px;
    max-width: 100%;
    left: 7px;
    margin: 0 auto;
    height: 100%;
    & .col-left {
      position: relative;
      border-right: 1px solid #ffffff45;
      display: flex;
      justify-content: center;
      align-items: end;
      gap: 10px;
    }
    & .col-right {
      position: relative;
      padding: 60px;
      max-width: 100%;
      @media (max-width: 767px) {
        width: 100vw;
        padding: 90px 30px 60px 30px;
        transform: translateX(-155px);
      }
    }
  }
  .col-left {
    & p {
      padding: 0 10px;
      font-size: 15px;
      color: #ff9800;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 0;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      width: 7px;
      height: 50px;
      background: #ffffff45;
      bottom: 0;
      right: -8px;
      animation: up 5s 10s ease-out infinite;
    }
  }
  .col-right {
    & .title {
      font-size: 50px;
      color: #ffffff;
      margin-bottom: 20px;
      font-weight: 900;
      letter-spacing: 0;
      text-transform: uppercase;
    }
    & .content {
      & .card {
        display: grid;
        grid-template-columns: 150px 1fr;
        align-items: center;
        gap: 30px;
        border: 1px solid #ffffff45;
        padding: 10px 30px 0 30px;
        border-radius: 8px;
        /* overflow: hidden; */
        position: relative;
        z-index: 5;
        background: #143d60;
        &:hover {
          --band-base: #143c6000;
          --band1: color-mix(in srgb, var(--band-base), #ffffff 2%);
          background: repeating-linear-gradient(
            45deg,
            var(--band-base),
            var(--band-base) 5%,
            var(--band1) 5%,
            var(--band1) 10%
          );
          background-size: 200px 200px;
          animation: move-it 3s 0.5s linear infinite;
          & .name svg {
                animation: right 2.5s ease-in infinite;
              }
        }
        @media (max-width: 950px) {
          grid-template-columns: 1fr;
        }
        & .photo {
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: end;
          overflow: hidden;
          opacity: 0.8;
          position: relative;
          z-index: 1; 
          cursor: pointer;
          @media (max-width: 950px) {
            aspect-ratio: auto;
            max-width: 140px;
          }
          & img {
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
            transform: translateY(70%);
            transition: transform 0.75s 0.25s
              cubic-bezier(0.075, 0.82, 0.165, 1);
          }
        }
        & .photo.animated {
          & img {
            transform: translateY(0%);
          }
        }
        & .text {
          position: relative;
          z-index: 1;
          padding-bottom: 10px;
          @media (max-width: 767px) {
            order: -1;
            margin-top: 30px;
          }
          & span {
            display: block;
            line-height: 1.5;
            color: #ffffff;
            font-weight: 200;
            letter-spacing: 0.5px;
            text-transform: none;
            font-size: 14px;
            &.name {
              font-size: 19px;
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 20px;
              letter-spacing: 0.5px;
              cursor: pointer;
              & svg {
                transform: rotate(-90deg);
                width: 19px;
                margin-left: 4px; 
              }
             
              & i {
                background: #fca728;
                display: flex;
                align-items: center;
                width: fit-content;
                border-radius: 25px;
                color: #111;
                padding: 3px 10px;
                position: relative;
                left: -10px;
                margin-top: 0px;
                font-size: 16px;
                font-style: normal;
                font-weight: 200;
                text-transform: uppercase;
                letter-spacing: 1px;
                white-space: nowrap;
                &:hover {
                  background: #ffc107;
                }
              }
            }
          }
        }
        & .social {
          display: flex;
          gap: 10px;
          position: absolute;
          z-index: 1;
          bottom: 20px;
          right: 30px;
          @media (max-width: 767px) {
            right: auto;
            left: 0;
            bottom: -50px;
          }
          & a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ffffff45;
            color: #143d60;
            font-size: 20px;
            transition: background-color 0.3s ease;
            &:hover {
              background-color: #ff9500;
            }
            @media (max-width: 767px) {
              width: 40px;
              height: 40px;
            }
          }
        }
        & .more-info {
          position: absolute;
          z-index: 5;
          top: 30px;
          right: 30px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: fit-content;
          padding: 5px 12px;
          border-radius: 25px;
          background-color:#fca728cc;
          color: #143d60;
          font-size: 14px;
          line-height: 1;
          text-transform: uppercase;
          font-weight: 400;
          transition: background-color 0.3s ease;
          @media (max-width: 767px) {
            top: auto;
            bottom: -45px;
            right: 0;
          }
          & span { 
            margin-right: 6px;
          }
          &:hover {
            background-color: #ff9500;
          }
          & svg  { 
            transform: rotate(-90deg); 
            width: 19px;
          }
        }
      }
    }
  }
  /* form:has(#email:user-invalid) label[for="email"] { 
  color: #fe5500;
  } */
  .form *::placeholder {
        font-family: inherit;
        font-size: 14px;
        color:var(--white-50);
        opacity: 0;} 
  .form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin-top: 20px;
    width: 100%;
    position: relative;

    @media (max-width: 767px) {
      margin-top: 50px;
      margin-bottom: 40px;
    }
    & h4 {
      font-size: 21px;
      text-transform: uppercase;
      font-weight: 600;
      color: #fff;
      opacity: 1;
      margin-bottom:0px;
      margin-left: 8px;
      position: relative;
      & svg {
        width: 36px;
        height: auto;
        color: #fca728;
        position: absolute;
        top: -3px;
        left: -70px;
        transform: rotate(-90deg);
      }
    }
    & label {
      font-size: 21px;
      font-weight: 200;
      color: #fff;
      opacity: 0.8;
      margin-bottom: 5px;
      margin-left: 8px;
      text-transform: capitalize;
    }
   
    & input {
      font-size: 18px;
      border: 1px solid #ffffff45;
      padding: 16px 30px 16px 20px;
      border-radius: 8px;
      background-color: #143d60;
      color: #fff;
      font-size: 16px;
      margin-bottom: 26px;
      width: 100%;
      max-width: 710px;
     
      &:focus {
        outline: none;
        border-color: #ffffff75;
        /* box-shadow: 0 0 0 1px #ff9800;  */
      }
      &:is(:user-valid) {
        border-color: #02d622e6;
      } 
      &:is(:user-invalid) {
        border-color: #fe5500d5;
      } 
    }
    & textarea {
      font-family: inherit;
      font-size: 18px;
      border: 1px solid #ffffff45;
      padding: 16px 30px 16px 20px;
      border-radius: 8px;
      background-color: #143d60;
      color: #fff;
      font-size: 16px;
      width: 100%;
      max-width: 710px;
      min-height: 150px;
      &:focus {
        outline: none;
        border-color: #ffffff75;
        /* box-shadow: 0 0 0 1px #ff9800;  */
      }
      &:is(:user-valid) {
        border-color: #02d622e6;
      } 
      &:is(:user-invalid) {
        border-color: #fe5500d5;
      }  
    }
    & .mini {
      font-size: 14px;
      font-weight: 200;
      line-height: 1.5;
      margin-left: 8px;
      color: #fff;
      opacity: 0.5;
      margin-bottom: 30px; 
      letter-spacing: 1px;
    }
    & #myForm {
      display: contents;
    }

    & .btn-send {
      font-size: 21px;
      font-weight: 400;
      text-transform: uppercase;
      background-color: #ff9800;
      color: #111;
      padding: 16px 30px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:disabled {
        background-color: #ff9800a0;
        cursor: not-allowed; 
      }
      @media (max-width: 767px) {
        font-size: 21px;
      }
      &:hover {
        background-color: #ffc107;
      }
    }
    & .message {
      margin-top: 10px;
      color: #ff9800;
      font-size: 16px;
    }
    & .box-envelop {
      position: absolute;
      bottom: 40px;
      left: 50%;
      z-index: 0;
      opacity: 0;
      &.animated {
        animation:
        rotate-envelop 0.75s 0.25s linear infinite, 
        move-envelop 2s 0.10s ease-out;
      }
      & svg {
        width: 80px;
        height: auto; 
        object-fit: contain;
        fill:#ff9800;
      }
    }
  }
  .side-text {
    display: grid;
    align-items: start;
    justify-content: center;
    position: absolute;
    z-index: 0;
    top: 0;
    right: -200px;
    width: 200px;
    height: 100%;
    text-transform: uppercase;
    overflow: hidden;
    /* --band-base: #143c6000;
    --band1: color-mix(in srgb, var(--band-base), #ffffff 2%);
    background: repeating-linear-gradient(
      45deg,
      var(--band-base),
      var(--band-base) 5%,
      var(--band1) 5%,
      var(--band1) 10%
    );
    background-size: 200px 200px;
    animation: move-it 1s linear infinite; */
    span {
      display: block;
      font-size: 130px;
      font-weight: 900;
      color: #54718b;
      opacity: 0.5;
      letter-spacing: -7px;
      rotate: -90deg;
      margin: 0 auto;
      line-height: 0;
      /* transform: translatey(-50px); */
      transform: translate(-51%, -130px);
    }
  }
  .card-after {
    padding-left: 8px;
    & p {
      font-size: 16px;
      color: #fff;
      opacity: 0.8;
      letter-spacing: 0.025rem;
      font-weight: 200;
      margin-bottom: 24px;
      margin-top: 8px;
    }
    @media (max-width: 767px) {
      /* transform: translateY(60px); */
      & p {
        font-size: 15px;
      }
    }
  }

  /* SPANISH */
  body.es {
    .col-right {
      .card {
        i {
          text-transform: capitalize !important;
        }
      }
    }
  }

  @keyframes move-envelop {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    50% {
      bottom: 400px;
    }
    100% {
      opacity: 0;
      bottom: 40px;
    }
  }
    @keyframes rotate-envelop {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes right {
    0% {
      transform: translateX(0) rotate(-90deg);
    }
    10% {
      transform: translateX(3px) rotate(-90deg);
    }
    20% {
      transform: translateX(0) rotate(-90deg);
    }
    30% {
      transform: translateX(3px) rotate(-90deg);
    }
    40% {
      transform: translateX(0) rotate(-90deg);
    }  
    /* El resto es para esperar */   
    100% {
      transform: translateX(0) rotate(-90deg); 
    }
  }
</style> ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Section3.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Section3.astro?astro&type=script&index=1&lang.ts")} <!-- RESEND FORM--> ${renderScript($$result, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Section3.astro?astro&type=script&index=2&lang.ts")}`;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Section3.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const language = Astro2.props.language;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>© 2025 ${language === "es" ? "por" : "by"} Roberto Stringa</p> </div> </footer> `;
}, "E:/wamp/www/robertostringa/2025/web/frontend-web/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Section1 as a, $$Section2 as b, $$Section3 as c, $$Footer as d };
