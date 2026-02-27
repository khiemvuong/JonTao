'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Flower2 } from 'lucide-react';

const StoreVibe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.92, 1, 1, 0.96]);
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotateImg = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -2]);

  return (
    <section ref={ref} id="vibe" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          style={{ y, scale }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-gray-900 leading-tight">
            Không gian <br />
            <span className="font-script font-normal text-pink-400 text-[1.3em] leading-normal tracking-normal px-2">thơ mộng</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full" />
          <p className="text-base sm:text-xl text-gray-600 font-light leading-relaxed">
            Tại Jon Táo, mua sắm không chỉ là giao dịch. Đó là một buổi dạo
            chơi trong khu vườn ngập tràn hương hoa. Cửa hàng luôn đảm bảo{' '}
            <strong className="font-medium text-primary">sạch sẽ, mát mẻ</strong>,
            thoang thoảng mùi hương dễ chịu.
          </p>
          <p className="text-base sm:text-xl text-gray-600 font-light leading-relaxed">
            Và vâng, chúng tôi có bán hoa. Một bó hoa xinh xắn kèm chiếc
            iPhone mới sẽ là món quà tuyệt vời nhất dành cho người thương, hoặc
            cho chính bạn.
          </p>
        </motion.div>

        <motion.div
          style={{ y: imgY, rotateZ: rotateImg }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative rounded-t-full rounded-b-4xl sm:rounded-b-card-xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white aspect-3/4">
            <Image
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop"
              alt="Store Vibe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-primary/20 z-10"
          >
            <Flower2 className="text-primary w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-3" />
            <p className="font-display font-medium text-xl sm:text-2xl text-gray-800">
              Hoa tươi mỗi ngày
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Tặng kèm khi mua máy
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreVibe;
