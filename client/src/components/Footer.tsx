import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  name: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export function Footer({ name, email, githubUrl, linkedinUrl }: FooterProps) {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-8 border-t" data-testid="section-footer">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-footer-heading">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto" data-testid="text-footer-desc">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex justify-center items-center gap-2 mb-12">
          {githubUrl && (
            <Button variant="ghost" size="icon" asChild data-testid="footer-link-github">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {linkedinUrl && (
            <Button variant="ghost" size="icon" asChild data-testid="footer-link-linkedin">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          )}
          {email && (
            <Button variant="ghost" size="icon" asChild data-testid="footer-link-email">
              <a href={`mailto:${email}`} aria-label="Send Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>

        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-destructive fill-current" />
          <span>by {name}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
