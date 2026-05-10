"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-active-section";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-primary z-[60] origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
