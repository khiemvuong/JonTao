'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { ChevronDown, Aperture, Gem, Sparkles, ShoppingBag, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

/**
 * Hero — Poetic, seamless primary glassmorphism.
 * 
 * Layout: Full-screen canvas that blends perfectly into a rich primary-toned background.
 * Text appears first, fades out completely BEFORE the phone starts dominating and rotating.
 * Feature cards use delicate translucent glassmorphism.
 */
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Act 1: Text
  const opacityText = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.15], ['0%', '-15%']);
  const blurValue = useTransform(scrollYProgress, [0, 0.12], [0, 20]);
  const filterText = useMotionTemplate`blur(${blurValue}px)`;

  // Act 2: Phone appearance (visible immediately, scales down)
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.15], [1.1, 1]);

  // Act 2: Feature cards (delicate glassmorphism)
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.22, 0.35, 0.42], [0, 1, 1, 0]);
  const card1Y = useTransform(scrollYProgress, [0.15, 0.22, 0.35, 0.42], [20, 0, 0, -20]);

  // Card 2 runs until the end of the scroll
  const card2Opacity = useTransform(scrollYProgress, [0.45, 0.52, 0.95, 1], [0, 1, 1, 0]);
  const card2Y = useTransform(scrollYProgress, [0.45, 0.52, 0.95, 1], [20, 0, 0, -20]);

  // Scroll indicator fades out fast
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Act 3: Bottom transition to Announcements
  const overlayOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  // Scroll Progress Bar
  const progressBarWidth = useTransform(scrollYProgress, [0, 0.95], ['0%', '100%']);

  // Act 3: Phone flies up as scroll exits hero
  const phoneExitY = useTransform(scrollYProgress, [0.85, 1.0], ['0%', '-30%']);

  // Shared glass Card classes for poetic feel (matching the dark minimal design)
  const glassCardClass = "bg-[#0b0615]/50 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 sm:p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.03)] w-full sm:w-[340px] max-w-[90vw]";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#1a0b2e] h-[300vh] sm:h-[500vh]"
    >
      {/* ── Rich primary-toned background ── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0d0518]">
        
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
            {/* Ambient Glow behind the video - Optimized for mobile */}
            <div className="absolute w-[80vw] sm:w-[60vw] h-[40vh] sm:h-[60vh] bg-primary/20 rounded-full blur-[80px] sm:blur-[150px] opacity-40 animate-pulse" />
            
            <motion.div
              style={{ 
                opacity: phoneOpacity, 
                scale: phoneScale,
                y: phoneExitY,
                maskImage: 'radial-gradient(ellipse at center, black 15%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 15%, transparent 75%)'
              }}
              className="w-[110%] sm:w-full sm:max-w-[1200px] z-10 flex items-center justify-center mix-blend-screen will-change-[transform,opacity]"
            >
              {/* Full width/height so contain-fit displays the phone big and centered */}
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

        {/* ── Elegant Text section (appears first, then fades) ── */}
        <motion.div
           style={{
            y: useTransform(scrollYProgress, [0, 0.1], ['0%', '-10%']),
            opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
            filter: useMotionTemplate`blur(${useTransform(scrollYProgress, [0, 0.08], [0, 15])}px)`,
          }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
        >
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
        </motion.div>

        {/* ── Feature overlay cards (Delicate Glassmorphism) ── */}
        
        {/* Card 1 — Titanium Design (Matches bottom frame first 120 frames) */}
        <motion.div
           style={{ opacity: useTransform(scrollYProgress, [0.15, 0.22, 0.35, 0.42], [0, 1, 1, 0]), 
                    y: useTransform(scrollYProgress, [0.15, 0.22, 0.35, 0.42], [20, 0, 0, -20]) }}
          className="absolute z-30 left-4 right-4 sm:right-auto sm:left-[10%] top-[25%] sm:top-[45%] -translate-y-1/2 will-change-[opacity,transform] pointer-events-none"
        >
          <div className={glassCardClass}>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 shadow-inner">
              <Gem size={18} className="text-white/80" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-2 tracking-tight">Dáng Vẻ Tinh Tế</h3>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed font-light">
              Khung viền Titanium nguyên khối. Đẳng cấp nhẹ nhàng và bền vững vượt thời gian.
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Camera (Matches camera array after frame 120) */}
        <motion.div
           style={{ opacity: useTransform(scrollYProgress, [0.45, 0.52, 0.95, 1], [0, 1, 1, 0]), 
                    y: useTransform(scrollYProgress, [0.45, 0.52, 0.95, 1], [20, 0, 0, -20]) }}
          className="absolute z-30 left-4 right-4 sm:left-auto sm:right-[10%] top-[75%] sm:top-[55%] -translate-y-1/2 will-change-[opacity,transform] pointer-events-none"
        >
          <div className={glassCardClass}>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-5 border border-white/10 shadow-inner">
              <Aperture size={18} className="text-white/80" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-white font-medium mb-2 tracking-tight">Tuyệt Tác Ống Kính</h3>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed font-light">
              Hệ thống 3 camera 48MP. Thu trọn màn đêm kỳ ảo vào trong khung hình.
            </p>
          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
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

        {/* ── Transition overlay: fades hero into same dark as bridge ── */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 z-50 pointer-events-none bg-[#1a0b2e]"
        />

        {/* ── Scroll Progress Bar ── */}
        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/10 z-50">
          <motion.div 
            className="h-full bg-linear-to-r from-emerald-400 via-primary to-pink-500 rounded-r-full shadow-[0_0_10px_rgba(168,117,210,0.5)]"
            style={{ width: progressBarWidth }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
