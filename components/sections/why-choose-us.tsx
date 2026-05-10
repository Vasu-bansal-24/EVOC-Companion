"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { whyChooseUs } from "@/lib/constants";
import { Rocket, Bot, Users, TrendingUp, Layers } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  rocket: Rocket,
  bot: Bot,
  users: Users,
  "trending-up": TrendingUp,
  layers: Layers,
};

export function WhyChooseUsSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4"
        >
          Why Companion
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Built Different,{" "}
          <span className="gradient-text">Built to Last</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          We don&apos;t do generic marketing. Every system is engineered
          specifically for coaching businesses that want to scale.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {whyChooseUs.map((item, index) => {
          const Icon = iconMap[item.icon] || Rocket;
          const isLarge = index === 0 || index === 3;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + 0.2 }}
              className={`group rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/20 hover:bg-card transition-all duration-300 ${
                isLarge ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
