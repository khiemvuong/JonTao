'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu, Zap, Shield } from 'lucide-react';

/**
 * ExplodedView — Scroll-driven product teardown.
 *
 *
 * New layout: Title text is always visible at top.
 * Canvas occupies a contained area (not fullscreen), with feature cards beside/below it.
 * Scroll height is reduced for a tighter experience.
 * Includes a progress bar and step indicators for better scroll feedback.
 */
const ExplodedView = () => {
  const sectionRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Canvas fade in
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // Feature cards cycle in/out — evenly spaced across the scroll
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.18, 0.3, 0.38], [0, 1, 1, 0]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.18, 0.3, 0.38], [30, 0, 0, -20]);

  const card2Opacity = useTransform(scrollYProgress, [0.35, 0.43, 0.55, 0.63], [0, 1, 1, 0]);
  const card2Y = useTransform(scrollYProgress, [0.35, 0.43, 0.55, 0.63], [30, 0, 0, -20]);

  const card3Opacity = useTransform(scrollYProgress, [0.6, 0.68, 0.8, 0.88], [0, 1, 1, 0]);
  const card3Y = useTransform(scrollYProgress, [0.6, 0.68, 0.8, 0.88], [30, 0, 0, -20]);

  // Scroll Progress Bar
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Step indicators based on scroll thresholds
  // Card 1 active approx 0.1 - 0.38
  const step1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.38, 0.48], [0.3, 1, 1, 0.3]);
  const step1Scale = useTransform(scrollYProgress, [0, 0.1, 0.38, 0.48], [1, 1.2, 1.2, 1]);
  // Card 2 active approx 0.35 - 0.63
  const step2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.63, 0.73], [0.3, 1, 1, 0.3]);
  const step2Scale = useTransform(scrollYProgress, [0.25, 0.35, 0.63, 0.73], [1, 1.2, 1.2, 1]);
  // Card 3 active approx 0.6 - 0.88
  const step3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0.3, 1, 1]);
  const step3Scale = useTransform(scrollYProgress, [0.5, 0.6, 1], [1, 1.2, 1.2]);

  const glassCardClass =
    'bg-[#0a0710]/70 backdrop-blur-2xl border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_32px_rgba(255,255,255,0.02)] will-change-[backdrop-filter,opacity,transform] transform-[translateZ(0)]';

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[250vh] sm:h-[350vh]"
      data-navbar-dark
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#0a0710]">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[30%] left-[20%] w-100 h-100 bg-primary/20 rounded-full blur-[180px]" />
          <div className="absolute bottom-[20%] right-[20%] w-100 h-100 bg-violet-600/15 rounded-full blur-[150px]" />
        </div>

        {/* ── Single centered column: text directly above canvas ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-start sm:justify-center px-4 gap-2 sm:gap-5 pt-28 sm:pt-24">

          {/* Header */}
          <div className="z-30 text-center pointer-events-none shrink-0 mb-4 sm:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] sm:text-sm mb-2 sm:mb-4">
              <Cpu size={14} className="text-primary" />
              Minh Bạch Tuyệt Đối
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white font-medium tracking-tighter drop-shadow-2xl max-w-2xl mx-auto leading-tight">
              Chúng tôi không giấu giếm.{' '}
              <br className="hidden sm:block" />
              <span className="font-script font-normal text-transparent bg-clip-text bg-linear-to-r from-primary to-pink-300 text-[1.15em] tracking-normal leading-normal">
                soi đến từng con ốc.
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
              {hasMounted && (
                <video
                  suppressHydrationWarning
                  src="/assets/video/exploded-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* ── Feature cards overlay ── */}

        {/* Card 1 — Security (left side, appears first) */}
        <motion.div
          style={{ opacity: card1Opacity, y: card1Y }}
          className="absolute z-30 left-[12%] right-4 top-[55%] sm:bottom-auto sm:right-auto sm:left-[6%] sm:top-[50%] sm:-translate-y-1/2 sm:max-w-xs will-change-[opacity,transform]"
        >
          <div className={glassCardClass}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center mb-2 sm:mb-3 border border-white/5">
              <Shield size={14} className="text-white/80" />
            </div>
            <h3 className="font-display text-sm sm:text-base text-white/90 font-medium mb-1 tracking-wide">
              Bo Mạch Nguyên Bản
            </h3>
            <p className="text-white/40 text-[11px] sm:text-sm leading-relaxed font-light">
              Mainboard sáng loáng, không dấu vết khò hàn. Mọi linh kiện đều ở trạng thái nguyên thủy từ nhà máy.
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Performance (right side) */}
        <motion.div
           style={{ opacity: card2Opacity, y: card2Y }}
          className="absolute z-30 left-4 right-4 top-[65%] sm:bottom-auto sm:left-auto sm:right-[6%] sm:top-[55%] sm:-translate-y-1/2 sm:max-w-xs will-change-[opacity,transform]"
        >
          <div className={glassCardClass}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center mb-2 sm:mb-3 border border-white/5 sm:ml-auto">
              <Zap size={14} className="text-white/80" />
            </div>
            <h3 className="font-display text-sm sm:text-base text-white/90 font-medium mb-1 tracking-wide sm:text-right">
              Màn Hình Không Ép Kính
            </h3>
            <p className="text-white/40 text-[11px] sm:text-sm leading-relaxed font-light sm:text-right">
              Mọi lớp đệm, ron cao su kháng nước đều được vệ sinh và giữ độ đàn hồi tối đa, không xô lệch.
            </p>
          </div>
        </motion.div>

        {/* Card 3 — Architecture (bottom center, appears last) */}
        <motion.div
          style={{ opacity: card3Opacity, y: card3Y }}
          className="absolute z-30 left-[12%] right-4 top-[75%] sm:bottom-[8%] sm:left-1/2 sm:-translate-x-1/2 sm:right-auto sm:max-w-sm will-change-[opacity,transform]"
        >
          <div className={`${glassCardClass} sm:text-center sm:flex sm:flex-col sm:items-center`}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center mb-2 sm:mb-3 border border-white/5">
              <Cpu size={14} className="text-white/80" />
            </div>
            <h3 className="font-display text-sm sm:text-base text-white/90 font-medium mb-1 tracking-wide">
              Mạch Ghép Hoàn Hảo
            </h3>
            <p className="text-white/40 text-[11px] sm:text-sm leading-relaxed font-light">
              Mọi chi tiết cơ khí bên trong đều liền lạc. Không một chút xê dịch. Khẳng định độ mới lên đến 99%.
            </p>
          </div>
        </motion.div>

        {/* ── Scroll Progress & Step Indicators ── */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 sm:gap-8 z-40 pb-20 sm:pb-0">
          <motion.div style={{ opacity: step1Opacity, scale: step1Scale }} className="relative flex items-center justify-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white transition-colors duration-300" />
            <motion.div 
              style={{ opacity: useTransform(step1Opacity, [0.3, 1], [0, 1]) }}
              className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/40 border-t-transparent animate-spin" 
            />
          </motion.div>
          <div className="w-px h-8 sm:h-12 bg-white/20" />
          <motion.div style={{ opacity: step2Opacity, scale: step2Scale }} className="relative flex items-center justify-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white transition-colors duration-300" />
            <motion.div 
              style={{ opacity: useTransform(step2Opacity, [0.3, 1], [0, 1]) }}
              className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/40 border-t-transparent animate-spin" 
            />
          </motion.div>
          <div className="w-px h-8 sm:h-12 bg-white/20" />
          <motion.div style={{ opacity: step3Opacity, scale: step3Scale }} className="relative flex items-center justify-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white transition-colors duration-300" />
            <motion.div 
              style={{ opacity: useTransform(step3Opacity, [0.3, 1], [0, 1]) }}
              className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/40 border-t-transparent animate-spin" 
            />
          </motion.div>
        </div>

        {/* Bottom Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/5 z-50">
          <motion.div 
            className="h-full bg-linear-to-r from-blue-500 via-primary to-purple-500 rounded-r-full shadow-[0_0_10px_rgba(168,117,210,0.4)]"
            style={{ width: progressBarWidth }}
          />
        </div>

      </div>
    </section>
  );
};

export default ExplodedView;
