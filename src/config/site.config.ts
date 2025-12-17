import type { SiteConfig } from "@/types";

/**
 * Site-wide configuration
 * Single source of truth for personal/brand information (DIP - Dependency Inversion Principle)
 *
 * Update all values below with your personal information
 */
export const siteConfig: Readonly<SiteConfig> = {
  // Personal Information
  name: "Tom Tarpey",
  role: "Full Stack Developer & UI/UX Enthusiast, I do stuff",
  tagline:
    "Building elegant solutions to complex problems with modern web technologies",
  email: "tom@decadev.co.uk",

  // Bio Content
  bioExcerpt:
    "Passionate full-stack developer with 5+ years of experience creating impactful digital experiences. Specialized in React, TypeScript, and Node.js with a keen eye for design and user experience.",

  bioFull: `I'm a full-stack developer with a passion for building scalable, user-friendly applications that make a real difference. My journey in web development started with a curiosity about how things work on the internet, and has evolved into a career focused on creating exceptional digital experiences.

With expertise in modern web technologies including React, TypeScript, Node.js, and cloud platforms, I transform complex ideas into elegant, performant solutions. I believe that great software is not just about clean code—it's about understanding user needs and delivering intuitive experiences that delight.

My approach combines technical excellence with creative problem-solving. Whether I'm architecting a new feature, optimizing performance, or collaborating with designers, I'm always thinking about the end user and how to make their experience better.

When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, writing technical articles, or mentoring junior developers. I'm also an avid reader of tech blogs and love staying current with the ever-evolving web development landscape.

I'm currently open to new opportunities and exciting projects. If you're looking for a developer who cares deeply about code quality, user experience, and continuous learning, let's connect!`,
} as const;

/**
 * Site metadata configuration
 * Used for SEO and social sharing
 */
export const siteMetadata = {
  siteUrl: "https://yourportfolio.com", // Update with your actual domain
  siteName: siteConfig.name,
  siteDescription: `${siteConfig.name} - ${siteConfig.role}. ${siteConfig.tagline}`,
  locale: "en-US",

  // Social Media Open Graph
  ogImage: "/og-image.jpg", // Add your OG image to public folder
  twitterHandle: "@yourhandle", // Update with your Twitter handle
} as const;

/**
 * Professional links and resources
 */
export const professionalLinks = {
  resume: "/resume.pdf", // Add your resume to public folder
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle",
  blog: "https://yourblog.com", // Optional
  portfolio: "https://yourportfolio.com",
} as const;

/**
 * Feature flags and toggles
 * Easy way to enable/disable features
 */
export const features = {
  showBlogSection: false, // Set to true when blog is ready
  showTestimonialsSection: false, // Set to true when you have testimonials
  enableContactForm: true,
  showResumeDownload: true,
  enableAnalytics: false, // Set to true and add GA ID
} as const;

/**
 * Contact and availability
 */
export const availability = {
  status: "open", // 'open' | 'limited' | 'unavailable'
  message:
    "Currently available for freelance projects and full-time opportunities",
  responseTime: "Usually responds within 24-48 hours",
} as const;

/**
 * Dynamic site title helper
 * Generates consistent page titles across the site
 */
export const getSiteTitle = (pageTitle?: string): string => {
  return pageTitle
    ? `${pageTitle} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.role}`;
};

/**
 * Get site URL with proper protocol
 * Supports local development and production
 */
export const getSiteUrl = (): string => {
  // Check for environment variable first
  if (import.meta.env.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL;
  }

  // Production fallback
  if (import.meta.env.PROD) {
    return siteMetadata.siteUrl;
  }

  // Development fallback
  return "http://localhost:5173";
};

/**
 * Generate canonical URL for SEO
 */
export const getCanonicalUrl = (path: string = ""): string => {
  const baseUrl = getSiteUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Years of experience calculator
 * Automatically updates based on start year
 */
export const getYearsOfExperience = (): number => {
  const startYear = 2019; // Update with your actual start year
  return new Date().getFullYear() - startYear;
};

/**
 * Professional highlights
 * Key achievements or metrics to showcase
 */
export const highlights = [
  {
    metric: `${getYearsOfExperience()}+`,
    label: "Years Experience",
  },
  {
    metric: "50+",
    label: "Projects Completed",
  },
  {
    metric: "20+",
    label: "Happy Clients",
  },
  {
    metric: "100%",
    label: "Client Satisfaction",
  },
] as const;
