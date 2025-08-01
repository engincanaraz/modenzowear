"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            İletişim
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">
                Mağaza Bilgileri
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Adres</h4>
                    <p className="text-black/60">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Çalışma Saatleri</h4>
                    <p className="text-black/60">
                      Pazartesi - Pazar 10:00 - 22:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Telefon</h4>
                    <p className="text-black/60">
                      +90 531 711 21 34
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">E-posta</h4>
                    <p className="text-black/60">
                      yasinbellek@hotmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-white">
              <CardContent className="p-6">
                <h4 className="font-semibold text-black mb-4">Online Mağaza</h4>
                <p className="text-black/60 mb-4">
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

          {/* İletişim Formu */}
          <div>
            <Card className="border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-6">
                  Mesaj Gönder
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                      Ad Soyad
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Adınız ve soyadınız"
                      className="border-gray-300 focus:border-black focus:ring-black"
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
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Telefon numaranız"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                      Konu
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Mesajınızın konusu"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Mesaj
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={5}
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-black/90"
                  >
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}