"use client";

import { Button } from "@/components/ui/button";
import { Truck, RefreshCw, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 fade-in-up">
            <div className="w-32 h-32 mx-auto mb-6 relative img-hover">
              <Image
                src="/images/logo.png"
                alt="MODENZO WEAR Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 font-serif text-reveal">
              MODENZO
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif text-reveal" style={{ animationDelay: '0.2s' }}>
              WEAR
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-reveal" style={{ animationDelay: '0.4s' }}>
            Premium erkek giyimde sade ve modern çizgi
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center stagger-item card-hover p-4 rounded-lg">
              <Truck className="h-8 w-8 text-white mb-3 transition-smooth group-hover:scale-110" />
              <h3 className="font-semibold text-white mb-1">Aynı Gün Kargo</h3>
            </div>
            <div className="flex flex-col items-center stagger-item card-hover p-4 rounded-lg">
              <RefreshCw className="h-8 w-8 text-white mb-3 transition-smooth group-hover:scale-110" />
              <h3 className="font-semibold text-white mb-1">Kolay Değişim</h3>
            </div>
            <div className="flex flex-col items-center stagger-item card-hover p-4 rounded-lg">
              <Clock className="h-8 w-8 text-white mb-3 transition-smooth group-hover:scale-110" />
              <h3 className="font-semibold text-white mb-1">10:00 - 22:00</h3>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-semibold transition-smooth btn-hover"
              asChild
            >
              <a href="https://shopier.com/modenzowear" target="_blank" rel="noopener noreferrer">
                Mağazayı Ziyaret Et
              </a>
            </Button>
          </div>

          {/* Motto */}
          <div className="max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
              &ldquo;Erkek giyimde sadece stil değil, <strong>karakter</strong> de önemlidir. MODENZO WEAR ile <strong>kendinizi ifade edin</strong>.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
