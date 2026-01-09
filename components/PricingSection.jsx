"use client";

import { motion } from "framer-motion";
import { Globe, FileText, Database, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    title: "Static Website",
    description:
      "Perfect for small businesses and personal projects with minimal features.",
    originalPrice: 10000,
    discount: 50,
    icon: FileText,
  },
  {
    title: "Dynamic Website",
    description:
      "Best for growing businesses with admin features and dynamic content.",
    originalPrice: 24000,
    discount: 60,
    icon: Globe,
    featured: true,
  },
  {
    title: "E-commerce Website",
    description:
      "Sell products online with secure data management and product management.",
    originalPrice: 35000,
    discount: 60,
    icon: Database,
  },
];

export default function PricingSection() {
  const whatsappNumber = "9361430865";

  return (
    <section
      className="relative py-20 "
      id="pricing"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-blue-200 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Website Development Plans & Pricing
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Premium websites with affordable, limited-time offers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            const discountedPrice = Math.round(
              plan.originalPrice -
              (plan.originalPrice * plan.discount) / 100
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl p-[2px] ${plan.featured
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600"
                  : "bg-gradient-to-br from-blue-200 to-blue-300"
                  }`}
              >
                <div
                  className={`relative bg-white rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition ${plan.featured ? "scale-[1.04]" : ""
                    }`}
                >
                  {/* ROUND DISCOUNT BADGE */}
                  <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-gradient-to-tr from-red-500 to-red-600 text-white flex flex-col items-center justify-center shadow-xl">
                    <span className="text-xl font-bold">
                      {plan.discount}%
                    </span>
                    <span className="text-[10px] font-semibold tracking-wide">
                      OFF
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-700 to-blue-800 flex items-center justify-center shadow-lg">
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {plan.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>

                    {/* BIG PRICE */}
                    <div className="mb-8">
                      <p className="text-sm text-gray-400 line-through mb-1">
                        ₹{plan.originalPrice.toLocaleString()}
                      </p>

                      <div className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-2xl">
                        <span className="text-4xl font-bold">
                          ₹{discountedPrice.toLocaleString()}
                        </span>
                      </div>

                      <p className="text-xs text-green-600 mt-2">
                        Limited Time Offer 🎉
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/91${whatsappNumber}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(
                      plan.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition ${plan.featured
                      ? "bg-blue-800 text-white hover:bg-blue-700"
                      : "bg-blue-700 text-white hover:bg-blue-600"
                      }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
