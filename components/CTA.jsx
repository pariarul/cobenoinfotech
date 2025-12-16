import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#4f46e5] to-[#9333ea] px-6 py-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
      
      {/* TEXT */}
      <div className="text-center md:text-left">
        <h3 className="text-xl sm:text-2xl font-bold">
          Ready to start your journey?
        </h3>
        <p className="text-white/80 mt-2 text-sm sm:text-base">
          Talk to our experts and get guided today.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-4">
        
        <a
          href="tel:+919361430865"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#4f46e5] font-bold hover:bg-gray-100 transition text-center"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919361430865"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 transition inline-flex items-center justify-center gap-2 font-semibold"
        >
          <MessageCircle size={18} className="text-white" />
          WhatsApp
        </a>

      </div>
    </div>
  );
}
