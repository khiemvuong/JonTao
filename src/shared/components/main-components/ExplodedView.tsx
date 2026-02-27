'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu, Zap, Shield } from 'lucide-react';
import FrameSequenceCanvas from '@/shared/components/ui/FrameSequenceCanvas';

/**
 * ExplodedView — Scroll-driven product teardown.
 *
 * New layout: Title text is always visible at top.
 * Canvas occupies a contained area (not fullscreen), with feature cards beside/below it.
 * Scroll height is reduced for a tighter experience.
 */
const ExplodedView = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Frame sequence plays across the full scroll
  const frameProgress = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  // Canvas fade in
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // Feature cards cycle in/out — evenly spaced across the scroll
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.18, 0.3, 0.38], [0, 1, 1, 0]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.18, 0.3, 0.38], [30, 0, 0, -20]);

  const card2Opacity = useTransform(scrollYProgress, [0.35, 0.43, 0.55, 0.63], [0, 1, 1, 0]);
  const card2Y = useTransform(scrollYProgress, [0.35, 0.43, 0.55, 0.63], [30, 0, 0, -20]);

  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.68, 0.8, 0.88], [0, 1, 1, 0]);
  const card3Y = useTransform(scrollYProgress, [0.6, 0.68, 0.8, 0.88], [30, 0, 0, -20]);

  const glassCardClass =
    'bg-[#0a0710]/70 backdrop-blur-2xl border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_32px_rgba(255,255,255,0.02)] will-change-[backdrop-filter,opacity,transform] transform-[translateZ(0)]';

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: '350vh' }}
      data-navbar-dark
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0a0710]">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[30%] left-[20%] w-100 h-100 bg-primary/20 rounded-full blur-[180px]" />
          <div className="absolute bottom-[20%] right-[20%] w-100 h-100 bg-violet-600/15 rounded-full blur-[150px]" />
        </div>

        {/* ── Single centered column: text directly above canvas ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 gap-3 sm:gap-5">

          {/* Header */}
          <div className="z-30 text-center pointer-events-none shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">
              <Cpu size={14} className="text-primary" />
              Khám phá chiều sâu mới
            </div>
            <h2 className="font-display text-3xl sm:text-6xl md:text-7xl text-white font-medium tracking-tighter drop-shadow-2xl">
              Sức mạnh ẩn sau{' '}
              <span className="font-script font-normal text-transparent bg-clip-text bg-linear-to-r from-primary to-pink-300 text-[1.15em] tracking-normal leading-normal">
                vẻ đẹp hoàn mỹ
              </span>
            </h2>
          </div>

          {/* Canvas — fixed height, sits directly below text */}
          <motion.div
            style={{ opacity: canvasOpacity }}
            className="relative w-full max-w-4xl shrink-0 z-10 pointer-events-none mix-blend-screen"
          >
            <div
              className="w-full h-[52vw] sm:h-[55vh] max-h-[60vh]"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 72%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 72%)',
              }}
            >
              <FrameSequenceCanvas
                folder="/assets/3d-exploded"
                prefix="ezgif-frame-"
                startIndex={1}
                frameCount={240}
                scrollProgress={frameProgress}
                padLength={3}
                className="w-full h-full opacity-90"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Feature cards overlay ── */}

        {/* Card 1 — Security (left side, appears first) */}
        <motion.div
          style={{ opacity: card1Opacity, y: card1Y }}
          className="absolute z-30 left-4 sm:left-[6%] top-[48%] sm:top-[50%] -translate-y-1/2 max-w-56 sm:max-w-xs will-change-[opacity,transform]"
        >
          <div className={glassCardClass}>
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-3 border border-white/5">
              <Shield size={16} className="text-white/80" />
            </div>
            <h3 className="font-display text-sm sm:text-base text-white/90 font-medium mb-1.5 tracking-wide">
              Miền Ký Ức An Toàn
            </h3>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">
              Secure Enclave che chở mọi thông điệp và hình ảnh thơ mộng của riêng bạn.
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Performance (right side) */}
        <motion.div
          style={{ opacity: card2Opacity, y: card2Y }}
          className="absolute z-30 right-4 sm:right-[6%] top-[72%] sm:top-[55%] -translate-y-1/2 max-w-56 sm:max-w-xs text-right sm:text-left flex flex-col items-end sm:items-start will-change-[opacity,transform]"
        >
          <div className={glassCardClass}>
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-3 border border-white/5 ml-auto sm:ml-0">
              <Zap size={16} className="text-white/80" />
            </div>
            <h3 className="font-display text-sm sm:text-base text-white/90 font-medium mb-1.5 tracking-wide">
              Hiệu Suất Vô Tận
            </h3>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">
              Ray-tracing phần cứng mang đến những dải sáng chân thực nhất trong lòng bàn tay.
            </p>
          </div>
        </motion.div>

        {/* Card 3 — Architecture (bottom center, appears last) */}
        <motion.div
          style={{ opacity: card3Opacity, y: card3Y }}
          className="absolute z-30 left-1/2 -translate-x-1/2 bottom-[4%] sm:bottom-[8%] max-w-64 sm:max-w-sm will-change-[opacity,transform]"
        >
          <div className={`${glassCardClass} text-center flex flex-col items-center`}>
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-3 border border-white/5">
              <Cpu size={16} className="text-white/80" />
            </div>
            <h3 className="font-display text-sm sm:text-base text-white/90 font-medium mb-1.5 tracking-wide">
              Trái Tim A19 Pro
            </h3>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">
              Kiến trúc chip đột phá, thổi bùng sự sống cho từng điểm pixel trên màn hình.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplodedView;
