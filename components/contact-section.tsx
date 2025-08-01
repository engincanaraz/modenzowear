"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            İletişim
          </h2>
          <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto px-4">
            Sorularınız için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* İletişim Bilgileri */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">
                Mağaza Bilgileri
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Adres</h4>
                    <p className="text-black/60 text-sm sm:text-base">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Çalışma Saatleri</h4>
                    <p className="text-black/60 text-sm sm:text-base">
                      Pazartesi - Pazar 10:00 - 22:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Telefon</h4>
                    <p className="text-black/60 text-sm sm:text-base">
                      +90 531 711 21 34
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">E-posta</h4>
                    <p className="text-black/60 text-sm sm:text-base">
                      yasinbellek@hotmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-white">
              <CardContent className="p-4 sm:p-6">
                <h4 className="font-semibold text-black mb-3 sm:mb-4 text-base sm:text-lg">Online Mağaza</h4>
                <p className="text-black/60 mb-4 text-sm sm:text-base">
                  Tüm ürünlerimizi online olarak inceleyebilir ve sipariş verebilirsiniz.
                </p>
                <Button 
                  className="w-full bg-black text-white hover:bg-black/90 text-sm sm:text-base"
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

          {/* İletişim Formu */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">
              Mesaj Gönderin
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Ad Soyad
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    E-posta
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Telefon numaranız"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Konu
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Mesaj konusu"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  placeholder="Mesajınızı buraya yazın..."
                  rows={4}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-black/90 text-sm sm:text-base"
              >
                Mesaj Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}