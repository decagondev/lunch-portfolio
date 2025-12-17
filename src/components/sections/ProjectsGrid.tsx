import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

/**
 * ProjectsGrid component props
 * Following ISP - narrow, focused interface
 */
interface ProjectsGridProps {
  projects: readonly Project[];
  className?: string;
}

/**
 * ProjectsGrid component
 * Displays all projects in a responsive grid layout
 * Designed for the full projects page
 *
 * Features:
 * - Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
 * - Consistent spacing and layout
 * - Uses ProjectCard component for each project
 *
 * @component
 * @example
 * ```tsx
 * <ProjectsGrid projects={projects} />
 * ```
 */
export function ProjectsGrid({ projects, className }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              No projects to display yet.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-block">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Portfolio
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            All{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            A comprehensive showcase of my work. Each project represents a
            unique challenge and demonstrates different aspects of my
            development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8",
            className
          )}
        >
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
}

