"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ParallaxLayer, { useSectionScroll } from "./ParallaxLayer";
import { ArrowDown } from "lucide-react";

const SunScene = dynamic(() => import("./SunScene"), { ssr: false });

export default function Hero() {
  const { ref, scrollYProgress } = useSectionScroll();

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-gradient-to-b from-night via-dusk to-horizon"
    >
      {/* Sky glow */}
      <ParallaxLayer
        progress={scrollYProgress}
        range={[0, 1]}
        output={[0, -80]}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/25 blur-[110px] sm:h-[560px] sm:w-[560px]" />
      </ParallaxLayer>

      {/* 3D sun */}
      <ParallaxLayer
        progress={scrollYProgress}
        range={[0, 1]}
        output={[0, -60]}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-[20%] h-[60vh] w-full max-w-3xl -translate-x-1/2">
          <SunScene />
        </div>
      </ParallaxLayer>

      {/* Far mountains */}
      <ParallaxLayer
        progress={scrollYProgress}
        range={[0, 1]}
        output={[0, 90]}
        className="absolute inset-x-0 bottom-0"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full text-horizon/70"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0 220 L180 120 L360 200 L520 90 L700 190 L880 70 L1060 180 L1240 110 L1440 200 L1440 320 L0 320 Z"
          />
        </svg>
      </ParallaxLayer>

      {/* Near mountains */}
      <ParallaxLayer
        progress={scrollYProgress}
        range={[0, 1]}
        output={[0, 160]}
        className="absolute inset-x-0 bottom-0"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full text-night"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0 260 L220 160 L400 240 L600 130 L820 250 L1020 150 L1220 230 L1440 170 L1440 320 L0 320 Z"
          />
        </svg>
      </ParallaxLayer>

      {/* Headline */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 sm:px-10 sm:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-4 font-display text-lg italic text-dawn"
        >
          Tarun — creative developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-balance font-display text-[13vw] leading-[0.95] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Interfaces that
          <br />
          feel like{" "}
          <span className="italic text-gold">first light.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 max-w-md text-mist sm:text-lg"
        >
          I build product interfaces, motion systems, and playful 3D
          experiences on the web — slow to load never, memorable always.
        </motion.p>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-widest text-mist"
      >
        <span>scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
