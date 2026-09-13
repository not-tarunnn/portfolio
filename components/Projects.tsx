"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    title: "Solstice",
    tag: "Product design · React",
    description:
      "A scheduling tool for creative studios, rebuilt around a single timeline view instead of five disconnected screens.",
    gradient: "from-[#F4B942] to-[#B8562F]",
  },
  {
    title: "Glasswing",
    tag: "WebGL · Three.js",
    description:
      "An interactive data sculpture for a climate research lab — three years of readings you can walk through in the browser.",
    gradient: "from-[#4A3B6B] to-[#211A38]",
  },
  {
    title: "Northbound",
    tag: "Design system",
    description:
      "A component library and token pipeline adopted across nine product teams, cutting new-screen build time by half.",
    gradient: "from-[#FCD9A6] to-[#F4B942]",
  },
  {
    title: "Afterglow",
    tag: "Motion · Framer Motion",
    description:
      "A marketing site for a lighting brand where every scroll step is choreographed like a stage cue.",
    gradient: "from-[#B8562F] to-[#211A38]",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative bg-night px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display italic text-dawn"
        >
          Selected work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-balance font-display text-3xl text-cream sm:text-5xl"
        >
          A handful of the projects worth telling you about.
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <TiltCard className="group cursor-pointer rounded-3xl border border-cream/10 bg-dusk/40 p-1">
                <div
                  className={`flex h-40 items-end rounded-[20px] bg-gradient-to-br p-5 ${project.gradient}`}
                >
                  <span className="rounded-full bg-night/40 px-3 py-1 text-xs font-medium text-cream backdrop-blur">
                    {project.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-cream">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="text-mist transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold"
                      size={20}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {project.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
