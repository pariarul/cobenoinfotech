"use client";

import { Globe, Layout, Database, ShoppingCart, MessageCircle, Store, ArrowRight } from "lucide-react";
import ServicesAndReviews from "./ServicesAndReviews"; // import your component
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Custom Website Development",
    description: "Custom websites built with modern technologies.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Static Website Development",
    description: "High-performance, SEO-friendly applications.",
    icon: Layout,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Dynamic Website Development",
    description: "Node.js, Express, MongoDB solutions.",
    icon: Database,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "E-commerce Development",
    description: "E-Commerce platforms with secure payment gateways.",
    icon: ShoppingCart,
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    title: "Live Chat Project",
    description: "Mobile apps for iOS and Android.",
    icon: MessageCircle,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    title: "Matrimonial Websites",
    description: "Matrimonial websites built with modern technologies.",
    icon: Store,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
];

export default function Services() {
  const [showReviews, setShowReviews] = useState(true);

  return (
    <section id="services" className="py-12 lg:py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Featured Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Website Development Services
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
<Link  href="#contact" className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /> </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowReviews((prev) => !prev)} // toggle state
            className="inline-block border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 font-semibold py-3 px-8 rounded-full transition-colors"
          >
            {showReviews ? "Hide Services" : "View All Services"} {/* dynamic text */}
          </button>
        </div>

        {showReviews && <ServicesAndReviews />}
      </div>
    </section>
  );
}
