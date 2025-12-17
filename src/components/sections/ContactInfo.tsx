import { Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/config/site.config";
import { socials } from "@/data/socials";

/**
 * ContactInfo component
 * Displays contact information including email and social links
 *
 * Features:
 * - Email display with mailto link
 * - Social links integration
 * - Card-based layout
 * - Responsive design
 *
 * @component
 * @example
 * ```tsx
 * <ContactInfo />
 * ```
 */
export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Get In Touch</CardTitle>
        <CardDescription>
          Feel free to reach out through any of these channels. I'm always
          open to discussing new projects, opportunities, or just having a
          chat.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1 font-semibold">Email</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="mb-3 font-semibold">Connect</h3>
            <SocialLinks socials={socials} orientation="vertical" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

