"use client";

import { CheckCircle, Clock, Users,Star  } from "lucide-react";
import CTA from "./CTA";
import { motion } from "framer-motion";


const courses = [
  {
    title: "Full Stack Development",
    level: "Beginner to Advanced",
    tech: "HTML, CSS, JavaScript, React, Node.js, MongoDB,Tailwind CSS, Express, Git, GitHub ",
    duration: "8 Weeks",
    students: "12+",
    price: "19000",
    originalPrice: "40000",
    rating: 4.7,
    reviews: "800+",
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
      rating: 4.7,
    reviews: "800+",
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
      rating: 4.7,
    reviews: "800+",
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
      rating: 4.7,
    reviews: "800+",
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
      rating: 4.7,
    reviews: "800+",
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
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 left-1/4 w-[30rem] h-[30rem] bg-purple-30 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[26rem] h-[26rem] bg-blue-30 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 mb-4 text-xs font-bold tracking-widest text-purple-700 rounded-full bg-white/70 backdrop-blur shadow">
            CAREER TRAINING
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Learn Skills That Companies Hire For
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            Industry-ready courses with mentorship, projects & placement support.
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
              className="group grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch will-change-transform"
            >
              {/* Left Card */}
              <div className="lg:col-span-2 rounded-2xl sm:rounded-[28px] bg-white/80 backdrop-blur-xl p-6 sm:p-10 border border-white/40 shadow-lg transition group-hover:-translate-y-1">
                {course.popular && (
                  <span className="inline-block mb-4 px-4 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-purple-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-blue-600" />
                    {course.students}
                  </div>
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
              </div>

              {/* Right Panel */}
              <div className="rounded-2xl bg-white shadow-xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between transition group-hover:-translate-y-3">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(course.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                      fill="currentColor"
                    />
                  ))}
                  <span className="font-bold text-gray-900 ml-2">
                    {course.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({course.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 line-through">
                    ₹{course.originalPrice}
                  </p>
                  <p className="text-3xl font-extrabold text-gray-900">
                    ₹{course.price}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Limited seats available
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919361430865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-semibold text-white hover:opacity-90"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28">
          <CTA />
        </div>
      </div>
    </section>




  );
}
