#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'public');
const docsDir = path.join(rootDir, 'docs');

console.log('🚀 Starting deployment process...\n');

try {
  // Step 1: Build
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
  console.log('✅ Build complete!\n');

  // Step 2: Clear docs folder
  console.log('🧹 Clearing docs folder...');
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true });
  }
  fs.mkdirSync(docsDir, { recursive: true });
  console.log('✅ Docs folder cleared!\n');

  // Step 3: Copy files
  console.log('📋 Copying build files to docs...');
  function copyRecursive(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);
      if (stat.isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
  copyRecursive(distDir, docsDir);
  console.log('✅ Files copied successfully!\n');

  // Step 4: Create .gitkeep
  fs.writeFileSync(path.join(docsDir, '.gitkeep'), '');

  console.log('✨ Deployment complete!');
  console.log('📝 Files are ready in the docs/ folder');
  console.log('🔗 Don\'t forget to:');
  console.log('   1. Commit and push to GitHub');
  console.log('   2. Enable GitHub Pages in repository settings');
  console.log('   3. Select "Deploy from a branch" → main → /docs (root)\n');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
