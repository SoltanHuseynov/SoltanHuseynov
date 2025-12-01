import { useQuery } from "@tanstack/react-query";
import { ModernHeader } from "@/components/ModernHeader";
import { ModernHero } from "@/components/ModernHero";
import { ModernAbout } from "@/components/ModernAbout";
import { StatsSection } from "@/components/StatsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { OrganizationsSection } from "@/components/OrganizationsSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { RepositoriesSection } from "@/components/RepositoriesSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";
import { ModernFooter } from "@/components/ModernFooter";

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
  topics?: string[];
}

interface GitHubOrg {
  id: number;
  login: string;
  avatar_url: string;
  description: string | null;
  url: string;
}

export default function Home() {
  const { data: user } = useQuery<GitHubUser>({
    queryKey: ["/api/github/user"],
  });

  const { data: repos, isLoading: reposLoading } = useQuery<GitHubRepo[]>({
    queryKey: ["/api/github/repos"],
  });

  const { data: orgs, isLoading: orgsLoading } = useQuery<GitHubOrg[]>({
    queryKey: ["/api/github/orgs"],
  });

  const displayName = user?.name || user?.login || "Proqramçı";
  const githubUrl = user?.html_url || "https://github.com";

  const totalStars = repos?.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0;
  const languageSet = new Set(repos?.map((r) => r.language).filter((l): l is string => l !== null) || []);
  const languages = Array.from(languageSet);

  const featuredProjects = repos
    ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "Təsvir mövcud deyil",
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      topics: repo.topics,
    })) || [];

  return (
    <div className="min-h-screen bg-background">
      <ModernHeader name={displayName} />

      <main>
        <ModernHero
          name={displayName}
          title="Full-Stack Proqramçı"
          tagline={
            user?.bio ||
            "Mürəkkəb problemlərə zərif həllər yaradıram. Müasir texnologiyalarla miqyaslana bilən veb tətbiqlər qurmaqda ixtisaslaşmışam."
          }
          avatarUrl={user?.avatar_url}
          githubUrl={githubUrl}
          linkedinUrl="https://linkedin.com"
          email="hello@example.com"
        />

        <StatsSection
          totalRepos={repos?.length || 0}
          totalStars={totalStars}
          totalOrgs={orgs?.length || 0}
          languages={languages}
        />

        <ModernAbout
          bio={[
            "Mən gözəl, funksional və istifadəçi yönümlü rəqəmsal təcrübələr yaratmağı sevən həvəsli bir full-stack proqramçıyam. Frontend və backend texnologiyalarında təcrübəm var, fikirləri təmiz və səmərəli kodla həyata keçirirəm.",
            "Proqram inkişafındakı səyahətim məni müxtəlif maraqlı layihələrə apardı - miqyaslana bilən API-lərdən tutmuş intuitiv istifadəçi interfeyslərinin yaradılmasına qədər. Texnologiyanın real problemləri həll etmək və insanların həyatını yaxşılaşdırmaq gücünə inanıram.",
            "Kod yazmadığım zaman, yeni texnologiyaları araşdırır, açıq mənbə layihələrinə töhfə verir və ya proqramçı icması ilə bilik paylaşıram. Həmişə yeni çağırışları qəbul etməyə və mümkün olanın sərhədlərini genişləndirməyə həvəsliyəm.",
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
            { name: "Shell", level: 80, color: "#89e051" },
            { name: "PostgreSQL & MongoDB", level: 82, color: "#336791" },
            { name: "Docker & DevOps", level: 70, color: "#2496ed" },
            { name: "Bulud Xidmətləri (AWS)", level: 72, color: "#FF9900" },
            { name: "UI/UX Dizayn", level: 75, color: "#FF61F6" },
          ]}
        />

        <OrganizationsSection
          organizations={orgs || []}
          isLoading={orgsLoading}
        />

        <FeaturedProjects projects={featuredProjects} />

        <RepositoriesSection
          repositories={repos || []}
          isLoading={reposLoading}
        />

        <TimelineSection />

        <ContactSection />

        <ModernFooter
          name={displayName}
          email="hello@example.com"
          githubUrl={githubUrl}
          linkedinUrl="https://linkedin.com"
        />
      </main>
    </div>
  );
}
