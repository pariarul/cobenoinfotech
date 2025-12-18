"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, Award, Star } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Disable SSR for Three.js
const Hero3DProduct = dynamic(() => import("@/components/Hero3DProduct"), { ssr: false });

const stats = [
  { label: "Projects Done", value: "15+", icon: Trophy },
  { label: "Students Trained", value: "12+", icon: Users },
  { label: "Expert Team", value: "5+", icon: Award },
];

const BLUE = "#0a3d9aff";
const ACCENT = "#2b6dd7ff";
const YELLOW = "#f59e0b";

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center pt-24 pb-12 lg:pb-24 overflow-hidden bg-white min-h-screen">

      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div
          className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full blur-[80px] opacity-30"
          style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-[150px] sm:w-[350px] h-[150px] sm:h-[350px] rounded-full blur-[60px] opacity-20"
          style={{ background: `radial-gradient(circle, ${BLUE} 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 w-full items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* TAG + ICON */}
          <div className="relative inline-flex items-center gap-4 mb-6 justify-center lg:justify-start">
            <span
              className="absolute -inset-2 rounded-full blur-md animate-pulse"
              style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)" }}
            />
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-lg"
                 style={{ backgroundColor: BLUE, boxShadow: `0 10px 30px ${BLUE}55` }}>
              <span className="absolute inset-0 rounded-xl animate-spin-slow" style={{ border: `2px dashed ${YELLOW}` }} />
              <Award className="relative z-10 w-5 h-5 sm:w-6 sm:h-6" style={{ color: YELLOW }} />
            </div>
            <div className="relative px-4 py-1 sm:px-5 sm:py-2 rounded-xl shadow-md bg-yellow-500 text-blue-900">
              <p className="text-xs sm:text-sm font-bold leading-tight">Top-Rated Tech Agency</p>
              <p className="text-[9px] sm:text-xs font-semibold opacity-80">& Institute</p>
            </div>
          </div>

          {/* HEADLINE */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.2] lg:leading-[1.1]">
            Empowering Businesses Through <br className="hidden lg:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400">
                Technology
              </span>
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-md mx-auto lg:mx-0 leading-relaxed">
            Cobenoinfotech specializes in modern <span className="font-semibold text-blue-900">web development, software solutions,</span>
            and industry-ready <span className="font-semibold text-blue-900">IT training programs.</span> 
            We help companies grow and individuals build successful tech careers.
          </p>

          {/* BUTTONS */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="tel:+919361430865"
              className="group relative inline-flex items-center bg-blue-800 justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              
            >
              Get a Quote <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="#training"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold border-2 border-blue-600 text-blue-900 hover:bg-blue-50 active:scale-95 transition-all"
            >
              Explore Training
            </Link>
          </div>

          {/* TRUST METRICS (scrollable on mobile) */}
          <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-100 overflow-x-auto">
            <div className="flex sm:grid sm:grid-cols-3 gap-6 sm:gap-8 min-w-max sm:min-w-0">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center sm:items-start min-w-[100px]"
                >
                  <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-gray-900">
                    {stat.value} <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (3D MOBILE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-2xl -z-10" />
          <Hero3DProduct />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-5 sm:top-10 right-5 sm:right-10 bg-white/80 backdrop-blur-md p-2 sm:p-4 rounded-2xl shadow-lg border border-white/50 hidden lg:flex"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
                <Star className="w-4 h-4 sm:w-5 sm:h-6 text-yellow-600" fill="currentColor" />
              </div>
              <div>
                <p className="text-[8px] sm:text-xs text-gray-500 font-semibold uppercase">Review</p>
                <p className="text-xs sm:text-sm font-bold text-gray-900">4.5/5.0 Rating</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
