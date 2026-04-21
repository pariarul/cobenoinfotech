"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Settings2, PhoneCall, Laptop } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Process", href: "#process", icon: Settings2 },
  { name: "Projects", href: "#projects", icon: Laptop },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: PhoneCall },
];

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false); // Hide on scroll down
        } else {
          setIsVisible(true); // Show on scroll up
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed bottom-6 inset-x-4 z-[9999]"
    >
      <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center gap-1 group"
              >
                <div className="p-2 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <Icon 
                    size={20} 
                    className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 group-hover:text-blue-600 uppercase tracking-tighter">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.div>
  );
}
