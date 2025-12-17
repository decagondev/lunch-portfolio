import type { Skill } from "@/types";

/**
 * Skills data layer
 * Pure data - no logic (SRP - Single Responsibility Principle)
 *
 * Instructions for customization:
 * 1. Replace with your actual skills
 * 2. Update levels based on your proficiency (expert, proficient, familiar)
 * 3. Add icon identifiers if you want to display icons (optional)
 * 4. Organize by category for easier management
 */

export const skills: readonly Skill[] = [
  // Frontend Technologies
  { name: "React", level: "expert", icon: "react" },
  { name: "TypeScript", level: "expert", icon: "typescript" },
  { name: "JavaScript", level: "expert", icon: "javascript" },
  { name: "HTML5", level: "expert", icon: "html5" },
  { name: "CSS3", level: "expert", icon: "css3" },
  { name: "Tailwind CSS", level: "expert", icon: "tailwind" },
  { name: "Next.js", level: "proficient", icon: "nextjs" },
  { name: "Vue.js", level: "proficient", icon: "vue" },
  { name: "Angular", level: "familiar", icon: "angular" },

  // Backend Technologies
  { name: "Node.js", level: "expert", icon: "nodejs" },
  { name: "Express", level: "expert", icon: "express" },
  { name: "Python", level: "proficient", icon: "python" },
  { name: "Django", level: "proficient", icon: "django" },
  { name: "NestJS", level: "proficient", icon: "nestjs" },
  { name: "GraphQL", level: "proficient", icon: "graphql" },
  { name: "REST APIs", level: "expert", icon: "api" },

  // Databases
  { name: "PostgreSQL", level: "expert", icon: "postgresql" },
  { name: "MongoDB", level: "proficient", icon: "mongodb" },
  { name: "Redis", level: "proficient", icon: "redis" },
  { name: "MySQL", level: "proficient", icon: "mysql" },

  // Cloud & DevOps
  { name: "AWS", level: "proficient", icon: "aws" },
  { name: "Docker", level: "proficient", icon: "docker" },
  { name: "Kubernetes", level: "familiar", icon: "kubernetes" },
  { name: "CI/CD", level: "proficient", icon: "cicd" },
  { name: "Git", level: "expert", icon: "git" },
  { name: "GitHub", level: "expert", icon: "github" },

  // Tools & Libraries
  { name: "Vite", level: "expert", icon: "vite" },
  { name: "Webpack", level: "proficient", icon: "webpack" },
  { name: "Jest", level: "proficient", icon: "jest" },
  { name: "Vitest", level: "proficient", icon: "vitest" },
  { name: "React Testing Library", level: "proficient", icon: "rtl" },
  { name: "ESLint", level: "expert", icon: "eslint" },
  { name: "Prettier", level: "expert", icon: "prettier" },

  // Mobile & Other
  { name: "React Native", level: "proficient", icon: "react-native" },
  { name: "Expo", level: "proficient", icon: "expo" },
  { name: "PWA", level: "proficient", icon: "pwa" },
] as const;

/**
 * Get skills by proficiency level
 * Helper function to filter skills by level (useful for UI display)
 */
export const getSkillsByLevel = (
  level: "expert" | "proficient" | "familiar"
): Skill[] => {
  return skills.filter((skill) => skill.level === level);
};

/**
 * Get all unique skill categories
 * Useful for organizing skills in UI
 */
export const skillCategories = {
  frontend: skills.filter((skill) =>
    ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js", "Angular"].includes(
      skill.name
    )
  ),
  backend: skills.filter((skill) =>
    ["Node.js", "Express", "Python", "Django", "NestJS", "GraphQL", "REST APIs"].includes(skill.name)
  ),
  databases: skills.filter((skill) =>
    ["PostgreSQL", "MongoDB", "Redis", "MySQL"].includes(skill.name)
  ),
  cloud: skills.filter((skill) =>
    ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub"].includes(skill.name)
  ),
  tools: skills.filter((skill) =>
    ["Vite", "Webpack", "Jest", "Vitest", "React Testing Library", "ESLint", "Prettier"].includes(skill.name)
  ),
  mobile: skills.filter((skill) =>
    ["React Native", "Expo", "PWA"].includes(skill.name)
  ),
} as const;

/**
 * Skills statistics
 * Summary metrics for about/stats sections
 */
export const skillStats = {
  total: skills.length,
  expert: getSkillsByLevel("expert").length,
  proficient: getSkillsByLevel("proficient").length,
  familiar: getSkillsByLevel("familiar").length,
} as const;

