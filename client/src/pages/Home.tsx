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
  const displayName = "Soltan Huseynov";
  const githubUrl = "https://github.com/SoltanHuseynov";

  const staticProjects: FeaturedProject[] = [
    {
      id: 1,
      name: "Android Mobile Moderin Calculator",
      description: "Bu, sadə bir kalkulyator tətbiqidir. Və yalnız bir səhifəsi var və bir çox funksiyası yoxdur.",
      language: "Dart",
      stars: 2,
      forks: 1,
      url: "https://github.com/SoltanHuseynov/mobile-calculator",
      topics: ["Dart", "Flutter"],
    },
    {
      id: 2,
      name: "Data Mining",
      description: "R dili ilə yazılmış məlumat madenciliyi",
      language: "R",
      stars: 2,
      forks: 0,
      url: "https://github.com/SoltanHuseynov/Data-mining-",
      topics: ["R"],
    },
    {
      id: 3,
      name: "Dynamic Web",
      description: "Node.js və Express ilə hazırlanmış Dinamik Veb",
      language: "JavaScript",
      stars: 2,
      forks: 0,
      url: "https://github.com/SoltanHuseynov/DynamicWeb",
      topics: ["nodejs", "express","Firebase","jquery"],
    },
    {
      id: 4,
      name: "Zombie Game",
      description: "Python ilə hazırlanmış 2D oyun",
      language: "Python",
      stars: 2,
      forks: 0,
      url: "https://github.com/SoltanHuseynov/ZombieGame-part1",
      topics: ["python", "Pygame"],
    },
    {
      id: 5,
      name: "Delivery Mobile app",
      description: "Real vaxt sifariş qəbulu və menyu göstərilməsi,Restoran üçün iş prosesini optimallaşdıran həll",
      language: "Dart",
      stars: 2,
      forks: 0,
      url: "https://github.com/ManqalDoner/delivery-mobile-app",
      topics: ["Dart", "Flutter","Supabase"],
    },
    {
      id: 6,
      name: "Delivery Mobile App Admin Panel",
      description: "sifariş qəbulu gostergesi",
      language: "Dart",
      stars: 2,
      forks: 0,
      url: "https://github.com/ManqalAdminPanel/admin-dashboard",
      topics: ["Dart", "Flutter","Supabase","JavaScript"],
    },
  ];

  const staticOrganizations: Organization[] = [
    {
      id: 1,
      login: "ManqalAdminPanel",
      avatar_url: "https://avatars.githubusercontent.com/u/242823854?s=200&v=4",
      description: "Restoran üçün iş prosesini optimallaşdıran həll",
      url: "https://github.com/ManqalAdminPanel",
    },
    {
      id: 2,
      login: "Manqal Doner",
      avatar_url: "https://avatars.githubusercontent.com/u/241851765?s=200&v=4",
      description: "Android üçün onlayn restoran mobil tətbiqi.",
      url: "https://github.com/ManqalDoner",
    },
    {
      id: 3,
      login: "Note C",
      avatar_url: "https://avatars.githubusercontent.com/u/112772910?s=200&v=4",
      description: "Açıq Mənbə 🤖Notec tətbiq və icmadır.",
      url: "https://github.com/Note-C",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <ModernHeader name={displayName} />
     
      <main>
        <ModernHero
         // it is title section on web and fetch to github user
          name={displayName}
          title="İT Mütəxəssisi"
          tagline="Mürəkkəb problemlərə zərif həllər yaradıram. Müasir texnologiyalarla miqyaslana bilən tətbiqlər qurmaqda ixtisaslaşmışam."
          avatarUrl="https://avatars.githubusercontent.com/u/64208693?v=4"
          githubUrl={githubUrl}
          linkedinUrl="https://www.linkedin.com/in/soltanhuseynov/"
          email="sultan.huseynov20@gmail.com"
        />

        <ModernAbout
          bio={[
            `
             Salam! Mən Soltan Hüseynov, 24 yaşındayam və Bilecik Universitetində İnformasiya Sistemləri üzrə təhsil almışam.
             Son 5 il ərzində kod yazmaq, mobil və veb tətbiqlər inkişaf etdirmək, help desk və sistem inzibatçılığı sahələrində praktiki təcrübə qazanmışam. 
             Komanda işi, analitik düşüncə və operativ problem həll etmə bacarıqlarımla dəyər yaradan layihələr üzərində işləyirəm.
            `
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
