import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects, type Project } from "../data/portfolio";
import Reveal, { SectionHeading } from "./Reveal";

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const rows: [string, string][] = [
    ["Problem", project.problem],
    ["Approach", project.approach],
    ["Result", project.result],
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line bg-panel p-7 sm:rounded-3xl sm:p-9"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider" style={{ color: project.accent }}>
              {project.kicker}
            </p>
            <h3 className="section-title mt-2 text-3xl">{project.title}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-2xl leading-none text-mist hover:text-snow">
            ×
          </button>
        </div>

        <dl className="mt-7 space-y-5">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs uppercase tracking-wider text-mist">{k}</dt>
              <dd className="mt-1 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mist">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-snow px-5 py-2.5 text-sm font-medium text-ink"
          >
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading index="03" title="Projects" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08}>
            <button
              onClick={() => setActive(p)}
              className="group glass relative h-full w-full overflow-hidden rounded-3xl p-7 text-left transition-transform duration-300 hover:-translate-y-1"
              style={{ ["--c" as string]: p.accent }}
            >
              <span
                className="absolute inset-x-0 top-0 h-px opacity-60 transition-opacity group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
              />
              <p className="font-mono text-xs uppercase tracking-wider" style={{ color: p.accent }}>
                {p.kicker}
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{p.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mist">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-block text-sm text-snow transition-transform group-hover:translate-x-1">
                Case study →
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{active && <Modal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
