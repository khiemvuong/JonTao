'use client';

import { motion } from 'motion/react';
import { Gift, CalendarDays } from 'lucide-react';

const Announcements = () => {
  return (
    <section className="bg-primary w-full overflow-hidden">
      <div className="py-8 sm:py-12 text-white relative">
        {/* Animated background shimmer */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%] bg-linear-to-br from-white/20 via-transparent to-white/10 animate-pulse" />
        </div>

        <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20">
            {/* Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 sm:gap-4 bg-white/6 p-6 sm:p-8"
            >
              <div className="bg-white text-primary p-2.5 sm:p-3 rounded-full shrink-0">
                <Gift size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                  Khuyến mãi Mùa Xuân
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Tặng ngay bó hoa tươi và ốp lưng Magsafe khi mua iPhone 14 Pro Max trở lên.
                </p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 sm:gap-4 bg-white/6 p-6 sm:p-8"
            >
              <div className="bg-white text-primary p-2.5 sm:p-3 rounded-full shrink-0">
                <CalendarDays size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                  Lịch Nghỉ Tết
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Cửa hàng nghỉ từ 28 Tết đến mùng 5 Tết. Khai xuân mùng 6.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
