export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  metric: string;
  metricLabel: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  instagram: string;
  niche: string;
  revenue: string;
  leadSources: string;
  adBudget: string;
  mainGoal: string;
  bottleneck: string;
  desiredResult: string;
  services: string[];
}
