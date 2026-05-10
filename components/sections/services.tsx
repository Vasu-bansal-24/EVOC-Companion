"use client";

import { motion } from "framer-motion";
import { Target, Layout, Workflow, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { services } from "@/lib/constants";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  layout: Layout,
  workflow: Workflow,
};

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Everything You Need to{" "}
          <span className="gradient-text">Scale</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          From paid traffic to automated follow-ups, we build the complete
          client acquisition system your coaching business needs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Target;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2.5">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link
          href="/apply"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Get a custom growth plan
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
