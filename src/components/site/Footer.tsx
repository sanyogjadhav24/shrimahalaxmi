import { Link } from "@tanstack/react-router";
import { CONTACT, SERVICES } from "@/data/site";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-[#12121b] text-white/70 font-sans">
      <div className="bg-[#e07a1f]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white/80 text-sm uppercase tracking-[0.25em] font-display">Have a project in mind?</div>
            <h3 className="font-display font-bold text-white text-2xl md:text-3xl uppercase mt-1">Let's Build Something Great Together</h3>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a href={`tel:${CONTACT.phone.replace(/\s/g,'')}`} className="bg-white text-[#1e1e2d] px-5 py-3 rounded font-display uppercase tracking-wider text-sm">Call Us · {CONTACT.phone}</a>
            <Link to="/contact" className="border border-white/70 text-white px-5 py-3 rounded font-display uppercase tracking-wider text-sm hover:bg-white hover:text-[#1e1e2d]">Request a Quote</Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Shri Mahalaxmi Construction logo" className="h-11 w-11 rounded-md object-cover" />
            <span className="leading-tight text-white">
              <span className="block font-display font-bold text-[17px]">SHRI MAHALAXMI</span>
              <span className="block text-[11px] tracking-[0.28em] text-[#e07a1f] font-display">CONSTRUCTION</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed"><strong className="text-white">Government Contractor &amp; Civil Engineering Experts</strong>. Building reliable public infrastructure across Maharashtra since <span className="text-[#e07a1f]">1998</span>.</p>
        </div>
        <div>
          <h4 className="text-white font-display uppercase tracking-wider text-base mb-5">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#e07a1f]">→ Home</Link></li>
            <li><Link to="/about" className="hover:text-[#e07a1f]">→ About</Link></li>
            <li><Link to="/services" className="hover:text-[#e07a1f]">→ Services</Link></li>
            <li><Link to="/projects" className="hover:text-[#e07a1f]">→ Projects</Link></li>
            <li><Link to="/contact" className="hover:text-[#e07a1f]">→ Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display uppercase tracking-wider text-base mb-5">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0,5).map((s) => (
              <li key={s.title}><Link to="/services" className="hover:text-[#e07a1f]">→ {s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-display uppercase tracking-wider text-base mb-5">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><span className="text-[#e07a1f]">◎</span>{CONTACT.address}</li>
            <li className="flex gap-3"><span className="text-[#e07a1f]">☎</span>{CONTACT.phone}</li>
            <li className="flex gap-3"><span className="text-[#e07a1f]">✉</span>{CONTACT.email}</li>
            <li className="flex gap-3"><span className="text-[#e07a1f]">⏱</span>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <div>© <span className="text-white">2026</span> <span className="text-white">Shri Mahalaxmi Construction</span>. All Rights Reserved.</div>
          <div>Class-A Government Contractor | ISO 9001:2015 Certified</div>
        </div>
      </div>
    </footer>
  );
}