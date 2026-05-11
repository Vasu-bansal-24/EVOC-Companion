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

      {/* Visual Results */}
      <div className="space-y-12 mb-24 mt-12">
        {/* Subsection 1: Appointment Booking */}
        <div>
          <div className="flex items-center justify-center gap-4 px-4 md:px-0 mb-6">
            <div className="h-[2px] w-12 bg-primary/40 rounded-full" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 tracking-tight">Appointment Booking</h3>
            <div className="h-[2px] w-12 bg-primary/40 rounded-full" />
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[1, 2, 3].map((i, index) => (
              <motion.div 
                key={`calendar-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-[85vw] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.66px)] snap-center group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/40 bg-card/30 shadow-sm group-hover:shadow-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  {/* Theme blending overlay */}
                  <div className="absolute inset-0 bg-background/30 mix-blend-multiply dark:mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                  
                  <img 
                    src={`/Calendar${i}.jpg`} 
                    alt={`Calendar Result ${i}`}
                    className="w-full h-full object-cover opacity-75 saturate-[0.6] brightness-[0.8] group-hover:opacity-100 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subsection 2: Lead Generation Campaign */}
        <div>
          <div className="flex items-center justify-center gap-4 px-4 md:px-0 mb-6">
            <div className="h-[2px] w-12 bg-primary/40 rounded-full" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 tracking-tight">Lead Generation Campaigns</h3>
            <div className="h-[2px] w-12 bg-primary/40 rounded-full" />
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              "Lead Campaign1.png",
              "Lead Campaign2.jpg",
              "Lead Campaign3.jpg",
              "Lead Campaign4.jpg",
              "Lead Campaign5.jpg"
            ].map((imgName, index) => (
              <motion.div 
                key={`lead-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-[85vw] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.66px)] snap-center group"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/40 bg-card/30 shadow-sm group-hover:shadow-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  {/* Theme blending overlay */}
                  <div className="absolute inset-0 bg-background/30 mix-blend-multiply dark:mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                  
                  <img 
                    src={`/${imgName}`} 
                    alt={`Lead Campaign Result ${index + 1}`}
                    className="w-full h-full object-cover opacity-75 saturate-[0.6] brightness-[0.8] group-hover:opacity-100 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mb-16 mt-32">
        <h3 className="text-2xl md:text-3xl font-bold">What Our Clients Say</h3>
      </div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
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
