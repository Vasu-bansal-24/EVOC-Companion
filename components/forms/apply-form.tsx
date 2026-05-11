"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

// Simplified Zod schema for a shorter, one-page form
const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  alternateMobile: z.string().optional(),
  whatsapp: z.string().min(6, "WhatsApp number is required"),
  businessName: z.string().optional(),
  instagram: z.string().optional(),
  adBudget: z.string().min(1, "Please select your daily ad budget"),
  goals: z.string().optional(),
  services: z.array(z.string()).min(1, "Select at least one service"),
});

type FormValues = z.infer<typeof formSchema>;

const serviceOptions = [
  "Ads Management",
  "Funnel Setup",
  "CRM Automation",
  "Full System Setup",
];

const adBudgetOptions = [
  "₹300 - ₹500",
  "₹500 - ₹800",
  "₹800 - ₹1000",
  "₹1000+",
];

export function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      alternateMobile: "",
      whatsapp: "",
      businessName: "",
      instagram: "",
      adBudget: "",
      goals: "",
      services: [],
    },
  });

  const selectedServices = watch("services");

  const toggleService = (service: string) => {
    const current = selectedServices || [];
    if (current.includes(service)) {
      setValue(
        "services",
        current.filter((s) => s !== service),
        { shouldValidate: true }
      );
    } else {
      setValue("services", [...current, service], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Application from ${data.fullName}`,
          from_name: data.fullName,
          ...data,
          services: data.services.join(", "),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success("Application submitted successfully!");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </motion.div>
        <h2 className="text-2xl font-bold mb-3">Application Received!</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-2">
          Thank you for your interest. Our team will review your application and
          reach out within 24 hours.
        </p>
        <p className="text-sm text-muted-foreground/60">
          Check your email for a confirmation.
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-border/60 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200";
  const labelClasses = "block text-sm font-medium mb-2";
  const errorClasses = "text-xs text-destructive mt-1.5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Full Name *</label>
          <input
            {...register("fullName")}
            placeholder="John Smith"
            className={inputClasses}
          />
          {errors.fullName && (
            <p className={errorClasses}>{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Alternate Mobile Number</label>
          <input
            {...register("alternateMobile")}
            placeholder="+1 234 567 8900"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>WhatsApp Number *</label>
          <input
            {...register("whatsapp")}
            placeholder="+1 234 567 8900"
            className={inputClasses}
          />
          {errors.whatsapp && (
            <p className={errorClasses}>{errors.whatsapp.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Business/Brand Name</label>
          <input
            {...register("businessName")}
            placeholder="Coaching Co."
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Instagram or Website URL</label>
          <input
            {...register("instagram")}
            placeholder="@handle or https://..."
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Daily Ad Budget *</label>
          <select {...register("adBudget")} className={inputClasses}>
            <option value="">Select range</option>
            {adBudgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.adBudget && (
            <p className={errorClasses}>{errors.adBudget.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClasses}>What are your main goals? </label>
        <textarea
          {...register("goals")}
          placeholder="What's the #1 thing you want to achieve right now?"
          rows={3}
          className={inputClasses}
        />
        {errors.goals && <p className={errorClasses}>{errors.goals.message}</p>}
      </div>

      <div>
        <label className={labelClasses}>
          Which services are you interested in? *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {serviceOptions.map((service) => {
            const isSelected = selectedServices?.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-sm text-left transition-all duration-200 ${isSelected
                    ? "border-primary/50 bg-primary/5 text-foreground"
                    : "border-border/50 bg-card/50 text-muted-foreground hover:border-border hover:bg-card"
                  }`}
              >
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${isSelected ? "border-primary bg-primary" : "border-border"
                    }`}
                >
                  {isSelected && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                {service}
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className={errorClasses}>{errors.services.message}</p>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting Application...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Submit Application
            </>
          )}
        </button>
      </div>
    </form>
  );
}
