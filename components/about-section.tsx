"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sol Sütun - Mağaza Bilgileri */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Mağaza Bilgileri
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-black mb-2">Adres</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-black mt-0.5" />
                    <div>
                      <p className="text-black">İstanbul, Türkiye</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">Çalışma Saatleri</h3>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-black mt-0.5" />
                    <div>
                      <p className="text-black">Pazartesi - Pazar</p>
                      <p className="text-black">10:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">İletişim</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-black" />
                      <span className="text-black">WhatsApp: +90 531 711 21 34 </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-black" />
                      <span className="text-black">Email: yasinbellek@hotmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Online Mağaza
                </h3>
                <p className="text-black/70 mb-4">
                  Tüm ürünlerimizi online olarak inceleyebilir ve sipariş verebilirsiniz.
                </p>
                <Button 
                  className="w-full bg-black text-white hover:bg-black/90"
                  asChild
                >
                  <a href="https://shopier.com/modenzowear" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Mağazayı Ziyaret Et
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sağ Sütun - Neden MODENZO WEAR */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              Neden MODENZO WEAR?
            </h2>
            <p className="text-lg text-black/70 leading-relaxed mb-8">
              Premium kalite, hızlı teslimat ve müşteri memnuniyeti odaklı hizmet anlayışımızla erkek giyimde fark yaratıyoruz. Aynı gün kargo, kolay değişim ve 7/24 destek ile alışveriş deneyiminizi en üst seviyeye çıkarıyoruz.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-black">Premium kaliteli kumaşlar ve modern tasarımlar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-black">Aynı gün kargo ve hızlı teslimat</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-black">14 gün içinde ücretsiz değişim ve iade</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-black">WhatsApp üzerinden 7/24 müşteri desteği</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-black">Toptan satış için özel fiyatlar ve koşullar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}