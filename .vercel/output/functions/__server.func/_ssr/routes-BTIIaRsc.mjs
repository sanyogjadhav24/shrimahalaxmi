import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-CABxuFtT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BTIIaRsc.js
var $$splitComponentImporter = () => import("./routes-nStqq6Bk.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		const { data, error } = await supabase.from("projects").select("*").limit(6).order("year", { ascending: false });
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
