"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "905317112134"; // Gerçek telefon numarası ile değiştirin
    const message = "Merhaba! MODENZO WEAR hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="icon"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
      </Button>
    </div>
  );
} 