import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

// Vercel preview deployments must not be crawled, or *.vercel.app copies compete with the real domain.
const isPreviewDeploy = process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== "production";

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeploy) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${COMPANY.url}/sitemap.xml`,
  };
}
