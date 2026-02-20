"use client";

import { motion } from "framer-motion";

const clientLogos = [
  "/vjth-logo.png",
  "/people_pulse_full_logo.png",
  "/Panel_Focus-removebg-preview.png",
  "/WhatNext-Logo.png",
  "/seyonexim.png",
  "/zozi.png",
  "/calix_apparels.jpeg",
  "/guhan_construction.png",
  "/happy_journey.png",
  "/lakana_enterprises.png",
  "/uniworldstay.png",
  "/harsham-residences.png",
  "/strokeline_logo.png",
];

export default function ClientLogos() {
  return (
    <section id="clients" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          Trusted by Our Clients
        </h2>


        {/* ✅ RUNNING / INCOMING LOGOS */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-20"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client moving logo ${index + 1}`}
                className="
                  h-12 sm:h-14 md:h-16
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition-opacity
                "
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}