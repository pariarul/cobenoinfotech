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
  }
];

export default function Training() {
  return (
<section id="training" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="mx-auto max-w-5xl px-6">

    {/* Header */}
    <div className="text-center mb-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-purple-700 mb-2">
        Training Courses
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Practical Job-Oriented Training
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Build your tech career with real-time projects and expert mentorship.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative  ">
      {courses.map((course, index) => (
        <div key={index} className="mb-16 ml-8 relative">

          {/* Course Card */}
          <div className={`p-6 rounded-xl shadow-lg bg-white/90 backdrop-blur-md transition-transform duration-300 hover:scale-105`}>
            {course.popular && (
              <span className="inline-block mb-2 px-3 py-1 text-xs font-bold text-white rounded-full bg-blue-800">
                MOST POPULAR
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>

            {/* Duration & Students */}
            <div className="flex gap-6 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-purple-700" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-pink-600" />
                {course.students}
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {techIcons
                .filter(t => course.tech.includes(t.key))
                .map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-purple-200 text-whiete rounded-full">
                    {t.label}
                  </span>
                ))}
            </div>

            {/* Features */}
            <ul className="mb-4 space-y-2 text-gray-700 text-sm">
              {course.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
              <p className="text-2xl font-extrabold text-blue-800">
                {course.originalPrice && <span className="line-through text-gray-500 mr-2">₹{course.originalPrice}</span>}
                ₹{course.price} <span className="text-sm font-normal text-gray-800">/ course</span>
              </p>
              <a
                href="https://wa.me/919361430865"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 font-semibold rounded-xl transition ${
                  course.popular
                    ? "bg-blue-800 text-white hover:opacity-90"
                    : "bg-gray-100 text-gray-900 hover:bg-blue-800 hover:text-white"
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
