import { moreProjects, projects, type Project } from "../data/portfolio";
import Reveal, { SectionHeading, trackPointer } from "./Reveal";

const accentVar = { a: "var(--accent)", b: "var(--accent-2)", c: "var(--accent-3)" } as const;

function Links({ p }: { p: Project }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={p.repo}
        target="_blank"
        rel="noreferrer"
        className={`${base} bg-snow text-ink hover:opacity-85`}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
        </svg>
        GitHub
      </a>
      {p.demo && (
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          className={`${base} border border-line hover:border-accent hover:text-accent`}
        >
          Live demo ↗
        </a>
      )}
    </div>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <article
      onMouseMove={trackPointer}
      style={{ ["--c" as string]: accentVar[p.accent] }}
      className={`spot card flex h-full flex-col rounded-3xl p-7 sm:p-9 ${p.featured ? "md:p-11" : ""}`}
    >
      <span
        aria-hidden
        className="absolute inset-x-8 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accentVar[p.accent]}, transparent)` }}
      />
      <p className="font-mono text-xs uppercase tracking-wider" style={{ color: accentVar[p.accent] }}>
        {p.kicker}
      </p>
      <h3 className={`display mt-3 ${p.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{p.title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-snow/90">{p.summary}</p>

      <ul className="mt-5 space-y-3 text-mist">
        {p.points.map((pt) => (
          <li key={pt} className="flex gap-3 leading-relaxed">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accentVar[p.accent] }} />
            {pt}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-mist">Focus areas</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {p.focus.map((f) => (
            <span
              key={f}
              className="rounded-full px-3 py-1 text-xs"
              style={{
                color: accentVar[p.accent],
                background: `color-mix(in srgb, ${accentVar[p.accent]} 12%, transparent)`,
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-5 font-mono text-xs text-mist">{p.tech.join("  ·  ")}</p>

      <div className="mt-auto pt-8">
        <Links p={p} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading eyebrow="Work" title="Selected projects" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08} className={p.featured ? "md:col-span-2" : ""}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-6 mt-24">
        <h3 className="display text-2xl sm:text-3xl">More projects</h3>
        <p className="mt-2 text-mist">Smaller builds across recommenders, fraud detection, forecasting and generative AI.</p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((m, i) => (
          <Reveal key={m.repo} delay={(i % 3) * 0.07}>
            <a
              href={m.repo}
              target="_blank"
              rel="noreferrer"
              onMouseMove={trackPointer}
              className="spot card group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{m.kicker}</p>
              <h4 className="display mt-2 text-xl">{m.title}</h4>
              <p className="mt-3 flex-1 leading-relaxed text-mist">{m.summary}</p>
              <p className="mt-5 font-mono text-xs text-mist">{m.tech.join("  ·  ")}</p>
              <span className="mt-5 text-sm font-medium transition-colors group-hover:text-accent">
                View on GitHub <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
