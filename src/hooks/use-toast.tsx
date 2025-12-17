import { ExternalLink, Github, Eye, Code2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

/**
 * ProjectCard component props
 * Following ISP - narrow, focused interface
 */
interface ProjectCardProps {
  project: Project;
  className?: string;
  variant?: "default" | "compact" | "featured";
}

/**
 * ProjectCard component
 * Displays project information with thumbnail, tags, and action buttons
 *
 * Features:
 * - Three variants: default, compact (no image), and featured (larger)
 * - Hover effects and smooth transitions
 * - Responsive layout
 * - Graceful fallback when no thumbnail
 * - Tag badges with color coding
 * - Action buttons for demo and code
 *
 * @component
 * @example
 * ```tsx
 * <ProjectCard project={projectData} variant="default" />
 * ```
 */
export function ProjectCard({
  project,
  className = "",
  variant = "default",
}: ProjectCardProps) {
  const { title, description, tags, thumbnail, demoUrl, repoUrl } = project;

  const cardClasses = {
    default: "h-full",
    compact: "h-full",
    featured: "h-full lg:col-span-2",
  };

  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cardClasses[variant]} ${className}`}
    >
      {/* Thumbnail Image */}
      {thumbnail && variant !== "compact" && (
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img
            src={thumbnail}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Quick action buttons on image hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {demoUrl && (
              <Button asChild size="sm" className="shadow-lg">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}
            <Button asChild variant="secondary" size="sm" className="shadow-lg">
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Code2 className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* Card Header */}
      <CardHeader className={variant === "featured" ? "space-y-3" : ""}>
        <div className="flex items-start justify-between gap-2">
          <CardTitle
            className={`line-clamp-1 transition-colors group-hover:text-primary ${
              variant === "featured" ? "text-2xl" : ""
            }`}
          >
            {title}
          </CardTitle>

          {/* Status indicator if has demo */}
          {demoUrl && (
            <span className="flex-shrink-0">
              <Badge
                variant="outline"
                className="gap-1 border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Live
              </Badge>
            </span>
          )}
        </div>

        <CardDescription
          className={`line-clamp-2 ${
            variant === "featured" ? "text-base" : ""
          }`}
        >
          {description}
        </CardDescription>
      </CardHeader>

      {/* Card Content - Tags */}
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, variant === "featured" ? 8 : 5).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-medium transition-colors hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > (variant === "featured" ? 8 : 5) && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - (variant === "featured" ? 8 : 5)}
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Card Footer - Action Buttons */}
      <CardFooter className="gap-2 border-t pt-4">
        {demoUrl ? (
          <>
            <Button asChild size="sm" className="flex-1 group/btn">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 group/btn"
            >
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                Code
              </a>
            </Button>
          </>
        ) : (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full group/btn"
          >
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
              View Source Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

/**
 * ProjectCardSkeleton component
 * Loading skeleton for ProjectCard
 *
 * @component
 * @example
 * ```tsx
 * <ProjectCardSkeleton />
 * ```
 */
export function ProjectCardSkeleton() {
  return (
    <Card className="h-full overflow-hidden">
      <div className="aspect-video w-full animate-pulse bg-muted" />
      <CardHeader>
        <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-muted" />
          <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
        </div>
      </CardContent>
      <CardFooter className="gap-2 border-t pt-4">
        <div className="h-9 flex-1 animate-pulse rounded bg-muted" />
        <div className="h-9 flex-1 animate-pulse rounded bg-muted" />
      </CardFooter>
    </Card>
  );
}
