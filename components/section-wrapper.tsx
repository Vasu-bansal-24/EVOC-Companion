"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  id,
  className,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
