import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const defaultSkills: Skill[] = [
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "TypeScript", level: 85, color: "#3178c6" },
  { name: "React", level: 88, color: "#61dafb" },
  { name: "Node.js", level: 82, color: "#68a063" },
  { name: "Python", level: 75, color: "#3572A5" },
  { name: "PostgreSQL", level: 70, color: "#336791" },
  { name: "Docker", level: 65, color: "#2496ed" },
  { name: "Git", level: 85, color: "#f05032" },
];

export function SkillsSection({ skills = defaultSkills }: SkillsSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-muted/30" id="skills" data-testid="section-skills">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-skills-heading">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Technologies I've been working with and my proficiency level in each.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium" data-testid={`skill-name-${skill.name.toLowerCase()}`}>{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: skill.color }}
                  data-testid={`skill-bar-${skill.name.toLowerCase()}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
