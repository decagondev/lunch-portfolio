import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";

/**
 * SkillsSection component props
 * Following ISP - narrow, focused interface
 */
interface SkillsSectionProps {
  skillsToDisplay?: readonly Skill[];
  showLevel?: boolean;
  className?: string;
}

/**
 * SkillsSection component
 * Displays skills in a responsive grid layout
 *
 * Features:
 * - Responsive grid layout
 * - Level-based color coding via SkillBadge
 * - Optional level indicators
 * - Uses skills from data layer
 *
 * @component
 * @example
 * ```tsx
 * <SkillsSection showLevel />
 * ```
 */
export function SkillsSection({
  skillsToDisplay = skills,
  showLevel = false,
}: SkillsSectionProps) {
  if (skillsToDisplay.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              No skills to display yet.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            A comprehensive overview of the technologies and tools I work with.
            Continuously learning and expanding my skill set.
          </p>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-3">
            {skillsToDisplay.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                showLevel={showLevel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

