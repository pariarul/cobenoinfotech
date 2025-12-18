"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does Cobenoinfotech offer?",
    answer:
      "We offer comprehensive web development solutions including Custom Website Development, React & Next.js Development, Full Stack Applications, and continuous maintenance support.",
  },
  {
    question: "Do you offer job-oriented IT training?",
    answer:
      "Yes, we provide specialized job-oriented training in Full Stack Development, Frontend, Backend, UI/UX, and Cloud technologies with placement assistance.",
  },
  {
    question: "Which technologies do you teach?",
    answer:
      "We teach modern stacks including HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, SQL, Docker, and AWS.",
  },
  {
    question: "Can I get a customized website for my business?",
    answer:
      "Absolutely! We specialize in custom web development tailored to your specific business needs and branding requirements.",
  },
  {
    question: "How can I contact Cobenoinfotech?",
    answer:
      "You can reach us via email at info@cobenoinfotech.com, call us at +91 9876543210, or fill out the contact form on our website.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold uppercase text-sm mb-2">
            FAQ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Everything you need to know about our services, training programs, and support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="text-blue-600 shrink-0" size={20} />
                ) : (
                  <Plus className="text-gray-400 shrink-0" size={20} />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
