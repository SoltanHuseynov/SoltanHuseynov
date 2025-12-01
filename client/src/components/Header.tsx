import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b" data-testid="header">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-4">
        <span className="font-semibold text-lg" data-testid="text-header-name">{name}</span>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("repositories")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-projects"
          >
            Projects
          </button>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
