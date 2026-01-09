"use client";

import { CheckCircle, Clock, Users } from "lucide-react";
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
  { key: "Redux", label: "Redux" },
  { key: "Material", label: "Material UI" },
  { key: "UI/UX", label: "UI/UX" },
  { key: "Components", label: "Components" },
  { key: "Pages", label: "Pages" },
  { key: "Routing", label: "Routing" },
  { key: "API", label: "API" },
  { key: "Authentication", label: "Authentication" },
  { key: "Deployment", label: "Deployment" },
  { key: "Testing", label: "Testing" },
  { key: "Hooks", label: "Hooks" },
  { key: "json", label: "json" },
  { key: "npm", label: "npm" },
  { key: "Axios", label: "Axios" },
  { key: "JWT", label: "JWT" },
  { key: "REST APIs", label: "REST APIs" },
  { key: "Databases", label: "Databases" },
];

const courses = [
  {
    title: "Full Stack Development",
    level: "Beginner to Advanced",
    tech: "HTML, CSS, JavaScript, React, Node.js, MongoDB,Tailwind CSS, Express, Git, GitHub ",
    duration: "8 Weeks",
    students: "12+",
    price: "19000",
    originalPrice: "40000",
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
    title: "Backend Development",
    level: "Beginner to Advanced",
    tech: "Node.js, Express, REST APIs, Authentication, JWT, Databases, Deployment",
    duration: "4 Weeks",
    students: "7+",
    price: "9000",
    originalPrice: "20000",
    features: [
      "Live Classes",
      "Project-Based Learning",
      "API Basics",
      "Real-time Examples",
    ],
  },
  {
    title: "Frontend Development",
    level: "Beginner to Advanced",
    tech: "HTML, CSS, JavaScript, Tailwind CSS, Material UI, UI/UX Basics",
    duration: "4 Weeks",
    students: "10+",
    price: "7000",
    originalPrice: "12000",
    features: [
      "Live Classes",
      "Hands-on Projects",
      "Portfolio Building",
      "Resume Guidance",
      "Interview Preparation",
    ],
  },
  {
    title: "React Development",
    level: "Beginner to Advanced",
    tech: "React, Hooks, Redux, Axios, npm, json, etc...",
    duration: "2 Weeks",
    students: "5+",
    price: "4000",
    originalPrice: "8000",
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
    price: "5999",
    originalPrice: "10000",
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
    <section
      id="training"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-purple-30 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-[-10rem] w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-blue-30 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-28">
          <span className="inline-block px-4 sm:px-6 py-2 mb-4 text-xs font-bold tracking-widest text-purple-700 rounded-full bg-white/70 backdrop-blur shadow">
            TRAINING COURSES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Practical Job-Oriented Training
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            Build your tech career with real-time projects and expert mentorship.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Hide line on very small screens */}
          <div className="hidden sm:block absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-70" />

          <div className="space-y-16 sm:space-y-28">
            {courses.map((course, index) => (
              <div key={index} className="relative sm:pl-16 group">

                {/* Timeline Dot (hidden on mobile) */}
                <div className="hidden sm:block absolute left-[6px] top-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-[4px] shadow-xl">
                    <div className="w-full h-full bg-white rounded-full" />
                  </div>
                </div>

                {/* Card */}
                <div className="relative rounded-2xl sm:rounded-[28px] bg-white/80 backdrop-blur-xl p-6 sm:p-8 border border-white/40 shadow-lg sm:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.2)] transition-all duration-500 sm:group-hover:-translate-y-3">

                  {course.popular && (
                    <span className="absolute -top-3 right-4 sm:right-6 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                      MOST POPULAR
                    </span>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-600 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-purple-600" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-blue-600" />
                      {course.students}
                    </div>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {techIcons
                      .filter(t => course.tech.includes(t.key))
                      .map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-gray-800"
                        >
                          {t.label}
                        </span>
                      ))}
                  </div>

                  {/* Features */}
                  <ul className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700 mb-6">
                    {course.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-600" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900">
                      {course.originalPrice && (
                        <span className="line-through text-gray-400 mr-2">
                          ₹{course.originalPrice}
                        </span>
                      )}
                      ₹{course.price}
                    </p>

                    <a
                      href="https://wa.me/919361430865"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-semibold text-white hover:opacity-90"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 sm:mt-32">
          <CTA />
        </div>
      </div>
    </section>


  );
}
