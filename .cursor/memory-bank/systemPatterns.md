# System Patterns

**Last Updated**: December 17, 2025  
**When to Update**: When architecture changes, new patterns emerge, or design decisions are made

## Architecture Overview

The portfolio follows a **modular, SOLID-principle-based architecture** with clear separation of concerns:

```
src/
├── components/
│   ├── layout/        # Layout components (Navbar, Sidebar, Footer, Layout)
│   ├── seo/           # SEO component for metadata
│   ├── ui/            # Atomic reusable components (ProjectCard, SocialLinks, etc.)
│   └── sections/      # Composable page sections (HeroSection, ProjectsTeaser, etc.)
├── config/            # Configuration files (app.config.ts, site.config.ts, navigation.ts)
├── contexts/          # React contexts (ThemeContext)
├── data/              # Static data (projects.ts, skills.ts, socials.ts)
├── lib/               # Utility functions
├── pages/             # Thin page containers (orchestrate sections)
├── types/             # Shared TypeScript interfaces
└── App.tsx            # Router definition
```

## SOLID Principles Implementation

### Single Responsibility Principle (SRP)
- **Pages**: Only orchestrate sections and SEO - no UI logic
- **Sections**: Handle specific UI concerns (HeroSection, ProjectsTeaser, etc.)
- **Components**: Atomic, focused components (ProjectCard, SocialLinks)
- **Data Files**: Pure data, no logic (`projects.ts`, `socials.ts`)

### Open/Closed Principle (OCP)
- **Navigation**: Driven by `navigation.ts` config - add routes via config, no code changes
- **Components**: Extensible via props, not modification
- **Pages**: New pages added by creating new modules, not modifying existing ones

### Liskov Substitution Principle (LSP)
- Components can be swapped if they implement the same interface
- All reusable components use typed prop interfaces from `types/`

### Interface Segregation Principle (ISP)
- Narrow, focused interfaces in `src/types/index.ts`
- Components receive only the props they need
- Example: `Project` interface has optional fields (`thumbnail?`, `demoUrl?`)

### Dependency Inversion Principle (DIP)
- Pages depend on data abstractions (imported arrays) not hard-coded content
- Components depend on config objects, not hard-coded values
- Example: `HeroSection` uses `siteConfig`, not hard-coded strings

## Design Patterns

### 1. Config-Driven Navigation
```typescript
// src/config/navigation.ts
export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  // ...
];
```
- Navigation items defined in config
- Navbar and Sidebar map over config
- New routes added via config update

### 2. Thin Page Containers
```typescript
// Pages only orchestrate, no UI logic
export default function HomePage() {
  return (
    <>
      <SEO {...homeSeo} />
      <HeroSection />
      <ProjectsTeaser projects={projects} limit={3} />
    </>
  );
}
```

### 3. Composable Sections
- Sections are reusable UI blocks
- Accept props for customization
- Can be used across multiple pages
- Example: `ProjectsTeaser` used on HomePage, can be used elsewhere

### 4. Data Layer Separation
- All content in `src/data/` directory
- Pure data files (no logic)
- Easy to update without touching components
- Type-safe with TypeScript interfaces

### 5. Type-Safe Configuration
- All config objects are typed
- Readonly/const for immutability
- Centralized in `src/config/` directory

## Component Hierarchy

```
Layout
├── Navbar (sticky, desktop)
│   └── ThemeToggle (future: extracted component)
├── Sidebar (mobile, collapsible)
│   └── ThemeToggle (future: extracted component)
├── Outlet (page content)
│   └── Pages
│       ├── HomePage
│       │   ├── SEO
│       │   ├── HeroSection
│       │   └── ProjectsTeaser
│       └── [Future pages...]
└── Footer
```

## Key Technical Decisions

1. **Dark Mode Default**: User preference stored in localStorage, defaults to dark
2. **Sticky Navigation**: Navbar persists across routes for better UX
3. **Mobile-First**: Responsive design starting from mobile breakpoints
4. **Client-Side Routing**: React Router for SPA experience
5. **TypeScript Strict Mode**: Full type safety throughout
6. **Modular File Structure**: Clear separation of concerns

## Component Patterns

### Atomic Components (ui/)
- Small, focused, reusable
- Accept typed props
- No business logic
- Examples: `ProjectCard`, `SocialLinks`, `SkillBadge` (future)

### Section Components (sections/)
- Composable UI blocks
- Handle layout and styling
- Accept data via props
- Examples: `HeroSection`, `ProjectsTeaser`

### Layout Components (layout/)
- Structure and navigation
- Shared across all pages
- Examples: `Navbar`, `Sidebar`, `Footer`, `Layout`

## Data Flow

1. **Static Data**: Defined in `src/data/*.ts` files
2. **Configuration**: Defined in `src/config/*.ts` files
3. **Pages**: Import data/config and pass to sections
4. **Sections**: Receive data via props and render UI
5. **Components**: Receive props and render atomic UI

## Future Extensibility

- **New Routes**: Add to `navigation.ts` and create page component
- **New Sections**: Create in `sections/` and compose in pages
- **New Components**: Add to appropriate directory (`ui/` or `layout/`)
- **New Data Types**: Add interface to `types/index.ts` and data file to `data/`

