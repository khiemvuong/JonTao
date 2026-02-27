'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import NewsCard from '@/shared/components/ui/NewsCard';

const TechNews = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section ref={sectionRef} id="news" className="section-offset py-20 sm:py-32 bg-primary-light relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-3 sm:mb-6">
              Tin tức <span className="text-primary italic">công nghệ</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 font-light">Cập nhật những tính năng mới nhất từ Apple.</p>
          </div>
          <a href="/news" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all text-sm sm:text-base">
            Xem tất cả <ChevronRight size={20} />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <NewsCard image="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop" category="Tính năng" title="Khám phá sức mạnh của chip A17 Pro trên iPhone 15 Pro" desc="Hiệu năng vượt trội, hỗ trợ Ray Tracing phần cứng mang lại trải nghiệm gaming đỉnh cao." />
          <NewsCard image="https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=600&auto=format&fit=crop" category="Cập nhật iOS" title="iOS 18 có gì mới? Những thay đổi đáng chú ý nhất" desc="Tùy biến màn hình chính tự do hơn, Control Center thiết kế lại và nhiều tính năng AI hấp dẫn." />
          <NewsCard image="https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=600&auto=format&fit=crop" category="Cải tiến" title="Camera iPhone qua các thời kỳ: Sự tiến hóa ngoạn mục" desc="Từ camera đơn giản đến hệ thống ống kính chuyên nghiệp với khả năng quay video ProRes." />
        </div>
      </div>
    </section>
  );
};

export default TechNews;
