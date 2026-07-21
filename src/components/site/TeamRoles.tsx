type TeamMember = {
  name: string;
  role: string;
  image: string;
};

type TeamRoleSection = {
  title: string;
  summary: string;
  members: readonly TeamMember[];
};

export function TeamRoles({ sections }: { sections: readonly TeamRoleSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.title} className="scroll-mt-24">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-[#e07a1f] font-display">{section.title}</div>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase text-[#1e1e2d]">{section.summary}</h3>
            </div>
            <div className="text-sm text-muted-foreground">
              {section.members.length} member{section.members.length === 1 ? "" : "s"}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {section.members.map((member) => (
              <article key={`${section.title}-${member.name}`} className="overflow-hidden border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121b]/70 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl font-bold uppercase text-[#1e1e2d]">{member.name}</h4>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#e07a1f]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
