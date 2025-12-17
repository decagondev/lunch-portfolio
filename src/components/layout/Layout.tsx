import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Layout Component
 * Main application layout wrapper with sticky navbar and footer
 *
 * Features:
 * - Sticky navigation that persists across all routes
 * - Footer with site navigation and social links
 * - Smooth page transitions
 * - Proper spacing and responsive design
 * - Centered content with max-width constraints
 *
 * Architecture:
 * - Uses <Outlet /> for nested route rendering
 * - Ensures consistent UX across all pages
 * - Content is centered using container classes in sections
 *
 * @component
 */
export function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Area - Centered */}
      <main className="flex-1 w-full">
        {/* Outlet renders the current route's component */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
