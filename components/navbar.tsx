"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Anasayfa", href: "#home" },
    { name: "Kategoriler", href: "#categories" },
    { name: "Hakkımızda", href: "#about" },
    { name: "İletişim", href: "#contact" },
  ];

  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black py-3 sm:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
              <Image
                src="/images/logo.png"
                alt="MODENZO WEAR Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white font-serif">MODENZO WEAR</span>
          </div>
          <div></div>
        </div>
      </header>
    );
  }
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "navbar-scrolled py-2 shadow-lg"
          : "bg-black py-3 sm:py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2 sm:space-x-3 transition-smooth hover:scale-105"
        >
          
          <span className="text-lg sm:text-xl font-bold text-white font-serif">MODENZO WEAR</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
              className="text-white/80 hover:text-white transition-all duration-300 text-sm lg:text-base relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-smooth">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-smooth">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-smooth relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              0
            </span>
          </Button>
          
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:hidden">
          <Button variant="ghost" size="icon" className="text-white transition-smooth p-2">
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white transition-smooth p-2">
            <User className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white transition-smooth p-2 relative">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center animate-pulse">
              0
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white transition-smooth p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md shadow-md animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-white/80 hover:text-white transition-all duration-300 py-3 text-left text-base stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-smooth mt-4 btn-hover"
              asChild
            >
              <a href="https://shopier.com/modenzowear" target="_blank" rel="noopener noreferrer">
                Mağazayı Ziyaret Et
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}