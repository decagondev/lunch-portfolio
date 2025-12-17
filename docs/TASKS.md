# Portfolio Development Task List

**Based on**: PRD v2.0 (December 17, 2025)  
**Repository**: https://github.com/decagondev/lunch-portfolio  
**Design Principles**: Extreme modularity, strict SOLID adherence, small atomic commits, config-driven where possible, thin pages, reusable sections/components.

## Epic 1: Foundation – Types, Config & Data Layer  
*Goal: Establish shared abstractions and centralized content (DIP + ISP)*

### PR 1.1: Introduce shared types  
**Commits**  
1. Create `src/types/index.ts` and add `Project`, `Skill`, `SocialLink` interfaces  
2. Export types barrel for clean imports  
**Subtasks**  
- Ensure all interfaces are narrow and focused (ISP)  
- Add JSDoc comments for clarity  

### PR 1.2: Site-wide configuration  
**Commits**  
1. Create `src/config/site.config.ts` with `siteConfig` object (name, role, tagline, email, bio excerpt, etc.)  
2. Create `src/config/navigation.ts` with `navLinks` array of `{ label: string; href: string; }`  
**Subtasks**  
- Make config objects readonly/const for immutability  
- Prepare placeholder values (to be replaced with real data later)

### PR 1.3: Static data layer (content as data)  
**Commits**  
1. Create `src/data/projects.ts` – export `projects: Project[]` (start with 1–2 examples)  
2. Create `src/data/skills.ts` – export `skills: Skill[]` or `string[]`  
3. Create `src/data/socials.ts` – export `socials: SocialLink[]` with platform, url, lucide icon  
**Subtasks**  
- User to provide real project/skill/social data in a follow-up  
- Ensure data files are pure data (no logic – SRP)

## Epic 2: Navigation & Global Layout Refinements  
*Goal: Config-driven, reusable navigation (OCP + SRP)*

### PR 2.1: Config-driven Navbar & Sidebar  
**Commits**  
1. Update `Navbar.tsx` to map over `navLinks` from config  
2. Use `NavLink` from react-router-dom with active class styling (e.g., font-semibold or border-b)  
3. Update `Sidebar.tsx` identically for mobile  
4. Extract `ThemeToggle` button to `src/components/ui/ThemeToggle.tsx` and reuse in both  
**Subtasks**  
- Use V0.dev to refine active state styling if needed  
- Test active highlighting on route changes (desktop + mobile)

### PR 2.2: Enhanced Footer  
**Commits**  
1. Update `Footer.tsx` to duplicate `navLinks` + render `socials` from data  
2. Add dynamic copyright: `© ${new Date().getFullYear()} ${siteConfig.name}`  
3. Style responsively (stack on mobile)  
**Subtasks**  
- Ensure Footer remains in `Layout.tsx` below `<Outlet />`

## Epic 3: Atomic Reusable UI Components  
*Goal: Build small, composable, typed components (SRP + LSP)*

### PR 3.1: ProjectCard component  
**Commits**  
1. Create `src/components/ui/ProjectCard.tsx`  
2. Accept `Project` props, render Card with thumbnail (optional), title, description, tag Badges, demo/repo Buttons  
3. Add hover effects and responsive layout  
**Subtasks**  
- Generate initial version with V0.dev (“dark mode portfolio project card with image, tags, buttons”)  
- Refine Tailwind classes for consistency with shadcn

### PR 3.2: SkillBadge & SocialLinks components  
**Commits**  
1. Create `src/components/ui/SkillBadge.tsx` (Badge variant with optional level-based color)  
2. Create `src/components/ui/SocialLinks.tsx` (flex list of icon buttons linking to socials)  
**Subtasks**  
- Use lucide-react icons  
- Make orientation prop (horizontal/vertical) for reuse

## Epic 4: Page Sections (Composable UI Blocks)  
*Goal: Separate concerns – sections own their layout & styling (SRP)*

### PR 4.1: Hero & Projects Teaser sections  
**Commits**  
1. Create `src/components/sections/HeroSection.tsx` – use `siteConfig` for name/role/tagline + CTA Buttons  
2. Create `src/components/sections/ProjectsTeaser.tsx` – accept `projects` slice (limit 3–4), grid of `ProjectCard`  
**Subtasks**  
- Use V0.dev for modern hero design  
- Add subtle animations if desired (optional framer-motion)

### PR 4.2: About sections  
**Commits**  
1. Create `src/components/sections/BioSection.tsx` – use `prose dark:prose-invert` for readable markdown-like text  
2. Create `src/components/sections/SkillsSection.tsx` – grid of `SkillBadge`  
**Subtasks**  
- Pull bio text from `siteConfig` or dedicated constant

### PR 4.3: Contact sections  
**Commits**  
1. Create `src/components/sections/ContactInfo.tsx` – email + `SocialLinks`  
2. Create `src/components/sections/ContactForm.tsx` – shadcn Form with name, email, message (Zod validation, no submit handler for MVP)  
**Subtasks**  
- Generate form with Claude or shadcn docs example  
- Add success toast placeholder (optional)

## Epic 5: Thin Page Containers  
*Goal: Pages only orchestrate sections & SEO (SRP + DIP)*

### PR 5.1: Home Page  
**Commits**  
1. Rename/replace `LandingPage.tsx` → `src/pages/HomePage.tsx`  
2. Compose: `<SEO {...homeSeo} />`, `<HeroSection />`, `<ProjectsTeaser projects={projects.slice(0,3)} />`  
**Subtasks**  
- Define `homeSeo` object with title/description

### PR 5.2: Projects Page  
**Commits**  
1. Create `src/pages/ProjectsPage.tsx`  
2. Compose: `<SEO {...projectsSeo} />`, `<ProjectsGrid projects={projects} />` (create grid wrapper using ProjectCard)  
3. Add to `navLinks` config  
**Subtasks**  
- Create simple `ProjectsGrid.tsx` section if not merged from earlier

### PR 5.3: About Page  
**Commits**  
1. Update existing `AboutPage.tsx`  
2. Compose: `<SEO {...aboutSeo} />`, `<BioSection />`, `<SkillsSection />`  
**Subtasks**  
- Replace generic content with portfolio-focused layout

### PR 5.4: Contact Page  
**Commits**  
1. Create `src/pages/ContactPage.tsx`  
2. Compose: `<SEO {...contactSeo} />`, `<ContactInfo />`, `<ContactForm />`  
3. Add to `navLinks` config  
**Subtasks**  
- Ensure form looks polished in dark mode

## Epic 6: Routing & Integration  
*Goal: Centralize routes, ensure smooth navigation (OCP)*

### PR 6.1: Update router & navigation config  
**Commits**  
1. Update `App.tsx` routes to use new page components (`HomePage`, `ProjectsPage`, etc.) within existing `Layout`  
2. Verify all routes wrapped by `Layout` (sticky nav persists)  
3. Optional: Add simple `*` 404 route  
**Subtasks**  
- Test navigation & active states end-to-end

## Epic 7: Polish, Accessibility & Deployment  
*Goal: Final quality assurance*

### PR 7.1: SEO & Accessibility  
**Commits**  
1. Create `seo.config.ts` or inline objects for each page’s title/description  
2. Ensure every page passes `<SEO />` props  
3. Add alt text to all project thumbnails & icons  
4. Audit focus states and contrast  
**Subtasks**  
- Manual accessibility check (keyboard nav, screen reader labels)

### PR 7.2: Cleanup & Documentation  
**Commits**  
1. Update README.md with project description, tech stack, live demo link placeholder  
2. Add screenshots section (optional)  
3. Run lint, prettier, type-check  
4. Verify build & Netlify config  
**Subtasks**  
- Prepare for deployment
