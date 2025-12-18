"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
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


export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-200 text-blue-900"
    >
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <img
                src="/Cobeno_Infotech_logo.png"
                alt="Cobenoinfotech"
                className="h-20 sm:h-24 object-contain"
              />
            </Link>

            <p className="text-sm text-blue-800/80 max-w-xs leading-relaxed">
              Empowering businesses and individuals through modern technology
              solutions and job-oriented IT training.
            </p>

<div className="flex gap-3 mt-6">
  {socialLinks.map(({ name, icon: Icon, url }) => (
    <a
      key={name}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="p-2 rounded-full bg-blue-800 text-white hover:bg-white hover:text-blue-600 transition"
    >
      <Icon size={16} />
    </a>
  ))}
</div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: BLUE }}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[ "Home" ,"Services", "Training", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:underline underline-offset-4"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
<div>
  <h4 className="font-semibold mb-4" style={{ color: BLUE }}>
    Contact
  </h4>

  <ul className="space-y-4 text-sm">

    {/* Email */}
    <li className="flex items-center gap-3">
      <Mail size={16} style={{ color: BLUE }} />
      <a
        href="mailto:cobenoinfotech@gmail.com"
        className="hover:underline hover:text-blue-700 transition"
      >
        cobenoinfotech@gmail.com
      </a>
    </li>

    {/* Phone */}
    <li className="flex items-center gap-3">
      <Phone size={16} style={{ color: BLUE }} />
      <a
        href="tel:+919361430865"
        className="hover:underline hover:text-blue-700 transition"
      >
        +91 93614 30865
      </a>
    </li>

    {/* Location */}
    <li className="flex items-center gap-3">
      <MapPin size={16} style={{ color: BLUE }} />
      <span>Tamil Nadu, India</span>
    </li>

  </ul>
</div>


          {/* MESSAGE / EMAIL FORM */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: BLUE }}>
              Send a Message
            </h4>

            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-blue-600" />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>


              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>

{/* BOTTOM FOOTER */}
<div className="border-t border-gray-200 dark:border-white/10 py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
    
    {/* Copyright */}
    <p className="text-center md:text-left text-sm text-blue-800 dark:text-blue-400">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold">Cobenoinfotech</span>. All rights reserved.
    </p>

    {/* Links */}
    <div className="flex items-center gap-4 text-sm">
      <a
        href="/privacy-policy"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition underline-offset-4 "
      >
        Privacy Policy
      </a>
      <span className="text-gray-400">|</span>
      <a
        href="/terms-conditions"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition underline-offset-4 "
      >
        Terms & Conditions
      </a>
    </div>

  </div>
</div>

    </footer>
  );
}
