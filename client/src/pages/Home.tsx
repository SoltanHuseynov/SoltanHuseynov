import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OrganizationsSection } from "@/components/OrganizationsSection";
import { RepositoriesSection } from "@/components/RepositoriesSection";
import { Footer } from "@/components/Footer";

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
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
}

interface GitHubOrg {
  id: number;
  login: string;
  avatar_url: string;
  description: string | null;
  url: string;
}

export default function Home() {
  const { data: user, isLoading: userLoading } = useQuery<GitHubUser>({
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

  return (
    <div className="min-h-screen bg-background">
      <Header name={displayName} />
      
      <main className="pt-16">
        <HeroSection
          name={displayName}
          title="Full-Stack Developer"
          tagline={user?.bio || "Building modern web applications with clean code and great user experiences. Passionate about open source and continuous learning."}
          avatarUrl={user?.avatar_url}
          githubUrl={githubUrl}
          email="hello@example.com"
        />

        <AboutSection
          bio={[
            "I'm a passionate developer who loves building things that live on the internet. I specialize in creating modern web applications using the latest technologies.",
            "My journey in programming started with curiosity and has evolved into a career focused on crafting clean, efficient, and user-friendly solutions.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open source, or working on personal projects.",
          ]}
          skills={[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Python",
            "PostgreSQL",
            "Git",
            "Docker",
          ]}
        />

        <OrganizationsSection
          organizations={orgs || []}
          isLoading={orgsLoading}
        />

        <RepositoriesSection
          repositories={repos || []}
          isLoading={reposLoading}
        />

        <Footer
          name={displayName}
          email="hello@example.com"
          githubUrl={githubUrl}
        />
      </main>
    </div>
  );
}
