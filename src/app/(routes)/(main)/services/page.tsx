import { Metadata } from 'next';
import { RefreshCw, CreditCard, Truck, Shield, Clock, Headphones } from 'lucide-react';
import ServiceCard from '@/shared/components/ui/ServiceCard';
import PageHero from '@/shared/components/ui/PageHero';
import { AnimatedContainer, AnimatedItem } from '@/shared/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Dịch vụ | Jon Táo',
  description: 'Dịch vụ tận tâm tại Jon Táo — Thu cũ đổi mới, trả góp 0%, giao hàng miễn phí và nhiều hơn nữa.',
};

export default function ServicesPage() {
  return (
    <div className="pt-(--header-height-mobile) lg:pt-(--header-height-desktop)">
      <PageHero
        titlePrefix="Dịch vụ"
        titleHighlight="tận tâm"
        description="Mọi thứ bạn cần để sở hữu chiếc iPhone mơ ước một cách nhẹ nhàng và dễ dàng nhất."
      />

      {/* Services Grid */}
      <AnimatedContainer className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6 sm:gap-8">
          <AnimatedItem><ServiceCard icon={<RefreshCw size={28} />} title="Thu Cũ Đổi Mới" desc="Trợ giá lên đời cực tốt. Đánh giá máy công tâm, thủ tục nhanh gọn trong 10 phút. Lên đời không lo bù tiền." /></AnimatedItem>
          <AnimatedItem><ServiceCard icon={<CreditCard size={28} />} title="Trả Góp 0% - 0 Nợ Xấu" desc="Bao duyệt hồ sơ. Không cần chứng minh thu nhập. Chấp nhận nợ xấu, duyệt thẳng tay, rinh máy ngay." /></AnimatedItem>
          <AnimatedItem><ServiceCard icon={<Truck size={28} />} title="Giao Hàng Miễn Phí" desc="Freeship tận giường nếu bạn ở gần. Nhận máy nguyên seal, kiểm tra tại nhà, ưng ý mới thanh toán." /></AnimatedItem>
          <AnimatedItem><ServiceCard icon={<Shield size={28} />} title="Bảo Hành Dài Hạn" desc="Bảo hành 12 tháng chính hãng. Hỗ trợ sửa chữa nhanh chóng, đổi máy nếu lỗi nhà sản xuất." /></AnimatedItem>
          <AnimatedItem><ServiceCard icon={<Clock size={28} />} title="Hỗ Trợ 24/7" desc="Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào, bất cứ nơi đâu." /></AnimatedItem>
          <AnimatedItem><ServiceCard icon={<Headphones size={28} />} title="Tư Vấn Miễn Phí" desc="Không biết chọn máy nào? Đội ngũ tư vấn sẽ giúp bạn tìm chiếc iPhone phù hợp nhất." /></AnimatedItem>
        </div>
      </AnimatedContainer>
    </div>
  );
}
