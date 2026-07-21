import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TeamRoles } from "@/components/site/TeamRoles";
import { SERVICES, WHY_US, TEAM_ROLES, STATS, BLOG, CONTACT, PROJECTS as STATIC_PROJECTS } from "@/data/site";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [projects, setProjects] = useState(
    STATIC_PROJECTS.map(p => ({ ...p, category: p.cat, image_url: p.image }))
  );

  useEffect(() => {
    supabase
      .from('projects')
      .select('*')
      .limit(6)
      .order('year', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) setProjects(data);
      })
      .catch(() => { /* keep static fallback */ });
  }, []);

  return (
    <SiteLayout>
      <HeroSlider />
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-[#e07a1f] z-0" />
            <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Construction site" className="relative w-full h-[520px] object-cover" />
            <div className="absolute bottom-6 right-6 bg-[#e07a1f] text-white px-8 py-6 text-center">
              <div className="font-display font-bold text-5xl leading-none">2024</div>
              <div className="uppercase tracking-widest text-xs mt-1">Established</div>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="About Our Company" title="Civil and Infrastructure Work Built on Dedication" />
            <p className="text-muted-foreground leading-relaxed mb-4"><strong className="text-[#1e1e2d]">Shri Mahalaxmi Construction</strong> was established in 2024 by Mr. Prathamesh Jadhav and his brothers. The company brings dedication to civil and earthwork projects, supported by a capable workforce and owned equipment.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">Our work includes specialised infrastructure and road construction: H.P.C. structures, pipe culverts, minor bridges, retaining walls, side drains, highways, metro, bridges and commercial projects.</p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
              {["Civil and earthwork execution","Road construction and drainage works","Minor bridges, culverts and retaining walls","Highway, metro and commercial works","Engineering and mechanical support staff","Owned construction equipment fleet"].map(f => (
                <li key={f} className="flex gap-2"><span className="text-[#e07a1f]">✓</span><span>{f}</span></li>
              ))}
            </ul>
            <div className="flex items-center gap-6 flex-wrap">
              <Link to="/about" className="inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17]">More About Us →</Link>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-[#e07a1f]/10 text-[#e07a1f] grid place-items-center text-xl">☎</span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Call Anytime</div>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`} className="font-display font-bold text-[#1e1e2d]">{CONTACT.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f6f6f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="What We Do" title="Our Construction Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="group bg-white shadow-sm hover:shadow-xl transition">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute bottom-3 left-3 w-11 h-11 bg-[#e07a1f] text-white grid place-items-center">■</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold uppercase text-lg text-[#1e1e2d] mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className="text-[#e07a1f] uppercase font-display tracking-wider text-xs inline-flex items-center gap-2">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e1e2d] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="font-display font-bold text-5xl text-[#e07a1f]">{s.value}</div>
              <div className="uppercase tracking-widest text-xs mt-2 text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="Featured Projects" title="Recently Completed Work" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p: any) => (
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
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17]">View All Projects →</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f6f6f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="Why Choose Us" title="Built for Practical Project Execution" />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto -mt-6 mb-12">We combine hands-on leadership, technical staff, experienced labour and owned equipment to support civil and infrastructure work.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(w => (
              <div key={w.title} className="bg-white p-8 border-t-4 border-[#e07a1f]">
                <div className="w-14 h-14 bg-[#e07a1f]/10 text-[#e07a1f] grid place-items-center text-2xl mb-4">★</div>
                <h3 className="font-display font-bold uppercase text-[#1e1e2d] mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="w-12 h-12 rounded-full bg-[#e07a1f] text-white grid place-items-center">☎</span>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">24/7 Support</div>
              <div className="font-display font-bold text-[#1e1e2d]">Talk to our experts</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="Our Organization" title="Company Structure" />
          <TeamRoles sections={TEAM_ROLES} />
        </div>
      </section>

      <section className="py-24 bg-[#1e1e2d] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionTitle center light eyebrow="Testimonials" title="What Our Clients Say" />
          <div className="text-[#e07a1f] text-6xl font-serif leading-none">“</div>
          <p className="text-lg leading-relaxed text-white/85 mb-6">Shri Mahalaxmi Construction executed our highway expansion with exceptional quality and finished ahead of schedule. Their engineering standards are outstanding.</p>
          <div className="text-[#e07a1f] text-4xl font-serif">”</div>
          <div className="mt-6">
            <div className="font-display font-bold uppercase">Er. Prakash Sawant</div>
            <div className="text-white/60 text-sm">Executive Engineer, PWD Pune</div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="News & Updates" title="Latest From Our Blog" />
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG.map(b => (
              <article key={b.title} className="bg-white shadow-sm hover:shadow-xl transition">
                <div className="relative overflow-hidden h-56">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#e07a1f] text-white text-xs uppercase tracking-widest px-3 py-1">{b.cat}</div>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    <span>📅 {b.date}</span>
                    <span>👤 {b.author}</span>
                  </div>
                  <h3 className="font-display font-bold uppercase text-lg text-[#1e1e2d] mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{b.desc}</p>
                  <a href="#" className="text-[#e07a1f] uppercase font-display tracking-wider text-xs">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
