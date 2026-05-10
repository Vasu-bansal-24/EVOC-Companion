"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  BarChart3,
  Globe,
  Mail,
  MessageSquare,
  Smartphone,
} from "lucide-react";

const platforms = [
  { name: "Meta Ads", icon: Megaphone },
  { name: "Google Ads", icon: BarChart3 },
  { name: "GoHighLevel", icon: Globe },
  { name: "Mailchimp", icon: Mail },
  { name: "WhatsApp", icon: MessageSquare },
  { name: "Instagram", icon: Smartphone },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/30 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          Trusted by coaches & consultants · Platforms we work with
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.2 }}
                className="flex items-center gap-2.5 text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{platform.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
