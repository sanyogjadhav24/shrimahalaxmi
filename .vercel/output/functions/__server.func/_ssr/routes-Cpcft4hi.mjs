import { i as PROJECTS } from "./site-BTPBI16-.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-ClWdGkyA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cpcft4hi.js
var $$splitComponentImporter = () => import("./routes-BiN1CopV.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		try {
			const { data, error } = await supabase.from("projects").select("*").limit(6).order("year", { ascending: false });
			if (error || !data || data.length === 0) return { projects: PROJECTS.map((p) => ({
				...p,
				category: p.cat,
				image_url: p.image
			})) };
			return { projects: data };
		} catch (e) {
			console.error("[Loader] Failed to fetch projects from Supabase, using static data.", e);
			return { projects: PROJECTS.map((p) => ({
				...p,
				category: p.cat,
				image_url: p.image
			})) };
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
