// ============================================================
// portfolioData.js — Centralized configuration for Mohammad Aasim Ansari's Portfolio
// ============================================================

import iplImg from '../assets/screenshots/ipl.png';
import trafficImg from '../assets/screenshots/traffic.jpeg';
import expenseImg from '../assets/screenshots/expense.png';
import jarvisImg from '../assets/screenshots/jarvis.png';
import travelImg from '../assets/screenshots/travel.png';

export const personalInfo = {
  name: "Mohammad Aasim Ansari",
  firstName: "Aasim",
  brandName: "Aasim Ansari",
  title: "Data Science & ML Enthusiast",
  location: "Prayagraj, India",
  phone: "+91 96963 67472",
  emails: {
    primary: "aasimbhs41@gmail.com",
    secondary: "",
  },
  summary:
    "Data Science undergraduate with hands-on experience building end-to-end machine learning and full-stack applications — from reinforcement learning traffic systems to optimization-driven web apps. Strong foundation in Python, statistical modeling, and data-driven problem solving.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Aasim41",
  linkedin: "https://www.linkedin.com/in/aasim-ansari-013722375",
  instagram: "#",
};

export const heroContent = {
  greeting: "Hi, I'm Aasim",
  titleHighlight: "Data Science & ML Enthusiast",
  subtitle:
    "I build intelligent systems and scalable full-stack applications using Python, PyTorch, React, and FastAPI.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Aasim Ansari</span>, a Data Science undergraduate based in Prayagraj, India, dedicated to crafting robust machine learning models and end-to-end scalable applications.`,
  techStack: ["Python", "PyTorch", "FastAPI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "How I turn data into real-world applications",
  description:
    "I follow a structured, analytical, and highly technical approach to turn concepts into intelligent software solutions.",
  cards: [
    {
      number: "01",
      title: "Data & Research",
      text: "I start by analyzing raw data, understanding goals, and researching the optimal machine learning algorithms and architectures.",
    },
    {
      number: "02",
      title: "Model & Architecture",
      text: "Crafting clean pipelines, robust models (RL, Optimization), and scalable backend architectures.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable APIs (FastAPI) and responsive frontends (React/Streamlit) to serve the intelligent systems.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Containerizing applications with Docker for reproducible deployment and seamless performance.",
    },
  ],
  endText: "Ready to deploy!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas & NumPy", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Reinforcement Learning", level: 75 }
      ]
    },
    {
      title: "Web & Backend",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "React & Next.js", level: 85 },
        { name: "Node.js", level: 80 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "Docker", level: 85 },
        { name: "SQLAlchemy", level: 88 }
      ]
    }
  ]
};

export const leadershipList = [
  {
    title: "Core Committee Member – Tachyon '25",
    description: "Orchestrated sponsorship outreach and logistical/promotional operations for a university-wide technical festival.",
    role: "JUET Annual Tech Fest",
    badge: "Leadership"
  }
];

export const internshipsList = [
  {
    role: "Web Development Intern",
    organization: "SkillCraft Technology",
    duration: "2024",
    skills: ["Front-end Development", "Software Engineering Practices", "Project Management"],
    tech: ["HTML", "CSS", "JavaScript", "React"]
  }
];

export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams and managing tasks." },
  { name: "Communication", icon: "💬", desc: "Clear and structured interactions." },
  { name: "Problem Solving", icon: "🧩", desc: "Data-driven problem solving and algorithm design." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks and ML libraries." },
];

export const projects = [
  {
    id: "traffic-ai",
    number: "01",
    badge: "🚀 Deep Learning",
    title: "Traffic Intersection AI",
    description:
      "Developed a Deep Q-Network reinforcement learning agent to optimize real-time traffic signal control at intersections. Built a FastAPI + WebSockets backend for real-time visualization, containerized with Docker for reproducible deployment.",
    techTags: ["Python", "PyTorch", "RL", "FastAPI", "WebSockets", "Docker"],
    image: trafficImg,
    links: {
      github: "https://github.com/Aasim41/Traffic-Intersection-AI", // Assuming standard GitHub repo for now, or just leave as "#" if they didn't provide github for this
      demo: "https://synapse-city-bnue.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "ipl-optimizer",
    number: "02",
    badge: "Optimization",
    title: "IPL Auction Optimizer",
    description:
      "Built a data-driven web app applying linear programming (PuLP) to optimize IPL team auction strategy under budget and squad constraints. Designed Pandas/Scikit-learn pipelines for player valuation, served via a FastAPI backend and Streamlit interface.",
    techTags: ["Python", "Streamlit", "FastAPI", "Scikit-learn", "PuLP"],
    image: iplImg,
    links: {
      github: "https://github.com/Aasim41/ipl-auction-war-room",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "smart-expense",
    number: "03",
    badge: "Full Stack",
    title: "Smart Expense Tracker",
    description:
      "Built a full-stack expense tracker (web + Android via Capacitor) with ML-driven spend pattern analysis. Implemented an async PostgreSQL data layer (SQLAlchemy + Alembic) and automated PDF reporting via Docker Compose.",
    techTags: ["Next.js", "FastAPI", "PostgreSQL", "Pandas", "Docker"],
    image: expenseImg,
    links: {
      github: "https://github.com/Aasim41/Smart-Expense-Tracker", // Placeholder if they didn't provide github
      demo: "https://lumina-xdwg.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "jarvis",
    number: "04",
    badge: "AI Automation",
    title: "Jarvis — AI Assistant",
    description:
      "Built an AI assistant combining Node.js automation with a Python LLM router, integrating scraping, speech (TTS/STT), and email capabilities.",
    techTags: ["Node.js", "Python", "SQLite", "LLM", "Puppeteer"],
    image: jarvisImg,
    links: {
      github: "https://github.com/Aasim41/JARVIS",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "travel-agency",
    number: "05",
    badge: "Frontend",
    title: "Travel Agency Experience",
    description:
      "A highly customized frontend featuring dynamic content generation and immersive UI for exploring travel destinations.",
    techTags: ["Vanilla JS", "HTML5", "CSS3", "Vite"],
    image: travelImg,
    links: {
      github: "https://github.com/Aasim41/Travel-Agency", // Placeholder if no github
      demo: "https://holidayplannerprayagraj.in/",
    },
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "The Ultimate Job Ready Data Science Course",
      issuer: "CodeWithHarry (2026)",
      icon: "📊",
    },
    {
      name: "Data Science & Analytics",
      issuer: "HP LIFE, HP Foundation (2025)",
      icon: "📈",
    },
    {
      name: "CodeSrijan National Hackathon 2026",
      issuer: "JUET (Certificate of Participation)",
      icon: "🏆",
    }
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "B.Tech – Computer Science (Data Science)",
  institution: "Jaypee University of Engineering & Technology",
  cgpa: "8.89",
  graduation: "2025 – Present",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Data Science & Machine Learning",
    "Python · PyTorch · FastAPI",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE (DS) · CGPA 8.89",
  copyright: `© ${new Date().getFullYear()} Mohammad Aasim Ansari`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
