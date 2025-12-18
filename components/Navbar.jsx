"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Search,
  Mail,
  Phone,
  Home,
  Info,
  Briefcase,
  GraduationCap,
  PhoneCall,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

/* NAV LINKS */
const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Training", href: "#training", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: PhoneCall },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled || isOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/Cobeno_Infotech_logo.png"
              alt="Cobenoinfotech"
              className="h-40 w-[400px] max-w-full object-contain"
            />
          </Link>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800 text-white dark:bg-white dark:text-blue-700 transition active:scale-95"
            >
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 360, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
              <span className="hidden sm:block text-sm font-semibold">
                {isOpen ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] bg-white"
          >
            {/* MENU HEADER */}
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/Cobeno_Infotech_logo.png"
              alt="Cobenoinfotech"
              className="h-40 w-[400px] max-w-full object-contain"
            />
          </Link>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
              <Search size={20} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800 text-white dark:bg-white dark:text-blue-700 transition active:scale-95"
            >
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 360, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
              <span className="hidden sm:block text-sm font-semibold">
                {isOpen ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>

            {/* MENU CONTENT */}
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 h-[calc(100%-80px)]">

              {/* NAV LINKS */}
              <div className="flex flex-col justify-center space-y-4">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between px-4 py-4 rounded-xl
                                   text-2xl sm:text-3xl font-bold text-blue-800
                                   hover:bg-blue-50 transition"
                      >
                        <div className="flex items-center gap-4">
                          <span className="p-2 rounded-lg bg-blue-100">
                            <Icon className="w-6 h-6 text-blue-700" />
                          </span>
                          <span className="group-hover:translate-x-2 transition-transform">
                            {link.name}
                          </span>
                        </div>

                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CONTACT INFO */}
              <div className="hidden lg:flex flex-col justify-center pl-16 relative">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-blue-600 rounded-full" />

                <span className="text-xs uppercase tracking-widest font-bold text-blue-600 mb-4">
                  Contact
                </span>

                <a
                  href="mailto:cobenoinfotech@gmail.com"
                  className="flex items-center gap-3 mb-3 text-lg font-semibold hover:text-blue-700"
                >
                  <Mail className="text-blue-600" />
                  cobenoinfotech@gmail.com
                </a>

                <a
                  href="tel:+919361430865"
                  className="flex items-center gap-3 mb-8 text-lg font-semibold hover:text-blue-700"
                >
                  <Phone className="text-blue-600" />
                  +91 93614 30865
                </a>

                <a
                  href="https://wa.me/919361430865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition w-fit"
                >
                  Get Started
                  <ArrowRight />
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
