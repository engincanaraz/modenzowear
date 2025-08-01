"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
// Removed framer-motion for better SSR performance

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "905317112134"; // Gerçek telefon numarası ile değiştirin
    const message = "Merhaba! MODENZO WEAR hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-fade-in-up opacity-100" style={{ opacity: 1, animationDelay: '1.5s' }}>
      <div className="float-animation hover:scale-110 transition-transform duration-300">
        <Button
          onClick={handleWhatsAppClick}
          size="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow micro-bounce gpu-accelerated relative overflow-hidden group"
          aria-label="WhatsApp ile iletişime geç"
        >
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-600" />
          
          <div className="group-hover:rotate-12 transition-transform duration-500">
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10" />
          </div>
        </Button>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
        WhatsApp ile iletişim
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
      </div>
    </div>
  );
} 