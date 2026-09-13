"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[70vh] items-center bg-gradient-to-b from-dusk via-ember to-gold px-6 py-28 sm:px-10"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display italic text-night/70"
        >
          Get in touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-balance font-display text-4xl leading-tight text-night sm:text-6xl"
        >
          Let&apos;s build something worth the daylight.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-night/70"
        >
          Open to select freelance projects and full-time roles where design
          and engineering aren&apos;t separate departments.
        </motion.p>

        <motion.a
          href="mailto:hello@tarun.dev"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-night px-7 py-4 text-cream transition-transform hover:scale-[1.03]"
        >
          <Mail size={18} />
          hello@tarun.dev
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.a>
      </div>
    </section>
  );
}
