import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./Layout-CoCZtaet.mjs";
import { t as supabase } from "./supabase-CABxuFtT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-D3wtYmf9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const navigate = useNavigate();
	useLocation();
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			setLoading(false);
			if (!session) navigate({ to: "/login" });
		});
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			if (!session) navigate({ to: "/login" });
		});
		return () => subscription.unsubscribe();
	}, [navigate]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[50vh] flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-gray-500 uppercase font-display tracking-widest text-sm",
			children: "Loading Admin..."
		})
	}) });
	if (!session) return null;
	const handleLogout = async () => {
		await supabase.auth.signOut();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 min-h-[70vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "w-full md:w-64 flex-shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white p-6 shadow-sm border border-gray-100 rounded",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display font-bold uppercase text-xl mb-6 text-[#1e1e2d]",
					children: "Admin Panel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "space-y-2",
					children: [[
						{
							label: "Dashboard",
							to: "/admin"
						},
						{
							label: "Manage Projects",
							to: "/admin/projects"
						},
						{
							label: "Add Project",
							to: "/admin/projects/new"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "block px-4 py-2 rounded text-sm uppercase font-display tracking-wider transition-colors",
						activeProps: { className: "bg-[#e07a1f] text-white" },
						inactiveProps: { className: "text-gray-600 hover:bg-gray-100" },
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-4 mt-4 border-t border-gray-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleLogout,
							className: "w-full text-left px-4 py-2 rounded text-sm uppercase font-display tracking-wider text-red-600 hover:bg-red-50 transition-colors",
							children: "Logout"
						})
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	}) });
}
//#endregion
export { AdminLayout as component };
