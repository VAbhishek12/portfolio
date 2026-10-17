import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import NetworkCanvas from "./NetworkCanvas";

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = deleting ? 35 : text === word ? 1400 : 75;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI((n) => n + 1);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="animate-pulse">▍</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <NetworkCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_30%_40%,rgba(45,212,191,0.10),transparent),linear-gradient(to_bottom,transparent_70%,var(--color-ink))]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-sm text-mist"
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-5xl leading-[1.02] sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-xl text-snow sm:text-2xl"
        >
          {profile.role} <span className="text-mist">·</span> <Typewriter words={profile.roles} />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist"
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            View projects
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Download résumé
          </a>
          <a
            href="#contact"
            className="px-2 py-3 font-medium text-mist transition-colors hover:text-snow"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
