import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import { services } from "@/lib/services";

const BUSINESS_ID = `${COMPANY.url}/#business`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: COMPANY.legalName,
      alternateName: COMPANY.name,
      description: COMPANY.description,
      url: `${COMPANY.url}/`,
      logo: `${COMPANY.url}/logo-mark.png`,
      image: `${COMPANY.url}/neurologicx-logo.png`,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      foundingDate: String(COMPANY.foundedYear),
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.region,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.country,
      },
      hasMap: COMPANY.googleBusinessUrl,
      areaServed: [
        { "@type": "City", name: "Solapur" },
        { "@type": "City", name: "Pune" },
        { "@type": "Country", name: "India" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        contactType: "customer service",
        areaServed: "IN",
      },
      founder: {
        "@type": "Person",
        name: COMPANY.founder.name,
        jobTitle: COMPANY.founder.role,
        url: COMPANY.founder.url,
      },
      sameAs: SOCIAL_LINKS.filter((s) => s.platform !== "WhatsApp").map((s) => s.href),
      knowsAbout: [
        "AI-powered software development",
        "Web portal development",
        "E-commerce development",
        "Data engineering",
        "DevOps",
        "Cloud migration to AWS, Azure and Google Cloud",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software and cloud engineering services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.tagline,
            url: `${COMPANY.url}/services/#${s.id}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${COMPANY.url}/#website`,
      url: `${COMPANY.url}/`,
      name: COMPANY.name,
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "en-IN",
    },
  ],
};
