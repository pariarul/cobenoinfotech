"use client";

import { Star, Quote, Linkedin } from "lucide-react";
import reviews from "@/data/reviews.json";


export default function Testimonials() {
    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-blue-600 font-semibold uppercase text-sm">
                        Student Reviews
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        What our students say
                    </h3>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-2xl relative hover:shadow-xl transition"
                        >
                            <Quote className="absolute top-6 right-6 text-blue-100 dark:text-blue-900/30 w-10 h-10" />

                            {/* Profile */}
                            <div className="flex items-center gap-4 mb-4">

                                {/* IMAGE WITH CLEAN DESIGN */}
                                <div className="relative">
                                    {/* Glow */}
                                    <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-20" />

                                    {/* Ring */}
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-[2px] relative">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-full h-full rounded-full object-cover bg-gray-200"
                                        />
                                    </div>

                                    {/* LinkedIn Icon */}
                                    {review.linkedin && (
                                        <a
                                            href={review.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute -bottom-1 -right-1 bg-blue-600 p-1.5 rounded-full hover:scale-110 transition"
                                        >
                                            <Linkedin size={14} className="text-white" />
                                        </a>
                                    )}
                                </div>

                                {/* Name */}
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        {review.name}
                                    </h4>
                                    <p className="text-sm text-blue-600">
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

                            {/* Text */}
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
