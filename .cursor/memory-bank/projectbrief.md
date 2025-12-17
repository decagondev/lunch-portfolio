# Project Brief

**Last Updated**: December 17, 2025  
**When to Update**: When project goals, scope, or success criteria change

## Project Overview

A modern, professional personal developer portfolio SPA built with React 19, TypeScript, Vite, Tailwind CSS 4, and shadcn/ui. The project transforms a generic starter template into a fully-featured portfolio showcasing projects, skills, and contact information.

## Core Goals

1. **Professional Portfolio**: Showcase developer work, skills, and experience
2. **Modern Tech Stack**: Leverage latest React, TypeScript, and Tailwind CSS
3. **Extreme Modularity**: Follow SOLID principles with highly composable architecture
4. **Config-Driven**: Navigation and content driven by configuration files
5. **Accessible & Responsive**: Mobile-first design with dark mode default

## Success Criteria (MVP)

- [x] Types system established (`src/types/index.ts`)
- [x] Site configuration created (`src/config/site.config.ts`)
- [x] Data layer implemented (`src/data/projects.ts`, `src/data/socials.ts`)
- [x] HomePage with HeroSection and ProjectsTeaser
- [ ] All four core routes implemented (Home, Projects, About, Contact)
- [ ] Config-driven navigation (Navbar & Sidebar)
- [ ] Consistent layout, navigation, theme, and SEO across all pages
- [ ] Mobile & desktop responsiveness verified
- [ ] Clean, typed, modular codebase ready for future features

## Project Scope

### In Scope
- Personal portfolio site with 4 main pages (Home, Projects, About, Contact)
- Project showcase with cards, tags, and links
- Skills display with proficiency levels
- Contact form (UI only for MVP)
- Privacy Policy and Terms of Service pages
- Dark mode as default with theme toggle
- SEO optimization per page
- Responsive design (mobile-first)

### Out of Scope (Future)
- Blog functionality
- Individual project detail pages (`/projects/:id`)
- Resume/CV page
- Contact form backend integration
- Analytics integration
- Multi-language support

## Repository

- **URL**: https://github.com/decagondev/lunch-portfolio
- **Baseline**: Vite + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui + react-router-dom

## Design Principles

1. **SOLID Principles**: Strict adherence throughout codebase
2. **Extreme Modularity**: Small, focused, composable components
3. **Config-Driven**: Navigation and content from configuration files
4. **Thin Pages**: Pages orchestrate sections, sections handle UI
5. **Type Safety**: Full TypeScript with narrow interfaces (ISP)
6. **Small PRs**: 1-4 commits per PR, focused and reviewable

## Development Approach

- **Epic-based**: Work organized into 7 epics
- **PR Structure**: Small, atomic commits within focused PRs
- **Documentation**: Comprehensive PRD, TASKS, and memory bank
- **Code Quality**: ESLint, TypeScript strict mode, consistent formatting

