# Portfolio Site PRD v2.0

**Version**: 2.0  
**Date**: December 17, 2025  
**Repository Baseline**: https://github.com/decagondev/lunch-portfolio (Vite + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui + react-router-dom)  

This PRD builds directly on the existing repository structure, which already includes:
- A shared `Layout` wrapper with **sticky Navbar** (desktop), **collapsible Sidebar** (mobile), and Footer.
- **Dark mode as default**, with theme toggle and localStorage persistence via `ThemeContext`.
- Existing routes: `/` (LandingPage), `/about` (AboutPage), `/privacy`, `/terms`.
- Centralized config in `src/config/`.
- SEO component for per-page metadata.
- Mobile-first responsive design.

**Goal**: Transform the generic starter into a professional personal developer portfolio SPA while preserving and enhancing existing architecture. Emphasize **extreme modularity**, **SOLID principles**, and small, reviewable PRs.

## 1. Executive Summary

A modern, fast, accessible portfolio showcasing:
- Hero introduction & quick project tease (Home)
- Dedicated project showcase (Projects)
- Personal bio & skills (About)
- Contact info & form UI (Contact)

Retain Privacy/Terms pages.  
Default dark mode, smooth client-side routing, sticky navigation that persists across routes.  
Fully extensible: Adding new routes (e.g., `/blog`, `/projects/:id`) requires only new modules and config updates — no changes to existing code (OCP).

**MVP Success Criteria**:
- All four core routes implemented with real content.
- Consistent layout, navigation, theme, and SEO.
- Mobile & desktop responsiveness verified.
- Clean, typed, modular codebase ready for future features.

## 2. Proposed File Structure (Modular Extension)

```
src/
├── components/
│   ├── layout/             # Existing: Layout.tsx, Navbar.tsx, Sidebar.tsx, Footer.tsx
│   ├── seo/                # Existing: SEO.tsx
│   ├── ui/                 # shadcn + custom reusable components
│   │   ├── ProjectCard.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── SocialLinks.tsx
│   │   └── ThemeToggle.tsx  # Extracted for reuse
│   └── sections/           # NEW: Page-specific sections (composable)
│       ├── HeroSection.tsx
│       ├── ProjectsGrid.tsx
│       ├── ProjectsTeaser.tsx
│       ├── BioSection.tsx
│       ├── SkillsSection.tsx
│       └── ContactInfo.tsx
├── config/
│   ├── navigation.ts       # NEW: Array of { label, href, icon? }
│   ├── site.config.ts      # NEW: name, role, tagline, email, socials, etc.
│   └── app.config.ts       # Existing
├── contexts/
│   └── ThemeContext.tsx    # Existing (dark default + toggle)
├── data/                   # NEW: Static content (easy to update)
│   ├── projects.ts         # Array<Project>
│   ├── skills.ts           # Array<Skill>
│   └── socials.ts          # Array<SocialLink>
├── lib/
│   └── utils.ts            # Existing + any new helpers
├── pages/                  # Thin page containers
│   ├── HomePage.tsx        # Replaces LandingPage
│   ├── ProjectsPage.tsx    # NEW
│   ├── AboutPage.tsx       # Enhanced existing
│   ├── ContactPage.tsx     # NEW
│   ├── PrivacyPolicyPage.tsx # Existing (keep)
│   └── TermsOfServicePage.tsx# Existing (keep)
├── types/                  # NEW: Shared interfaces
│   └── index.ts            # Project, Skill, SocialLink, etc.
├── App.tsx                 # Router definition (updated)
├── main.tsx                # Entry + providers
└── index.css               # Tailwind base + dark mode vars
```

**SOLID Rationale**:
- **SRP**: Pages are thin orchestrators; sections handle specific UI; components are atomic.
- **OCP**: Navigation driven by `navigation.ts` config; new pages added via config + module.
- **LSP/ISP**: All reusable components use narrow, typed prop interfaces from `types/`.
- **DIP**: Pages depend on data abstractions (imported arrays/hooks) rather than hard-coded content.

## 3. Data Models (types/index.ts)

```ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For future detail pages
  tags: string[];
  thumbnail?: string;       // URL or import
  demoUrl?: string;
  repoUrl: string;
}

export interface Skill {
  name: string;
  level?: 'expert' | 'proficient' | 'familiar';
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType; // lucide icon
}
```

## 4. Detailed Development Plan: Epics → Features → PRs → Commits → Sub-tasks

### Epic 1: Foundation & Configuration (Prepare modular base)

**Feature 1.1: Introduce types, config, and data folders**

**PR 1.1: Add shared types and site configuration**
- Commit 1: Create `src/types/index.ts` with Project, Skill, SocialLink interfaces
- Commit 2: Create `src/config/site.config.ts` (export const siteConfig = { name, role, tagline, email, ... })
- Commit 3: Create `src/config/navigation.ts` (export const navLinks = [{ label: 'Home', href: '/' }, ...])
- Sub-tasks:
  - Ensure TypeScript strict mode happy
  - Update existing Navbar/Sidebar to import from `navigation.ts` (prep for later PR)

**PR 1.2: Add static data layer**
- Commit 1: Create `src/data/projects.ts` (empty array + example project)
- Commit 2: Create `src/data/skills.ts` (array of strings or Skill objects)
- Commit 3: Create `src/data/socials.ts` (array with GitHub, LinkedIn, Twitter/X)
- Sub-tasks:
  - User provides real data → populate in follow-up commit/PR

### Epic 2: Navigation & Layout Refinements

**Feature 2.1: Config-driven navigation**

**PR 2.1: Make Navbar & Sidebar config-driven**
- Commit 1: Update Navbar.tsx to map over navLinks (use NavLink for active state)
- Commit 2: Update Sidebar.tsx similarly
- Commit 3: Add active styling (e.g., font-bold or border)
- Commit 4: Extract ThemeToggle to `components/ui/ThemeToggle.tsx` and reuse
- Sub-tasks:
  - Use V0.dev prompt: "shadcn dark mode navbar with active link highlighting and theme toggle button"
  - Test active route on all screen sizes

**PR 2.2: Footer enhancements**
- Commit 1: Update Footer.tsx to use navLinks duplicate + socials from data
- Commit 2: Add copyright with dynamic year and siteConfig.name
- Sub-tasks:
  - Ensure responsive stacking on mobile

### Epic 3: Core Reusable UI Components

**PR 3.1: Atomic UI components**
- Commit 1: Create `components/ui/ProjectCard.tsx` (Card with thumbnail, title, desc, Badges for tags, Buttons for links)
- Commit 2: Create `components/ui/SkillBadge.tsx` (Badge with optional icon/level color)
- Commit 3: Create `components/ui/SocialLinks.tsx` (horizontal/vertical list with icons)
- Sub-tasks:
  - Generate ProjectCard with V0: "Dark mode project portfolio card with image thumbnail, title, description, tag badges, and demo/source buttons"
  - Generate SkillBadge variants with Claude

### Epic 4: Page Sections (Highly Reusable)

**PR 4.1: Hero & Teaser sections**
- Commit 1: Create `components/sections/HeroSection.tsx` (name, role, tagline, CTAs to Projects/Contact)
- Commit 2: Create `components/sections/ProjectsTeaser.tsx` (takes projects[], limit=3, uses ProjectCard grid)
- Sub-tasks:
  - V0 prompt: "Modern dark hero section for developer portfolio with large name, role, tagline, and two prominent buttons"

**PR 4.2: Full projects & about sections**
- Commit 1: Create `components/sections/ProjectsGrid.tsx` (full responsive grid of all projects)
- Commit 2: Create `components/sections/BioSection.tsx` (prose text)
- Commit 3: Create `components/sections/SkillsSection.tsx` (grid of SkillBadge)
- Sub-tasks:
  - Use Tailwind `prose dark:prose-invert` for bio readability

**PR 4.3: Contact sections**
- Commit 1: Create `components/sections/ContactInfo.tsx` (email, SocialLinks)
- Commit 2: Create contact form component using shadcn Form, Input, Textarea (Zod validation UI-only)
- Sub-tasks:
  - Claude prompt: "shadcn/ui contact form with name, email, message fields and submit button (no handler)"

### Epic 5: Page Implementation (Thin Containers)

**PR 5.1: Home Page**
- Commit 1: Rename/replace LandingPage.tsx → HomePage.tsx
- Commit 2: Compose: SEO → HeroSection → ProjectsTeaser
- Commit 3: Wire data from site.config.ts and projects.ts
- Sub-tasks:
  - Update route in App.tsx if needed (keep '/')

**PR 5.2: Projects Page**
- Commit 1: Create `pages/ProjectsPage.tsx`
- Commit 2: Compose: SEO → ProjectsGrid (all projects)
- Commit 3: Add route `/projects` in App.tsx
- Commit 4: Add to navLinks config

**PR 5.3: About Page**
- Commit 1: Enhance existing AboutPage.tsx
- Commit 2: Compose: SEO → BioSection → SkillsSection
- Commit 3: Pull content from site.config.ts or dedicated bio text

**PR 5.4: Contact Page**
- Commit 1: Create `pages/ContactPage.tsx`
- Commit 2: Compose: SEO → ContactInfo → Form
- Commit 3: Add route `/contact` in App.tsx
- Commit 4: Add to navLinks config

### Epic 6: Routing Update & Final Integration

**PR 6.1: Update router and navigation**
- Commit 1: Update App.tsx routes to include new pages (use existing Layout wrapper)
- Commit 2: Ensure all navLinks include new routes
- Commit 3: Add 404 fallback (optional simple page)
- Sub-tasks:
  - Verify smooth transitions, no layout shift

### Epic 7: Polish, Accessibility & Deployment

**PR 7.1: SEO & Accessibility**
- Commit 1: Add dynamic SEO props to every page (title, description from config or constants)
- Commit 2: Audit contrast, focus states, ARIA labels
- Commit 3: Add alt text to project thumbnails

**PR 7.2: Final cleanup & docs**
- Commit 1: Update README with project description, screenshots, live link
- Commit 2: Lint, format, type-check
- Commit 3: Verify Netlify deployment

This highly modular breakdown ensures each PR is small (1-4 commits), focused, and reviewable. We preserve all existing strengths (sticky nav, dark default, mobile sidebar, SEO) while layering portfolio-specific features on top.

**Next Step**: Confirm your personal content (name, bio text, projects list, skills, social links) so we can populate the data files accurately. Once provided, we can start with PR 1.1!
