# GitHub Pages Deployment Setup for SoltanHuseynov.github.io

## Setup Instructions

1. **Create GitHub Repository**
   - Repository name: `SoltanHuseynov.github.io`
   - Make it public
   - Push this code to the repository

2. **GitHub Pages Configuration**
   - Go to Repository Settings → Pages
   - Source: "Deploy from a branch"
   - Select the `gh-pages` branch (automatically created by GitHub Actions)
   - Folder: `/ (root)`

3. **Automatic Deployment**
   - GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
     - Builds the project on every push to main
     - Deploys to GitHub Pages via the gh-pages branch
     - Your site will be live at: https://SoltanHuseynov.github.io

4. **Manual Build (Optional)**
   - Run locally: `npm run build`
   - Build output: `dist/public/`

## Folder Structure
```
SoltanHuseynov.github.io/
├── .github/workflows/
│   └── deploy.yml          (GitHub Actions workflow)
├── client/                 (Frontend source)
├── server/                 (Backend source)
├── dist/                   (Build output - generated)
│   └── public/            (Deployed to GitHub Pages)
└── DEPLOYMENT.md          (This file)
```

## Important
- Do NOT manually copy files to docs or root folder
- GitHub Actions handles the deployment automatically
- The `dist/public` folder is generated during build and deployed to GitHub Pages
