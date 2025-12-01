import { AboutSection } from "../AboutSection";

export default function AboutSectionExample() {
  return (
    <AboutSection
      bio={[
        "I'm a passionate full-stack developer with experience building modern web applications. I love turning complex problems into simple, beautiful solutions.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or writing technical articles.",
        "I believe in writing clean, maintainable code and creating intuitive user experiences that make a difference.",
      ]}
      skills={[
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Git",
      ]}
    />
  );
}
