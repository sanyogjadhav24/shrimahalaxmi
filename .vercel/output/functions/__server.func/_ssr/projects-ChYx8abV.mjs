import { o as __toESM } from "../_runtime.mjs";
import { i as PROJECT_CATS } from "./site-CrHWebk2.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./Layout-CoCZtaet.mjs";
import { t as PageBanner } from "./PageBanner-DQGGheOF.mjs";
import { t as SectionTitle } from "./SectionTitle-BZ9pgjOw.mjs";
import { t as Route } from "./projects-Ic4S1p7p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-ChYx8abV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Projects() {
	const { projects } = Route.useLoaderData();
	const [cat, setCat] = (0, import_react.useState)("All");
	const items = cat === "All" ? projects : projects.filter((p) => p.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		eyebrow: "Recent work",
		title: "Our Projects",
		crumb: "Projects"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1280px] mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					center: true,
					eyebrow: "Featured Projects",
					title: "Recently Completed Work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2 mb-10",
					children: PROJECT_CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `px-5 py-2 uppercase font-display tracking-wider text-xs border transition ${cat === c ? "bg-[#e07a1f] text-white border-[#e07a1f]" : "border-black/10 text-[#1e1e2d] hover:border-[#e07a1f] hover:text-[#e07a1f]"}`,
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image_url,
								alt: p.title,
								className: "w-full h-72 object-cover group-hover:scale-105 transition"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#12121b]/90 via-[#12121b]/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-6 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.28em] text-[#e07a1f] mb-2",
										children: p.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-bold uppercase text-xl mb-1",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-white/70 text-sm",
										children: [
											p.location,
											" • ",
											p.year
										]
									})
								]
							})
						]
					}, p.title))
				})
			]
		})
	})] });
}
//#endregion
export { Projects as component };
