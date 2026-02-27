import { Metadata } from 'next';
import ProductCard from '@/shared/components/ui/ProductCard';
import PageHero from '@/shared/components/ui/PageHero';
import { AnimatedContainer, AnimatedItem } from '@/shared/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Sản phẩm | Jon Táo',
  description: 'iPhone Cũ & Mới — Cam kết nguyên bản, bảo hành dài hạn. Phụ kiện Apple chính hãng.',
};

const products = [
  { name: 'iPhone 15 Pro Max', color: 'Titan Tự Nhiên', price: '29.990.000đ', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop', badge: 'Mới 100%', tags: ['Chính hãng', 'Pin 100%', 'Bảo hành 12T'], slug: 'iphone-15-pro-max' },
  { name: 'iPhone 14 Pro Max', color: 'Tím Deep Purple', price: '18.590.000đ', image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=600&auto=format&fit=crop', badge: 'Cũ 99%', tags: ['Nguyên bản', 'Pin 92%', 'BH 6 tháng'], slug: 'iphone-14-pro-max', featured: true },
  { name: 'iPhone 13 Pro', color: 'Xanh Sierra Blue', price: '14.990.000đ', image: 'https://images.unsplash.com/photo-1632633173522-47456de71b76?q=80&w=600&auto=format&fit=crop', badge: 'Cũ 99%', tags: ['Nguyên bản', 'Pin 89%', 'BH 6 tháng'], slug: 'iphone-13-pro' },
  { name: 'AirPods Pro 2', color: 'Trắng', price: '5.490.000đ', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop', badge: 'Phụ kiện', tags: ['Chính hãng', 'Chống ồn ANC', 'BH 12T'], slug: 'airpods-pro-2' },
  { name: 'Ốp lưng Magsafe', color: 'Trong suốt', price: '490.000đ', image: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?q=80&w=600&auto=format&fit=crop', badge: 'Phụ kiện', tags: ['Magsafe', 'Chống xước', 'Fit chuẩn'], slug: 'op-lung-magsafe' },
  { name: 'Apple Watch SE', color: 'Starlight', price: '6.990.000đ', image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=600&auto=format&fit=crop', badge: 'Mới 100%', tags: ['Chính hãng', 'Theo dõi sức khỏe', 'BH 12T'], slug: 'apple-watch-se' },
];

export default function ProductsPage() {
  return (
    <div className="pt-(--header-height-mobile) lg:pt-(--header-height-desktop)">
      <PageHero
        titlePrefix="Sản phẩm"
        titleHighlight="nổi bật"
        description="iPhone Cũ & Mới — Cam kết nguyên bản, bảo hành dài hạn."
      />

      {/* Filters */}
      <AnimatedContainer className="py-6 sm:py-8 bg-white border-b border-gray-100">
        <AnimatedItem className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-2 sm:gap-3 overflow-x-auto hide-scrollbar">
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-primary text-white font-medium whitespace-nowrap text-sm sm:text-base">Tất cả</button>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors whitespace-nowrap text-sm sm:text-base">Máy Mới 100%</button>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors whitespace-nowrap text-sm sm:text-base">Máy Cũ 99%</button>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors whitespace-nowrap text-sm sm:text-base">Phụ kiện</button>
        </AnimatedItem>
      </AnimatedContainer>

      {/* Products Grid */}
      <AnimatedContainer className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {products.map((p) => (
            <AnimatedItem key={p.slug}>
              <ProductCard {...p} href={`/products/${p.slug}`} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>
    </div>
  );
}
