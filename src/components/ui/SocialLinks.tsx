import { Button } from "@/components/ui/button";
import type { SocialLink } from "@/types";

/**
 * SocialLinks component props
 */
interface SocialLinksProps {
  socials: readonly SocialLink[];
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

/**
 * SocialLinks component
 * Renders a list of social media links with icons
 * Supports horizontal and vertical orientations (reusable across contexts)
 *
 * @component
 * @example
 * ```tsx
 * <SocialLinks socials={socialsData} orientation="horizontal" />
 * ```
 */
export function SocialLinks({
  socials,
  orientation = "horizontal",
  size = "default",
  variant = "ghost",
  className = "",
}: SocialLinksProps) {
  const containerClass =
    orientation === "horizontal"
      ? "flex flex-row items-center gap-2"
      : "flex flex-col items-start gap-2";

  const iconSize = {
    sm: "h-4 w-4",
    default: "h-5 w-5",
    lg: "h-6 w-6",
  }[size];

  return (
    <div className={`${containerClass} ${className}`}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.platform}
            variant={variant}
            size="icon"
            asChild
            className="transition-colors"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.platform} profile`}
            >
              <Icon className={iconSize} />
            </a>
          </Button>
        );
      })}
    </div>
  );
}
