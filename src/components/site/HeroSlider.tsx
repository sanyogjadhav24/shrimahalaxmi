import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { HERO_SLIDES } from "@/data/site";

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[92vh] min-h-[640px] max-h-[860px] overflow-hidden bg-[#1e1e2d]">
      {HERO_SLIDES.map((s, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img src={s.image} alt={s.title} className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12121b]/85 via-[#12121b]/60 to-[#12121b]/25" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1280px] mx-auto px-6 w-full">
              <div className="max-w-[720px]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[2px] w-10 bg-[#e07a1f]" />
                  <span className="text-[#e07a1f] font-display uppercase tracking-[0.28em] text-sm">{s.subtitle}</span>
                </div>
                <h1 className="text-white font-display font-bold uppercase leading-[1.05] text-[46px] md:text-[68px] whitespace-pre-line mb-6">{s.title}</h1>
                <p className="text-white/80 text-[17px] max-w-[600px] mb-9 leading-relaxed">{s.text}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to={s.cta.to} className="inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-[#c86a17]">{s.cta.label} <span>→</span></Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 border border-white text-white uppercase font-display tracking-wider text-sm px-6 py-3.5 rounded hover:bg-white hover:text-[#1e1e2d]">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button aria-label="Prev" onClick={() => setI((v) => (v - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center bg-black/30 text-white hover:bg-[#e07a1f]">‹</button>
      <button aria-label="Next" onClick={() => setI((v) => (v + 1) % HERO_SLIDES.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center bg-black/30 text-white hover:bg-[#e07a1f]">›</button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)} className={`h-[3px] transition-all ${idx === i ? "w-10 bg-[#e07a1f]" : "w-6 bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}