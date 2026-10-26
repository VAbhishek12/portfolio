import { profile, skillGroups } from "../data/portfolio";
import Reveal, { SectionHeading } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading eyebrow="About" title="What I work on" />

      <Reveal className="max-w-3xl space-y-5 text-lg leading-relaxed text-mist">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>

      <div className="mt-20">
        <Reveal>
          <h3 className="display text-2xl">Toolbox</h3>
        </Reveal>
        <div className="mt-6">
          {skillGroups.map((g) => (
            <Reveal key={g.title}>
              <div className="grid gap-3 border-t border-dashed border-line py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                <h4 className="font-mono text-sm uppercase tracking-wider text-accent">{g.title}</h4>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-dashed border-line" />
        </div>
      </div>
    </section>
  );
}
