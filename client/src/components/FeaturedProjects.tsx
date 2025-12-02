import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

interface FeaturedProject {
  id: number;
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  topics?: string[];
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dart: "#00B4AB",
  "C#": "#178600",
  R: "#198CE7",
  Perl: "#0673A0",
  Shell: "#89e051",
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null;

  const topProjects = projects.slice(0, FeaturedProjects.name.length);

  return (
    <section className="py-16 md:py-24 px-6 md:px-8" id="featured" data-testid="section-featured">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-featured-heading">
            Seçilmiş Layihələr
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Üzərində çalışdığım və icma tərəfindən maraqla qarşılanan layihələrdən seçmələr.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden hover-elevate" data-testid={`featured-project-${project.name}`}>
                <div className="h-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.name} GitHub-da bax`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground flex-1 mb-4">
                    {project.description || "Təsvir mövcud deyil"}
                  </p>

                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.slice(0, 4).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {project.language && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: languageColors[project.language] || "#6e7681" }}
                          />
                          <span>{project.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Bax
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
