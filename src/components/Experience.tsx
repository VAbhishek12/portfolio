import { experience } from "../data/portfolio";
import Reveal, { SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="02" title="Experience" />
      <div className="relative border-l border-line pl-8">
        {experience.map((e) => (
          <Reveal key={e.company} className="relative">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-ink" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl font-semibold">
                {e.role} <span className="text-accent">@ {e.company}</span>
              </h3>
              <span className="font-mono text-sm text-mist">{e.period}</span>
            </div>
            <ul className="mt-5 space-y-3 text-mist">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
