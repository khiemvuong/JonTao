import { Metadata } from 'next';
import { ShieldCheck, RefreshCw, CreditCard, Truck, Eye, Lock } from 'lucide-react';
import PageHero from '@/shared/components/ui/PageHero';
import { AnimatedContainer, AnimatedItem } from '@/shared/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Chính sách | Jon Táo',
  description: 'Chính sách bảo hành, đổi trả, trả góp và bảo mật tại Jon Táo.',
};

const policies = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Chính sách Bảo hành',
    content: 'Tất cả sản phẩm tại Jon Táo đều được bảo hành chính hãng 12 tháng. Máy cũ được bảo hành phần cứng 6 tháng. Hỗ trợ sửa chữa nhanh trong 24h.',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'Chính sách Đổi Trả',
    content: 'Đổi trả miễn phí trong 7 ngày đầu tiên nếu sản phẩm có lỗi từ nhà sản xuất. Sản phẩm phải còn nguyên seal hoặc trong tình trạng ban đầu.',
  },
  {
    icon: <CreditCard size={28} />,
    title: 'Chính sách Trả góp',
    content: 'Hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng và công ty tài chính. Thủ tục đơn giản, duyệt hồ sơ nhanh trong 15 phút. Chấp nhận nợ xấu.',
  },
  {
    icon: <Truck size={28} />,
    title: 'Chính sách Giao hàng',
    content: 'Giao hàng miễn phí trong bán kính 10km. Giao COD toàn quốc. Kiểm tra hàng trước khi nhận. Đóng gói cẩn thận, bảo đảm an toàn.',
  },
  {
    icon: <Eye size={28} />,
    title: 'Chính sách Thu Cũ Đổi Mới',
    content: 'Đánh giá máy cũ công tâm, trợ giá lên đời cực tốt. Thủ tục nhanh gọn trong 10 phút. Nhận máy cũ mọi tình trạng.',
  },
  {
    icon: <Lock size={28} />,
    title: 'Chính sách Bảo mật',
    content: 'Thông tin cá nhân của khách hàng được bảo mật tuyệt đối. Dữ liệu trên máy cũ sẽ được xóa sạch trước khi tái chế hoặc bán lại.',
  },
];

export default function PolicyPage() {
  return (
    <div className="pt-(--header-height-mobile) lg:pt-(--header-height-desktop)">
      <PageHero
        titlePrefix="Chính sách"
        titleHighlight="cam kết"
        description="Minh bạch, rõ ràng — quyền lợi của bạn luôn được đặt lên hàng đầu."
      />

      {/* Policies */}
      <AnimatedContainer className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          {policies.map((p, i) => (
            <AnimatedItem key={i} className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-primary-light border border-primary/10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                {p.icon}
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl text-gray-900 mb-2 sm:mb-3">{p.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">{p.content}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>
    </div>
  );
}
