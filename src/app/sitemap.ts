import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

// Update a page's lastModified only when its content actually changes; Google ignores lastmod values that change on every build.
const PAGES: MetadataRoute.Sitemap = [
  { url: "/",                lastModified: "2026-10-31", changeFrequency: "weekly",  priority: 1.0 },
  { url: "/services/",       lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.9 },
  { url: "/products/",       lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.9 },
  { url: "/contact/",        lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.8 },
  { url: "/about/",          lastModified: "2026-10-31", changeFrequency: "monthly", priority: 0.7 },
  { url: "/privacy-policy/", lastModified: "2026-10-31", changeFrequency: "yearly",  priority: 0.3 },
  { url: "/terms/",          lastModified: "2026-10-31", changeFrequency: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({ ...page, url: `${COMPANY.url}${page.url}` }));
}
