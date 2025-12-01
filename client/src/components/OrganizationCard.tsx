import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";

interface OrganizationCardProps {
  login: string;
  avatar_url: string;
  description: string | null;
  url: string;
}

export function OrganizationCard({
  login,
  avatar_url,
  description,
  url,
}: OrganizationCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-org-${login}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16 rounded-lg border">
            <AvatarImage src={avatar_url} alt={login} />
            <AvatarFallback className="rounded-lg text-lg font-semibold">
              {login.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-lg truncate" data-testid={`text-org-name-${login}`}>
                {login}
              </h3>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                aria-label={`Visit ${login} organization`}
                data-testid={`link-org-${login}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1" data-testid={`text-org-desc-${login}`}>
              {description || "No description available"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
