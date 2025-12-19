"use client";

import { motion } from "framer-motion";
import { Globe, FileText, Database, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    title: "Static Website",
    description: "Perfect for small businesses and personal projects with minimal features.",
    price: "₹2,999",
    icon: FileText,
  },
  {
    title: "Dynamic Website",
    description: "Best for growing businesses with admin features and dynamic content.",
    price: "₹5,999",
    icon: Globe,
  },
  {
    title: "E-commerce Website",
    description: "Sell products online with secure data management and product management.",
    price: "₹9,999",
    icon: Database,
  },
];

export default function PricingSection() {
  const whatsappNumber = "9361430865";

  return (
    <section className="py-16 " id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Website Development Plans & Pricing
        </h2>
        <p className="text-center text-gray-600 mb-8">
  Website development plans starting from budget-friendly pricing.
</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="
                  relative bg-white rounded-2xl
                  p-7 border border-blue-200
                  shadow-sm hover:shadow-xl
                  transition
                "
              >
                {/* Icon with glow */}
                <div className="relative flex justify-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="
                      w-16 h-16 rounded-full
                      bg-gradient-to-tr from-blue-700 to-blue-800
                      flex items-center justify-center
                      shadow-md
                    "
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full blur-xl opacity-20"></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {plan.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>

<p className="mb-6 flex items-center gap-2">
  <span className="text-sm text-gray-500">Starting</span>
  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-3xl">
    {plan.price}
  </span>
</p>



                </div>

                {/* Button */}
                <a
                  href={`https://wa.me/91${whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(
                    plan.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-2
                    py-3 rounded-xl
                    bg-blue-800 text-white font-semibold
                    hover:bg-blue-700 transition
                  "
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
