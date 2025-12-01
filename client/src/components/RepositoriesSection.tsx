import { useState } from "react";
import { RepositoryCard } from "./RepositoryCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

interface RepositoriesSectionProps {
  repositories: Repository[];
  isLoading?: boolean;
}

type SortOption = "stars" | "updated" | "name";

export function RepositoriesSection({ repositories, isLoading }: RepositoriesSectionProps) {
  const [sortBy, setSortBy] = useState<SortOption>("stars");

  const sortedRepos = [...repositories].sort((a, b) => {
    switch (sortBy) {
      case "stars":
        return b.stargazers_count - a.stargazers_count;
      case "updated":
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-muted/30" id="repositories" data-testid="section-repositories">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-repos-heading">
            GitHub Repozitoriyaları
          </h2>

          <Tabs value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
            <TabsList data-testid="tabs-sort">
              <TabsTrigger value="stars" data-testid="tab-sort-stars">Ulduzlar</TabsTrigger>
              <TabsTrigger value="updated" data-testid="tab-sort-updated">Son Yenilənən</TabsTrigger>
              <TabsTrigger value="name" data-testid="tab-sort-name">Əlifba</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card">
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <div className="flex gap-4">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            ))}
          </div>
        ) : sortedRepos.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground" data-testid="text-no-repos">
            Repozitoriya tapılmadı
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRepos.map((repo) => (
              <RepositoryCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                url={repo.html_url}
                updatedAt={repo.updated_at}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
