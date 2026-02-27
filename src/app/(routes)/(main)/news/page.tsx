import { Metadata } from 'next';
import NewsCard from '@/shared/components/ui/NewsCard';
import PageHero from '@/shared/components/ui/PageHero';
import { AnimatedContainer, AnimatedItem } from '@/shared/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Tin tức công nghệ | Jon Táo',
  description: 'Cập nhật tin tức công nghệ mới nhất từ Apple: iOS, iPhone, và các sản phẩm Apple.',
};

const newsData = [
  { image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop', category: 'Tính năng', title: 'Khám phá sức mạnh của chip A17 Pro trên iPhone 15 Pro', desc: 'Hiệu năng vượt trội, hỗ trợ Ray Tracing phần cứng mang lại trải nghiệm gaming đỉnh cao.' },
  { image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=600&auto=format&fit=crop', category: 'Cập nhật iOS', title: 'iOS 18 có gì mới? Những thay đổi đáng chú ý nhất', desc: 'Tùy biến màn hình chính tự do hơn, Control Center thiết kế lại và nhiều tính năng AI hấp dẫn.' },
  { image: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=600&auto=format&fit=crop', category: 'Cải tiến', title: 'Camera iPhone qua các thời kỳ: Sự tiến hóa ngoạn mục', desc: 'Từ camera đơn giản đến hệ thống ống kính chuyên nghiệp với khả năng quay video ProRes.' },
  { image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop', category: 'So sánh', title: 'iPhone 15 vs iPhone 14: Nên nâng cấp hay không?', desc: 'Phân tích chi tiết những khác biệt giữa hai thế hệ iPhone để giúp bạn quyết định.' },
  { image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=600&auto=format&fit=crop', category: 'Tips', title: 'Top 10 mẹo hay khi sử dụng iPhone mà ít người biết', desc: 'Những thủ thuật ẩn giấu giúp bạn sử dụng iPhone hiệu quả hơn mỗi ngày.' },
  { image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=600&auto=format&fit=crop', category: 'Phụ kiện', title: 'AirPods Pro 2: Đánh giá chi tiết sau 6 tháng sử dụng', desc: 'Chất âm, chống ồn và thoải mái khi đeo — tất cả đã thay đổi như thế nào?' },
];

export default function NewsPage() {
  return (
    <div className="pt-(--header-height-mobile) lg:pt-(--header-height-desktop)">
      <PageHero
        titlePrefix="Tin tức"
        titleHighlight="công nghệ"
        description="Cập nhật những tính năng mới nhất từ Apple."
      />

      {/* News Grid */}
      <AnimatedContainer className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsData.map((item, i) => (
            <AnimatedItem key={i}>
              <NewsCard {...item} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>
    </div>
  );
}
