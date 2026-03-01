'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ShoppingBag, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

/**
 * Hero — Static brand statement with cinematic video background.
 */
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#1a0b2e] h-screen"
    >
      {/* ── Rich primary-toned background ── */}
      <div className="relative w-full h-full overflow-hidden bg-[#0d0518]">
        
        {/* Rich ambient glow to make the primary tone pop */}
        <div className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-50">
          <div className="absolute top-[10%] left-[20%] w-[70vw] h-[70vh] bg-primary/20 rounded-full blur-[100px] sm:blur-[180px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vh] bg-pink-500/10 rounded-full blur-[100px] sm:blur-[180px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-violet-900/5 rounded-full blur-[120px] sm:blur-[200px]" />
        </div>

        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
        </div>

        {/* Subtle noise/grain texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0%200%20200%20200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter%20id='noiseFilter'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.65'%20numOctaves='3'%20stitchTiles='stitch'/%3E%3C/filter%3E%3Crect%20width='100%25'%20height='100%25'%20filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Floating animated sparkles/particles & Floral elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {mounted && (
            <>
              {/* Particles - Reduced count on mobile */}
              {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  style={{ 
                    left: `${(i * 23) % 100}%`, 
                    top: `${(i * 19) % 100}%` 
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.4, 0],
                    y: [-20, 20],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-white rounded-full blur-[0.5px] sm:blur-[1px]"
                />
              ))}



              {/* Botanical Branches - Static for performance */}
              <img
                src="/assets/images/branch.png"
                style={{ 
                  left: '-5%', 
                  top: '15%', 
                  transform: 'scale(1.2) rotate(-20deg)',
                  opacity: 0.08 
                }}
                className="absolute w-40 h-40 sm:w-96 sm:h-96 object-contain blur-[2px] sm:blur-[3px]"
              />
              <img
                src="/assets/images/branch.png"
                style={{ 
                  right: '-5%', 
                  bottom: '10%', 
                  transform: 'scale(1.5) rotate(160deg) scaleX(-1)',
                  opacity: 0.08 
                }}
                className="absolute w-48 h-48 sm:w-96 sm:h-96 object-contain blur-[2px] sm:blur-[3px]"
              />
            </>
          )}
        </div>

        {/* ── Contained seamless phone canvas with vignette mask ── */}
        {mounted && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* Ambient Glow behind the video */}
            <div className="absolute w-[80vw] sm:w-[60vw] h-[40vh] sm:h-[60vh] bg-primary/20 rounded-full blur-[80px] sm:blur-[150px] opacity-40 animate-pulse" />
            
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              style={{ 
                maskImage: 'radial-gradient(ellipse at center, black 15%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 15%, transparent 75%)'
              }}
              className="w-[110%] sm:w-full sm:max-w-[1200px] z-10 flex items-center justify-center mix-blend-screen will-change-[transform,opacity]"
            >
              <video
                suppressHydrationWarning
                src="/assets/video/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain opacity-100 image-render-auto"
              />
            </motion.div>
          </div>
        )}

        {/* ── Elegant Text section ── */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center max-w-5xl"
          >
            {/* Pill badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/80 font-sans text-xs sm:text-sm mb-10 tracking-[0.05em] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)]"
            >
              <ShieldCheck size={14} className="text-emerald-400" />
              Kiểm định 30 điểm <span className="text-white/20 px-1">|</span> Bảo hành 12 tháng
            </motion.div>
 
            {/* Title */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-[6.5rem] text-white font-medium tracking-[-0.03em] mb-6 leading-[1.05] drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Không chỉ là <br className="hidden sm:block" /> công nghệ.
            </h1>
 
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/60 max-w-2xl mx-auto leading-relaxed font-serif font-light mb-12 italic">
              Đó là sự{' '}
              <span className="font-script not-italic text-transparent bg-clip-text bg-linear-to-r from-emerald-300 via-primary to-pink-300 text-[1.4em] tracking-normal leading-none px-1">
                Nguyên Bản.
              </span>
            </p>
 
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-4.5 rounded-full font-sans font-semibold text-base transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]"
              >
                <div className="absolute inset-0 rounded-full bg-white/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <ShoppingBag size={20} className="relative z-10" />
                <span className="relative z-10">Khám phá sản phẩm</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Feature overlay cards (Delicate Glassmorphism) ── */}
        

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.3em] font-light">
            Cuộn để khám phá
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
