import { RepositoryCard } from "../RepositoryCard";

export default function RepositoryCardExample() {
  return (
    <div className="max-w-sm">
      <RepositoryCard
        name="awesome-project"
        description="A full-stack web application built with React and Node.js featuring real-time updates and modern UI design."
        language="TypeScript"
        stars={42}
        forks={12}
        url="https://github.com/example/awesome-project"
        updatedAt={new Date().toISOString()}
      />
    </div>
  );
}
