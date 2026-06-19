import type { NavLink, SocialLink } from "@/types";

export const COMPANY = {
  name: "NeurologicX",
  legalName: "NeurologicX Innovations Labs",
  tagline: "Get your Business To Next Level with A.I. & Automation.",
  description:
    "NeurologicX Innovations Labs builds AI-powered SaaS products for industry verticals and provides cloud & DevOps engineering services for tech agencies.",
  domain: "www.neurologicx.com",
  location: "Pune - Solapur, Maharashtra, India",
  email: "info@neurologicx.com",
  foundedYear: 2025,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/c/neurologicx/",
    iconName: "Linkedin",
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/neurologicx/",
    iconName: "Instagram",
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/nurologicx/",
    iconName: "Facebook",
  },
];

export const FOOTER_LINKS = {
  products: [
    { label: "SalonIQ", href: "/products/saloniq" },
    { label: "ClinicFlow", href: "/products/clinicflow" },
    { label: "StockSense", href: "/products/stocksense" },
  ],
  services: [
    { label: "Cloud Migration", href: "/services#cloud-migration" },
    { label: "DevOps Engineering", href: "/services#devops" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const HOME_STATS = [
  { value: "3+", label: "SaaS Products" },
  { value: "20+", label: "Projects Delivered" },
  { value: "15+", label: "Agency Partners" },
  { value: "99.9%", label: "Uptime SLA" },
] as const;
