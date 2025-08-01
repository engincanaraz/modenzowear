"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Marka Bilgileri */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image
                  src="/images/logo.png"
                  alt="MODENZO WEAR Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif">MODENZO WEAR</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Premium erkek giyimde sade ve modern çizgi. 2020&apos;den bu yana
              kaliteli kumaşlar ve uygun fiyatlarla hizmetinizdeyiz.
            </p>
            <div className="flex space-x-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/905317112134"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-green-700 hover:scale-110">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2.004a10 10 0 0 0-8.71 14.84L2 22l5.32-1.34a10 10 0 1 0 4.72-18.65zM12 20a8 8 0 0 1-4.06-1.1l-.29-.18-3.15.8.84-3.07-.19-.31A8 8 0 1 1 12 20zm4.35-5.65c-.24-.12-1.4-.69-1.62-.76-.22-.08-.38-.12-.54.12-.15.24-.62.76-.76.91-.15.15-.29.17-.53.06a6.57 6.57 0 0 1-1.92-1.2 7.24 7.24 0 0 1-1.34-1.66c-.14-.24 0-.38.1-.5.1-.1.24-.25.36-.38.12-.13.16-.22.24-.36.08-.15.04-.28-.02-.4-.06-.12-.53-1.28-.72-1.74-.19-.46-.38-.4-.54-.4h-.46c-.15 0-.4.06-.61.28s-.8.78-.8 1.9.82 2.2.94 2.36c.12.15 1.61 2.45 3.9 3.44.55.24.98.38 1.32.49.56.18 1.06.15 1.46.09.45-.07 1.4-.57 1.6-1.12.2-.55.2-1.01.15-1.12-.06-.1-.22-.16-.46-.27z" />
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/modenzo.wear/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>

              {/* Shopier */}
              <a
                href="https://www.shopier.com/modenzowear"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="#categories" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Kategoriler */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Kategoriler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#polo" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Polo T-Shirt
                </Link>
              </li>
              <li>
                <Link href="#gomlek" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Gömlekler
                </Link>
              </li>
              <li>
                <Link href="#pantolon" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Pantolonlar
                </Link>
              </li>
              <li>
                <Link href="#ayakkabi" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Ayakkabılar
                </Link>
              </li>
              <li>
                <Link href="#aksesuar" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Aksesuarlar
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+90 531 711 21 34</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">yasinbellek@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">10:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MODENZO WEAR. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}