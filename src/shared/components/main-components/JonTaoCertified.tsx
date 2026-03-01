'use client';

import { motion } from 'motion/react';
import { Award, Apple } from 'lucide-react';

const JonTaoCertified = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#0a0710] overflow-hidden" data-navbar-dark>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <div className="mb-8 relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center group">
          {/* Outer Rotating Text Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-18px] sm:inset-[-25px]"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-yellow-500/40 translate-z-0">
              <defs>
                <path
                  id="textPath"
                  d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
                />
              </defs>
              <text fill="currentColor" className="text-[11px] font-medium tracking-[0.2em] uppercase">
                <textPath href="#textPath" startOffset="0%">
                   ★ JONTAO CERTIFIED ★ 30-POINT INSPECTION ★ ORIGINAL QUALITY ★ JONTAO CERTIFIED ★ 30-POINT INSPECTION ★ ORIGINAL QUALITY 
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Inner Badge Background (Metallic) */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#2a2210] via-[#0a0804] to-[#120f05] border border-yellow-500/30 shadow-[0_0_60px_rgba(234,179,8,0.2)] overflow-hidden flex items-center justify-center transition-transform duration-500">
            
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.15),transparent_60%)]" />
            
            {/* Inner Ring */}
            <div className="absolute inset-2 sm:inset-3 border border-yellow-500/10 rounded-full" />

            {/* Apple Icon & Text */}
            <div className="z-10 flex flex-col items-center">
              <Apple className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500 drop-shadow-[0_2px_15px_rgba(234,179,8,0.3)] mb-1 sm:mb-2 transition-transform duration-500 group-hover:scale-110" fill="currentColor" strokeWidth={1} />
              <div className="text-center mt-1">
                <div className="text-xs sm:text-sm font-display tracking-[0.25em] text-yellow-400 font-bold uppercase drop-shadow">Jon Táo</div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.3em] text-yellow-500/60 uppercase mt-0.5 font-light">Certified</div>
              </div>
            </div>

            {/* Shine effect that sweeps across the badge on HOVER */}
            <div
              className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-200%] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[200%]"
            />
          </div>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-4">
          Chứng nhận <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-600 font-bold">JonTao Certified</span>
        </h2>
        <p className="text-base sm:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Biểu tượng của chất lượng tuyệt đối. Mỗi chiếc máy mang huy hiệu này đồng nghĩa với việc nó đã vượt qua bài kiểm tra khắc nghiệt nhất trước khi đến tay bạn.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 flex items-center gap-2">
            <Award size={14} className="text-yellow-500" /> 30 Bước Kiểm Định
          </div>
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 flex items-center gap-2">
            <Award size={14} className="text-yellow-500" /> 1 Đổi 1 Tức Thì
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default JonTaoCertified;
