"use client";

import {
  CheckCircle,
  Clock,
  Users,
  Code2,
} from "lucide-react";
import CTA from "./CTA";

/* 🔹 Tech keyword → Icon mapping (DESIGN ONLY) */
const techIcons = [
  { key: "HTML", label: "HTML" },
  { key: "CSS", label: "CSS" },
  { key: "JavaScript", label: "JS" },
  { key: "React", label: "React" },
  { key: "Next", label: "Next.js" },
  { key: "Node", label: "Node" },
  { key: "Mongo", label: "MongoDB" },
  { key: "Tailwind", label: "Tailwind" },
  { key: "Express", label: "Express" },
  { key: "Git", label: "Git" },
  { key: "GitHub", label: "GitHub" },
  { key: "Redux", label: "Redux"},
  { key: "Material", label: "Material UI"},
  { key: "UI/UX", label: "UI/UX"},
  { key: "Components", label: "Components"},
  { key: "Pages", label: "Pages"},
  { key: "Routing", label: "Routing"},
  { key: "API", label: "API"},
  { key: "Authentication", label: "Authentication"},
  { key: "Deployment", label: "Deployment"},
  { key: "Testing", label: "Testing"},
  { key: "Hooks", label: "Hooks"},
  { key: "json", label: "json"},
  { key: "npm", label: "npm"},
  { key: "Axios", label: " Axios"},
  { key: "JWT", label: "JWT"},
  { key: "REST APIs", label: "REST APIs"},
  { key: "Databases", label: "Databases"},
  { key: "JavaScript", label: "JavaScript"},
];

const courses = [ /* ⬅️ SAME DATA AS YOUR CODE (UNCHANGED) */ 
  {
    title: "Full Stack Development",
    level: "Beginner to Advanced",
    tech: "HTML, CSS, JavaScript, React, Node.js, MongoDB, Next.js, Tailwind CSS, Express, Git, GitHub ,etc...",
    duration: "12 Weeks",
    students: "12+",
    price: "14500",
    features: [
      "Live Classes",
      "E-commerce Development",
      "Live chat Project",
      "Freelance Support",
      "Hands-on Projects",
    ],
    popular: true,
  },
  {
    title: "Frontend Development",
    level: "Beginner to Advanced",
    tech: "HTML, CSS, JavaScript, Tailwind CSS, Material UI, UI/UX Basics",
    duration: "4 Weeks",
    students: "10+",
    price: "3999",
    features: [
      "Live Classes",
      "Hands-on Projects",
      "Portfolio Building",
      "Resume Guidance",
      "Interview Preparation",
    ],
  },
  {
    title: "Backend Development",
    level: "Beginner to Advanced",
    tech: "Node.js, Express, REST APIs, Authentication, JWT, Databases, Deployment",
    duration: "4 Weeks",
    students: "7+",
    price: "5999",
    features: [
      "Live Classes",
      "Project-Based Learning",
      "API Basics",
      "Real-time Examples",
    ],
  },
  {
    title: "React Development",
    level: "Beginner to Advanced",
    tech: "React, Hooks, Redux, Axios, npm, json, etc...",
    duration: "4 Weeks",
    students: "5+",
    price: "2999",
    features: [
      "Live Classes",
      "Project-Based Learning",
      "API Basics",
      "Real-time Examples",
    ],
  },
  {
    title: "Next JS Development",
    level: "Beginner to Advanced",
    tech: "Next.js,components, Routing, Pages, APIs, etc...",
    duration: "4 Weeks",
    students: "5+",
    price: "2999",
    features: [
      "Live Classes",
      "Project-Based Learning",
      "API Basics",
      "Real-time Examples",
    ],
  },
];

export default function Training() {
  return (
    <section id="training" className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Training Courses
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Practical Job-Oriented Training
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Build your tech career with real-time projects and expert mentorship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-[1.5px] ${
                course.popular
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                  : "bg-gray-200"
              }`}
            >
              <div className="flex h-full flex-col rounded-3xl bg-white/90 backdrop-blur p-8 shadow-sm">

                {course.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    MOST POPULAR
                  </span>
                )}

                <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-600">
                  <Code2 size={14} />
                  {course.level}
                </span>

                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {course.title}
                </h3>

                {/* 🔹 TECH ICON CHIPS */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {techIcons
                    .filter(t => course.tech.includes(t.key))
                    .map((t, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700"
                      >
                        {t.label}
                      </span>
                    ))}
                </div>

                <div className="mb-6 flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-indigo-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-purple-600" />
                    {course.students}
                  </div>
                </div>

                <ul className="mb-8 space-y-3 flex-grow">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="mt-0.5 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="mb-4 text-2xl font-extrabold text-gray-900">
                    ₹{course.price}
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      / course
                    </span>
                  </p>

                  <a
                    href="https://wa.me/919361430865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-xl py-3 text-center font-semibold transition ${
                      course.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Register
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        <CTA />
      </div>
    </section>
  );
}
