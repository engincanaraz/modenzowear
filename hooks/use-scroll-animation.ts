"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * Intersection Observer hook - framer-motion'dan bağımsız
 * Clean Code: Tek sorumluluk prensibi
 */
function useInView(ref: React.RefObject<HTMLDivElement>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
        ...options
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
}

/**
 * Scroll-based animasyonlar için özel hook
 * Clean Code: Single Responsibility - Sadece scroll animasyonlarını yönetir
 */
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    threshold,
    rootMargin: "0px 0px -100px 0px" 
  });

  return { ref, isInView };
}

/**
 * Staggered animasyonlar için hook
 * Clean Code: DRY - Tekrarlanan stagger animasyonlarını tek yerden yönetir
 */
export function useStaggerAnimation(itemCount: number, delay = 0.1) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    if (isInView) {
      const items = Array.from({ length: itemCount }, (_, i) => i);
      items.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item]);
        }, index * delay * 1000);
      });
    }
  }, [isInView, itemCount, delay]);

  return { ref, visibleItems, isInView };
}

/**
 * Scroll progress hook - navbar ve progress bar için
 * Clean Code: Tek sorumluluk prensibi
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
}

/**
 * Smooth scroll to section helper
 * Clean Code: Yeniden kullanılabilir fonksiyon
 */
export function smoothScrollToSection(sectionId: string, offset = 80) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}