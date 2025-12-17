import { NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar component with config-driven navigation and theme toggle
 * Follows Open/Closed Principle - extensible via navigation config
 * Follows Dependency Inversion Principle - depends on config abstraction
 */
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">{siteConfig.name}</span>
        </NavLink>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle variant="ghost" size="icon" />
        </div>
      </div>
    </nav>
  );
}
