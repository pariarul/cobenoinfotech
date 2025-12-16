"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Search, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Training", href: "#training" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 transition-all duration-300",
          isOpen ? "z-40" : "z-50",
          scrolled || isOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90"
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

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] bg-white dark:bg-blue-800 pt-24"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 h-full">

              {/* LINKS */}
              <div className="flex flex-col justify-center space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between text-4xl sm:text-4xl font-bold text-blue-800 dark:text-white border-b border-gray-200 dark:border-gray-800 py-4"
                    >
                      <span className="group-hover:translate-x-4 transition-transform">
                        {link.name}
                      </span>
                      <ArrowRight
                        size={36}
                        className="opacity-0 group-hover:opacity-100 transition"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* INFO (DESKTOP) */}
              <div className="hidden lg:flex flex-col justify-center pl-16 relative">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-blue-600 rounded-full" />
                <span className="text-xs tracking-widest text-blue-600 font-extrabold uppercase mb-4">
                  Contact Us
                </span>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <p className="text-lg font-semibold text-gray-900">
                    cobenoinfotech@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <p className="text-lg font-semibold text-gray-900">
                    +91 9361430865
                  </p>
                </div>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all w-fit"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
