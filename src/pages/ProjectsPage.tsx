import { SEO } from "@/components/seo/SEO";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site.config";

/**
 * ProjectsPage component
 * Thin container that orchestrates ProjectsGrid section
 * Follows SRP - only responsible for page composition
 *
 * @page
 */
export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects"
        description={`Explore ${siteConfig.name}'s portfolio of projects. ${projects.length} projects showcasing web development, full-stack applications, and modern technologies.`}
        keywords="projects, portfolio, web development, react, typescript, full stack"
      />

      <ProjectsGrid projects={projects} />
    </>
  );
}

