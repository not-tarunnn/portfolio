"use client";

import { motion } from "framer-motion";
import ParallaxLayer, { useSectionScroll } from "./ParallaxLayer";

const STATS = [
  { value: "6+", label: "years building for the web" },
  { value: "40+", label: "products shipped" },
  { value: "12", label: "design systems led" },
];

export default function About() {
  const { ref, scrollYProgress } = useSectionScroll();

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-horizon px-6 py-28 sm:px-10 sm:py-36"
    >
      <ParallaxLayer
        progress={scrollYProgress}
        range={[0, 1]}
        output={[80, -80]}
        className="pointer-events-none absolute right-[-10%] top-0 h-full"
      >
        <div className="h-full w-[420px] bg-gold/10 blur-[100px]" />
      </ParallaxLayer>

      <div className="relative mx-auto grid max-w-5xl gap-16 sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-display italic text-dawn"
          >
            About
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-balance font-display text-3xl leading-tight text-cream sm:text-5xl"
          >
            I like the moment right before something becomes obvious.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-mist"
          >
            Tarun is a Sanskrit word for the sun at first light — young,
            unhurried, certain of where it&apos;s going. That&apos;s the
            standard I hold my work to: interfaces that feel inevitable once
            you see them, even if they took forty drafts to get there. I
            work across product design, front-end engineering, and the
            occasional too-ambitious WebGL scene.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 self-start sm:grid-cols-2">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border border-cream/10 bg-night/40 p-6 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <p className="font-display text-4xl text-gold">{stat.value}</p>
              <p className="mt-2 text-sm text-mist">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
