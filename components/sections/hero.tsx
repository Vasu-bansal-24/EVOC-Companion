"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Zap, Calendar } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { stats } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <AnimatedBackground />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Now Accepting New Clients
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Turn Your Coaching Business Into a{" "}
            <span className="gradient-text">Predictable Lead Machine</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build high-converting funnels, ad systems, and CRM automations
            that help online coaches consistently book qualified calls — on
            autopilot.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/apply"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="#process"
              className="group inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Play className="w-4 h-4" />
              See How It Works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating UI Cards */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute left-8 top-1/3"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-xl p-4 glow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Leads This Month
                  </div>
                  <div className="text-sm font-semibold">+247</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute right-8 top-1/4"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-xl p-4 glow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Calls Booked
                  </div>
                  <div className="text-sm font-semibold">18 this week</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute right-16 bottom-1/4"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-xl p-4 glow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Conversion Rate
                  </div>
                  <div className="text-sm font-semibold">12.4%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="absolute left-16 bottom-1/3"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-xl p-4 glow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-yellow-500" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    ROAS Average
                  </div>
                  <div className="text-sm font-semibold">4.2x</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
