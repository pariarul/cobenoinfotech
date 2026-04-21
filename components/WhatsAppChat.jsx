"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "919361430865";
  const message = "Hello! I'm interested in your services. Can we discuss?";

  const handleChat = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-32 sm:bottom-24 right-6 z-[9999] flex flex-col items-end">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-72 sm:w-80 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <img src="/Cobeno_Infotech_logo.png" alt="Cobeno" className="w-8 h-8 object-contain brightness-0 invert" />
                </div>
                <div>
                  <p className="font-bold text-sm">Cobenoinfotech</p>
                  <p className="text-[10px] opacity-90">Typically replies in minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#e5ddd5] dark:bg-neutral-800 h-40 overflow-y-auto flex flex-col gap-3">
              <div className="bg-white dark:bg-neutral-900 p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-gray-800 dark:text-gray-200 self-start max-w-[85%]">
                Hi there! 👋 How can we help you today with your Web or Mobile project?
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white dark:bg-neutral-900 flex flex-col gap-3">
                <button 
                  onClick={handleChat}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <Send size={18} />
                  Start Chat
                </button>
                <p className="text-[10px] text-center text-gray-400">Official WhatsApp Chat Support</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        suppressHydrationWarning
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/20 transition-colors relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <svg 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {/* Pulse Effect */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
