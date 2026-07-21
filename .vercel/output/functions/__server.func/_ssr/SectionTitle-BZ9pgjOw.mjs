import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionTitle-BZ9pgjOw.js
var import_jsx_runtime = require_jsx_runtime();
function SectionTitle({ eyebrow, title, center = false, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${center ? "text-center mx-auto" : ""} max-w-3xl mb-12`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-10 bg-[#e07a1f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[#e07a1f] font-display uppercase tracking-[0.28em] text-sm",
					children: eyebrow
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `font-display font-bold uppercase text-4xl md:text-5xl leading-tight ${light ? "text-white" : "text-[#1e1e2d]"}`,
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mt-5 h-[3px] w-16 bg-[#e07a1f] ${center ? "mx-auto" : ""}` })
		]
	});
}
//#endregion
export { SectionTitle as t };
