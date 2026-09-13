"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export function useSectionScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, scrollYProgress };
}

export default function ParallaxLayer({
  progress,
  range,
  output,
  className,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  output: [number, number];
  className?: string;
  children: ReactNode;
}) {
  const y = useTransform(progress, range, output);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
