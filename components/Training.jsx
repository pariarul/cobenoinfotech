"use client";

import { motion } from "framer-motion";
import CTA from "./CTA";

import {
  // Course icons
  Code,
  Database,
  Layout,
  Atom,

  // Tech icons
  FileCode,
  Server,
  ShieldCheck,
  Cpu,
  Flame,
  GitBranch,
  Github,
  Send,
  Box,
  Globe,
  Clock,
  CheckCircle,
  Sparkles,
} from "lucide-react";

/* =======================
   TECH ICON MAP
======================= */
export const techIcons = {
  // Core Web
  HTML: FileCode,
  CSS: FileCode,
  JavaScript: FileCode,

  // Frontend
  React: Atom,
  Hooks: Atom,
  Tailwind: Layout,
  "UI/UX": Layout,
  State: Cpu,

  // Backend
  "Node.js": Server,
  Express: Server,
  MongoDB: Database,
  "REST API": Cpu,
  JWT: ShieldCheck,

  // Tools
  Axios: Send,
  Git: GitBranch,
  GitHub: Github,
  Postman: Send,
  Docker: Box,

  // Cloud / Deployment
  Firebase: Flame,
  Deployment: Globe,


  // Frameworks
    "Next.js": Layout,
  "App Router": Cpu,
  "Server Components": Server,
  "API Routes": Server,
  SEO: Globe,
};

/* =======================
   COURSE DATA
======================= */
const courses = [
  {
    title: "Full Stack Development",
    duration: "8 Weeks",
    icon: Code,
    popular: true,
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Git",
      "GitHub",
      "Postman",
      "Deployment",
    ],
    features: [
      "Live Classes",
      "E-commerce Full Project",
      "Authentication (JWT + Firebase)",
      "Admin Dashboard",
      "REST API Development",
      "Payment Gateway Basics",
      "Git & GitHub Workflow",
      "API Testing with Postman",
      "Deployment (Vercel / Render)",
      "Freelancing & Career Support",
    ],
  },
  {
    title: "Backend Development",
    duration: "4 Weeks",
    icon: Database,
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
      "Postman",
      "Git",
      "GitHub",
      "Docker",
    ],
    features: [
      "API Architecture Design",
      "JWT Authentication & Authorization",
      "Role-Based Access Control",
      "Secure Password Handling",
      "API Testing with Postman",
      "Error Handling & Logging",
      "Production Deployment",
      "Basic Docker Setup",
    ],
  },
  {
    title: "Frontend Development",
    duration: "4 Weeks",
    icon: Layout,
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "UI/UX",
      "Git",
      "GitHub",
      "Firebase",
    ],
    features: [
      "Responsive & Mobile-First Design",
      "Modern UI/UX Practices",
      "Component-Based Design",
      "Firebase Authentication",
      "Form Validation",
      "Portfolio Projects",
      "GitHub Portfolio Setup",
      "Interview Preparation",
    ],
  },
  {
    title: "React Development",
    duration: "2 Weeks",
    icon: Atom,
    tech: ["React", "Hooks", "Axios", "State", "Firebase", "Git", "GitHub"],
    features: [
      "React Component Architecture",
      "State Management Basics",
      "API Integration with Axios",
      "Authentication with Firebase",
      "Reusable Components",
      "Performance Optimization",
      "Real-World Projects",
    ],
  },
  {
  title: "Next.js Development",
  duration: "3 Weeks",
  icon: Layout, // or Code if you prefer
  tech: [
    "Next.js",
    "React",
    "App Router",
    "Server Components",
    "API Routes",
    "SEO",
    "Firebase",
    "Git",
    "GitHub",
    "Deployment",
  ],
  features: [
    "Next.js App Router Architecture",
    "Server & Client Components",
    "Dynamic Routing & Layouts",
    "API Routes & Backend Integration",
    "SEO & Performance Optimization",
    "Authentication (Firebase / JWT)",
    "Environment Variables & Config",
    "Production Deployment (Vercel)",
    "Real-World Next.js Project",
  ],
}
];

/* =======================
   COMPONENT
======================= */
export default function Training() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
         
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide text-sm mb-2"> 
            Career Training
          </h2>  
         

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold">
            Skills That Get You Hired
          </h2>
        </div>

        <div className="grid gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white p-8 border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <course.icon className="text-purple-600" size={28} />
                <div>
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    {course.duration}
                  </div>
                </div>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.tech.map((tech, i) => {
                  const Icon = techIcons[tech];
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-gray-100"
                    >
                      {Icon && <Icon size={14} />}
                      {tech}
                    </span>
                  );
                })}
              </div>

              {/* Features */}
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <CTA />
        </div>
      </div>
    </section>
  );
}