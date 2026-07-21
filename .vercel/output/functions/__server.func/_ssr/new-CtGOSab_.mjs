import { o as __toESM } from "../_runtime.mjs";
import { a as PROJECT_CATS } from "./site-BTPBI16-.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-ClWdGkyA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-CtGOSab_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewProject() {
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({
		title: "",
		category: PROJECT_CATS[1],
		location: "",
		year: (/* @__PURE__ */ new Date()).getFullYear().toString()
	});
	const [imageFile, setImageFile] = (0, import_react.useState)(null);
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const handleImageChange = (e) => {
		if (e.target.files && e.target.files.length > 0) setImageFile(e.target.files[0]);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		if (!imageFile) {
			setError("Please select an image to upload.");
			setLoading(false);
			return;
		}
		try {
			const fileExt = imageFile.name.split(".").pop();
			const filePath = `projects/${`${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`}`;
			const { error: uploadError, data: uploadData } = await supabase.storage.from("project-images").upload(filePath, imageFile);
			if (uploadError) throw uploadError;
			const { data: publicUrlData } = supabase.storage.from("project-images").getPublicUrl(filePath);
			const imageUrl = publicUrlData.publicUrl;
			const { error: dbError } = await supabase.from("projects").insert([{
				title: formData.title,
				category: formData.category,
				location: formData.location,
				year: parseInt(formData.year, 10),
				image_url: imageUrl
			}]);
			if (dbError) throw dbError;
			navigate({ to: "/admin/projects" });
		} catch (err) {
			console.error(err);
			setError(err.message || "An unexpected error occurred.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white p-8 rounded shadow-sm border border-gray-100 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-display font-bold uppercase text-[#1e1e2d] mb-6",
				children: "Add New Project"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-red-50 text-red-600 p-4 rounded mb-6 text-sm",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2",
						children: "Project Title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "title",
						required: true,
						value: formData.title,
						onChange: handleChange,
						className: "w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]",
						placeholder: "e.g. Pune-Solapur Highway"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							name: "category",
							required: true,
							value: formData.category,
							onChange: handleChange,
							className: "w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]",
							children: PROJECT_CATS.filter((c) => c !== "All").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2",
							children: "Year"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							name: "year",
							required: true,
							value: formData.year,
							onChange: handleChange,
							className: "w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "location",
						required: true,
						value: formData.location,
						onChange: handleChange,
						className: "w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f]",
						placeholder: "e.g. Pune, MH"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2",
							children: "Project Image"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/*",
							required: true,
							onChange: handleImageChange,
							className: "w-full px-4 py-2 border border-gray-300 rounded focus:ring-[#e07a1f] focus:border-[#e07a1f] bg-gray-50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gray-500 mt-2",
							children: "Recommended size: 800x600px. Max size: 2MB."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 border-t border-gray-100 flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "bg-[#e07a1f] text-white px-8 py-3 rounded text-sm uppercase font-display tracking-wider hover:bg-[#c86a17] transition disabled:opacity-50",
							children: loading ? "Uploading..." : "Save Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => navigate({ to: "/admin/projects" }),
							disabled: loading,
							className: "bg-gray-100 text-gray-700 px-8 py-3 rounded text-sm uppercase font-display tracking-wider hover:bg-gray-200 transition disabled:opacity-50",
							children: "Cancel"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { NewProject as component };
