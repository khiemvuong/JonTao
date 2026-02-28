'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const PainPoint = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Fade effects for text lines - spaced out more to prevent overlap and scroll longer
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.40], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.40], [30, 0, 0, -30]);

  const opacity2 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [30, 0, 0, -30]);

  const opacity3 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.8, 0.9, 1], [30, 0, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#0a0710]" data-navbar-dark>
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
        
        {/* Line 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute max-w-5xl text-center px-4"
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium mb-2 sm:mb-4 tracking-tight leading-tight">
            Một chiếc điện thoại giá rẻ
          </h2>
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white/30 font-light tracking-tight leading-tight">
            có thể dễ dàng tìm thấy...
          </p>
        </motion.div>

        {/* Line 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute max-w-5xl text-center px-4"
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white/30 font-light tracking-tight leading-tight mb-2 sm:mb-4">
            ...nhưng <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-primary font-semibold drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">sự an tâm</span>
          </h2>
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white/30 font-light tracking-tight leading-tight">
            thì không.
          </p>
        </motion.div>

        {/* Line 3 - Impactful */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute max-w-5xl text-center px-4 flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-semibold mb-6 text-white drop-shadow-xl leading-tight">
            Bạn lo sợ <span className="text-red-500 italic">hàng dựng</span>?
          </h2>
          <p className="text-xl sm:text-3xl text-red-300/80 font-light max-w-2xl px-4 text-center">
            Ám ảnh vì những lời hứa bảo hành suông?
          </p>
          <div className="mt-12 w-px h-24 bg-linear-to-b from-red-500 to-transparent opacity-50"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default PainPoint;
