"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { faqItems } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Common{" "}
            <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Everything you need to know before getting started.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.2 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between rounded-xl border border-border/50 bg-card/50 px-6 py-4 text-left hover:border-primary/20 hover:bg-card transition-all duration-200"
                >
                  <span className="text-sm font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-sm text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
