'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/shared/components/ui/ProductCard';
import Link from 'next/link';

const Products = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="products" className="section-offset py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-3 sm:mb-6">
              Sản phẩm{' '}
              <span className="text-primary italic">nổi bật</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 font-light">
              iPhone Cũ &amp; Mới - Cam kết nguyên bản, bảo hành dài hạn.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-primary text-white font-medium whitespace-nowrap text-sm sm:text-base">Tất cả</button>
            <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors whitespace-nowrap text-sm sm:text-base">Máy Mới 100%</button>
            <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors whitespace-nowrap text-sm sm:text-base">Máy Cũ 99%</button>
            <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors whitespace-nowrap text-sm sm:text-base">Phụ kiện</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <ProductCard name="iPhone 15 Pro Max" color="Titan Tự Nhiên" price="29.990.000đ" image="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop" badge="Mới 100%" tags={['Chính hãng', 'Pin 100%', 'Bảo hành 12T']} href="/products/iphone-15-pro-max" />
          <ProductCard name="iPhone 14 Pro Max" color="Tím Deep Purple" price="18.590.000đ" image="https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=600&auto=format&fit=crop" badge="Cũ 99%" tags={['Nguyên bản', 'Pin 92%', 'BH 6 tháng']} featured={true} href="/products/iphone-14-pro-max" />
          <ProductCard name="AirPods Pro 2" color="Trắng" price="5.490.000đ" image="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop" badge="Phụ kiện" tags={['Chính hãng', 'Chống ồn ANC', 'BH 12T']} href="/products/airpods-pro-2" />
          <ProductCard name="Ốp lưng Magsafe" color="Trong suốt" price="490.000đ" image="https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=600&auto=format&fit=crop" badge="Phụ kiện" tags={['Magsafe', 'Chống xước', 'Fit chuẩn']} href="/products/op-lung-magsafe" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <Link href="/products" className="inline-flex items-center gap-2 text-primary font-medium text-base sm:text-lg hover:gap-4 transition-all">
            Xem tất cả sản phẩm <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
