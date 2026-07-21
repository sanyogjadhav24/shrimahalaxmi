import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CABxuFtT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DTvEnD0g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminProjects() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const loadProjects = async () => {
		setLoading(true);
		const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
		if (data) setProjects(data);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		loadProjects();
	}, []);
	const handleDelete = async (id, title) => {
		if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
		const { error } = await supabase.from("projects").delete().eq("id", id);
		if (error) alert("Error deleting project: " + error.message);
		else loadProjects();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white p-8 rounded shadow-sm border border-gray-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-center mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-display font-bold uppercase text-[#1e1e2d]",
				children: "Manage Projects"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/projects/new",
				className: "bg-[#e07a1f] text-white px-4 py-2 rounded text-sm uppercase font-display tracking-wider hover:bg-[#c86a17] transition",
				children: "+ Add Project"
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "py-12 text-center text-gray-500 uppercase tracking-widest text-xs",
			children: "Loading projects..."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left border-collapse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-gray-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display",
							children: "Image"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display",
							children: "Title"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display",
							children: "Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display",
							children: "Year"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-3 px-4 uppercase text-xs tracking-wider text-gray-500 font-display text-right",
							children: "Actions"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-gray-100 hover:bg-gray-50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 px-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image_url,
								alt: p.title,
								className: "w-16 h-12 object-cover rounded"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 px-4 font-bold text-[#1e1e2d]",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 px-4 text-gray-600 text-sm",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 px-4 text-gray-600 text-sm",
							children: p.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 px-4 text-gray-600 text-sm",
							children: p.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-3 px-4 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleDelete(p.id, p.title),
								className: "text-red-500 hover:text-red-700 text-sm uppercase tracking-wider font-display",
								children: "Delete"
							})
						})
					]
				}, p.id)), projects.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "py-8 text-center text-gray-500",
					children: "No projects found."
				}) })] })]
			})
		})]
	});
}
//#endregion
export { AdminProjects as component };
