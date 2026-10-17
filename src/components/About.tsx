import { profile, stats } from "../data/portfolio";
import Reveal, { SectionHeading } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-mist">
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="section-title text-3xl text-accent">{s.value}</div>
              <div className="mt-1 text-sm text-mist">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
