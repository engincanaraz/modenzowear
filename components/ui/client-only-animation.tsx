"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Client-only animation wrapper
interface ClientOnlyAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ClientOnlyAnimation({ 
  children, 
  className = "",
  delay = 0 
}: ClientOnlyAnimationProps) {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Immediate visibility for content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  // Server-side: render content immediately without animations
  if (!isClient) {
    return (
      <div className={className} style={{ opacity: 1 }}>
        {children}
      </div>
    );
  }

  // Client-side: add gentle animations
  return (
    <div 
      className={`${className} transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-2'
      }`}
      style={{ opacity: 1 }} // Failsafe
    >
      {children}
    </div>
  );
}

// Grid animation component
interface ClientOnlyGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function ClientOnlyGrid({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: ClientOnlyGridProps) {
  const [isClient, setIsClient] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Stagger animation for grid items
    children.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * staggerDelay * 1000);
    });
  }, [children, staggerDelay]);

  // Server-side: render all content visible
  if (!isClient) {
    return (
      <div className={className} style={{ opacity: 1 }}>
        {children.map((child, index) => (
          <div key={index} style={{ opacity: 1 }}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  // Client-side: add stagger animations
  return (
    <div className={className}>
      {children.map((child, index) => (
        <div 
          key={index}
          className={`transition-all duration-500 ease-out ${
            visibleItems.includes(index) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-95 translate-y-1'
          }`}
          style={{ opacity: 1 }} // Failsafe
        >
          {child}
        </div>
      ))}
    </div>
  );
}