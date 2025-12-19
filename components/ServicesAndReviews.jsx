"use client";

import { Globe, FileText, Database, Star } from "lucide-react";
import { motion } from "framer-motion";
import ClientLogos from "./ClientLogos";
import ReviewCarousel from "./ReviewCarousel";
import PricingSection from "./PricingSection";
import ServicesSection from "./ServicesSection";

// Services Data
const services = [
  {
    title: "Custom Website Development",
    icon: Globe,
    color: "text-blue-500",
    components: [
      "Requirement Analysis & Planning",
      "UI/UX Design",
      "Front-End Development",
      "Back-End Development",
      "CMS Integration",
      "Testing & QA",
      "SEO Optimization",
      "Deployment & Hosting",
      "Maintenance & Support",
    ],
  },
  {
    title: "Static Website Development",
    icon: FileText,
    color: "text-green-500",
    components: [
      "Requirement Gathering",
      "Template or Custom Design",
      "Front-End Development (HTML/CSS/JS)",
      "Responsive Design",
      "Basic SEO Setup",
      "Deployment & Hosting",
      "Maintenance",
    ],
  },
  {
    title: "Dynamic Website Development",
    icon: Database,
    color: "text-purple-500",
    components: [
      "Requirement Analysis & Feature Planning",
      "UI/UX Design",
      "Front-End Development (React/Vue/Angular)",
      "Back-End Development & Database",
      "CMS or Admin Panel",
      "E-commerce / Functional Modules",
      "Testing & QA",
      "SEO & Performance Optimization",
      "Deployment & Hosting",
      "Maintenance & Support",
    ],
  },
];


// Pricing Data
const pricingPlans = [
  {
    title: "Basic",
    price: "₹15,000",
    features: ["Static Website", "Responsive Design", "Basic SEO", "1 Month Support"],
    color: "border-blue-500",
  },
  {
    title: "Standard",
    price: "₹30,000",
    features: ["Dynamic Website", "UI/UX Design", "SEO Optimization", "3 Months Support"],
    color: "border-green-500",
  },
  {
    title: "Premium",
    price: "₹50,000+",
    features: ["E-commerce Website", "Custom Front & Back-End", "Advanced SEO & Performance", "6 Months Support"],
    color: "border-yellow-500",
  },
];

export default function ServicesAndReviews() {
  return (
    <section className="py-16 bg-gray-50" id="servicesAndReviews">
      <div className="container mx-auto px-4">
        {/* Services Section */}
<ServicesSection />

        {/* Pricing Section */}
<PricingSection />

        {/* Reviews Section */}
<ReviewCarousel />

        {/*company logos*/}
        <ClientLogos />
      </div>
    </section>
  );
}
