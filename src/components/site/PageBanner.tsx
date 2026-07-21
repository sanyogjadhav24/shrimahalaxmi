import { Link } from "@tanstack/react-router";

export function PageBanner({ eyebrow, title, crumb }: { eyebrow: string; title: string; crumb: string }) {
  return (
    <section className="relative h-[340px] bg-[#1e1e2d] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&q=85" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#12121b]/90 via-[#12121b]/70 to-[#12121b]/40" />
      <div className="relative max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[2px] w-10 bg-[#e07a1f]" />
          <span className="text-[#e07a1f] font-display uppercase tracking-[0.28em] text-sm">{eyebrow}</span>
        </div>
        <h1 className="font-display font-bold text-white uppercase text-5xl md:text-6xl">{title}</h1>
        <div className="mt-4 text-white/70 font-display uppercase tracking-wider text-sm">
          <Link to="/" className="hover:text-[#e07a1f]">Home</Link>
          <span className="mx-3 text-[#e07a1f]">›</span>
          <span className="text-white">{crumb}</span>
        </div>
      </div>
    </section>
  );
}