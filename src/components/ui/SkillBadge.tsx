import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

/**
 * SkillBadge component props
 * Following ISP - narrow, focused interface
 */
interface SkillBadgeProps {
  skill: Skill;
  className?: string;
  showLevel?: boolean;
}

/**
 * SkillBadge component
 * Displays a skill with optional level-based color coding
 *
 * Features:
 * - Level-based color variants (expert, proficient, familiar)
 * - Optional level indicator
 * - Consistent styling with Badge component
 *
 * @component
 * @example
 * ```tsx
 * <SkillBadge skill={skillData} showLevel />
 * ```
 */
export function SkillBadge({
  skill,
  className,
  showLevel = false,
}: SkillBadgeProps) {
  const { name, level } = skill;

  // Level-based color variants
  const levelVariants = {
    expert: "bg-primary text-primary-foreground border-primary/20",
    proficient: "bg-secondary text-secondary-foreground border-secondary/20",
    familiar: "bg-muted text-muted-foreground border-muted-foreground/20",
  };

  const variantClass = level
    ? levelVariants[level]
    : "bg-secondary text-secondary-foreground";

  return (
    <Badge
      variant="outline"
      className={cn(
        "transition-colors hover:scale-105",
        level && variantClass,
        className
      )}
      title={level ? `${name} - ${level}` : name}
    >
      {name}
      {showLevel && level && (
        <span className="ml-1.5 text-xs opacity-70">({level})</span>
      )}
    </Badge>
  );
}

