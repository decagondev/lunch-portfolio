# Technical Context

**Last Updated**: December 17, 2025  
**When to Update**: When technologies change, dependencies are added/removed, or setup procedures change

## Technology Stack

### Core Framework
- **React**: 19.2.0 (latest)
- **TypeScript**: ~5.9.3 (strict mode)
- **Vite**: ^7.2.4 (build tool and dev server)

### Styling
- **Tailwind CSS**: ^4.1.18 (utility-first CSS)
- **shadcn/ui**: Component library built on Radix UI
- **CSS Variables**: For theme customization

### Routing
- **react-router-dom**: ^7.10.1 (client-side routing)

### Icons
- **lucide-react**: ^0.561.0 (icon library)

### Development Tools
- **ESLint**: ^9.39.1 (code linting)
- **TypeScript ESLint**: ^8.46.4 (TypeScript-specific linting)
- **Vite React Plugin**: ^5.1.1

## Project Structure

```
lunch-portfolio/
├── .cursor/              # Cursor rules and memory bank
├── docs/                 # Documentation (PRD, TASKS, SETUP, DEPLOYMENT)
├── public/              # Static assets
│   ├── _redirects       # Netlify SPA routing
│   └── vite.svg
├── src/
│   ├── components/      # React components
│   ├── config/          # Configuration files
│   ├── contexts/        # React contexts
│   ├── data/            # Static data
│   ├── lib/             # Utilities
│   ├── pages/           # Page components
│   ├── types/           # TypeScript types
│   ├── App.tsx          # Router
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── netlify.toml         # Netlify configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite configuration
```

## Development Setup

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)
- Code editor (VS Code recommended)

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
- Runs on `http://localhost:5173`
- Hot module replacement enabled
- Fast refresh for React components

### Build
```bash
npm run build
```
- Outputs to `dist/` directory
- TypeScript compilation
- Vite production optimization

### Preview
```bash
npm run preview
```
- Preview production build locally

### Linting
```bash
npm run lint
```
- ESLint with React and TypeScript rules

## Configuration Files

### TypeScript
- `tsconfig.json`: Main TypeScript configuration
- `tsconfig.app.json`: App-specific TypeScript config
- `tsconfig.node.json`: Node-specific TypeScript config
- **Strict Mode**: Enabled for type safety

### Vite
- `vite.config.ts`: Vite build configuration
- Path aliases: `@/` maps to `src/`
- React plugin configured

### ESLint
- `eslint.config.js`: ESLint configuration
- React hooks rules enabled
- TypeScript rules enabled

### Netlify
- `netlify.toml`: Deployment configuration
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules in `public/_redirects`

## Environment Variables

- `VITE_BASE_URL`: Base URL for the application
- `VITE_SITE_URL`: Site URL for SEO (optional)
- All Vite env vars must be prefixed with `VITE_`

## Key Dependencies

### UI Components (shadcn/ui)
- `@radix-ui/react-label`: Accessible label component
- `@radix-ui/react-slot`: Slot component for composition
- `class-variance-authority`: Variant management
- `clsx`: Conditional class names
- `tailwind-merge`: Merge Tailwind classes

### Styling
- `@tailwindcss/vite`: Tailwind CSS Vite plugin
- `tw-animate-css`: Tailwind animation utilities

## Technical Constraints

1. **Browser Support**: Modern browsers (ES2020+)
2. **Node Version**: Node.js 18+ required
3. **Build Output**: Static files in `dist/` directory
4. **Routing**: Client-side only (SPA)
5. **Deployment**: Optimized for Netlify (can deploy elsewhere)

## Development Workflow

1. **Feature Development**: Create branch, implement feature, test locally
2. **Code Quality**: Run `npm run lint` before committing
3. **Type Checking**: TypeScript compiler checks types on build
4. **Testing**: Manual testing in browser (automated tests can be added)
5. **Deployment**: Push to main branch triggers Netlify build

## Build Process

1. TypeScript compilation (`tsc -b`)
2. Vite build (bundling, minification, optimization)
3. Output to `dist/` directory
4. Static assets copied to `dist/`

## Deployment

- **Platform**: Netlify (configured)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **SPA Routing**: Handled by `public/_redirects` file
- **Environment Variables**: Set in Netlify dashboard

## Performance Considerations

- Code splitting ready (can add lazy loading)
- Vite optimizations (tree shaking, minification)
- Static asset optimization
- Fast refresh in development

## Future Technical Enhancements

- Add automated testing (Vitest, React Testing Library)
- Add E2E testing (Playwright, Cypress)
- Add CI/CD pipeline
- Add performance monitoring
- Add error tracking (Sentry)

