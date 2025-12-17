import { SEO } from "@/components/seo/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsTeaser } from "@/components/sections/ProjectsTeaser";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site.config";

/**
 * HomePage component
 * Thin container that orchestrates Hero and Projects Teaser sections
 * Follows SRP - only responsible for page composition
 *
 * @page
 */
export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description={`${siteConfig.name} - ${siteConfig.role}. ${siteConfig.tagline}`}
        keywords="portfolio, developer, web development, react, typescript"
      />

      <HeroSection />
      <ProjectsTeaser projects={projects} limit={3} />
    </>
  );
}
