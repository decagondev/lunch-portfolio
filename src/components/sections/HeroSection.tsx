import { ArrowRight, FolderGit2, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { socials } from "@/data/socials";

/**
 * HeroSection component
 * Main landing hero with name, role, tagline, and CTAs
 *
 * @component
 * @example
 * ```tsx
 * <HeroSection />
 * ```
 */
export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Greeting */}
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            👋 Welcome to my portfolio
          </div>

          {/* Name & Role */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mb-2 text-xl font-semibold text-muted-foreground md:text-2xl">
            {siteConfig.role}
          </p>

          {/* Tagline */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            {siteConfig.tagline}
          </p>

          {/* Bio Excerpt */}
          <p className="mb-10 text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.bioExcerpt}
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/projects">
                <FolderGit2 className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks
              socials={socials}
              orientation="horizontal"
              size="lg"
              variant="ghost"
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </section>
  );
}
