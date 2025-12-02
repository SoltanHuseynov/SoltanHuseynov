//import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
/*
const allowlist = [
  "@google/generative-ai",
  "@neondatabase/serverless",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];
*/

async function buildClient() {
  // Remove old docs folder
  await rm("docs", { recursive: true, force: true });

  console.log("building client to docs...");
  await viteBuild({
    build: {
      outDir: "../docs", // output folder is now docs
      emptyOutDir: true,
    },
  });
}

buildClient().catch((err) => {
  console.error(err);
  process.exit(1);
});
