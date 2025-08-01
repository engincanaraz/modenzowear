"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SafeAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Güvenli animasyon bileşeni - hem CSS hem JS fallback ile
 * Garanti edilmiş içerik görünürlüğü
 */
export function SafeAnimatedSection({ 
  children, 
  className,
  delay = 0 
}: SafeAnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(true);  // Start as visible
  const [shouldShowFallback, setShouldShowFallback] = useState(true);  // Start as visible
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // IMMEDIATE visibility to ensure content shows
    setShouldShowFallback(true);
    setIsVisible(true);
    
    // Backup timer
    const fallbackTimer = setTimeout(() => {
      setShouldShowFallback(true);
      setIsVisible(true);
    }, 10);
    
    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [delay]);
  
  const shouldShow = isVisible || shouldShowFallback;
  
  return (
    <motion.div
      ref={ref}
      className={cn(
        className,
        'transition-all duration-700 ease-out',
        shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: shouldShow ? 1 : 0, 
        y: shouldShow ? 0 : 20 
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      style={{
        // Triple fallback
        opacity: shouldShow ? 1 : 0,
        transform: shouldShow ? 'translateY(0px)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
      }}
    >
      {children}
    </motion.div>
  );
}

interface SafeAnimatedGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function SafeAnimatedGrid({ 
  children, 
  className,
  staggerDelay = 0.1 
}: SafeAnimatedGridProps) {
  const [isVisible, setIsVisible] = useState(true);  // Start as visible
  const [shouldShowFallback, setShouldShowFallback] = useState(true);  // Start as visible
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // IMMEDIATE visibility
    setShouldShowFallback(true);
    setIsVisible(true);
    
    // Fallback timer
    const fallbackTimer = setTimeout(() => {
      setShouldShowFallback(true);
      setIsVisible(true);
    }, 10);
    
    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);
  
  const shouldShow = isVisible || shouldShowFallback;
  
  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          className={cn(
            'transition-all duration-500 ease-out',
            shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          )}
          initial={{ opacity: 0, y: 15 }}
          animate={{ 
            opacity: shouldShow ? 1 : 0, 
            y: shouldShow ? 0 : 15 
          }}
          transition={{ 
            duration: 0.5, 
            delay: shouldShow ? index * staggerDelay : 0,
            ease: "easeOut"
          }}
          style={{
            // CSS fallback
            opacity: shouldShow ? 1 : 0,
            transform: shouldShow ? 'translateY(0px)' : 'translateY(15px)',
            transition: `opacity 0.5s ease ${shouldShow ? index * staggerDelay : 0}s, transform 0.5s ease ${shouldShow ? index * staggerDelay : 0}s`
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}