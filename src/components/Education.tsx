import { certificates, education } from "../data/portfolio";
import Reveal, { SectionHeading } from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="05" title="Education & Certificates" />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          {education.map((e) => (
            <Reveal key={e.school}>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-mono text-sm text-accent">{e.score}</span>
                  <span className="font-mono text-sm text-mist">{e.period}</span>
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold">{e.degree}</h3>
                <p className="mt-1 text-mist">{e.school}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certificates.map((c) => (
              <li key={c.name} className="glass rounded-2xl p-5">
                <p className="font-medium leading-snug">{c.name}</p>
                <p className="mt-1 text-sm text-mist">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
