'use client';

import { motion } from 'motion/react';
import { Sparkles, Gift } from 'lucide-react';

const TheNudge = () => {
  return (
    <section className="relative w-full py-24 sm:py-40 bg-[#0a0710] overflow-hidden" data-navbar-dark>
      {/* Background gradients for dramatic spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-primary/20 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Animated Gift Box Placeholder */}
          <div className="w-24 h-24 mb-6 rounded-2xl bg-linear-to-br from-primary/20 to-purple-600/10 border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,117,210,0.3)] relative group">
            <Gift size={40} className="text-primary group-hover:scale-110 transition-transform duration-300" />
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-10px] border border-dashed border-primary/20 rounded-2xl"
            />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl text-white font-medium tracking-tight mb-5 drop-shadow-lg">
            Đừng chờ đợi cho sự hoàn hảo.
          </h2>
          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Đặc quyền nâng cấp <strong className="text-white font-medium">Gói Bảo Hành VIP</strong> + <strong className="text-white font-medium">Bộ Quà Tặng Độc Quyền</strong> chỉ dành cho 50 khách hàng đầu tiên trong tháng này.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium text-lg overflow-hidden shadow-[0_0_40px_rgba(168,117,210,0.4)] hover:shadow-[0_0_60px_rgba(168,117,210,0.6)] transition-all"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary via-purple-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 hidden sm:inline-flex items-center gap-2">
              Khám Phá Đặc Quyền Của Bạn <Sparkles size={18} />
            </span>
            <span className="relative z-10 sm:hidden inline-flex items-center gap-2">
              Lấy Đặc Quyền Ngay <Sparkles size={18} />
            </span>
          </motion.button>
          <p className="mt-4 text-white/30 text-xs sm:text-sm">Chỉ còn <span className="text-primary font-bold">12</span> suất tháng này.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheNudge;
