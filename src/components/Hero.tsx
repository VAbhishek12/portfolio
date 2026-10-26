import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { highlights, marquee, profile } from "../data/portfolio";
import NetworkCanvas from "./NetworkCanvas";

const ease = [0.22, 1, 0.36, 1] as const;

const roles = [
  "vision-language models",
  "drone video analytics",
  "YOLO on the edge",
  "adversarial robustness",
  "road-safety reasoning",
];

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = deleting ? 30 : text === word ? 1500 : 70;
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
    <span className="text-accent">
      {text}
      <span className="animate-pulse">▍</span>
    </span>
  );
}

export default function Hero() {
  const loop = [...marquee, ...marquee];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* background: aurora blobs + dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full opacity-30 blur-[110px]"
          style={{ background: "var(--accent)", animation: "drift 16s ease-in-out infinite" }}
        />
        <div
          className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full opacity-25 blur-[110px]"
          style={{ background: "var(--accent-2)", animation: "drift 20s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute left-1/3 top-72 h-[300px] w-[300px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-3)", animation: "drift 24s ease-in-out infinite" }}
        />
        <div className="dot-grid absolute inset-0" />
      </div>
      <div className="absolute inset-0">
        <NetworkCanvas />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-panel/70 px-4 py-1.5 font-mono text-xs text-mist backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </motion.div>

        <h1 className="display mt-8 text-[2.9rem] leading-[1.02] sm:text-7xl lg:text-[5.6rem]">
          {profile.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 1 ? "gradient-text" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl"
        >
          <span className="text-snow">Hi, I'm {profile.name}.</span> {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 font-mono text-sm text-mist sm:text-base"
        >
          <span className="text-snow">$</span> currently working on <Typewriter words={roles} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-accent px-7 py-3.5 font-medium text-onaccent transition-transform hover:scale-[1.04]"
          >
            See my work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-7 py-3.5 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Download résumé
          </a>
          <a href="#contact" className="px-2 py-3.5 font-medium text-mist transition-colors hover:text-snow">
            Let's talk →
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {highlights.map((h) => (
            <div key={h.label} className="bg-panel/80 p-5 backdrop-blur">
              <dt className="display text-2xl text-snow sm:text-3xl">{h.value}</dt>
              <dd className="mt-1 text-sm text-mist">{h.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="marquee relative border-y border-line bg-panel/50 py-4 backdrop-blur" aria-hidden>
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-sm text-mist">
          {loop.map((m, i) => (
            <span key={i} className="flex items-center gap-10">
              {m}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
