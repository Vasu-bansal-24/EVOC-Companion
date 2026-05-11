import type { Metadata } from "next";
import { ApplyForm } from "@/components/forms/apply-form";
import { AnimatedBackground } from "@/components/animated-background";
import { TestimonialsSection } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Apply — Companion | Start Your Growth Journey",
  description:
    "Apply to work with Companion. Fill out our quick qualification form and we'll get back to you within 24 hours with a custom growth plan.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="relative min-h-[80vh] pt-24 pb-16">
        <AnimatedBackground />

        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
              Limited Spots Available
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Start Your <span className="gradient-text">Growth Journey</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Tell us about your coaching business and goals. We&apos;ll craft a
              custom strategy to help you scale.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8">
            <ApplyForm />
          </div>

          {/* Trust note */}
          <p className="text-center text-xs text-muted-foreground/60 mt-6">
            Your information is secure and will never be shared with third
            parties.
          </p>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
