"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery & Planning",
    description: "We dive deep into your requirements and business goals to chart the perfect course.",
    icon: Search,
    color: "bg-blue-600",
  },
  {
    title: "UI/UX Design",
    description: "Our designers craft intuitive, pixel-perfect interfaces tailored for your brand.",
    icon: PenTool,
    color: "bg-indigo-600",
  },
  {
    title: "Development",
    description: "We build scalable, high-performance web and mobile applications using modern tech.",
    icon: Code2,
    color: "bg-purple-600",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing across all platforms to ensure your product is bug-free and smooth.",
    icon: ShieldCheck,
    color: "bg-cyan-600",
  },
  {
    title: "Launch & Support",
    description: "We handle deployment and provide ongoing maintenance to keep you growing.",
    icon: Rocket,
    color: "bg-teal-600",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            How We Bring Your Ideas to Life
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A structured approach to development ensures we deliver high-quality solutions on time, every time.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-0.5 bg-gray-100 dark:bg-white/10 -z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-xl mb-8 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <step.icon size={32} />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-100 dark:border-white/10 flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
