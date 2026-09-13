"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    title: "Engineering",
    items: ["TypeScript", "React / Next.js", "Three.js / WebGL", "Node.js"],
  },
  {
    title: "Design",
    items: ["Interaction design", "Design systems", "Prototyping", "Motion"],
  },
  {
    title: "Tools",
    items: ["Figma", "Framer Motion", "Blender", "GSAP"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-dusk px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display italic text-dawn"
        >
          Craft
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-balance font-display text-3xl text-cream sm:text-5xl"
        >
          The tools I reach for, and the things I actually check twice.
        </motion.h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3 className="font-display text-lg text-gold">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-cream/10 pb-3 text-mist transition-colors hover:text-cream"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
