import { RepositoriesSection } from "../RepositoriesSection";

const mockRepos = [
  {
    id: 1,
    name: "react-dashboard",
    description: "A modern admin dashboard built with React, TypeScript and Tailwind CSS",
    language: "TypeScript",
    stargazers_count: 156,
    forks_count: 42,
    html_url: "https://github.com/example/react-dashboard",
    updated_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 2,
    name: "node-api-starter",
    description: "Production-ready Node.js REST API boilerplate with authentication",
    language: "JavaScript",
    stargazers_count: 89,
    forks_count: 28,
    html_url: "https://github.com/example/node-api-starter",
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 3,
    name: "python-ml-utils",
    description: "Collection of machine learning utilities and helpers",
    language: "Python",
    stargazers_count: 234,
    forks_count: 67,
    html_url: "https://github.com/example/python-ml-utils",
    updated_at: new Date(Date.now() - 259200000).toISOString(),
  },
];

export default function RepositoriesSectionExample() {
  return <RepositoriesSection repositories={mockRepos} />;
}
