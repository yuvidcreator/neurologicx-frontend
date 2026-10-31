import type { NavLink, SocialLink } from "@/types";

export const COMPANY = {
  name: "NeurologicX",
  legalName: "NeurologicX Innovations Labs",
  tagline: "Take your business to the next level with AI and automation.",
  description:
    "NeurologicX Innovations Labs builds AI-powered software for specific industries and provides cloud and DevOps engineering for tech agencies.",
  domain: "www.neurologicx.com",
  url: "https://www.neurologicx.com",
  location: "Solapur and Pune, Maharashtra, India",
  email: "info@neurologicx.com",
  foundedYear: 2025,
  phone: "+91-8263931667",
  phoneHref: "tel:+918263931667",
  whatsappLink: "https://wa.me/918263931667",
  // Must match the Google Business Profile listing character-for-character (NAP consistency).
  address: {
    street: "Maruti Mandir, Near, Bhima Nagar Road, Bande Sankul Nagar, Dnyaneshwar Nagar, Vishnupuri, Jule",
    city: "Solapur",
    region: "Maharashtra",
    postalCode: "413008",
    country: "IN",
  },
  fullAddress:
    "Maruti Mandir, Near, Bhima Nagar Road, Bande Sankul Nagar, Dnyaneshwar Nagar, Vishnupuri, Jule, Solapur, Maharashtra 413008",
  googleBusinessUrl: "https://share.google/E4xiPA7g4CeqsFwfC",
  founder: {
    name: "Yuvraj Chandrakant Limbole",
    role: "Founder",
    url: "https://yuvraaj.in",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
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
  {
    platform: "WhatsApp",
    href: "https://wa.me/918263931667",
    iconName: "WhatsApp",
  },
  {
    platform: "Google",
    href: "https://share.google/E4xiPA7g4CeqsFwfC",
    iconName: "Google",
  },
];

export const FOOTER_LINKS = {
  products: [
    { label: "SalonIQ", href: "/products/#saloniq" },
    { label: "ClinicFlow", href: "/products/#clinicflow" },
    { label: "StockSense", href: "/products/#stocksense" },
  ],
  services: [
    { label: "AI Software Development", href: "/services/#ai-software-development" },
    { label: "Portal Development", href: "/services/#portal-development" },
    { label: "E-commerce Development", href: "/services/#ecommerce-development" },
    { label: "Data Engineering", href: "/services/#data-engineering" },
    { label: "Cloud Migration", href: "/services/#cloud-migration" },
    { label: "DevOps Engineering", href: "/services/#devops" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Clients", href: "/about/#clients" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const HOME_STATS = [
  { value: "3", label: "SaaS Products" },
  { value: "4", label: "Industries Served" },
  { value: "3", label: "Cloud Platforms" },
  { value: "2025", label: "Founded in Pune" },
] as const;
