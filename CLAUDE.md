# NeurologicX — Project Context for Claude

## Role
Senior Full Stack Developer. Build production-quality, static marketing pages for a B2B AI startup. Clean architecture, no over-engineering, zero placeholder content.

---

## Business Context
| Field | Detail |
|---|---|
| Legal entity | NeurologicX Innovations Labs (registered parent company) |
| Public brand | NeurologicX |
| What | AI-powered SaaS products + third-party cloud & DevOps for agencies |
| Portfolio | Software & IoT projects under the parent company |
| Where | Pune / Solapur, Maharashtra, India |
| Domain | www.neurologicx.com |
| Tagline | "Get your Business To Next Level with A.I. & Automation." |
| B2B targets | Tech agencies (cloud/DevOps) + businesses adopting vertical SaaS |
| Revenue | SaaS subscriptions + agency service partnerships |
| Deploy | Vercel — static, long-lived marketing site |

### SaaS Products (see `src/lib/products.ts`)
| Product | Industry | Card Accent | Slug |
|---|---|---|---|
| **SalonIQ** | Beauty & Wellness | pink-500 → rose-600 | `saloniq` |
| **ClinicFlow** | Healthcare | cyan-500 → blue-600 | `clinicflow` |
| **StockSense** | Logistics & Warehousing | amber-500 → orange-600 | `stocksense` |

### Agency Services (see `src/lib/services.ts`)
| Service | Providers | ID |
|---|---|---|
| **Cloud Infrastructure Migration** | AWS, Azure, GCP | `cloud-migration` |
| **DevOps Engineering** | AWS, Azure, GCP | `devops` |

### Data Layer — always import from lib, never hardcode content
| File | Exports |
|---|---|
| `src/lib/constants.ts` | `COMPANY`, `NAV_LINKS`, `SOCIAL_LINKS`, `FOOTER_LINKS`, `HOME_STATS` |
| `src/lib/products.ts` | `products: Product[]` |
| `src/lib/services.ts` | `services: Service[]` |
| `src/lib/case-studies.ts` | `caseStudies: CaseStudy[]` |
| `src/types/index.ts` | `Product`, `Service`, `CaseStudy`, `Testimonial`, `NavLink`, `SocialLink` |

---

## Tech Stack
| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js App Router | 15.3.9 |
| UI | React + TypeScript | 19 / 5 |
| Styling | Tailwind CSS v4 | PostCSS plugin |
| Icons | Lucide React | 0.545.0 |
| Font | Geist Sans + Mono | loaded in layout.tsx |
| Package manager | **yarn** — never use npm | yarn.lock is the lock file |

**No new runtime dependencies without explicit approval. Always use `yarn add <pkg>`, never `npm install`.**

---

## Project Structure (complete, as built)
```
src/
├── app/
│   ├── layout.tsx                       # Root layout — Geist, metadataBase, OG tags
│   ├── globals.css                      # @import "tailwindcss"
│   ├── sitemap.ts                       # Auto-generates /sitemap.xml
│   ├── page.tsx                         # Home — assembles all Home/ sections
│   ├── products/page.tsx                # Products page
│   ├── services/page.tsx                # Services page
│   ├── case-studies/
│   │   ├── page.tsx                     # Case studies index
│   │   └── [slug]/page.tsx             # Individual study (generateStaticParams)
│   ├── about/page.tsx                   # About page
│   ├── contact/page.tsx                 # Contact page (mailto form)
│   ├── privacy-policy/page.tsx          # Privacy Policy
│   └── terms/page.tsx                   # Terms & Conditions
├── components/
│   ├── Common/
│   │   ├── Navbar.tsx                   # Sticky, transparent→solid on scroll ("use client")
│   │   ├── Footer.tsx                   # 5-column footer
│   │   └── PageHero.tsx                 # Reusable page hero (eyebrow, title, accent, desc)
│   ├── Home/
│   │   ├── HeroSection.tsx              # Full-viewport hero with orbs + dot grid
│   │   ├── StatsBar.tsx                 # 4 gradient stats
│   │   ├── ProductsTeaser.tsx           # 3 product cards (PRODUCT_STYLES map inside)
│   │   ├── ServicesOverview.tsx         # 2 service cards
│   │   ├── WhyNeurologicX.tsx           # 6-point differentiator grid
│   │   ├── CaseStudiesTeaser.tsx        # 3 case study cards
│   │   └── CTABanner.tsx               # Shared CTA section (used across pages)
│   ├── Products/
│   │   └── ProductsGrid.tsx             # Alternating detail cards per product
│   ├── Services/
│   │   ├── ServicesDetail.tsx           # Full service cards with capabilities grid
│   │   └── EngagementProcess.tsx        # 4-step numbered process
│   ├── CaseStudies/
│   │   └── CaseStudiesGrid.tsx          # All 4 case studies with metrics + testimonial
│   └── About/                           # (content is inline in about/page.tsx)
├── lib/
│   ├── constants.ts
│   ├── products.ts
│   ├── services.ts
│   └── case-studies.ts
├── types/
│   └── index.ts
public/
├── robots.txt                           # Allow all, Sitemap: .../sitemap.xml
└── bg-coming-soon.jpg                   # (legacy, unused)
```

---

## Design System

### Colors (Tailwind classes)
| Role | Class | Notes |
|---|---|---|
| Page background | `bg-slate-950` | Deepest dark |
| Section background | `bg-slate-900` | Standard section |
| Alt section | `bg-slate-800` | Alternating sections |
| Glass card | `bg-white/5` + `backdrop-blur-sm` | Feature cards |
| Primary action | `from-blue-600 to-violet-600` | Gradient CTA buttons |
| Primary text | `text-white` | Headings |
| Muted text | `text-slate-300` | Body copy |
| Subtle text | `text-slate-400` | Captions, labels |
| Border default | `border-slate-700` | Cards, dividers |
| Border hover | `border-blue-500/50` | Interactive states |

### Gradient Patterns
```tsx
// Hero backgrounds
"bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900"

// Accent text
"bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"

// CTA button
"bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"

// Ambient orb (background decoration)
"absolute ... bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
```

### Typography
```tsx
className="text-5xl md:text-7xl font-bold tracking-tight text-white"      // Hero H1
className="text-3xl md:text-5xl font-bold text-white"                     // Section H2
className="text-xl md:text-2xl font-semibold text-white"                  // Card H3
className="text-base md:text-lg text-slate-300 leading-relaxed"           // Body
className="text-sm uppercase tracking-widest text-blue-400 font-medium"   // Eyebrow
```

### Layout Primitives
```tsx
// Section wrapper
<section className="py-20 md:py-32 bg-slate-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Glass card
<div className="p-6 bg-white/5 border border-slate-700 rounded-2xl backdrop-blur-sm
                hover:border-blue-500/50 transition-colors">

// Primary gradient button
<button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600
                   hover:from-blue-700 hover:to-violet-700 text-white font-semibold
                   rounded-xl transition-all shadow-lg shadow-blue-500/25">

// Ghost button
<button className="px-6 py-3 border border-slate-700 hover:border-blue-500
                   text-slate-300 hover:text-white font-semibold rounded-xl transition-colors">

// Section header block
<div className="text-center max-w-3xl mx-auto mb-16">
  <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-4">Eyebrow</p>
  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
    Heading with{" "}
    <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
      accent
    </span>
  </h2>
  <p className="text-lg text-slate-300 leading-relaxed">Subtext</p>
</div>

// PageHero component (reuse for all inner pages)
<PageHero eyebrow="Section" title="Main" accent="Gradient Word" description="..." />
```

---

## Code Rules
1. **Server Components by default** — `"use client"` only for state/hooks/browser events
2. **TypeScript strict** — `interface` for all props, no `any`
3. **Tailwind only** — no inline styles except `background-image` via `style={{}}`
4. **Mobile-first** — base = mobile, `md:` and `lg:` for breakpoints
5. **No comments** — unless the WHY is non-obvious
6. **Real content only** — NeurologicX B2B AI copy; never lorem ipsum
7. **SEO on every page** — export `metadata` with title + description (template: `"%s | NeurologicX"`)
8. **`next/image` for images** — never bare `<img>`
9. **Reuse before creating** — check `components/Common/` first
10. **No animation libraries** — Tailwind `animate-` and CSS transitions only
11. **`trailingSlash: true`** — all URLs end with `/`, keep consistent in `<Link href>` tags

---

## Anti-Hallucination Rules
- **Read the file before editing it**
- **Verify import paths exist** before writing them
- **Check `package.json`** before suggesting a new dep
- **Don't invent data** — use only confirmed facts from this file or the codebase
- **Icon names** — verify Lucide React exports before using (`Sparkles`, `Stethoscope`, `Warehouse`, `Cloud`, `GitBranch` confirmed)
- **Params in Next.js 15** — `params` is a `Promise`, must be `await`ed in page components

---

## Social & Contact
```ts
email:    "hello@neurologicx.com"
facebook: "https://www.facebook.com/nurologicx/"
instagram:"https://www.instagram.com/neurologicx/"
linkedin: "https://www.linkedin.com/c/neurologicx/"
```

---

## Pages Status
| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Built |
| Products | `/products/` | ✅ Built |
| Services | `/services/` | ✅ Built |
| Case Studies Index | `/case-studies/` | ✅ Built |
| Case Study — Lumina Beauty | `/case-studies/lumina-beauty-saloniq/` | ✅ Built |
| Case Study — Dr. Choudhary | `/case-studies/dr-choudhary-clinic-clinicflow/` | ✅ Built |
| Case Study — SwiftLog | `/case-studies/swiftlog-stocksense/` | ✅ Built |
| Case Study — TechWave | `/case-studies/techwave-devops-aws-migration/` | ✅ Built |
| About | `/about/` | ✅ Built |
| Contact | `/contact/` | ✅ Built |
| Privacy Policy | `/privacy-policy/` | ✅ Built |
| Terms & Conditions | `/terms/` | ✅ Built |
| Individual Product Pages | `/products/saloniq/` etc. | 🔲 Next |

---

## Next Session Priorities (in order)
1. **Mobile-first UI/UX audit** — review every section at 375px, fix overflow, padding, font sizes, touch targets
2. **SEO schema markup** — add JSON-LD structured data: `Organization`, `WebSite`, `Product`, `Service`, `BreadcrumbList` on each page
3. **OG image** — create `/app/opengraph-image.tsx` for auto-generated social share cards
4. **Individual product pages** — `/products/saloniq/`, `/products/clinicflow/`, `/products/stocksense/` (deep-dive landing per product)
5. **Analytics integration** — Google Analytics 4 or Plausible via `layout.tsx` Script tag
6. **robots.txt** — convert `public/robots.txt` to `app/robots.ts` for programmatic control
7. **Better content pass** — sharpen hero copy, improve case study storytelling, add FAQ sections
8. **Contact form backend** — replace mailto form with Resend / Formspree integration
9. **Blog/Resources** — `/blog/` section for SEO content marketing

---

## Vercel Deployment
- `trailingSlash: true` — all routes generate `index.html` in subdirectories
- `poweredByHeader: false` — suppresses `X-Powered-By: Next.js` response header
- Security headers set globally: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- `metadataBase: new URL("https://www.neurologicx.com")` in `layout.tsx`
- All pages are `○ (Static)` or `● (SSG)` — zero server-side rendering
- `sitemap.xml` auto-generated at `/sitemap.xml`
- `robots.txt` at `public/robots.txt` references `https://www.neurologicx.com/sitemap.xml`
- **Package manager:** yarn — `package-lock.json` is gitignored, only `yarn.lock` committed
- **To deploy:** push to GitHub → Vercel auto-deploys from `main` branch
- **Never run `npm` commands** — always use `yarn dev`, `yarn build`, `yarn add`, etc.
