"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Dhana",
    text: "CobenoInfotech developed my website exactly as I expected. The design is professional, performance is excellent, and the delivery was on time. Highly recommended."
  },
  {
    name: "Govindan",
    text: "The website developed by CobenoInfotech is top-notch. Clean design, smooth functionality, and very responsive across all devices."
  },
  {
    name: "Naveen",
    text: "Amazing website development experience. They clearly understood my requirements and delivered a modern, high-quality website beyond expectations."
  },

];

export default function AllReviews() {
  return (
    <section className="py-16 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="text-yellow-400 w-5 h-5 mr-1"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <h4 className="font-semibold text-gray-800">{review.name}</h4>
              <span className="text-gray-500 text-sm">{review.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
