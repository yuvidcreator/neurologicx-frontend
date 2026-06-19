Audit all UI components in `src/components/` for quality, consistency, and correctness.

**Arguments:** $ARGUMENTS
(Optional: `<ComponentPath>` to audit a single file, or leave empty to audit all)

## What to check

### 1. Design system consistency (reference CLAUDE.md)
- Colors: are only the defined palette classes used? Flag any hardcoded colors not in the design system
- Typography: do headings/body/labels follow the type scale?
- Spacing: are sections using `py-20 md:py-32`? Content in `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`?
- Cards: `bg-white/5 border border-slate-700 rounded-2xl backdrop-blur-sm`?
- Buttons: gradient primary or ghost pattern from CLAUDE.md?

### 2. React / Next.js correctness
- Server vs Client: any `"use client"` components that have no state, hooks, or browser events? Flag them — they should be Server Components
- Missing `next/image`: any bare `<img>` tags? Should be `Image` from `next/image`
- Missing `key` props on mapped lists
- Any `any` types in TypeScript?

### 3. Responsive design
- Does every component have mobile-first classes with `md:` breakpoints?
- Any text that would overflow on mobile (`text-7xl` without `md:` prefix)?

### 4. Accessibility
- Interactive elements (`<button>`, `<a>`) have descriptive text or `aria-label`?
- Images have `alt` text?
- Links to external URLs have `target="_blank" rel="noopener noreferrer"`?

### 5. Content quality
- Any lorem ipsum or placeholder text remaining?
- Copy aligned with NeurologicX B2B AI/automation messaging?

## Output format

Return a structured report:

```
## Audit Report — {date}

### Critical Issues (must fix)
- [file:line] Issue description

### Warnings (should fix)
- [file:line] Issue description

### Suggestions (nice to have)
- [file:line] Suggestion

### Passed Checks
- List what looks good
```

Fix critical issues immediately after reporting them. Ask before fixing warnings.
