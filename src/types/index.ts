/**
 * Shared type definitions for the portfolio application
 * Following Interface Segregation Principle (ISP) - narrow, focused interfaces
 */

/**
 * Represents a project in the portfolio
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Project title/name */
  title: string;
  /** Brief description (1-2 sentences) */
  description: string;
  /** Detailed description for future detail pages */
  longDescription?: string;
  /** Technology tags/stack used */
  tags: string[];
  /** Optional thumbnail image URL or path */
  thumbnail?: string;
  /** Optional live demo URL */
  demoUrl?: string;
  /** Repository URL (GitHub, GitLab, etc.) */
  repoUrl: string;
}

/**
 * Represents a skill or technology proficiency
 */
export interface Skill {
  /** Skill name (e.g., "React", "TypeScript") */
  name: string;
  /** Optional proficiency level */
  level?: "expert" | "proficient" | "familiar";
  /** Optional icon identifier (for lucide-react or custom icons) */
  icon?: string;
}

/**
 * Represents a social media link
 */
export interface SocialLink {
  /** Platform name (e.g., "GitHub", "LinkedIn") */
  platform: string;
  /** Full URL to the profile */
  url: string;
  /** Lucide icon component */
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Navigation link structure
 */
export interface NavLink {
  /** Display label */
  label: string;
  /** Route path */
  href: string;
  /** Optional icon for mobile/enhanced nav */
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Site configuration structure
 */
export interface SiteConfig {
  /** Site/person name */
  name: string;
  /** Professional role/title */
  role: string;
  /** Brief tagline or slogan */
  tagline: string;
  /** Contact email */
  email: string;
  /** Brief bio excerpt for hero/about */
  bioExcerpt: string;
  /** Full bio text (markdown supported) */
  bioFull?: string;
}

/**
 * SEO metadata structure
 */
export interface SEOProps {
  /** Page title */
  title: string;
  /** Page description */
  description: string;
  /** Optional keywords */
  keywords?: string;
  /** Optional Open Graph image */
  ogImage?: string;
  /** Optional canonical URL */
  canonical?: string;
}
