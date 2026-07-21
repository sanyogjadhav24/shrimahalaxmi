import { i as PROJECTS } from "./site-BTPBI16-.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./supabase-ClWdGkyA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DPBOiBI_.js
var $$splitComponentImporter = () => import("./projects-Z3x8Yqtb.mjs");
var Route = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Projects — Shri Mahalaxmi Construction" }, {
		name: "description",
		content: "Featured recently completed government infrastructure projects."
	}] }),
	loader: async () => {
		try {
			const { data, error } = await supabase.from("projects").select("*").order("year", { ascending: false });
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
