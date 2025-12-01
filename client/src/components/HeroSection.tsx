import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export function HeroSection({
  name,
  title,
  tagline,
  avatarUrl,
  githubUrl,
  linkedinUrl,
  email,
}: HeroSectionProps) {
  const scrollToProjects = () => {
    document.getElementById("repositories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[80vh] flex items-center px-6 md:px-8" data-testid="section-hero">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border-2 border-border">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="text-2xl md:text-3xl font-bold rounded-2xl">
              {name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-hero-title">
              {title}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-hero-tagline">
              {tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={scrollToProjects} data-testid="button-view-projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {githubUrl && (
                <Button variant="ghost" size="icon" asChild data-testid="link-github">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {linkedinUrl && (
                <Button variant="ghost" size="icon" asChild data-testid="link-linkedin">
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {email && (
                <Button variant="ghost" size="icon" asChild data-testid="link-email">
                  <a href={`mailto:${email}`} aria-label="Send Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
