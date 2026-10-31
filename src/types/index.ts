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

export interface Client {
  name: string;
  industry: string;
  location: string;
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
