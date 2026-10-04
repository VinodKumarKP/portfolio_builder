// src/config.ts
export const SITE = {
  title: "John Doe",
  description: "A portfolio and blog by John Doe.",
  url: "https://johndoe.com",
};

export const HERO = {
  title: "Software Engineer & Builder",
  subtitle: "5+ years building scalable web applications and intuitive user experiences.",
  ctaPrimary: { label: "Explore Projects", href: "/projects" },
  ctaSecondary: { label: "Learn More", href: "/about" },
};

export const TIMELINE = [
  {
    year: "2024 Onwards",
    isCurrent: true,
    title: "Senior Software Engineer",
    description: "Leading the frontend architecture team, migrating legacy applications to modern React.",
    links: [
      { label: "View Project: Project Alpha →", url: "/projects/project-1/" }
    ]
  },
  {
    year: "2021",
    isCurrent: false,
    title: "Software Engineer",
    description: "Developed and maintained RESTful APIs using Node.js and Express.",
    links: [
      { label: "View Project: Project Beta →", url: "/projects/project-2/" }
    ]
  },
  {
    year: "2019",
    isCurrent: false,
    title: "Junior Developer",
    description: "Started my journey building internal tools and dashboards.",
  }
];

export const METRICS = [
  { icon: "💻", value: "5+", label: "Years of Experience" },
  { icon: "🚀", value: "10+", label: "Projects Completed" },
  { icon: "☕", value: "1000+", label: "Cups of Coffee" },
];

export const ABOUT = {
  title: "John Doe",
  role: "Senior Software Engineer",
  image: "/my_image.jpeg",
  socialLinks: [
    { label: "Connect on LinkedIn", url: "https://linkedin.com/", primary: true },
    { label: "View GitHub", url: "https://github.com/", primary: false }
  ],
  journey: `I'm a passionate software engineer with a knack for building scalable web applications. My journey began with tinkering in HTML and CSS, and has since evolved into architecting complex systems that serve thousands of users.

I thrive in collaborative environments and love mentoring junior developers. When I'm not coding, you can find me contributing to open-source projects or exploring the latest frontend frameworks.`,
  coreExpertise: [
    "Frontend Development (React, Vue)",
    "Backend Development (Node.js, Python)",
    "Database Design (PostgreSQL, MongoDB)",
    "Cloud Infrastructure (AWS, Vercel)",
    "UI/UX Design Principles",
    "Agile & Scrum Methodologies"
  ],
  leadership: {
    description: "Throughout my career, I've had the opportunity to lead teams and guide projects to successful completion.",
    points: [
      "**Technical Leadership:** Guided a team of 5 engineers in migrating a monolithic application to a microservices architecture.",
      "**Mentorship:** Actively mentored 3 junior developers, helping them level up their skills and confidence.",
      "**Process Improvement:** Introduced automated testing workflows that reduced bugs in production by 30%."
    ]
  },
  certifications: [
    "AWS Certified Developer",
    "React Advanced Certification",
    "Agile Scrum Master"
  ]
};
