"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Scale, Users, Copyright, CreditCard, TriangleAlert, CircleHelp } from "lucide-react";

export default function TermsAndConditions() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
                        <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
                            Please read these terms carefully before using our services.
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
                                    <Scale className="w-6 h-6 text-purple-600" />
                                    1. Acceptance of Terms
                                </h2>
                                <p>
                                    By accessing and using the website and services of <strong>Cobenoinfotech</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Users className="w-6 h-6 text-purple-600" />
                                    2. Use of Services
                                </h2>
                                <p>
                                    You agree to use our website and services only for lawful purposes. You are prohibited from violating or attempting to violate the security of the Website, including, without limitation:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Accessing data not intended for such user or logging into a server or account which the user is not authorized to access.</li>
                                    <li>Attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization.</li>
                                    <li>Interfering appearing to interfere with service to any user, host or network.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Copyright className="w-6 h-6 text-purple-600" />
                                    3. Intellectual Property
                                </h2>
                                <p>
                                    All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Cobenoinfotech or its content suppliers and protected by international copyright laws.
                                </p>
                                <p className="mt-2">
                                    For our training programs, all course materials are provided for personal educational use only and may not be reproduced, distributed, or shared without explicit permission.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CreditCard className="w-6 h-6 text-purple-600" />
                                    4. Payment and Refunds
                                </h2>
                                <p>
                                    Projects and training courses are subject to the payment terms agreed upon at the time of purchase or contract signing.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Web Development Services:</strong> Payments are typically milestone-based as per the project proposal.</li>
                                    <li><strong>Training Programs:</strong> Fees must be paid in full prior to the commencement of the course unless an installment plan has been approved. Refunds are subject to our specific Refund Policy.</li>
                                </ul>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <TriangleAlert className="w-6 h-6 text-purple-600" />
                                    5. Limitation of Liability
                                </h2>
                                <p>
                                    In no event shall Cobenoinfotech be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this website or our services.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <CircleHelp className="w-6 h-6 text-purple-600" />
                                    6. Contact Information
                                </h2>
                                <p>
                                    Any questions about these Terms & Conditions should be addressed to us at:
                                </p>
                                <div className="mt-4 p-6 bg-purple-50 rounded-xl border border-purple-100">
                                    <p className="font-bold text-lg text-purple-900">Cobenoinfotech</p>
                                    <p className="text-purple-800">Email: legal@cobenoinfotech.com</p>
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
