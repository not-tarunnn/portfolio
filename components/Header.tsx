"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Craft" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState<string>("#work");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCompact(latest > 80);
  });

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 sm:top-6"
    >
      <motion.nav
        animate={{
          paddingLeft: compact ? 10 : 22,
          paddingRight: compact ? 10 : 22,
          paddingTop: compact ? 8 : 12,
          paddingBottom: compact ? 8 : 12,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="tablet-glass flex items-center gap-1 rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:gap-2"
      >
        <a
          href="#top"
          className="mr-2 flex items-center gap-2 pl-1 pr-3 text-sm font-medium tracking-tight text-dawn sm:mr-3"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-night">
            T
          </span>
          <span className="hidden font-display italic text-cream sm:inline">
            Tarun
          </span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === link.href
                  ? "text-night"
                  : "text-mist hover:text-cream"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-1 whitespace-nowrap rounded-full bg-cream px-4 py-2 text-sm font-medium text-night transition-transform hover:scale-[1.03] sm:ml-2"
        >
          Say hi
        </a>
      </motion.nav>
    </motion.header>
  );
}
