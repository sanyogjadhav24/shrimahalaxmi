import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./supabase-ClWdGkyA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CghNPffm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const [stats, setStats] = (0, import_react.useState)({ projectsCount: 0 });
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		async function loadStats() {
			const { count } = await supabase.from("projects").select("*", {
				count: "exact",
				head: true
			});
			setStats({ projectsCount: count || 0 });
			setLoading(false);
		}
		loadStats();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white p-8 rounded shadow-sm border border-gray-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-display font-bold uppercase text-[#1e1e2d] mb-6",
			children: "Dashboard Overview"
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-pulse flex space-x-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-4 py-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-gray-200 rounded w-3/4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-gray-200 rounded w-1/2" })]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gray-50 p-6 rounded border border-gray-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-gray-500 uppercase tracking-widest text-xs mb-2",
					children: "Total Projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl font-display font-bold text-[#e07a1f]",
					children: stats.projectsCount
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gray-50 p-6 rounded border border-gray-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-gray-500 uppercase tracking-widest text-xs mb-2",
					children: "System Status"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl font-display font-bold text-green-500",
					children: "Live"
				})]
			})]
		})]
	});
}
//#endregion
export { AdminDashboard as component };
