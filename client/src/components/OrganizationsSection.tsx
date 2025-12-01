import { OrganizationCard } from "./OrganizationCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Building2 } from "lucide-react";

interface Organization {
  id: number;
  login: string;
  avatar_url: string;
  description: string | null;
  url: string;
}

interface OrganizationsSectionProps {
  organizations: Organization[];
  isLoading?: boolean;
}

export function OrganizationsSection({ organizations, isLoading }: OrganizationsSectionProps) {
  if (!isLoading && organizations.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-8" id="organizations" data-testid="section-organizations">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Building2 className="h-8 w-8 text-muted-foreground" />
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-orgs-heading">
            Organizations
          </h2>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-6 rounded-xl border bg-card">
                <div className="flex items-start gap-4">
                  <Skeleton className="w-16 h-16 rounded-lg" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org) => (
              <OrganizationCard
                key={org.id}
                login={org.login}
                avatar_url={org.avatar_url}
                description={org.description}
                url={`https://github.com/${org.login}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
