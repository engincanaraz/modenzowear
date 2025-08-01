"use client";

import { motion, MotionProps } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ReactNode } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'slideUp';
  delay?: number;
  duration?: number;
}

/**
 * Yeniden kullanılabilir animasyonlu section bileşeni
 * Clean Code: DRY prensibi - Tekrarlanan animasyon kodlarını tek yerde toplar
 */
export function AnimatedSection({
  children,
  className,
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.6,
  ...motionProps
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation();
  
  // Fallback: eğer animation çalışmazsa minimum 2 saniye sonra göster
  const [fallbackVisible, setFallbackVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFallbackVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Animasyon türlerine göre varyantlar
  const getAnimationVariants = (type: string) => {
    const variants: Record<string, any> = {
      fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration, 
            delay,
            ease: [0.25, 0.25, 0.25, 0.75]
          }
        }
      },
      fadeLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration, delay, ease: "easeOut" }
        }
      },
      fadeRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration, delay, ease: "easeOut" }
        }
      },
      scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration, delay, ease: "backOut" }
        }
      },
      slideUp: {
        hidden: { opacity: 0, y: 100 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration, delay, type: "spring", stiffness: 100 }
        }
      }
    };
    return variants[type] || variants.fadeUp;
  };

  // Animation durumu - hem intersection hem de fallback kontrolü
  const shouldAnimate = isInView || fallbackVisible;

  return (
    <motion.div
      ref={ref}
      initial="hidden"  
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={getAnimationVariants(animationType)}
      className={cn(className, !shouldAnimate && "opacity-0")}
      style={{
        // CSS fallback - eğer motion çalışmazsa
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0px)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered children animasyonu için wrapper
 * Clean Code: Tek amaç - Sadece stagger animasyonunu yönetir
 */
interface AnimatedStaggerProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}

export function AnimatedStagger({
  children,
  className,
  staggerDelay = 0.1,
  childDelay = 0
}: AnimatedStaggerProps) {
  const { ref, isInView } = useScrollAnimation();
  
  // Fallback visibility
  const [fallbackVisible, setFallbackVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFallbackVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const shouldAnimate = isInView || fallbackVisible;

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={staggerVariants}
      className={cn(className)}
      style={{
        // CSS fallback 
        opacity: shouldAnimate ? 1 : 0,
        transition: 'opacity 0.8s ease'
      }}
    >
      {children.map((child, index) => (
        <motion.div 
          key={index} 
          variants={childVariants}
          style={{
            // CSS fallback for children
            opacity: shouldAnimate ? 1 : 0,
            transform: shouldAnimate ? 'translateY(0px)' : 'translateY(10px)',
            transition: `opacity 0.5s ease ${index * staggerDelay}s, transform 0.5s ease ${index * staggerDelay}s`
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}