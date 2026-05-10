"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { testimonials } from "@/lib/constants";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4"
        >
          Client Results
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Real Growth,{" "}
          <span className="gradient-text">Real Results</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          Hear from coaches who transformed their businesses with our systems.
        </motion.p>
      </div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="group rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/20 hover:bg-card transition-all duration-300"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-primary/20 mb-4" />

            {/* Content */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            {/* Metric */}
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-3 mb-6">
              <div className="text-2xl font-bold gradient-text">
                {testimonial.metric}
              </div>
              <div className="text-xs text-muted-foreground">
                {testimonial.metricLabel}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
