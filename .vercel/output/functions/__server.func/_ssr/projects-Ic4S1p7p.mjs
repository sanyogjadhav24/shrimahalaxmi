import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CABxuFtT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-Ic4S1p7p.js
var $$splitComponentImporter = () => import("./projects-ChYx8abV.mjs");
var Route = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Projects — Shri Mahalaxmi Construction" }, {
		name: "description",
		content: "Featured recently completed government infrastructure projects."
	}] }),
	loader: async () => {
		const { data, error } = await supabase.from("projects").select("*").order("year", { ascending: false });
		if (error) {
			console.error(error);
			return { projects: [] };
		}
		return { projects: data };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
