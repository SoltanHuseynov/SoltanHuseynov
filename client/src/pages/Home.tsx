import { ModernHeader } from "@/components/ModernHeader";
import { ModernHero } from "@/components/ModernHero";
import { ModernAbout } from "@/components/ModernAbout";
import { SkillsSection } from "@/components/SkillsSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { OrganizationsSection } from "@/components/OrganizationsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";
import { ModernFooter } from "@/components/ModernFooter";

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

interface Organization {
  id: number;
  login: string;
  avatar_url: string;
  description: string | null;
  url: string;
}

export default function Home() {
  const displayName = "Sultan Huseynov";
  const githubUrl = "https://github.com/SoltanHuseynov";

  const staticProjects: FeaturedProject[] = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "Müasir portfolio websaytı - React, TypeScript, Tailwind CSS",
      language: "TypeScript",
      stars: 15,
      forks: 3,
      url: "https://github.com/SoltanHuseynov/portfolio",
      topics: ["react", "typescript", "portfolio"],
    },
    {
      id: 2,
      name: "Mobile App",
      description: "React Native ilə yazılmış mobil tətbiq",
      language: "JavaScript",
      stars: 8,
      forks: 2,
      url: "https://github.com/SoltanHuseynov/mobile-app",
      topics: ["react-native", "mobile", "javascript"],
    },
    {
      id: 3,
      name: "API Backend",
      description: "Node.js və Express ilə hazırlanmış REST API",
      language: "JavaScript",
      stars: 12,
      forks: 4,
      url: "https://github.com/SoltanHuseynov/api-backend",
      topics: ["nodejs", "express", "api"],
    },
    {
      id: 4,
      name: "Database Manager",
      description: "PostgreSQL və MongoDB üçün verilənlər bazası idarəçi",
      language: "Python",
      stars: 6,
      forks: 1,
      url: "https://github.com/SoltanHuseynov/db-manager",
      topics: ["database", "python", "postgresql"],
    },
  ];

  const staticOrganizations: Organization[] = [
    {
      id: 1,
      login: "AzerbaijanDevelopers",
      avatar_url: "https://avatars.githubusercontent.com/u/12345?v=4",
      description: "Azərbaycan proqramçılarının birliyinin qrupu",
      url: "https://github.com/AzerbaijanDevelopers",
    },
    {
      id: 2,
      login: "OpenSourceAZ",
      avatar_url: "https://avatars.githubusercontent.com/u/12346?v=4",
      description: "Açıq mənbə layihələr toplusu",
      url: "https://github.com/OpenSourceAZ",
    },
    {
      id: 3,
      login: "TechInnovation",
      avatar_url: "https://avatars.githubusercontent.com/u/12347?v=4",
      description: "Texnoloji innovasiyası üzrə qrupu",
      url: "https://github.com/TechInnovation",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader name={displayName} />

      <main>
        <ModernHero
          name={displayName}
          title="Full-Stack Proqramçı"
          tagline="Mürəkkəb problemlərə zərif həllər yaradıram. Müasir texnologiyalarla miqyaslana bilən veb tətbiqlər qurmaqda ixtisaslaşmışam."
          avatarUrl="https://avatars.githubusercontent.com/u/12345?v=4"
          githubUrl={githubUrl}
          linkedinUrl="https://www.linkedin.com/in/soltanhuseynov/"
          email="sultan.huseynov20@gmail.com"
        />

        <ModernAbout
          bio={[
            "Mən gözəl, funksional və istifadəçi yönümlü rəqəmsal təcrübələr yaratmağı sevən həvəsli bir full-stack proqramçıyam. Frontend və backend texnologiyalarında təcrübəm var, fikirləri təmiz və səmərəli kodla həyata keçirirəm.",
            "Mən mobil tətbiqlərin inkişafı, proqram mühəndisliyi, sistem administrasiyası və texniki dəstəkdə praktik təcrübəsi olan IT mütəxəssisisiyəm. Real layihələrdə işləmək, API inteqrasiyası, verilənlər bazasının idarə edilməsi və UI/UX prinsiplərinə uyğun tətbiqlərin inkişafı üçün lazımi bacarıqlara sahibəm.",
            "Qrupla işləmə, analitik düşüncə və operativ problemlərin həlli ilə dəyər yaradan nəticələrə fokus edirəm. Kod yazmadığım zaman, yeni texnologiyaları araşdırır, açıq mənbə layihələrinə töhfə verir və ya proqramçı icması ilə bilik paylaşıram. Həmişə yeni çağırışları qəbul etməyə və mümkün olanın sərhədlərini genişləndirməyə həvəsliyəm.",
          ]}
          skills={[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "Java",
            "C#",
            "Dart",
            "PHP",
            "R",
            "Perl",
            "Shell",
            "PostgreSQL",
            "MongoDB",
            "Supabase",
            "Docker",
            "AWS",
            "Git",
            "GraphQL",
          ]}
        />

        <SkillsSection
          skills={[
            { name: "JavaScript/TypeScript", level: 92, color: "#f7df1e" },
            { name: "React & Next.js", level: 88, color: "#61dafb" },
            { name: "Node.js & Express", level: 85, color: "#68a063" },
            { name: "Python", level: 78, color: "#3572A5" },
            { name: "Java", level: 75, color: "#b07219" },
            { name: "C#", level: 72, color: "#178600" },
            { name: "Dart", level: 70, color: "#00B4AB" },
            { name: "PHP", level: 68, color: "#4F5D95" },
            { name: "R", level: 65, color: "#198CE7" },
            { name: "Perl", level: 60, color: "#0673A0" },
            { name: "Shell", level: 62, color: "#4EAA25" },
            { name: "PostgreSQL", level: 85, color: "#336791" },
            { name: "MongoDB", level: 80, color: "#00ed64" },
            { name: "Supabase", level: 82, color: "#3fcf8e" },
            { name: "Docker", level: 75, color: "#2496ed" },
            { name: "AWS", level: 70, color: "#FF9900" },
          ]}
        />

        <FeaturedProjects projects={staticProjects} />

        <OrganizationsSection organizations={staticOrganizations} />

        <TimelineSection />

        <ContactSection />

        <ModernFooter
          name={displayName}
          email="sultan.huseynov20@gmail.com"
          githubUrl={githubUrl}
          linkedinUrl="https://www.linkedin.com/in/soltanhuseynov/"
        />
      </main>
    </div>
  );
}
