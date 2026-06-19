export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  iconName: string;
  accentFrom: string;
  accentTo: string;
  features: string[];
  useCases: string[];
  cta: string;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: string[];
  providers?: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  serviceUsed: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: Testimonial;
  tags: string[];
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}
