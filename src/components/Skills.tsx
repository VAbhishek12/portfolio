import { skillGroups } from "../data/portfolio";
import Reveal, { SectionHeading } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="04" title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.07}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-accent">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg bg-ink/60 px-3 py-1.5 text-sm text-snow ring-1 ring-line">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
