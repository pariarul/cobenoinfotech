"use client";

import {
  CheckCircle,
  Clock,
  Users,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import CTA from "./CTA";

const courses = [
  {
    title: "Full Stack Development",
    level: "Beginner to Advanced",
    tech: "HTML, CSS, JavaScript, React, Node.js, MongoDB, Next.js, Tailwind CSS, Express, Git, GitHub",
    duration: "12 Weeks",
    students: "12+",
    price: "14500",
    features: [
      "Live Classes",
      "Project-Based Learning",
      "Job Placement Support",
      "Resume Building",
      "Portfolio Building",
    ],
    popular: true,
  },
  {
    title: "Frontend Development",
    level: "Beginner to Advanced",
    tech: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, UI/UX",
    duration: "4 Weeks",
    students: "5+",
    price: "7500",
    features: [
      "Live Classes",
      "Project-Based Learning",
      "Job Placement Support",
      "Resume Building",
    ],
  },
  {
    title: "Backend Development",
    level: "Beginner to Advanced",
    tech: "Node.js, Express, REST APIs, Authentication, JWT, Databases, Deployment",
    duration: "4 Weeks",
    students: "7+",
    price: "6000",
    features: [
      "Live Classes",
      "Project-Based Learning",
      "Job Placement Support",
    ],
  },
];

export default function Training() {
  return (
    <section id="training" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
              Training Courses
            </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Practical Job-Oriented Training
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Build your tech career with real-time projects and expert mentorship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative p-[1.5px] rounded-2xl ${
                course.popular
                  ? "bg-gradient-to-r from-[#4f46e5] to-[#9333ea]"
                  : "bg-gray-200"
              }`}
            >
              <div className="h-full flex flex-col bg-white rounded-2xl p-8">

                {course.popular && (
                  <span className="absolute -top-3 right-6 px-4 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea] shadow-lg">
                    MOST POPULAR
                  </span>
                )}

                <span className="inline-block mb-3 text-xs font-semibold text-[#4f46e5] bg-[#4f46e5]/10 px-3 py-1 rounded-full">
                  {course.level}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mb-6">
                  {course.tech}
                </p>

                <div className="flex gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#4f46e5]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#9333ea]" />
                    {course.students}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-2xl font-extrabold text-gray-900 mb-4">
                    ₹{course.price}
                    <span className="text-sm text-gray-500 font-normal">
                      / course
                    </span>
                  </p>

                  <Link
                    href="#contact"
                    className={`block text-center py-3 rounded-xl font-semibold transition ${
                      course.popular
                        ? "text-white bg-blue-700 hover:bg-blue-800"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Register Now
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
     <CTA />

      </div>
    </section>
  );
}
