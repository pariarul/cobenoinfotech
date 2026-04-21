"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  ExternalLink,
  ChevronRight,
  Home,
  Info,
  Settings2,
  Laptop,
  Briefcase,
  PhoneCall,
} from "lucide-react";

const BLUE = "#0a3d9aff";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61585332539713"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/cobenoinfotech/"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/cobenoinfotech/"
  }
];

const exploreLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "#about", icon: Info },
  { name: "How We Work", href: "#process", icon: Settings2 },
  { name: "Projects", href: "#projects", icon: Laptop },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: PhoneCall },
];

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-neutral-950 border-t border-gray-100 dark:border-white/5 text-blue-900 overflow-hidden relative"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <Link href="/" className="inline-block mb-6 group">
              <img
                src="/Cobeno_Infotech_logo.png"
                alt="Cobenoinfotech"
                className="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
              Empowering businesses through cutting-edge technology and modern digital solutions. Your partner in end-to-end building.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-2xl bg-blue-50 dark:bg-white/5 text-blue-800 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {exploreLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      <Icon size={16} className="text-blue-600 dark:text-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* CONTACT & LOCATION */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6">Contact Us</h4>
            
            <div className="space-y-6">
              <a href="mailto:cobenoinfotech@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Email</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 transition-colors">cobenoinfotech@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919361430865" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Phone</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 transition-colors">+91 93614 30865</p>
                </div>
              </a>

              {/* Office Location Card */}
              <div className="pt-4">
                <div className="p-4 rounded-3xl bg-blue-50/50 dark:bg-white/5 border border-blue-100 dark:border-white/5 relative overflow-hidden group">
                   <div className="flex items-start gap-3 relative z-10">
                      <MapPin size={20} className="text-blue-600 grow-0 shrink-0 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white mb-1">Perambalur Office</p>
                        <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 mb-3">
                           1/291, Anna Nagar, Ogalur, Perambalur Dist, Kunnam Tk, PIN 621108
                        </p>
                        <a 
                          href="https://maps.google.com/?q=1/291,+Anna+Nagar,+Ogalur,+Perambalur,+621108" 
                          target="_blank" 
                          className="inline-flex items-center gap-2 text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:gap-3 transition-all"
                        >
                          Find on Maps <ExternalLink size={12} />
                        </a>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NEWSLETTER / MESSAGE */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
          >
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-6">Stay Connected</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Subscribe to our update for new features and projects.
            </p>

            <form className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 aspect-square rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-600/20"
              >
                <Send size={18} />
              </button>
            </form>

            <div className="mt-8 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Available now for projects</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-100 dark:border-white/5 py-8 relative z-10 bg-gray-50/50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
             <p className="text-sm text-gray-500 dark:text-gray-400">
               © {new Date().getFullYear()} <span className="font-bold text-blue-900 dark:text-white">Cobenoinfotech</span>.
             </p>
             <div className="flex items-center gap-6 text-[12px] font-medium">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Terms of Service</a>
             </div>
          </div>

          <p className="text-[11px] text-gray-400 flex items-center gap-1">
             Made with 💙 in <span className="text-gray-900 dark:text-white font-bold">India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

