import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { SectionTitle } from "@/components/site/SectionTitle";
import { PROJECT_CATS, PROJECTS as STATIC_PROJECTS } from "@/data/site";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Shri Mahalaxmi Construction | Infrastructure Portfolio" },
      { name: "description", content: "View our portfolio of completed government infrastructure projects including roads, bridges, public buildings, and municipal works across Maharashtra." },
      { name: "keywords", content: "construction projects portfolio, government infrastructure projects, road construction projects, bridge construction Maharashtra, civil engineering portfolio" },
      { property: "og:title", content: "Our Projects — Shri Mahalaxmi Construction" },
      { property: "og:description", content: "Featured recently completed government infrastructure projects including roads, bridges, and public buildings." },
    ]
  }),
  loader: async () => {
    try {
      const { data, error } = await supabase.from('projects').select('*').order('year', { ascending: false });
      if (error || !data || data.length === 0) {
        return { projects: STATIC_PROJECTS.map(p => ({ ...p, category: p.cat, image_url: p.image })) };
      }
      return { projects: data };
    } catch (e) {
      console.error('[Loader] Failed to fetch projects from Supabase, using static data.', e);
      return { projects: STATIC_PROJECTS.map(p => ({ ...p, category: p.cat, image_url: p.image })) };
    }
  },
  component: Projects,
});

function Projects() {
  const { projects } = Route.useLoaderData();
  const [cat, setCat] = useState<string>("All");
  const items = cat === "All" ? projects : projects.filter((p: any) => p.category === cat);
  return (
    <SiteLayout>
      <PageBanner eyebrow="Recent work" title="Our Projects" crumb="Projects" />
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="Featured Projects" title="Recently Completed Work" />
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {PROJECT_CATS.map(c => (
              <button key={c} onClick={() => setCat(c)} className={`px-5 py-2 uppercase font-display tracking-wider text-xs border transition ${cat === c ? "bg-[#e07a1f] text-white border-[#e07a1f]" : "border-black/10 text-[#1e1e2d] hover:border-[#e07a1f] hover:text-[#e07a1f]"}`}>{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p: any) => (
              <div key={p.title} className="relative group overflow-hidden">
                <img src={p.image_url} alt={p.title} className="w-full h-72 object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121b]/90 via-[#12121b]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#e07a1f] mb-2">{p.category}</div>
                  <h3 className="font-display font-bold uppercase text-xl mb-1">{p.title}</h3>
                  <div className="text-white/70 text-sm">{p.location} • {p.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}