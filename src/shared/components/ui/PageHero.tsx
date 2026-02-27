'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageHeroProps {
  icon?: ReactNode;
  titlePrefix: string;
  titleHighlight: string;
  description: ReactNode;
  subtitle?: ReactNode;
}

export default function PageHero({ icon, titlePrefix, titleHighlight, description, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-primary-light text-center overflow-hidden min-h-[50vh] flex flex-col items-center justify-center">
      {/* 1. Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -50, 50, 50, 0],
            scale: [1, 1.1, 1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0, 50, 0],
            y: [0, 50, -50, -50, 0],
            scale: [1, 1.2, 1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-pink-300/20 rounded-full blur-[100px]"
        />
      </div>

      {/* 2. Dotted Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* 3. Main Content Container (Glassmorphism effect underneath the text) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center w-full">
        {icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/60 backdrop-blur-md shadow-xl shadow-primary/10 rounded-3xl mb-8 text-primary border border-white/40"
          >
            {icon}
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: icon ? 0.1 : 0, ease: 'easeOut' }}
          className="font-display text-5xl sm:text-6xl md:text-8xl text-gray-900 mb-6 tracking-tight drop-shadow-sm"
        >
          {titlePrefix}{' '}
          <span className="font-script font-normal text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-primary text-[1.2em] leading-normal tracking-normal pr-2 whitespace-nowrap">
            {titleHighlight}
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: icon ? 0.2 : 0.1, ease: 'easeOut' }}
          className="text-lg sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.div>

        {subtitle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: icon ? 0.4 : 0.3 }}
            className="text-sm sm:text-base px-6 py-2 mt-8 sm:mt-10 rounded-full bg-white/50 backdrop-blur-sm border border-black/5 text-gray-500 shadow-sm"
          >
            {subtitle}
          </motion.div>
        )}
      </div>
      
      {/* 4. Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
