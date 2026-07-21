import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CONTACT } from "@/data/site";
import { Building2 } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full font-sans">
      <div className="bg-[#1e1e2d] text-white/80 text-sm">
        <div className="max-w-[1280px] mx-auto px-6 h-11 flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="inline-block w-5 h-5 rounded-full bg-[#e07a1f]/20 text-[#e07a1f] text-center leading-5">◎</span>
            <span>{CONTACT.address}</span>
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`} className="hidden sm:flex items-center gap-2 hover:text-[#e07a1f]"><span className="text-[#e07a1f]">☎</span>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hidden md:flex items-center gap-2 hover:text-[#e07a1f]"><span className="text-[#e07a1f]">✉</span>{CONTACT.email}</a>
            <div className="flex items-center gap-3 border-l border-white/10 pl-4 text-white/60">
              <a href="#" aria-label="Facebook" className="hover:text-[#e07a1f]">f</a>
              <a href="#" aria-label="Twitter" className="hover:text-[#e07a1f]">t</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#e07a1f]">in</a>
              <a href="#" aria-label="Instagram" className="hover:text-[#e07a1f]">◧</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 h-[92px] flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-[#e07a1f] rounded-lg text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#c86a17] transition-colors shadow-md">
              <Building2 size={24} strokeWidth={2.5} />
            </div>
            <span className="leading-tight">
              <span className="block font-display font-bold text-[20px] tracking-widest text-[#1e1e2d]">SMC</span>
              <span className="block text-[11px] tracking-[0.25em] text-[#e07a1f] font-display uppercase">Shri Mahalaxmi</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 font-display uppercase text-[14px] tracking-wider text-[#1e1e2d]">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative py-2 hover:text-[#e07a1f]"
                activeProps={{ className: "text-[#e07a1f] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[3px] after:bg-[#e07a1f]" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right leading-tight">
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Call Us</div>
              <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`} className="font-display font-bold text-[#1e1e2d] text-[17px]">{CONTACT.phone}</a>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e07a1f] text-white uppercase font-display tracking-wider text-sm px-5 py-3 rounded hover:bg-[#c86a17] transition-colors">
              Get A Quote <span>→</span>
            </Link>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">☰</button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-black/5 bg-white">
            <div className="px-6 py-4 flex flex-col gap-3 font-display uppercase tracking-wider text-sm">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 border-b border-black/5">{n.label}</Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}