import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Server, Smartphone, Terminal, Cloud, Cpu } from "lucide-react";

interface ModernAboutProps {
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
  "Docker": Cloud,
  "AWS": Cloud,
  "Git": Terminal,
  "Kubernetes": Cloud,
  "Redis": Database,
  "TensorFlow": Cpu,
  "Vue.js": Globe,
};

export function ModernAbout({ bio, skills }: ModernAboutProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8" id="about" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-heading">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Get to know more about who I am and what I do.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-6"
          >
            {bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-base md:text-lg leading-relaxed text-muted-foreground"
                data-testid={`text-bio-${index}`}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: bio.length * 0.1 }}
              className="pt-6"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Years Experience", value: "4+" },
                  { label: "Projects Completed", value: "50+" },
                  { label: "Happy Clients", value: "30+" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-semibold mb-6" data-testid="text-skills-heading">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => {
                const Icon = skillIcons[skill] || Code2;
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium gap-2 cursor-default"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Icon className="h-4 w-4" />
                      {skill}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
