import type { Testimonial, FAQItem, ProcessStep } from "@/types";

export const siteConfig = {
  name: "Companion",
  description:
    "We build high-converting funnels, ad systems, and CRM automations that help online coaches consistently book qualified calls.",
  url: "https://companionagency.com",
  email: "hello@companionagency.com",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
  {
    icon: "target",
    title: "Ad Management",
    description:
      "Precision-targeted ad campaigns across Meta and Google that consistently deliver qualified leads to your calendar.",
    benefits: [
      "Meta & Google Ads",
      "Advanced Retargeting",
      "Lead Generation Funnels",
      "Performance Optimization",
    ],
  },
  {
    icon: "layout",
    title: "Funnel & Website Setup",
    description:
      "High-converting landing pages and sales funnels engineered to turn cold traffic into booked appointments.",
    benefits: [
      "Conversion-Optimized Pages",
      "Sales Funnel Architecture",
      "Speed-Optimized Sites",
      "A/B Testing Ready",
    ],
  },
  {
    icon: "workflow",
    title: "CRM & Automation",
    description:
      "End-to-end automation systems that nurture leads, manage pipelines, and book calls on autopilot.",
    benefits: [
      "Lead Tracking & Scoring",
      "WhatsApp & Email Automation",
      "Appointment Workflows",
      "Pipeline Management",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Strategy",
    description:
      "We analyze your coaching business, audience, and goals to craft a tailored acquisition strategy.",
  },
  {
    step: 2,
    title: "Funnel Setup",
    description:
      "We build your high-converting landing pages, lead magnets, and booking systems.",
  },
  {
    step: 3,
    title: "Ad Launch",
    description:
      "We launch precision-targeted ad campaigns across Meta and Google to drive qualified leads.",
  },
  {
    step: 4,
    title: "Scale & Optimize",
    description:
      "We continuously optimize your funnel and ads to reduce costs and increase qualified bookings.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Mindset Coach",
    content:
      "Companion completely transformed my business. I went from chasing leads on Instagram to having a fully automated system that books 15+ calls per week.",
    metric: "320%",
    metricLabel: "Increase in Booked Calls",
  },
  {
    name: "James Rivera",
    role: "Fitness Coach",
    content:
      "Before Companion, I was spending hours on manual follow-ups. Now my CRM handles everything and I can focus on coaching my clients.",
    metric: "$47K",
    metricLabel: "Monthly Revenue",
  },
  {
    name: "Priya Sharma",
    role: "Business Coach",
    content:
      "The funnel they built converts at 12%. My ad spend went from being a gamble to a predictable investment with clear ROI.",
    metric: "12%",
    metricLabel: "Funnel Conversion Rate",
  },
  {
    name: "David Chen",
    role: "Executive Coach",
    content:
      "I was skeptical about agencies, but Companion delivered in the first 30 days. My pipeline is now consistently full of qualified prospects.",
    metric: "4.2x",
    metricLabel: "Return on Ad Spend",
  },
  {
    name: "Rachel Thompson",
    role: "Health & Wellness Coach",
    content:
      "The automation systems they set up save me 20+ hours a week. Every lead gets nurtured and I only talk to people who are ready to buy.",
    metric: "20hrs",
    metricLabel: "Saved Per Week",
  },
  {
    name: "Marcus Johnson",
    role: "Career Coach",
    content:
      "Companion helped me go from $8K to $35K months in 90 days. Their systems approach to client acquisition is unlike anything I've seen.",
    metric: "$35K",
    metricLabel: "Monthly Revenue in 90 Days",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most clients are fully launched within 14–21 days. This includes strategy, funnel build, CRM setup, and ad campaign launch. We move fast without cutting corners.",
  },
  {
    question: "Do you only work with coaches?",
    answer:
      "We specialize in online coaches, consultants, and service-based businesses. Our systems are specifically designed for high-ticket offers that require booked calls.",
  },
  {
    question: "What CRM tools do you support?",
    answer:
      "We work with GoHighLevel, HubSpot, and custom solutions. We'll recommend the best fit based on your business needs and integrate everything seamlessly.",
  },
  {
    question: "What ad budget is recommended?",
    answer:
      "We recommend a minimum of $1,500–$3,000/month in ad spend to start. This allows us to gather enough data to optimize and scale effectively.",
  },
  {
    question: "Do you provide ad creatives?",
    answer:
      "Yes, we handle everything from ad copy to creative direction. We provide high-performing ad variations and continuously test new creatives to maximize results.",
  },
];

export const stats = [
  { value: "200+", label: "Coaches Served" },
  { value: "$12M+", label: "Revenue Generated" },
  { value: "95%", label: "Client Retention" },
  { value: "14 Days", label: "Average Launch Time" },
];

export const whyChooseUs = [
  {
    title: "Launch in 14 Days",
    description: "From strategy to live campaigns — we move fast without sacrificing quality.",
    icon: "rocket",
  },
  {
    title: "Automation First",
    description: "Every system we build runs on autopilot so you can focus on coaching.",
    icon: "bot",
  },
  {
    title: "Built for Coaches",
    description: "We understand the coaching industry inside and out. No generic solutions.",
    icon: "users",
  },
  {
    title: "Conversion Optimized",
    description: "Every page, email, and ad is designed with one goal: booked calls.",
    icon: "trending-up",
  },
  {
    title: "Long-Term Systems",
    description: "We build assets that compound over time, not quick fixes that fade.",
    icon: "layers",
  },
];
