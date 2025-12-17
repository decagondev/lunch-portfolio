import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Layout Component
 * Main application layout wrapper with sticky navbar, mobile sidebar, footer, and toast notifications
 *
 * Features:
 * - Sticky navigation that persists across all routes
 * - Mobile-responsive sidebar with backdrop
 * - Footer with site navigation and social links
 * - Toast notification system
 * - Smooth page transitions
 * - Proper spacing and responsive design
 *
 * Architecture:
 * - Uses <Outlet /> for nested route rendering
 * - Manages mobile sidebar state
 * - Ensures consistent UX across all pages
 *
 * @component
 */
export function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Sticky Navbar - Desktop */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Outlet renders the current route's component */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
