"use client";

import { motion } from "framer-motion";
import { Globe, FileText, Database, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    title: "Static Website",
    description: "Clean, fast-loading websites for individuals & startups.",
    originalPrice: 10000,
    discount: 50,
    icon: FileText,
    color: "sky",
  },
  {
    title: "Dynamic Website",
    description: "CMS, admin panel & scalable business features.",
    originalPrice: 24000,
    discount: 60,
    icon: Globe,
    color: "indigo",
  },
  {
    title: "E-commerce Website",
    description: "Online store with products, payments & orders.",
    originalPrice: 35000,
    discount: 60,
    icon: Database,
    color: "emerald",
  },
];

export default function PricingSoftDesign() {
  const whatsappNumber = "9361430865";

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple & Honest Pricing
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            No hidden charges. Light, modern, and business-ready websites.
          </p>
        </div>

        {/* Pricing Items */}
        <div className="space-y-10">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            const discountedPrice = Math.round(
              plan.originalPrice -
                (plan.originalPrice * plan.discount) / 100
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row items-center gap-8"
              >
                {/* Icon Bubble */}
                <div
                  className={`
                    flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center
                    ${
                      plan.color === "sky" &&
                      "bg-sky-100 text-sky-600"
                    }
                    ${
                      plan.color === "indigo" &&
                      "bg-indigo-100 text-indigo-600"
                    }
                    ${
                      plan.color === "emerald" &&
                      "bg-emerald-100 text-emerald-600"
                    }
                  `}
                >
                  <Icon className="w-9 h-9" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xl">
                    {plan.description}
                  </p>
                </div>

                {/* Price Bubble */}
                <div className="text-center">
                  <p className="text-sm text-gray-400 line-through">
                    ₹{plan.originalPrice.toLocaleString()}
                  </p>

                  <div className="mt-1 px-6 py-3 rounded-2xl bg-slate-100">
                    <p className="text-3xl font-extrabold text-gray-900">
                      ₹{discountedPrice.toLocaleString()}
                    </p>
                    <p className="text-xs text-emerald-600 font-semibold">
                      Save {plan.discount}%
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
                  className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-100 text-sky-700 font-semibold hover:bg-sky-200 transition"
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
