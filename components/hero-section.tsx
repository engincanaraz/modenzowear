"use client";

import { Button } from "@/components/ui/button";
import { Truck, RefreshCw, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { ClientOnlyGrid } from "@/components/ui/client-only-animation";

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

  const features = [
    { icon: Truck, text: "Aynı Gün Kargo" },
    { icon: RefreshCw, text: "Kolay Değişim" },
    { icon: Clock, text: "10:00 - 22:00" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white pt-20 sm:pt-0 overflow-hidden">
      {/* Background - sempre visível */}
      <div className="absolute inset-0 bg-black opacity-100" />
      
      {/* Parallax effect için background elements */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 opacity-100" style={{ opacity: 1 }}>
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 opacity-100 animate-fade-in-up">
            <div className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="MODENZO WEAR Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain drop-shadow-lg"
                priority
              />
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-2 font-serif animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              MODENZO
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 font-serif animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              WEAR
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Premium erkek giyimde sade ve modern çizgi
          </p>
          
          {/* Features */}
          <ClientOnlyGrid 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
            staggerDelay={0.2}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 opacity-100"
                  style={{ opacity: 1 }}
                >
                  <div className="hover:scale-110 hover:rotate-12 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white mb-2 sm:mb-3" />
                  </div>
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">
                    {feature.text}
                  </h3>
                </div>
              );
            })}
          </ClientOnlyGrid>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="hover:scale-105 transition-transform duration-300">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white hover:text-black px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 relative overflow-hidden group"
                asChild
              >
                <a href="https://shopier.com/modenzowear" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Mağazayı Ziyaret Et</span>
                  <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>

          {/* Motto */}
          <div className="max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed italic opacity-100" style={{ opacity: 1 }}>
              &ldquo;Erkek giyimde sadece stil değil, <strong>karakter</strong> de önemlidir. MODENZO WEAR ile <strong>kendinizi ifade edin</strong>.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
