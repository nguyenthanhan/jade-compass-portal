"use client";

import { motion } from "framer-motion";
import PixelButton from "@/components/ui/PixelButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-jade-950/20 via-transparent to-transparent" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          
          {/* Animated Compass Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-48 h-48 md:w-64 md:h-64"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 border-4 border-jade-500 rounded-full animate-pulse-slow" />
              
              {/* Inner compass */}
              <div className="absolute inset-4 border-2 border-jade-400 rounded-full" />
              
              {/* Cardinal points */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                border-l-[8px] border-l-transparent
                border-r-[8px] border-r-transparent
                border-b-[16px] border-b-jade-400" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 
                border-l-[8px] border-l-transparent
                border-r-[8px] border-r-transparent
                border-t-[16px] border-t-jade-400" />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[8px] border-t-transparent
                border-b-[8px] border-b-transparent
                border-r-[16px] border-r-jade-400" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[8px] border-t-transparent
                border-b-[8px] border-b-transparent
                border-l-[16px] border-l-jade-400" />
              
              {/* Center gem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 45, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-jade-400 to-jade-600 rotate-45"
                  style={{
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.8)"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-pixel text-2xl md:text-4xl text-jade-400 mb-4 text-glow">
              JADE COMPASS
            </h1>
            <p className="font-fantasy text-xl md:text-2xl text-amber-500 mb-2">
              Venture Into the Unknown
            </p>
            <p className="font-sans text-gray-400 max-w-md mx-auto">
              Embark on epic pixelated adventures across mystical realms. 
              Uncover ancient relics and forge your legend.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <PixelButton size="lg" variant="primary">
              Play Now
            </PixelButton>
            <PixelButton size="lg" variant="secondary">
              Watch Trailer
            </PixelButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1, duration: 1 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-jade-500 rounded-full p-1">
              <div className="w-1 h-2 bg-jade-500 rounded-full mx-auto animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}