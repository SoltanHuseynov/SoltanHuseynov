import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Vue: "#41b883",
  Dart: "#00B4AB",
  R: "#198CE7",
  Perl: "#0673A0",
};

interface RepositoryCardProps {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}

export function RepositoryCard({
  name,
  description,
  language,
  stars,
  forks,
  url,
  updatedAt,
}: RepositoryCardProps) {
  const languageColor = language ? languageColors[language] || "#6e7681" : null;

  return (
    <Card className="hover-elevate min-h-[200px] flex flex-col" data-testid={`card-repo-${name}`}>
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-2">
        <CardTitle className="text-lg font-semibold truncate" data-testid={`text-repo-name-${name}`}>
          {name}
        </CardTitle>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
          aria-label={`${name} repozitoriyasını aç`}
          data-testid={`link-repo-${name}`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        <p className="text-sm text-muted-foreground line-clamp-3 flex-1" data-testid={`text-repo-desc-${name}`}>
          {description || "Təsvir mövcud deyil"}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {language && (
            <div className="flex items-center gap-1.5" data-testid={`text-repo-lang-${name}`}>
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageColor || undefined }}
              />
              <span>{language}</span>
            </div>
          )}

          <div className="flex items-center gap-1" data-testid={`text-repo-stars-${name}`}>
            <Star className="h-4 w-4" />
            <span>{stars}</span>
          </div>

          <div className="flex items-center gap-1" data-testid={`text-repo-forks-${name}`}>
            <GitFork className="h-4 w-4" />
            <span>{forks}</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground" data-testid={`text-repo-updated-${name}`}>
          {formatDistanceToNow(new Date(updatedAt), { addSuffix: true })} əvvəl yeniləndi
        </p>
      </CardContent>
    </Card>
  );
}
