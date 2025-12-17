import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";

/**
 * App Component
 * Main application router with all route definitions
 *
 * Architecture:
 * - All routes wrapped in Layout for consistent UI (sticky nav, footer)
 * - Lazy loading ready (can be added for performance optimization)
 * - 404 redirect to home page
 * - Clean route structure following REST conventions
 *
 * Route Structure:
 * - / - Home page (hero + featured projects)
 * - /projects - All projects grid
 * - /about - Bio + skills
 * - /contact - Contact info + form
 * - /privacy - Privacy policy (legal)
 * - /terms - Terms of service (legal)
 *
 * Future Routes (commented out, ready to add):
 * - /projects/:id - Individual project detail pages
 * - /blog - Blog listing
 * - /blog/:slug - Individual blog post
 * - /resume - Online resume/CV
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes - All wrapped in Layout */}
        <Route element={<Layout />}>
          {/* Core Portfolio Pages */}
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsOfServicePage />} />

          {/* Future Routes - Uncomment when ready */}
          {/* <Route path="projects/:id" element={<ProjectDetailPage />} /> */}
          {/* <Route path="blog" element={<BlogPage />} /> */}
          {/* <Route path="blog/:slug" element={<BlogPostPage />} /> */}
          {/* <Route path="resume" element={<ResumePage />} /> */}

          {/* 404 - Catch all unmatched routes */}
          <Route path="*" element={<NotFoundRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/**
 * NotFoundRedirect component
 * Redirects 404s to home page with optional toast notification
 *
 * Alternative: Create a proper 404 page
 * - Uncomment the NotFoundPage route above
 * - Create src/pages/NotFoundPage.tsx
 * - Replace Navigate with <NotFoundPage />
 */
function NotFoundRedirect() {
  return <Navigate to="/" replace />;
}

export default App;
