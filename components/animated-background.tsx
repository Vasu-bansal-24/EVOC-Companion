"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient orb */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary gradient orb */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Accent gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
