import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageBanner-DQGGheOF.js
var import_jsx_runtime = require_jsx_runtime();
function PageBanner({ eyebrow, title, crumb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[340px] bg-[#1e1e2d] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&q=85",
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#12121b]/90 via-[#12121b]/70 to-[#12121b]/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-10 bg-[#e07a1f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#e07a1f] font-display uppercase tracking-[0.28em] text-sm",
							children: eyebrow
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display font-bold text-white uppercase text-5xl md:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-white/70 font-display uppercase tracking-wider text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-[#e07a1f]",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-3 text-[#e07a1f]",
								children: "›"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: crumb
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { PageBanner as t };
