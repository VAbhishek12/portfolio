import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  ["Home", "top"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Contact", "contact"],
] as const;

type Theme = "dark" | "light";

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* storage unavailable */
  }
  return "dark";
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const toggle = (
    <button
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-mist transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : ""
      }`}
    >
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="display text-lg">
          VA<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active === id ? "bg-panel2 text-snow" : "text-mist hover:text-snow"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {toggle}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-onaccent transition-transform hover:scale-[1.04]"
          >
            Résumé
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {toggle}
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="p-1">
            <span className="block h-0.5 w-6 bg-snow" />
            <span className="mt-1.5 block h-0.5 w-6 bg-snow" />
            <span className="mt-1.5 block h-0.5 w-4 bg-snow" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto flex max-w-6xl flex-col px-5 pb-4 md:hidden">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2.5 text-mist">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="block py-2.5 text-accent">
              Résumé
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
