import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TeamRoles } from "@/components/site/TeamRoles";
import { WHY_US, TEAM_ROLES, STATS, CONTACT, WORKFORCE, EQUIPMENT } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Shri Mahalaxmi Construction" }, { name: "description", content: "Class-A government contractor with 28+ years building India's infrastructure." }] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageBanner eyebrow="Get to know us" title="About Us" crumb="About" />
      <section className="py-24 bg-[#f6f6f4]">
        <div className="max-w-[1280px] mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <div className="bg-white p-8 border-t-4 border-[#e07a1f]">
            <SectionTitle eyebrow="Human Resources" title="Our Strength: Our People" />
            <p className="-mt-6 mb-6 text-muted-foreground">Our team includes qualified and experienced staff, supported by skilled and unskilled labour for site execution.</p>
            <div className="grid grid-cols-2 gap-4">
              {WORKFORCE.map((item) => <div key={item.role} className="border border-black/5 p-4"><div className="font-display text-3xl font-bold text-[#e07a1f]">{item.count}</div><div className="mt-1 text-sm text-muted-foreground">{item.role}</div></div>)}
            </div>
          </div>
          <div className="bg-white p-8 border-t-4 border-[#e07a1f]">
            <SectionTitle eyebrow="Equipment We Own" title="Ready for Site Operations" />
            <ul className="-mt-5 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              {EQUIPMENT.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-[#e07a1f] z-0" />
            <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=srgb&fm=jpg&q=85" alt="" className="relative w-full h-[520px] object-cover" />
            <div className="absolute bottom-6 right-6 bg-[#e07a1f] text-white px-8 py-6 text-center">
              <div className="font-display font-bold text-5xl leading-none">2024</div>
              <div className="uppercase tracking-widest text-xs mt-1">Established</div>
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="About Our Company" title="Civil and Infrastructure Work Built on Dedication" />
            <p className="text-muted-foreground leading-relaxed mb-4"><strong className="text-[#1e1e2d]">Shri Mahalaxmi Construction</strong> was established in 2024 by Mr. Prathamesh Jadhav and his brothers. Their drive and passion for civil and earthwork have helped the company grow steadily, supported by dedicated people, owned assets, a turnover of approximately ₹4–5 crore and a capable workforce.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">The company is focused on expanding into specialised infrastructure projects and road construction, including H.P.C. structures, pipe culverts, minor bridges, retaining walls and side drains. We also undertake work related to highways, metro, bridges and commercial projects.</p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
              {["Civil and earthwork execution","Road construction and drainage works","Minor bridges, culverts and retaining walls","Highway, metro and commercial works","Engineering and mechanical support staff","Owned construction equipment fleet"].map(f => (
                <li key={f} className="flex gap-2"><span className="text-[#e07a1f]">✓</span><span>{f}</span></li>
              ))}
            </ul>
            <div className="flex items-center gap-6 flex-wrap">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17]">More About Us →</Link>
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
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="Our Organization" title="Board of Directors" />
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
    </SiteLayout>
  );
}
