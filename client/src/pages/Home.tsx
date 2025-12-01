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

  const displayName = user?.name || user?.login || "Developer";
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
      description: repo.description || "No description available",
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
          title="Full-Stack Developer"
          tagline={
            user?.bio ||
            "Crafting elegant solutions to complex problems. I specialize in building modern, scalable web applications with cutting-edge technologies."
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
          languages={languages as string[]}
        />

        <ModernAbout
          bio={[
            "I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-centered digital experiences. With expertise spanning frontend and backend technologies, I bring ideas to life through clean, efficient code.",
            "My journey in software development has led me through various exciting projects, from building scalable APIs to crafting intuitive user interfaces. I believe in the power of technology to solve real-world problems and make people's lives better.",
            "When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community. I'm always eager to take on new challenges and push the boundaries of what's possible.",
          ]}
          skills={[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
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
            { name: "PostgreSQL & MongoDB", level: 82, color: "#336791" },
            { name: "Docker & DevOps", level: 70, color: "#2496ed" },
            { name: "Cloud Services (AWS)", level: 72, color: "#FF9900" },
            { name: "UI/UX Design", level: 75, color: "#FF61F6" },
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
