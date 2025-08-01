"use client";

import { Users, Package, Clock, Award } from "lucide-react";

const stats = [
  {
    number: "1000+",
    label: "Mutlu Müşteri",
    icon: Users
  },
  {
    number: "500+",
    label: "Ürün Çeşidi",
    icon: Package
  },
  {
    number: "24/7",
    label: "Müşteri Desteği",
    icon: Clock
  },
  {
    number: "5+",
    label: "Yıllık Deneyim",
    icon: Award
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 