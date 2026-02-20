"use client";

import { CheckCircle, Clock, Code, Database, Layout, Atom } from "lucide-react";
import { motion } from "framer-motion";
import CTA from "./CTA";

/* =======================
   COURSE DATA
======================= */
const courses = [
  {
    title: "Full Stack Development",
    duration: "8 Weeks",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    icon: Code,
    features: [
      "Live Classes",
      "E-commerce Development",
      "Live Chat Project",
      "Freelance Support",
      "Hands-on Projects",
    ],
    popular: true,
  },
  {
    title: "Backend Development",
    duration: "4 Weeks",
    tech: ["Node.js", "Express", "REST API", "JWT", "MongoDB"],
    icon: Database,
    features: [
      "Live Classes",
      "Project-Based Learning",
      "API Development",
      "Authentication & Security",
    ],
  },
  {
    title: "Frontend Development",
    duration: "4 Weeks",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "UI/UX"],
    icon: Layout,
    features: [
      "Live Classes",
      "Hands-on Projects",
      "Portfolio Building",
      "Interview Preparation",
    ],
  },
  {
    title: "React Development",
    duration: "2 Weeks",
    tech: ["React", "Hooks", "Axios", "State Management"],
    icon: Atom,
    features: [
      "Live Classes",
      "Component-Based Projects",
      "API Integration",
      "Real-time Examples",
    ],
  },
];

/* =======================
   COMPONENT
======================= */
export default function Training() {
  return (
    <section id="training" className="relative py-24 sm:py-32 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute -top-32 left-1/4 w-[30rem] h-[30rem]  rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[26rem] h-[26rem] bg-blue-300/30 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-20">

            <h2 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide text-sm mb-2">
           CAREER TRAINING
          </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn Skills That Companies Hire For
          </h3>


          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            Industry-ready courses with mentorship, real projects & career support.
          </p>
        </div>

        {/* Courses */}
        <div className="space-y-20">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl sm:rounded-[28px] bg-white/80 backdrop-blur-xl p-6 sm:p-10 border border-white/40 shadow-lg"
            >
              {course.popular && (
                <span className="inline-block mb-4 px-4 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  MOST POPULAR
                </span>
              )}

              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <course.icon className="text-purple-600" size={28} />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {course.title}
                </h3>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-purple-600" />
                  {course.duration}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
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

        {/* CTA */}
        <div className="mt-28">
          <CTA />
        </div>
      </div>
    </section>
  );
}