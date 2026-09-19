export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  capabilities: string[];
  deliverables: string[];
  metricFocus: string;
}

export interface CaseStudyItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  clientType: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  visualAccent: {
    badge: string;
    metrics: { label: string; value: string }[];
    theme: 'dark' | 'light' | 'gold';
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  phase: string;
  description: string;
  keyOutputs: string[];
}

export interface WhyPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metricLabel: string;
  metricValue: string;
}

export interface PricingPlan {
  id: string;
  planNumber: string;
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  packageOptionValue: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

