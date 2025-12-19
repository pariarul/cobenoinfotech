import { motion } from "framer-motion";

// Sample company logos (replace with your own image URLs)
const clientLogos = [
  "/vjth-logo.png",
  "/people_pulse_full_logo.png",
  "/Panel_Focus-removebg-preview.png",
  "/WhatNext-Logo.png",
  "/logo.png"
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50" id="clients">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
