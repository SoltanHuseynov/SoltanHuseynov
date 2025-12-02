import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: "work" | "education" | "award" | "project";
}

const defaultTimeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Böyük Proqramçı",
    description: "Mürəkkəb veb tətbiqlərin inkişafına rəhbərlik edirəm və kiçik proqramçılara mentorluq edirəm.",
    icon: "work",
  },
  {
    year: "2023",
    title: "Full-Stack Proqramçı",
    description: "React, Node.js və bulud texnologiyalarından istifadə edərək müasir veb tətbiqlər yaradıram.",
    icon: "work",
  },
  {
    year: "2022",
    title: "Açıq Mənbə Əməkdaşı",
    description: "Böyük açıq mənbə layihələrinə töhfə verməyə və öz alətlərimi yaratmağa başladım.",
    icon: "project",
  },
  {
    year: "2021",
    title: "Kiçik Proqramçı",
    description: "Proqram təminatı inkişafında peşəkar yolçuluğuma başladım, frontend texnologiyalarına fokuslandım.",
    icon: "work",
  },
  {
    year: "2020",
    title: "Fundamental Biliklər",
    description: "Algoritmlər, məlumat strukturları və veb əsaslarını öyrənərək peşəkar inkişaf yoluna hazırlaşdım.",
    icon:"education"
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  award: Award,
  project: Rocket,
};

interface TimelineSectionProps {
  timeline?: TimelineItem[];
}

export function TimelineSection({ timeline = defaultTimeline }: TimelineSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8" id="timeline" data-testid="section-timeline">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-timeline-heading">
            Mənim Yolçuluğum
          </h2>
          <p className="text-muted-foreground text-lg mb-12 text-center max-w-2xl mx-auto">
            
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          {timeline.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-card border rounded-xl p-6 hover-elevate" data-testid={`timeline-item-${index}`}>
                    <span className="text-sm font-mono text-primary">{item.year}</span>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background"
                  >
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>

                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
