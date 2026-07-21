import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CONTACT } from "@/data/site";
import logo from "@/assets/logo.jpeg";

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
          </div>
        </div>
      </div>
      <div className="bg-white border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 h-[92px] flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-white rounded-lg shadow-md border border-gray-100 flex-shrink-0 overflow-hidden flex items-center justify-center p-1">
              <img src={logo} alt="Shri Mahalaxmi Construction logo" className="w-full h-full object-contain rounded" />
            </div>
            <span className="leading-tight">
              <span className="block font-display font-bold text-[20px] tracking-wide text-[#1e1e2d]">Shri Mahalaxmi</span>
              <span className="block text-[10px] tracking-[0.25em] text-[#e07a1f] font-display uppercase">Construction</span>
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
