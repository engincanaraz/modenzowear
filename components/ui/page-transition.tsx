"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Sayfa geçişleri için animasyon wrapper
 * Clean Code: Single Responsibility - Sadece sayfa geçişlerini yönetir
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            ease: [0.25, 0.25, 0.25, 0.75]
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -20,
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Loading overlay animasyonu
 * Clean Code: Tek sorumluluk - Sadece loading durumunu yönetir
 */
interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export function LoadingOverlay({ isLoading, message = "Yükleniyor..." }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 flex flex-col items-center space-y-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-gray-600 font-medium">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Scroll indicator - sayfa scroll durumunu gösterir
 * Clean Code: Tek amaç prensibi
 */
interface ScrollIndicatorProps {
  progress: number;
  className?: string;
}

export function ScrollIndicator({ progress, className }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={`fixed top-0 left-0 h-1 bg-gradient-to-r from-black to-gray-600 z-50 ${className}`}
      style={{ width: `${progress * 100}%` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.1 }}
    />
  );
}