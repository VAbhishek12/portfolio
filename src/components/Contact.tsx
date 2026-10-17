import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(45,212,191,0.14),transparent)]" />
        <p className="relative font-mono text-sm text-accent">06 · Contact</p>
        <h2 className="section-title relative mt-4 text-4xl sm:text-5xl">Let's build something together</h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-mist">
          I'm looking for data science and machine learning roles where I can learn from real projects. Say hello.
        </p>
        <div className="relative mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-7 py-3 font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-7 py-3 font-medium hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-7 py-3 font-medium hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </Reveal>
      <footer className="mt-12 text-center text-sm text-mist">
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
      </footer>
    </section>
  );
}
