"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Siyah Polo T-Shirt",
    price: "₺199",
    originalPrice: "₺299",
    image: "/images/polo-siyah.jpg",
    category: "Polo T-Shirt",
    isNew: true,
    discount: 33
  },
  {
    id: 2,
    name: "Beyaz Polo T-Shirt",
    price: "₺199",
    originalPrice: "₺299",
    image: "/images/polo-beyaz.jpg",
    category: "Polo T-Shirt",
    isNew: true,
    discount: 33
  },
  {
    id: 3,
    name: "Çizgili Gömlek",
    price: "₺299",
    originalPrice: "₺399",
    image: "/images/gomlek-cizgili.jpg",
    category: "Gömlekler",
    isNew: false,
    discount: 25
  },
  {
    id: 4,
    name: "Chino Pantolon",
    price: "₺399",
    originalPrice: "₺499",
    image: "/images/pantolon-chino.jpg",
    category: "Pantolonlar",
    isNew: false,
    discount: 20
  },
  {
    id: 5,
    name: "Spor Ayakkabı",
    price: "₺599",
    originalPrice: "₺799",
    image: "/images/ayakkabi-spor.jpg",
    category: "Ayakkabılar",
    isNew: true,
    discount: 25
  },
  {
    id: 6,
    name: "Erkek Parfüm",
    price: "₺299",
    originalPrice: "₺399",
    image: "/images/parfum-erkek.jpg",
    category: "Parfüm",
    isNew: false,
    discount: 25
  }
];

export function FeaturedProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            En popüler ve en çok tercih edilen ürünlerimizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="relative">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Ürün Görseli</span>
                  </div>
                </div>
                
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-semibold">
                    YENİ
                  </div>
                )}
                
                {product.discount > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold">
                    %{product.discount} İNDİRİM
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <Button size="icon" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-black/60 uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-black mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-black">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-black/40 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-black text-white hover:bg-black/90"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Sepete Ekle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
          >
            Tüm Ürünleri Gör
          </Button>
        </div>
      </div>
    </section>
  );
} 