import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // GitHub fetching disabled - returning empty responses
  app.get("/api/github/user", (_req, res) => {
    res.json({
      login: "SoltanHuseynov",
      name: "Sultan Huseynov",
      avatar_url: "https://avatars.githubusercontent.com/u/12345?v=4",
      bio: "Full-Stack Developer | Mobile Apps | System Admin",
      html_url: "https://github.com/SoltanHuseynov",
      public_repos: 0,
      followers: 0,
      following: 0,
    });
  });

  app.get("/api/github/repos", (_req, res) => {
    res.json([]);
  });

  app.get("/api/github/orgs", (_req, res) => {
    res.json([]);
  });

  return httpServer;
}
