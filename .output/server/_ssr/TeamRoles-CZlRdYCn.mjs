import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TeamRoles-CZlRdYCn.js
var import_jsx_runtime = require_jsx_runtime();
function TeamRoles({ sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-16",
		children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "scroll-mt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.28em] text-[#e07a1f] font-display",
					children: section.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-3xl font-bold uppercase text-[#1e1e2d]",
					children: section.summary
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted-foreground",
					children: [
						section.members.length,
						" member",
						section.members.length === 1 ? "" : "s"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
				children: section.members.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: member.image,
							alt: member.name,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#12121b]/70 via-transparent to-transparent" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-xl font-bold uppercase text-[#1e1e2d]",
							children: member.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm uppercase tracking-[0.24em] text-[#e07a1f]",
							children: member.role
						})]
					})]
				}, `${section.title}-${member.name}`))
			})]
		}, section.title))
	});
}
//#endregion
export { TeamRoles as t };
