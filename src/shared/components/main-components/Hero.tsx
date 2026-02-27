'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { Flower2, ChevronDown, Aperture, Gem, Sparkles, ShoppingBag, Phone, ShieldCheck } from 'lucide-react';
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

  // Act 2: Phone appearance (fades in as text fades out)
  const phoneOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const phoneScale = useTransform(scrollYProgress, [0.1, 0.18], [0.9, 1]);
  // Frame sequence plays from 15% to 85%
  const frameProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  // Act 2: Feature cards (delicate glassmorphism)
  const card1Opacity = useTransform(scrollYProgress, [0.25, 0.32, 0.45, 0.52], [0, 1, 1, 0]);
  const card1Y = useTransform(scrollYProgress, [0.25, 0.32, 0.45, 0.52], [20, 0, 0, -20]);

  const card2Opacity = useTransform(scrollYProgress, [0.52, 0.59, 0.72, 0.79], [0, 1, 1, 0]);
  const card2Y = useTransform(scrollYProgress, [0.52, 0.59, 0.72, 0.79], [20, 0, 0, -20]);

  const card3Opacity = useTransform(scrollYProgress, [0.75, 0.82, 0.95, 1], [0, 1, 1, 0]); // Pushed later so it doesn't overlap early
  const card3Y = useTransform(scrollYProgress, [0.75, 0.82, 0.95, 1], [20, 0, 0, -20]);

  // Scroll indicator fades out fast
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Act 3: Bottom transition to Announcements
  const overlayOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  // Act 3: Phone flies up as scroll exits hero
  const phoneExitY = useTransform(scrollYProgress, [0.82, 1.0], ['0%', '-30%']);

  // Shared glass Card classes for poetic feel
  const glassCardClass = "bg-[#1a0b2e]/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 sm:p-7 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_0_32px_rgba(255,255,255,0.05)] will-change-[backdrop-filter,opacity,transform] transform-[translateZ(0)]";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#1a0b2e]"
      style={{ height: '500vh' }}
    >
      {/* ── Rich primary-toned background ── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#1a0b2e]">
        
        {/* Rich ambient glow to make the primary tone pop */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-[10%] left-[20%] w-150 h-150 bg-primary/40 rounded-full blur-[200px]" />
          <div className="absolute bottom-[10%] right-[10%] w-125 h-125 bg-pink-400/30 rounded-full blur-[180px]" />
        </div>

        {/* ── Decorative floating flowers (visible on initial view, fade with text) ── */}
        <motion.div
          style={{ opacity: opacityText }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          {/* Top-left large flower */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 0.25, scale: 1, rotate: 0 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
            className="absolute top-[8%] left-[5%] text-pink-300"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <Flower2 size={72} strokeWidth={0.8} />
            </motion.div>
          </motion.div>

          {/* Top-right medium flower */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 30 }}
            animate={{ opacity: 0.18, scale: 1, rotate: 0 }}
            transition={{ duration: 2.2, ease: 'easeOut', delay: 0.6 }}
            className="absolute top-[12%] right-[8%] text-primary"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              <Flower2 size={52} strokeWidth={0.8} />
            </motion.div>
          </motion.div>

          {/* Bottom-left small flower */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.8 }}
            className="absolute bottom-[18%] left-[10%] text-pink-200"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Flower2 size={38} strokeWidth={0.8} />
            </motion.div>
          </motion.div>

          {/* Bottom-right large flower */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
            transition={{ duration: 2.5, ease: 'easeOut', delay: 0.5 }}
            className="absolute bottom-[10%] right-[5%] text-primary"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <Flower2 size={64} strokeWidth={0.8} />
            </motion.div>
          </motion.div>

          {/* Center-left floating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 1 }}
            className="absolute top-[45%] left-[2%] text-pink-300"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Flower2 size={28} strokeWidth={0.8} />
            </motion.div>
          </motion.div>

          {/* Center-right floating */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.9 }}
            className="absolute top-[35%] right-[3%] text-primary"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <Flower2 size={22} strokeWidth={0.8} />
            </motion.div>
          </motion.div>

          {/* Top-center small accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 1.2 }}
            className="absolute top-[5%] left-[48%] text-pink-200"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <Flower2 size={18} strokeWidth={0.8} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Contained seamless phone canvas with vignette mask ── */}
        {/* It scales from 0.9 -> 1 to feel like it emerges from the void.
            Masking fades the hard edges of the raw image into our custom primary background. */}
        <motion.div
          style={{ 
            opacity: phoneOpacity, 
            scale: phoneScale,
            y: phoneExitY,
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[170%] sm:left-0 sm:right-0 sm:w-full sm:translate-x-0 z-10 flex items-center justify-center pointer-events-none mix-blend-screen"
        >
          {/* Full width/height so contain-fit displays the phone big and centered */}
          <FrameSequenceCanvas
            folder="/assets/3d-frame"
            prefix="ezgif-frame-"
            startIndex={26}
            frameCount={215}
            scrollProgress={frameProgress}
            padLength={3}
            className="w-full h-full opacity-90"
          />
        </motion.div>

        {/* ── Elegant Text section (appears first, then fades) ── */}
        <motion.div
          style={{
            y: yText,
            opacity: opacityText,
            filter: filterText,
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
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/3 backdrop-blur-md border border-white/10 text-white/60 font-light text-xs sm:text-sm mb-6 shadow-sm">
              <ShieldCheck size={13} className="text-emerald-400" />
              Kiểm định 30 điểm · Bảo hành 12 tháng
            </div>

            {/* Title */}
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-white font-medium tracking-tighter mb-4 drop-shadow-2xl">
              Jon Táo
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl md:text-2xl text-white/50 max-w-xl mx-auto leading-relaxed font-light mb-8 sm:mb-10">
              Mỗi chiếc iPhone đều qua kiểm định kỹ lưỡng —{' '}
              <span className="font-script font-normal text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-primary text-[1.35em] tracking-normal leading-normal whitespace-nowrap">
                yên tâm như mới.
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
                className="group inline-flex items-center gap-2.5 bg-primary text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary-hover hover:-translate-y-0.5"
              >
                <ShoppingBag size={18} />
                Khám phá sản phẩm
              </Link>
              <a
                href="tel:0909000000"
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base text-white/70 border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <Phone size={16} />
                Liên hệ ngay
              </a>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 mt-2 text-white/30 text-xs"
            >
              {['Bảo hành 12 tháng', 'Kiểm tra 30 điểm', 'Đổi trả 7 ngày'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary/60 inline-block" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Feature overlay cards (Delicate Glassmorphism) ── */}
        
        {/* Card 1 — Camera */}
        <motion.div
          style={{ opacity: card1Opacity, y: card1Y }}
          className="absolute z-30 left-4 sm:left-[8%] top-[40%] -translate-y-1/2 max-w-60 sm:max-w-xs will-change-[opacity,transform] pointer-events-none"
        >
          <div className={glassCardClass}>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
              <Aperture size={20} className="text-white" />
            </div>
            <h3 className="font-display text-base sm:text-lg text-white/90 font-medium mb-2 tracking-wide">Tuyệt Tác Ống Kính</h3>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">
              Hệ thống 3 camera 48MP. Thu trọn màn đêm kỳ ảo vào trong khung hình.
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Titanium Design */}
        <motion.div
          style={{ opacity: card2Opacity, y: card2Y }}
          className="absolute z-30 right-4 sm:right-[8%] top-[60%] -translate-y-1/2 max-w-60 sm:max-w-xs text-right sm:text-left flex flex-col items-end sm:items-start will-change-[opacity,transform] pointer-events-none"
        >
          <div className={glassCardClass}>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20 ml-auto sm:ml-0">
              <Gem size={20} className="text-white" />
            </div>
            <h3 className="font-display text-base sm:text-lg text-white/90 font-medium mb-2 tracking-wide">Dáng Vẻ Tinh Tế</h3>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">
              Khung viền Titanium nguyên khối. Đẳng cấp, nhẹ nhàng và bền vững vượt thời gian.
            </p>
          </div>
        </motion.div>

        {/* Card 3 — Display */}
        <motion.div
          style={{ opacity: card3Opacity, y: card3Y }}
          className="absolute z-30 left-1/2 -translate-x-1/2 bottom-[12%] max-w-60 sm:max-w-xs will-change-[opacity,transform] pointer-events-none"
        >
          <div className={`${glassCardClass} text-center flex flex-col items-center`}>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
              <Sparkles size={20} className="text-white" />
            </div>
            <h3 className="font-display text-base sm:text-lg text-white/90 font-medium mb-2 tracking-wide">Trí Tuệ Apple AI</h3>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">
              Apple Intelligence viết, tóm tắt, sáng tác — trợ lý thông minh riêng, hiểu ngữ cảnh và bảo vệ quyền riêng tư tuyệt đối.
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
