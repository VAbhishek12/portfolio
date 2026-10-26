import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

function shouldPlay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return !sessionStorage.getItem("intro-seen");
  } catch {
    return true;
  }
}

/** Full-screen name reveal shown once per browser session. */
export default function Intro() {
  const [show, setShow] = useState(shouldPlay);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2300);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("intro-seen", "1");
      } catch {
        /* ignore */
      }
    };
  }, [show]);

  const words = ["VEDULA", "ABHISHEK"];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease }}
          onClick={() => setShow(false)}
          aria-hidden
        >
          <div className="text-center">
            {words.map((w, i) => (
              <div key={w} className="overflow-hidden">
                <motion.div
                  className={`display text-[15vw] leading-[0.95] sm:text-[11vw] ${i === 1 ? "gradient-text" : ""}`}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.15 + i * 0.15, ease }}
                >
                  {w}
                </motion.div>
              </div>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-mist"
            >
              AI · Vision · Research
            </motion.p>
            <div className="mx-auto mt-8 h-px w-48 overflow-hidden bg-line">
              <motion.div
                className="h-full bg-accent"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
