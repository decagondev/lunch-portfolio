import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

/**
 * ThemeToggle component props
 */
interface ThemeToggleProps {
  /** Button variant style */
  variant?: "default" | "ghost" | "outline";
  /** Button size */
  size?: "default" | "sm" | "lg" | "icon";
  /** Additional CSS classes */
  className?: string;
}

/**
 * ThemeToggle component
 * Reusable theme toggle button that switches between light and dark modes
 * Follows Single Responsibility Principle - only handles theme toggling
 *
 * Features:
 * - Uses ThemeContext for theme state management
 * - Displays Sun icon in dark mode, Moon icon in light mode
 * - Accessible with proper ARIA labels
 * - Customizable via props (variant, size, className)
 *
 * @component
 * @example
 * ```tsx
 * <ThemeToggle variant="ghost" size="icon" />
 * ```
 */
export function ThemeToggle({
  variant = "ghost",
  size = "icon",
  className,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(className)}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}

