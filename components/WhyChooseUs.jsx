"use client";

import { CheckCircle, Users, Globe, Cpu, Monitor } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Disable SSR for 3D component
const About3DProduct = dynamic(() => import("@/components/About3DProduct"), { ssr: false });

const features = [
  {
    title: "Full Live Project",
    description: "Work on real-world projects to gain practical experience.",
    icon: Monitor,
  },
  {
    title: "Job Placement Support",
    description: "Get assistance in finding suitable jobs after training.",
    icon: Users,
  },
  {
    title: "Freelance Support",
    description: "Learn how to start and grow your freelance career.",
    icon: Globe,
  },
  {
    title: "AI Development Guidance",
    description: "Leverage AI tools to improve your development workflow.",
    icon: Cpu,
  },
  {
    title: "Online Mode Class",
    description: "Flexible learning from anywhere with our online classes.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-12 lg:py-20 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-blue-200/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-yellow-200/20 blur-2xl -z-10"></div>
      <div className="absolute top-10 right-0 w-48 h-48 rounded-full bg-purple-200/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT: 3D Mobile */}
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-2xl -z-10" />
            <About3DProduct />
          </div>

          {/* RIGHT CONTENT: Features */}
          <div>
            <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
              Why Choose Us?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering your digital journey with excellence
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Cobenoinfotech offers hands-on training and real-world projects to help you achieve career success and become an expert in modern technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
