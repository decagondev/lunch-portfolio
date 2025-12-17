import { SEO } from "@/components/seo/SEO";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site.config";

/**
 * ContactPage component
 * Displays contact information and form
 * Thin container following SRP
 *
 * @page
 */
export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description={`Get in touch with ${siteConfig.name}. Open to new opportunities, collaborations, and interesting projects.`}
        keywords="contact, email, hire, collaborate, opportunities"
      />

      <div className="container px-4 py-8 md:px-6 md:py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        {/* Content - Two Column Layout on Desktop */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact Info - Sidebar */}
          <div>
            <ContactInfo />
          </div>

          {/* Contact Form - Main */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
