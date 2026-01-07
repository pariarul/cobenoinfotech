"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, Mail, Eye, Server } from "lucide-react";

export default function PrivacyPolicy() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
                            We value your trust and are committed to protecting your personal information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="border-b pb-6 mb-8 text-sm text-gray-500">
                                Last Updated: January 07, 2026
                            </p>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                    1. Introduction
                                </h2>
                                <p>
                                    Welcome to <strong>Cobenoinfotech</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                    2. Information We Collect
                                </h2>
                                <p>
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                    <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system.</li>
                                    <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Server className="w-6 h-6 text-blue-600" />
                                    3. How We Use Your Data
                                </h2>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Service Delivery:</strong> To provide the web development and IT training services you have requested.</li>
                                    <li><strong>Communication:</strong> To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                                    <li><strong>Improvement:</strong> To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lock className="w-6 h-6 text-blue-600" />
                                    4. Data Security
                                </h2>
                                <p>
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-blue-600" />
                                    5. Third-Party Links
                                </h2>
                                <p>
                                    This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                    6. Contact Us
                                </h2>
                                <p>
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <p className="font-bold text-lg text-blue-900">Cobenoinfotech</p>
                                    <p className="text-blue-800">Email: contact@cobenoinfotech.com</p>
                                    <p className="text-blue-800">Address: [Insert Your Physical Address Here]</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
