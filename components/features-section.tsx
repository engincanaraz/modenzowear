"use client";

import { Truck, RefreshCw, Shield, Clock, Users, Package } from "lucide-react";

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
    title: "Ücretsiz Kargo",
    description: "500₺ üzeri alışverişlerde ücretsiz kargo"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Neden MODENZO WEAR?
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            Premium kalite, hızlı teslimat ve müşteri memnuniyeti odaklı hizmet anlayışımız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-black/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 