import { education, experience } from "../data/portfolio";
import Reveal, { SectionHeading, trackPointer } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="space-y-5">
        {experience.map((e, i) => (
          <Reveal key={e.org}>
            <article onMouseMove={trackPointer} className="spot card rounded-3xl p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {e.kind}
                    {i === 0 && <span className="ml-3 rounded-full bg-accent/15 px-2.5 py-0.5 text-accent">Current</span>}
                  </span>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">{e.role}</h3>
                  <p className="mt-1 text-lg text-mist">{e.org}</p>
                </div>
                <span className="rounded-full border border-line px-4 py-1.5 font-mono text-sm text-mist">{e.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-mist">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span key={t} className="rounded-full bg-panel2 px-3 py-1 font-mono text-xs text-mist">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <h3 className="display text-2xl">Education & achievements</h3>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {education.map((ed) => (
          <Reveal key={ed.degree}>
            <div onMouseMove={trackPointer} className="spot card h-full rounded-2xl p-6">
              <div className="flex items-baseline justify-between gap-3">
                <span className="display text-2xl text-accent">{ed.score}</span>
                <span className="font-mono text-sm text-mist">{ed.period}</span>
              </div>
              <h4 className="mt-3 text-lg font-semibold leading-snug">{ed.degree}</h4>
              <p className="mt-1 text-mist">{ed.school}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
