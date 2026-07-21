export function SectionTitle({ eyebrow, title, center = false, light = false }: { eyebrow: string; title: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      <div className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
        <span className="h-[2px] w-10 bg-[#e07a1f]" />
        <span className="text-[#e07a1f] font-display uppercase tracking-[0.28em] text-sm">{eyebrow}</span>
      </div>
      <h2 className={`font-display font-bold uppercase text-4xl md:text-5xl leading-tight ${light ? "text-white" : "text-[#1e1e2d]"}`}>{title}</h2>
      <div className={`mt-5 h-[3px] w-16 bg-[#e07a1f] ${center ? "mx-auto" : ""}`} />
    </div>
  );
}