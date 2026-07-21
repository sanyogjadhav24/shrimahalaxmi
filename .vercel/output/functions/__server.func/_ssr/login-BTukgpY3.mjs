import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./Layout-SLk0Bz9z.mjs";
import { t as supabase } from "./supabase-ClWdGkyA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BTukgpY3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) {
			setError(error.message);
			setLoading(false);
		} else navigate({ to: "/admin" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[60vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md w-full space-y-8 bg-white p-8 shadow rounded-lg border border-gray-100",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-center text-3xl font-display font-extrabold text-gray-900 uppercase",
				children: "Admin Login"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-sm text-gray-600",
				children: "Sign in to manage projects"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 space-y-6",
				onSubmit: handleLogin,
				children: [
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-red-50 text-red-500 p-3 rounded text-sm text-center",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "email-address",
							className: "sr-only",
							children: "Email address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email-address",
							name: "email",
							type: "email",
							required: true,
							className: "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#e07a1f] focus:border-[#e07a1f] focus:z-10 sm:text-sm",
							placeholder: "Email address",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "password",
							className: "sr-only",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "password",
							name: "password",
							type: "password",
							required: true,
							className: "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#e07a1f] focus:border-[#e07a1f] focus:z-10 sm:text-sm",
							placeholder: "Password",
							value: password,
							onChange: (e) => setPassword(e.target.value)
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#e07a1f] hover:bg-[#c86a17] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e07a1f] disabled:opacity-50 uppercase tracking-widest font-display",
						children: loading ? "Signing in..." : "Sign in"
					}) })
				]
			})]
		})
	}) });
}
//#endregion
export { Login as component };
