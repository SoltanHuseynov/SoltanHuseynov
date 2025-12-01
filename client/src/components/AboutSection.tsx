import { SkillBadge } from "./SkillBadge";
import { Code2, Database, Globe, Server, Smartphone, Terminal } from "lucide-react";

interface AboutSectionProps {
  bio: string[];
  skills: string[];
}

const skillIcons: Record<string, typeof Code2> = {
  "JavaScript": Code2,
  "TypeScript": Code2,
  "React": Globe,
  "Node.js": Server,
  "Python": Terminal,
  "PostgreSQL": Database,
  "MongoDB": Database,
  "React Native": Smartphone,
  "Next.js": Globe,
  "Express": Server,
  "GraphQL": Code2,
  "Docker": Terminal,
  "AWS": Server,
  "Git": Terminal,
};

export function AboutSection({ bio, skills }: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8" id="about" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12" data-testid="text-about-heading">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid={`text-bio-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold" data-testid="text-skills-heading">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} name={skill} icon={skillIcons[skill]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
