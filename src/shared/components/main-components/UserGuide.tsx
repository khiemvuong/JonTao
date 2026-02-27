'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { ChevronRight, BookOpen } from 'lucide-react';

const guideItems = [
  { title: 'Cách chuyển dữ liệu từ máy cũ sang máy mới', time: '5 phút đọc' },
  { title: 'Thiết lập Face ID và Apple Pay an toàn', time: '3 phút đọc' },
  { title: 'Mẹo tiết kiệm pin cho iPhone hiệu quả', time: '4 phút đọc' },
  { title: 'Cách sử dụng camera để chụp ảnh đẹp như studio', time: '7 phút đọc' },
  { title: 'Bảo quản pin và sạc đúng cách', time: '3 phút đọc' },
];

const UserGuide = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <section ref={sectionRef} id="guide" className="section-offset py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6">
            Làm chủ IPhone <br className="sm:hidden" />
            <span className="font-script font-normal text-pink-400 text-[1.3em] leading-normal tracking-normal pr-2">dễ dàng</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Dành cho khách hàng mới mua máy, giúp bạn làm quen nhanh chóng.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="relative rounded-4xl sm:rounded-card-xl overflow-hidden shadow-2xl aspect-square"
          >
            <Image
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop"
              alt="User Guide"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white">
                <BookOpen size={32} className="mb-3 sm:mb-4" />
                <h3 className="font-display text-2xl sm:text-3xl mb-1 sm:mb-2">
                  Cẩm nang người dùng mới
                </h3>
                <p className="font-light text-white/80 text-sm sm:text-base">
                  Mọi thứ bạn cần biết từ lúc mở hộp đến khi thành thạo.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {guideItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {/* Hover dùng CSS transition, tách biệt khỏi scroll/entrance animation */}
                <div className="flex items-center justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary-light hover:bg-primary/10 transition-all duration-200 cursor-pointer group border border-transparent hover:border-primary/20 hover:translate-x-1">
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors text-sm sm:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{item.time}</p>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-primary transition-colors shrink-0 ml-2" size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuide;
