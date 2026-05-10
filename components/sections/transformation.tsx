"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { X, Check } from "lucide-react";

const beforeItems = [
  "Inconsistent, unpredictable leads",
  "Manual follow-ups eating your time",
  "Low conversion from DMs and posts",
  "No clear pipeline or tracking",
  "Revenue plateaus month after month",
];

const afterItems = [
  "Automated, predictable lead flow",
  "CRM handles all nurturing for you",
  "12%+ funnel conversion rates",
  "Full visibility into your pipeline",
  "Scalable growth system in place",
];

export function TransformationSection() {
  return (
    <SectionWrapper id="results">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4"
        >
          The Transformation
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          From Hustle to{" "}
          <span className="gradient-text">System</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          See how our clients go from chasing leads to building predictable
          growth engines.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
              <X className="w-4 h-4 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-red-400">Before Companion</h3>
          </div>
          <ul className="space-y-4">
            {beforeItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <X className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-accent/20 bg-accent/[0.02] p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-accent">After Companion</h3>
          </div>
          <ul className="space-y-4">
            {afterItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <Check className="w-4 h-4 text-accent/80 mt-0.5 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
