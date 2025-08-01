"use client";

import { Button } from "@/components/ui/button";

export function WholesaleSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Merhaba! Toptan fiyat almak istiyorum. Detaylı bilgi verebilir misiniz?");
    const phoneNumber = "905317112134";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Toptan Satış
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Mağazalar, butikler ve toptan alıcılar için özel fiyatlar ve koşullar
          </p>
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-white text-black border-white border-2 hover:bg-black hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-smooth btn-hover"
          >
            Toptan Fiyat Al
          </Button>
        </div>
      </div>
    </section>
  );
} 