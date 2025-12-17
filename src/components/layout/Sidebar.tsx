import { NavLink } from "react-router-dom"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { navLinks } from "@/config/navigation"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

/**
 * Collapsible sidebar component with config-driven navigation
 * Follows Single Responsibility Principle - handles sidebar navigation only
 * Follows Dependency Inversion Principle - depends on navigation config
 */
export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] border-r bg-background transition-all duration-300 ease-in-out",
          isOpen ? "w-64" : "w-12"
        )}
      >
        {/* Chevron Toggle Button - on the right edge */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="absolute -right-3 top-4 z-50 h-6 w-6 rounded-full border bg-background shadow-md hover:bg-accent"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>

        {/* Sidebar Content */}
        <div className={cn("h-full overflow-hidden transition-all", isOpen ? "opacity-100" : "opacity-0")}>
          <div className="flex h-16 items-center border-b px-4">
            <span className="font-semibold">Menu</span>
          </div>

          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => {
                    // Close on mobile when clicking a link
                    if (window.innerWidth < 1024) {
                      onToggle()
                    }
                  }}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )
                  }
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  {isOpen && <span>{link.label}</span>}
                </NavLink>
              )
            })}
            {isOpen && (
              <div className="mt-4 pt-4 border-t">
                <ThemeToggle variant="ghost" size="default" className="w-full justify-start" />
              </div>
            )}
          </nav>
        </div>

        {/* Collapsed Icon View */}
        {!isOpen && (
          <div className="flex flex-col gap-2 p-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center justify-center rounded-md p-2 transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )
                  }
                  title={link.label}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </NavLink>
              )
            })}
            <div className="mt-2 pt-2 border-t">
              <ThemeToggle variant="ghost" size="icon" />
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
