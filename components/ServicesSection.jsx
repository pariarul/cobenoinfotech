"use client";

import { motion } from "framer-motion";
import { Globe, FileText, Database, Star, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Custom Website Development",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    components: [
      "Requirement Analysis & Planning",
      "UI/UX Design",
      "Front-End & Back-End Development",
      "CMS Integration",
      "SEO Optimization",
      "Deployment & Maintenance",
    ],
  },
  {
    title: "Static Website Development",
    icon: FileText,
    gradient: "from-green-500 to-emerald-500",
    components: [
      "Requirement Gathering",
      "Custom / Template Design",
      "Responsive Front-End",
      "Basic SEO Setup",
      "Deployment & Support",
    ],
  },
  {
    title: "Dynamic Website Development",
    icon: Database,
    gradient: "from-purple-500 to-indigo-500",
    components: [
      "Feature Planning",
      "Modern UI/UX",
      "Admin Panel / CMS",
      "Database Integration",
      "Performance Optimization",
      "Maintenance & Support",
    ],
  },
  {
    title: "E-commerce Development",
    icon: Star,
    gradient: "from-yellow-500 to-orange-500",
    components: [
      "Product Management",
      "Payment Gateway",
      "Secure Checkout",
      "Admin Dashboard",
      "SEO & Speed Optimization",
      "Ongoing Support",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 " id="services">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Website Development Services
        </motion.h2>
        <p  className="text-center text-gray-600 mb-10" >End-to-end website solutions tailored to your business needs.</p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                className="relative rounded-3xl p-6 bg-white shadow-xl border border-gray-100
                           hover:shadow-2xl transition-all group"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Gradient Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient}
                              flex items-center justify-center mb-5 text-white`}
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>

                {/* Features */}
                <ul className="space-y-3">
                  {service.components.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10
                              bg-gradient-to-r ${service.gradient} transition`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
