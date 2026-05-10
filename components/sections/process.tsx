"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { processSteps } from "@/lib/constants";
import { Compass, PenTool, Rocket, TrendingUp } from "lucide-react";

const icons = [Compass, PenTool, Rocket, TrendingUp];

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4"
        >
          How It Works
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          From Strategy to{" "}
          <span className="gradient-text">Scale</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          Our proven 4-step process takes you from zero to a fully automated
          client acquisition system.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto">
        {processSteps.map((step, index) => {
          const Icon = icons[index];
          const isLast = index === processSteps.length - 1;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2 }}
              className="relative flex gap-6 pb-12"
            >
              {/* Connector Line */}
              {!isLast && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/30 to-border/30" />
              )}

              {/* Step Circle */}
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-1">
                <span className="text-xs uppercase tracking-[0.15em] text-primary font-medium">
                  Step {step.step}
                </span>
                <h3 className="text-xl font-semibold mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
