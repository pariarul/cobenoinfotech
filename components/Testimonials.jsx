"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "harsha ",
        role: "Full Stack Development",
        text: "Cobenoinfotech training was amazing. Trainers explain every concept clearly and support throughout. I got placed in 3 months!",
        image: "/harsha.jpg",
    },
    {
        name: "Vignesh S",
        role: "React & Next.js Development",
        text: "Perfect place to learn React and Next.js. Real-time projects and assignments made me confident in frontend development.",
        image: "/students/vignesh.jpg",
    },
    {
        name: "Sathish Raj",
        role: "Backend Development",
        text: "Very detailed backend sessions. APIs, databases, JWT, everything was taught practically. Best learning experience!",
        image: "/students/sathish.jpg",
    },
    {
        name: "Karthik M",
        role: "Full Stack MERN",
        text: "From basics to advanced, everything was taught with patience. Their project support helped me build my portfolio website.",
        image: "/students/karthik.jpg",
    },
    {
        name: "Divya Shree",
        role: "Frontend Development",
        text: "Clean teaching style! React components, hooks, routing—all explained with practical real-world examples.",
        image: "/students/divya.jpg",
    },
    {
        name: "Hari Prasath",
        role: "Node.js & Express",
        text: "I learned API development, authentication, and database handling step-by-step. The trainer made backend so easy.",
        image: "/students/hari.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="py-12 lg:py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
                        Student Reviews
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        What our students say
                    </h3>
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-2xl relative hover:shadow-lg transition-all"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 text-blue-100 dark:text-blue-900/30 w-10 h-10" />

                            {/* Profile */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {review.name}
                                    </h4>
                                    <p className="text-sm text-blue-600 dark:text-blue-400">
                                        {review.role}
                                    </p>
                                </div>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className="text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                                “{review.text}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
