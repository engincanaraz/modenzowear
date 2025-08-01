"use client";

import { Truck, RefreshCw, Shield, Clock, Users, Package } from "lucide-react";
import { ClientOnlyAnimation, ClientOnlyGrid } from "@/components/ui/client-only-animation";
import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Aynı Gün Kargo",
    description: "Saat 15:00'ye kadar verilen siparişler aynı gün kargoya verilir"
  },
  {
    icon: RefreshCw,
    title: "Kolay Değişim",
    description: "14 gün içinde ücretsiz değişim ve iade imkanı"
  },
  {
    icon: Shield,
    title: "Güvenli Alışveriş",
    description: "SSL sertifikalı güvenli ödeme sistemi"
  },
  {
    icon: Clock,
    title: "7/24 Destek",
    description: "WhatsApp üzerinden 7/24 müşteri hizmetleri"
  },
  {
    icon: Users,
    title: "Toptan Satış",
    description: "Mağazalar ve toptan alıcılar için özel fiyatlar"
  },
  {
    icon: Package,
    title: "Güvenli Kargo",
    description: "Güvenli kargo hizmeti"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <ClientOnlyAnimation className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Neden MODENZO WEAR?
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            Premium kalite, hızlı teslimat ve müşteri memnuniyeti odaklı hizmet anlayışımız
          </p>
        </ClientOnlyAnimation>

        <ClientOnlyGrid 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center group cursor-pointer"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                  <IconComponent className="h-8 w-8 text-white relative z-10" />
                </motion.div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-black/60 leading-relaxed group-hover:text-black/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </ClientOnlyGrid>
      </div>
    </section>
  );
} 