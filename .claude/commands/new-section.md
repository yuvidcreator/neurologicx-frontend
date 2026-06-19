Create a new landing page section component for NeurologicX following these exact steps:

**Arguments:** $ARGUMENTS
(Format: `<SectionName> for <PageName>` — e.g., `ServicesGrid for Home` or `MissionStatement for About`)

## Step 1 — Parse the request
Extract:
- `SectionName`: the component name in PascalCase (e.g., `ServicesGrid`)
- `PageName`: which page this belongs to (`Home`, `About`, or `Services`)
- `Purpose`: infer the section's content goal from the name

## Step 2 — Read before writing
Before creating anything:
1. Read `CLAUDE.md` for the design system (colors, typography, layout primitives)
2. Read `src/components/Common/` to check for reusable components to import
3. Check if the section file already exists at `src/components/{PageName}/{SectionName}.tsx`

## Step 3 — Create the component

File path: `src/components/{PageName}/{SectionName}.tsx`

Rules:
- Server Component by default — only add `"use client"` if the section needs state or browser events
- TypeScript `interface` for all props (even if empty: `interface {SectionName}Props {}`)
- Tailwind classes only — no inline styles except `background-image` via `style={{}}`
- Follow CLAUDE.md design system exactly:
  - Section wrapper: `<section className="py-20 md:py-32 bg-slate-900">` (alternate with `bg-slate-800` for visual rhythm)
  - Content container: `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`
  - Section header: eyebrow label → H2 with gradient accent word → supporting paragraph
- Mobile-first responsive classes
- Real NeurologicX B2B AI/automation copy — no lorem ipsum, no placeholder text
- No code comments

## Step 4 — Output

Return:
1. The complete component file content
2. The exact import line to add to the page
3. One sentence describing where in the page order this section should go

Do not create the file silently — show the full code first, then write it.
