"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Package, Footprints, ShoppingBag, Droplets, Watch } from "lucide-react";
import { ClientOnlyAnimation, ClientOnlyGrid } from "@/components/ui/client-only-animation";
import { motion } from "framer-motion";

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
      description: "Çantalar, cüzdanlar, kemerler, saatler ve gözlükler",
      icon: Watch,
    },
  ];

  return (
    <section id="categories" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <ClientOnlyAnimation className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Ürün Kategorileri
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Premium erkek giyim koleksiyonumuzda her tarz için özel seçenekler
          </p>
        </ClientOnlyAnimation>

        <ClientOnlyGrid 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          staggerDelay={0.15}
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className="bg-black text-white border-0 shadow-lg cursor-pointer group h-full relative overflow-hidden"
                >
                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-800/0 to-gray-900/0 group-hover:from-gray-800/20 group-hover:to-gray-900/40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardHeader className="pb-4 p-4 sm:p-6 relative z-10">
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <motion.div
                        whileHover={{ 
                          scale: 1.2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </motion.div>
                    </motion.div>
                    
                    <CardTitle className="text-lg sm:text-xl font-bold text-white mt-3 sm:mt-4 group-hover:text-gray-100 transition-colors duration-300">
                      {category.name}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  {/* Bottom border animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-600 to-white"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </ClientOnlyGrid>
      </div>
    </section>
  );
} 