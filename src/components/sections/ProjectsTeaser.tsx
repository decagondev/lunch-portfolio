import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types";

/**
 * ProjectsTeaser component props
 */
interface ProjectsTeaserProps {
  projects: readonly Project[];
  limit?: number;
}

/**
 * ProjectsTeaser component
 * Displays a preview of featured projects with link to full projects page
 * Designed for home page to showcase top projects
 *
 * Features:
 * - Responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
 * - Configurable project limit
 * - "View All" CTA when more projects exist
 * - Elegant section header with description
 *
 * @component
 * @example
 * ```tsx
 * <ProjectsTeaser projects={projects} limit={3} />
 * ```
 */
export function ProjectsTeaser({ projects, limit = 3 }: ProjectsTeaserProps) {
  const displayProjects = projects.slice(0, limit);

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Portfolio
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            A selection of my recent work. Each project represents a unique
            challenge and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {displayProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        {projects.length > limit && (
          <div className="flex justify-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/projects">
                View All Projects ({projects.length})
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}
