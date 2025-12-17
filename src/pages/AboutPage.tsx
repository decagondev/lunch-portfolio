import { SEO } from "@/components/seo/SEO";
import { BioSection } from "@/components/sections/BioSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { siteConfig } from "@/config/site.config";

/**
 * AboutPage component
 * Thin container that orchestrates Bio and Skills sections
 * Follows SRP - only responsible for page composition
 *
 * @page
 */
export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description={`Learn more about ${siteConfig.name} - ${siteConfig.role}. ${siteConfig.bioExcerpt}`}
        keywords="about, bio, skills, developer, portfolio"
      />

      <BioSection />
      <SkillsSection />
    </>
  );
}
