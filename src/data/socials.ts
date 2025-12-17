import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import type { SocialLink } from "@/types";

/**
 * Social media links data layer
 * Pure data - no logic (SRP - Single Responsibility Principle)
 *
 * TODO: Replace with real social media URLs
 */
export const socials: readonly SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
  },
  {
    platform: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
  },
] as const;
