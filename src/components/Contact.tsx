import { achievements, profile } from "../data/portfolio";
import Reveal from "./Reveal";

const pill =
  "rounded-full border border-line px-7 py-3.5 font-medium transition-colors hover:border-accent hover:text-accent";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-10 pt-28">
      <Reveal className="card relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(50% 70% at 20% 0%, color-mix(in srgb, var(--accent) 22%, transparent), transparent), radial-gradient(50% 70% at 85% 100%, color-mix(in srgb, var(--accent-2) 20%, transparent), transparent)",
          }}
        />
        <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="display relative mt-4 text-4xl sm:text-6xl">
          Let's <span className="gradient-text">connect</span>
        </h2>
        <p className="relative mx-auto mt-6 max-w-xl text-lg text-mist">
          Interested in vision-language models, road-safety AI or research collaboration? My inbox is open.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}?subject=Hello%20Abhishek`}
            className="rounded-full bg-accent px-8 py-3.5 font-medium text-onaccent transition-transform hover:scale-[1.04]"
          >
            Send me an email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={pill}>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={pill}>
            GitHub
          </a>
        </div>
        <p className="relative mt-8 font-mono text-sm text-mist">{profile.email}</p>
      </Reveal>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-sm text-mist sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs">★ {achievements[0]}</span>
      </footer>
    </section>
  );
}
