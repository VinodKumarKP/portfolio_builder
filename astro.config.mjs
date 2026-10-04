import { defineConfig } from 'astro/config';

export default defineConfig({
  // Change this to your deployment domain (e.g., https://your-username.github.io)
  site: 'https://your-username.github.io',

  // Uncomment and change this to your repository name if deploying to GitHub Pages project sites
  base: '/portfolio_builder',

  build: {
    outDir: './dist'
  },
  markdown: {
    syntaxHighlight: 'shiki'
  }
});
