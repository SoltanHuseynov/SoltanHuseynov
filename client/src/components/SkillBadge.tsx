import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon?: LucideIcon;
}

export function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="px-4 py-2 text-sm font-medium gap-2" data-testid={`badge-skill-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      {Icon && <Icon className="h-4 w-4" />}
      {name}
    </Badge>
  );
}
