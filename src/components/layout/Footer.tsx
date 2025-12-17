import { Link } from "react-router-dom"
import { navLinks, legalLinks } from "@/config/navigation"
import { siteConfig } from "@/config/site.config"
import { socials } from "@/data/socials"
import { SocialLinks } from "@/components/ui/SocialLinks"

/**
 * Footer component with config-driven navigation and social links
 * Follows Dependency Inversion Principle - depends on config and data abstractions
 * Follows Open/Closed Principle - extensible via config updates
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-2">
            <h3 className="font-semibold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Main Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-1 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="space-y-2">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
              <SocialLinks socials={socials} orientation="horizontal" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
