# Astro Portfolio Template

A fast, customizable, and modern portfolio template built with [Astro](https://astro.build/). 

Designed for developers, engineers, and architects who want a stunning, performance-driven portfolio that is extremely easy to maintain. 

## Features
- **Astro Power**: Fast by default, shipping zero JS to the client unless necessary.
- **Config-Driven**: Centralized `src/config.ts` file for all your personal data. No need to touch HTML or Astro files to update your resume!
- **Content Collections**: Easily manage your project case studies using Markdown files with strict frontmatter validation.
- **Responsive & Modern Design**: Glassmorphism effects, gradients, and micro-animations out of the box.
- **Dark Mode Toggle**: One-click theme switcher with persistent user preference (remembers choice across sessions).
- **SEO Optimized**: Built-in Open Graph tags, Twitter Cards, and auto-generated sitemap.xml for search engines.
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
Open `src/config.ts` and replace the placeholder "John Doe" data with your own. This file powers the entire site. Below is a detailed breakdown of each section:

#### 1. `SITE`
Defines the core metadata for SEO and browser tabs.
```typescript
export const SITE = {
  title: "Jane Doe - Full Stack Developer",
  description: "A portfolio showcasing modern web applications.",
  url: "https://janedoe.com",
};
```

#### 2. `HERO`
Controls the large introduction text on the home page.
```typescript
export const HERO = {
  title: "Software Engineer & Builder",
  subtitle: "5+ years building scalable web applications.",
  ctaPrimary: { label: "Explore Projects", href: "/projects" }, // Links to projects page
  ctaSecondary: { label: "Learn More", href: "/about" },        // Links to about page
};
```

#### 3. `TIMELINE`
An array of objects representing your career or educational journey on the home page.
```typescript
export const TIMELINE = [
  {
    year: "2024",
    isCurrent: true, // Adds a glowing "Current Focus" badge
    title: "Senior Engineer",
    description: "Led migration to modern microservices.",
    links: [ // Optional links to attach to this timeline event
      { label: "View Project →", url: "/projects/project-1/" } 
    ]
  }
];
```

#### 4. `METRICS`
A grid of statistics displayed at the bottom of the home page. You can use emojis as icons.
```typescript
export const METRICS = [
  { icon: "💻", value: "5+", label: "Years of Experience" },
  { icon: "🚀", value: "10+", label: "Projects Completed" }
];
```

#### 5. `ABOUT`
Drives the entire `/about` page layout.
```typescript
export const ABOUT = {
  title: "Jane Doe",
  role: "Senior Software Engineer",
  image: "/profile.jpg", // Make sure to place profile.jpg inside the public/ folder!
  socialLinks: [
    { label: "Connect on LinkedIn", url: "https://linkedin.com/in/...", primary: true },
    { label: "View GitHub", url: "https://github.com/...", primary: false }
  ],
  journey: `I'm a passionate software engineer... \n\nI thrive in collaborative...`, // Use \n\n for paragraphs
  coreExpertise: [
    "Frontend Development (React, Vue)",
    "Backend Development (Node.js, Python)"
  ],
  leadership: { // Optional section
    description: "I've had the opportunity to lead teams...",
    points: [
      "**Technical Leadership:** Guided a team of 5 engineers...",
    ]
  },
  certifications: [ // Optional section
    "AWS Certified Developer",
  ]
};
```

### Step 3: Add Your Projects (`src/content/projects/`)
Your projects are managed using Astro Content Collections. Delete the example markdown files in `src/content/projects/` and add your own `.md` files.

> [!TIP]
> **Check out `PROJECT_TEMPLATE.md`** located in the root of the repository for a comprehensive guide on how to format your Markdown projects. It explains how to structure your case studies to automatically render metrics cards, issue/solution blocks, and more!

### Step 4: Customize Projects Index Sidebar (Optional)

You can add a sidebar to your projects listing page that organizes projects by category (e.g., "Architecture Patterns", "Technology Stack"). Edit `src/config.ts`:

```typescript
export const PROJECTS_SIDEBAR = {
  title: "Technology Stack",
  categories: [
    {
      name: "Frontend",
      projects: [
        { title: "Project Alpha", slug: "project-1" },
      ]
    },
    {
      name: "Backend & Data",
      projects: [
        { title: "Project Beta", slug: "project-2" },
      ]
    }
  ]
};
```

The sidebar is optional - simply remove `PROJECTS_SIDEBAR` from config if you don't want it!

### Step 5: Customize Dark Mode & SEO (Optional)

**Dark Mode:**
The portfolio includes a dark mode toggle button in the navbar. Users can click the moon/sun icon to switch themes, and their preference is saved locally. The theme automatically respects system preferences on first visit.

**SEO Features:**
- **Open Graph & Twitter Cards**: Automatically generates social media previews when your portfolio is shared on LinkedIn, Twitter, or Facebook
- **Sitemap**: Auto-generated `sitemap.xml` helps search engines index your content
- **Meta Tags**: All pages include proper meta descriptions and robot directives

No configuration needed—these features work out of the box!

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

### Search Engine Optimization

After deploying:
1. Your portfolio automatically generates a `sitemap.xml` at the root of your deployed site
2. Submit this sitemap to [Google Search Console](https://search.google.com/search-console) for faster indexing
3. Open Graph meta tags are automatically included for rich social media previews

Update `public/robots.txt` with your actual domain's sitemap URL for best results.
