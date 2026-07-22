import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageBanner } from "@/components/site/PageBanner";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SERVICES, WHY_US } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Shri Mahalaxmi Construction | Civil Engineering Services" },
      { name: "description", content: "Comprehensive civil engineering services including road construction, bridge building, public buildings, water works, and industrial construction across Maharashtra." },
      { name: "keywords", content: "civil engineering services, road construction services, bridge construction, public building construction, water works Maharashtra, industrial construction" },
      { property: "og:title", content: "Our Services — Shri Mahalaxmi Construction" },
      { property: "og:description", content: "Roads, bridges, public buildings, water works and industrial civil construction services by Class-A government contractor." },
    ]
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageBanner eyebrow="What we offer" title="Our Services" crumb="Services" />
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="What We Do" title="Our Construction Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white shadow-sm hover:shadow-xl transition">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 w-11 h-11 bg-[#e07a1f] text-white grid place-items-center">■</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold uppercase text-lg text-[#1e1e2d] mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/contact" className="text-[#e07a1f] uppercase font-display tracking-wider text-xs">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#f6f6f4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionTitle center eyebrow="Why Choose Us" title="Excellence In Every Project We Deliver" />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto -mt-6 mb-12">Our reputation is built on decades of successful project delivery, rigorous quality control, and complete transparency with government departments and citizens we serve.</p>
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
    </SiteLayout>
  );
}