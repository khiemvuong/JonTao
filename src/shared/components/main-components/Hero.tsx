'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { ChevronDown, Aperture, Gem, Sparkles, ShoppingBag, Phone, ShieldCheck } from 'lucide-react';
import FrameSequenceCanvas from '@/shared/components/ui/FrameSequenceCanvas';
import Link from 'next/link';

/**
 * Hero — Poetic, seamless primary glassmorphism.
 * 
 * Layout: Full-screen canvas that blends perfectly into a rich primary-toned background.
 * Text appears first, fades out completely BEFORE the phone starts dominating and rotating.
 * Feature cards use delicate translucent glassmorphism.
 */
const Hero = () => {
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

  // Act 2: Phone appearance (visible almost immediately)
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.1], [1.05, 1]);
  // Frame sequence plays across almost the whole scroll to utilize all 240 frames
  const frameProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

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

  // Act 3: Phone flies up as scroll exits hero
  const phoneExitY = useTransform(scrollYProgress, [0.85, 1.0], ['0%', '-30%']);

  // Shared glass Card classes for poetic feel (matching the dark minimal design)
  const glassCardClass = "bg-[#0b0615]/50 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 sm:p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.03)] w-full sm:w-[340px] max-w-[90vw]";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#1a0b2e]"
      style={{ height: '500vh' }}
    >
      {/* ── Rich primary-toned background ── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0d0518]">
        
        {/* Rich ambient glow to make the primary tone pop */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vh] bg-primary/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vh] bg-pink-500/10 rounded-full blur-[150px]" />
        </div>

        {/* ── Contained seamless phone canvas with vignette mask ── */}
        <motion.div
          style={{ 
            opacity: phoneOpacity, 
            scale: phoneScale,
            y: phoneExitY,
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[150%] sm:max-w-[1200px] sm:left-1/2 sm:w-full sm:translate-x-[-50%] z-10 flex items-center justify-center pointer-events-none mix-blend-screen"
        >
          {/* Full width/height so contain-fit displays the phone big and centered */}
          <FrameSequenceCanvas
            folder="/assets/3d-frame"
            prefix="frame-"
            startIndex={1}
            frameCount={240}
            scrollProgress={frameProgress}
            padLength={1}
            hideSkeleton
            className="w-full h-full opacity-100"
          />
        </motion.div>

        {/* ── Elegant Text section (appears first, then fades) ── */}
        <motion.div
           style={{
            y: useTransform(scrollYProgress, [0, 0.1], ['0%', '-15%']),
            opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
            filter: useMotionTemplate`blur(${useTransform(scrollYProgress, [0, 0.08], [0, 20])}px)`,
          }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 font-light text-xs sm:text-sm mb-6 shadow-sm">
              <ShieldCheck size={14} className="text-emerald-400" />
              Kiểm định 30 điểm · Bảo hành 12 tháng
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-[5rem] text-white font-medium tracking-tight mb-4 drop-shadow-2xl max-w-4xl leading-[1.1]">
              Không chỉ là công nghệ.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-xl mx-auto leading-relaxed font-light mb-8 sm:mb-10">
              Đó là sự{' '}
              <span className="font-serif font-medium text-transparent bg-clip-text bg-linear-to-r from-emerald-200 via-primary to-pink-300 text-[1.4em] tracking-tight leading-normal whitespace-nowrap">
                Nguyên Bản.
              </span>
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 bg-white text-black px-7 sm:px-8 py-3.5 rounded-full font-medium text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105"
              >
                <ShoppingBag size={18} />
                Khám phá sản phẩm
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
      </div>
    </section>
  );
};

export default Hero;
