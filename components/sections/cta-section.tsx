"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Ready to Build a Scalable{" "}
            <span className="gradient-text">Client Acquisition System</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Stop guessing. Start growing. Apply now and let&apos;s build a
            system that fills your calendar with qualified coaching clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/apply"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`mailto:hello@companionagency.com`}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Book Discovery Call
            </a>
          </motion.div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
