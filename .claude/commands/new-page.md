Scaffold a complete Next.js page for NeurologicX, following these exact steps:

**Arguments:** $ARGUMENTS
(Format: `<PageName>` — e.g., `About` or `Services`)

## Step 1 — Read first
1. Read `CLAUDE.md` for project structure, design system, and planned sections list
2. Read `src/app/layout.tsx` to understand the root layout
3. Check if `src/app/{pagename}/page.tsx` already exists

## Step 2 — Create the page route

File: `src/app/{pagename}/page.tsx`

Requirements:
- Export `metadata: Metadata` with NeurologicX-specific title and description
- Title format: `"PageName | NeurologicX"` — e.g., `"About | NeurologicX"`
- Import and render each section component in the correct order (see CLAUDE.md planned sections)
- Wrap in a `<main>` tag with `className="bg-slate-950 text-white"`
- Server Component — no `"use client"`

Template:
```tsx
import type { Metadata } from "next";
// import section components here

export const metadata: Metadata = {
  title: "{PageName} | NeurologicX",
  description: "...",
};

export default function {PageName}Page() {
  return (
    <main className="bg-slate-950 text-white">
      {/* section components */}
    </main>
  );
}
```

## Step 3 — Scaffold section stubs

For each planned section listed in CLAUDE.md for this page:
- Create `src/components/{PageName}/{SectionName}.tsx` as a minimal stub
- Stub structure: correct TypeScript interface + section wrapper + `{/* TODO */}` comment only
- Do NOT write full section content in this step — stubs only

## Step 4 — Output summary

Return:
1. The full `page.tsx` content
2. List of stub files created with their paths
3. Next command to run: `/new-section <SectionName> for <PageName>` for the first priority section
