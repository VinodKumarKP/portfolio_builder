# Astro Portfolio Template

A fast, customizable, and modern portfolio template built with [Astro](https://astro.build/). 

Designed for developers, engineers, and architects who want a stunning, performance-driven portfolio that is extremely easy to maintain. 

## Features
- **Astro Power**: Fast by default, shipping zero JS to the client unless necessary.
- **Config-Driven**: Centralized `src/config.ts` file for all your personal data. No need to touch HTML or Astro files to update your resume!
- **Content Collections**: Easily manage your project case studies using Markdown files with strict frontmatter validation.
- **Responsive & Modern Design**: Glassmorphism effects, gradients, and micro-animations out of the box.
- **GitHub Pages Ready**: Included deployment workflow for easy hosting.

---

## 🚀 Getting Started

Follow these steps to set up your own portfolio.

### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- A package manager like `npm`, `yarn`, or `pnpm`

### 1. Fork and Clone the Repository
Click the "**Fork**" button at the top right of this repository to create your own copy on GitHub.
Then clone it to your local machine:
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Local Development Server
```bash
npm run dev
```
Your site is now running locally at [http://localhost:4321](http://localhost:4321). You can view changes in real-time as you edit files!

---

## 🛠️ Customization Guide

This template is designed to be customized without touching a single `.astro` component. 

### Step 1: Update Astro Configuration (`astro.config.mjs`)
Open `astro.config.mjs` and update your deployment settings:
- `site`: Change this to your deployment domain (e.g., `https://your-username.github.io`)
- `base`: Uncomment and change this to your repository name (e.g., `/my_portfolio`) **if deploying to GitHub Pages project sites**. If deploying to a custom domain or a user site (e.g. `your-username.github.io`), leave `base` commented out.

### Step 2: Personalize Your Data (`src/config.ts`)
Open `src/config.ts` and replace the placeholder "John Doe" data with your own. This file powers the entire site:
- **`SITE`**: Basic site metadata (title in browser tab, meta description).
- **`HERO`**: Homepage hero section text and call-to-action buttons.
- **`TIMELINE`**: Your career/education journey for the homepage.
- **`METRICS`**: High-level stats displayed at the bottom of the homepage.
- **`ABOUT`**: Drives the entire About page (journey, expertise, leadership, certifications).

**Handling Images:**
To change your profile picture, place your image (e.g. `profile.jpg`) in the **`public/`** folder of your repository. 
Then, in `src/config.ts`, reference it from the root:
```typescript
export const ABOUT = {
  // ...
  image: "/profile.jpg", // Don't use a relative path, use an absolute path starting with /
}
```

### Step 3: Add Your Projects (`src/content/projects/`)
Your projects are managed using Astro Content Collections. Delete the example markdown files in `src/content/projects/` and add your own `.md` files.

Each project markdown file must include the following frontmatter at the top:
```yaml
---
title: "Project Name"
year: 2024
phase: "Role / Phase"
description: "Brief description of the project."
tags: ["React", "TypeScript", "AWS"] # Optional array of tags
---

Write your full project case study here using **Markdown**! You can add headers, code blocks, bullet points, and more.
```

---

## 🌍 Deployment

This template includes a pre-configured `.github/workflows/deploy.yml` file for deploying to **GitHub Pages**.

To deploy your live site:
1. Go to your GitHub repository **Settings** > **Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push your changes to the `main` branch. 
4. The Action will automatically build and deploy your site. You can watch the progress in the **Actions** tab of your repository!

If you prefer to deploy to **Vercel** or **Netlify**, you can simply connect this repository to those platforms and they will automatically detect it as an Astro project and build it with zero configuration.
