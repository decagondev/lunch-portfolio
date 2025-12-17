import { siteConfig } from "@/config/site.config";

/**
 * BioSection component
 * Displays full bio text with prose styling
 * Uses Tailwind prose classes for readable markdown-like text
 *
 * Features:
 * - Prose styling for readable text
 * - Dark mode support with prose-invert
 * - Responsive typography
 * - Pulls content from siteConfig
 *
 * @component
 * @example
 * ```tsx
 * <BioSection />
 * ```
 */
export function BioSection() {
  const bioText = siteConfig.bioFull || siteConfig.bioExcerpt;

  if (!bioText) {
    return null;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
              {bioText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

