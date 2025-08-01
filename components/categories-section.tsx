"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Package, Footprints, ShoppingBag, Droplets, Watch } from "lucide-react";

export function CategoriesSection() {
  const categories = [
    {
      id: "polo",
      name: "Polo T-Shirt",
      description: "Premium pamuklu kumaş, siyah ve beyaz seçenekler",
      icon: Shirt,
    },
    {
      id: "gomlek",
      name: "Gömlekler",
      description: "Çizgili ve düz desenler, klasik ve modern kesim",
      icon: Shirt,
    },
    {
      id: "pantolon",
      name: "Pantolonlar",
      description: "Chino, jean ve kumaş pantolonlar",
      icon: Package,
    },
    {
      id: "ayakkabi",
      name: "Ayakkabılar",
      description: "Spor, klasik ve günlük ayakkabılar",
      icon: Footprints,
    },
    {
      id: "parfum",
      name: "Parfüm",
      description: "Erkek parfümleri, premium markalar",
      icon: Droplets,
    },
    {
      id: "aksesuar",
      name: "Çanta & Aksesuar",
      description: "Çantalar, cüzdanlar, kemerler, saatler",
      icon: Watch,
    },
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Ürün Kategorileri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium erkek giyim koleksiyonumuzda her tarz için özel seçenekler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="bg-black text-white border-0 shadow-lg card-hover stagger-item cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mt-4 group-hover:text-gray-100 transition-colors duration-300">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 