'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, CreditCard, Truck } from 'lucide-react';
import ServiceCard from '@/shared/components/ui/ServiceCard';

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={sectionRef} id="services" className="section-offset py-20 sm:py-32 bg-primary-light relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-100 h-100 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-violet-200/10 rounded-full blur-[80px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4 sm:mb-6">
            Dịch vụ <span className="text-primary italic">tận tâm</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Mọi thứ bạn cần để sở hữu chiếc iPhone mơ ước một cách nhẹ nhàng và dễ dàng nhất.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <ServiceCard icon={<ShieldCheck size={28} />} title="Bảo Hành Toàn Diện" desc="12 tháng tại cửa hàng. Lỗi 1 đổi 1 trong 30 ngày đầu. Không hỏi nhiều, không làm khó." />
          <ServiceCard icon={<CreditCard size={28} />} title="Trả Góp 0% - 0 Nợ Xấu" desc="Bao duyệt hồ sơ. Không cần chứng minh thu nhập. Chấp nhận nợ xấu, duyệt thẳng tay." />
          <ServiceCard icon={<Truck size={28} />} title="Giao Hàng Miễn Phí" desc="Freeship tận giường. Nhận máy nguyên seal, kiểm tra tại nhà, ưng ý mới thanh toán." />
        </div>
      </div>
    </section>
  );
};

export default Services;
