import { Home, FolderKanban, User, Mail, Shield, FileText } from "lucide-react";
import type { NavLink } from "@/types";

/**
 * Navigation configuration
 * Centralized navigation links following Open/Closed Principle (OCP)
 *
 * Benefits:
 * - Single source of truth for navigation
 * - Easy to add new routes without modifying components
 * - Consistent navigation across Navbar, Sidebar, and Footer
 * - Type-safe with NavLink interface
 *
 * Usage:
 * - Import navLinks in Navbar, Sidebar, Footer components
 * - Map over navLinks to render navigation items
 * - Active state can be determined by comparing href with current route
 *
 * Future enhancements:
 * - Add nested navigation support
 * - Add badge/notification counts
 * - Add permission-based visibility
 */
export const navLinks: readonly NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "About",
    href: "/about",
    icon: User,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
] as const;

/**
 * Legal/Footer navigation links
 * Separate from main navigation for footer display
 */
export const legalLinks: readonly NavLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy",
    icon: Shield,
  },
  {
    label: "Terms of Service",
    href: "/terms",
    icon: FileText,
  },
] as const;

/**
 * Get navigation link by href
 * Helper function to find a specific nav link
 */
export const getNavLinkByHref = (href: string): NavLink | undefined => {
  return navLinks.find((link) => link.href === href);
};

/**
 * Check if a route is a main navigation route
 * Useful for determining active states or visibility
 */
export const isMainNavRoute = (pathname: string): boolean => {
  return navLinks.some((link) => link.href === pathname);
};

