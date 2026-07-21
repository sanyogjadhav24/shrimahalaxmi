import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SectionTitle, d as WHY_US, l as SiteLayout, o as SERVICES } from "./SectionTitle-C-hkdPL8.mjs";
import { t as PageBanner } from "./PageBanner-DQGGheOF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-pYpVOUvp.js
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
			eyebrow: "What we offer",
			title: "Our Services",
			crumb: "Services"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					center: true,
					eyebrow: "What We Do",
					title: "Our Construction Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white shadow-sm hover:shadow-xl transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-56 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.image,
								alt: s.title,
								className: "w-full h-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3 left-3 w-11 h-11 bg-[#e07a1f] text-white grid place-items-center",
								children: "■"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold uppercase text-lg text-[#1e1e2d] mb-2",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed mb-4",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-[#e07a1f] uppercase font-display tracking-wider text-xs",
									children: "Read More →"
								})
							]
						})]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-[#f6f6f4]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-[1280px] mx-auto px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						center: true,
						eyebrow: "Why Choose Us",
						title: "Excellence In Every Project We Deliver"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-muted-foreground max-w-3xl mx-auto -mt-6 mb-12",
						children: "Our reputation is built on decades of successful project delivery, rigorous quality control, and complete transparency with government departments and citizens we serve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
						children: WHY_US.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-8 border-t-4 border-[#e07a1f]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-14 h-14 bg-[#e07a1f]/10 text-[#e07a1f] grid place-items-center text-2xl mb-4",
									children: "★"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold uppercase text-[#1e1e2d] mb-2",
									children: w.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: w.desc
								})
							]
						}, w.title))
					})
				]
			})
		})
	] });
}
//#endregion
export { Services as component };
