import { Metadata } from 'next';
import { ChevronRight, Smartphone, Battery, Camera, Shield, Wifi, Settings } from 'lucide-react';
import PageHero from '@/shared/components/ui/PageHero';
import { AnimatedContainer, AnimatedItem } from '@/shared/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Hướng dẫn sử dụng iPhone | Jon Táo',
  description: 'Cẩm nang hướng dẫn sử dụng iPhone chi tiết — từ thiết lập ban đầu, chuyển dữ liệu, bảo mật, đến camera và tiết kiệm pin.',
};

const guideCategories = [
  {
    icon: <Smartphone size={24} className="text-primary" />,
    title: 'Thiết lập ban đầu',
    description: 'Mở hộp máy mới? Bắt đầu từ đây.',
    items: [
      {
        title: 'Hướng dẫn mở hộp và kiểm tra máy mới',
        desc: 'Kiểm tra IMEI trên hộp và trên máy có khớp nhau không. Vào Cài đặt → Cài đặt chung → Giới thiệu để xem số serial, IMEI và tình trạng bảo hành. Máy mới 100% phải hiện "Không" ở mục Bảo hành đã sử dụng.',
        time: '3 phút đọc',
      },
      {
        title: 'Cách kích hoạt iPhone và thiết lập lần đầu',
        desc: 'Bước 1: Lắp SIM (Nano-SIM hoặc eSIM). Bước 2: Bật máy → chọn ngôn ngữ Tiếng Việt → kết nối Wi-Fi. Bước 3: Thiết lập Face ID (quay đầu 2 vòng tròn). Bước 4: Tạo mã PIN 6 số. Bước 5: Đăng nhập Apple ID hoặc tạo mới miễn phí.',
        time: '5 phút đọc',
      },
      {
        title: 'Chuyển dữ liệu từ iPhone cũ sang iPhone mới',
        desc: 'Cách 1 — Quick Start: Đặt 2 máy cạnh nhau → quét hiệu ứng xanh → chờ chuyển. Cách 2 — iCloud: Sao lưu máy cũ vào iCloud (Cài đặt → Tên bạn → iCloud → Sao lưu), sau đó khôi phục trên máy mới. Cách 3 — Cáp USB-C: Dùng cáp kết nối trực tiếp, nhanh nhất cho dữ liệu lớn.',
        time: '7 phút đọc',
      },
      {
        title: 'Chuyển dữ liệu từ Android sang iPhone',
        desc: 'Tải app "Move to iOS" trên Google Play. Trên iPhone mới → màn hình App & Dữ liệu → chọn "Chuyển dữ liệu từ Android" → nhập mã hiện trên iPhone vào máy Android → chọn dữ liệu cần chuyển (danh bạ, tin nhắn, ảnh, lịch). Lưu ý: WhatsApp cần chuyển riêng qua tính năng chuyển chat.',
        time: '8 phút đọc',
      },
    ],
  },
  {
    icon: <Shield size={24} className="text-primary" />,
    title: 'Bảo mật & Thanh toán',
    description: 'Bảo vệ thông tin và thanh toán nhanh chóng.',
    items: [
      {
        title: 'Thiết lập Face ID chính xác nhất',
        desc: 'Vào Cài đặt → Face ID & Mật mã → Thiết lập Face ID. Mẹo: quay đầu chậm, đều theo vòng tròn. Nên thiết lập thêm "Diện mạo thay thế" cho lúc đeo kính hoặc đội mũ. Face ID hoạt động ngay cả khi đeo khẩu trang từ iPhone 12 trở lên (cần iOS 15.4+).',
        time: '4 phút đọc',
      },
      {
        title: 'Cách thêm thẻ ngân hàng vào Apple Pay',
        desc: 'Vào Ví (Wallet) → nhấn "+" → Thẻ Ghi nợ hoặc Tín dụng → quét thẻ bằng camera hoặc nhập thủ công → xác thực qua SMS/app ngân hàng. Ngân hàng hỗ trợ: Vietcombank, Techcombank, VPBank, ACB, MB Bank, BIDV, VietinBank, TPBank, và hầu hết ngân hàng lớn tại Việt Nam.',
        time: '5 phút đọc',
      },
      {
        title: 'Bật xác thực hai yếu tố cho Apple ID',
        desc: 'Cài đặt → Tên bạn → Mật khẩu & Bảo mật → Xác thực hai yếu tố → Bật. Thêm số điện thoại tin cậy. Từ giờ mỗi lần đăng nhập Apple ID trên thiết bị mới, bạn sẽ nhận mã 6 số trên iPhone. Đây là biện pháp chống hack tài khoản hiệu quả nhất.',
        time: '3 phút đọc',
      },
    ],
  },
  {
    icon: <Battery size={24} className="text-primary" />,
    title: 'Pin & Hiệu suất',
    description: 'Giữ pin bền và máy chạy mượt lâu dài.',
    items: [
      {
        title: 'Mẹo tiết kiệm pin iPhone hiệu quả',
        desc: 'Bước 1: Tắt Làm mới ứng dụng nền (Cài đặt → Cài đặt chung). Bước 2: Giảm độ sáng tự động hoặc bật Dark Mode. Bước 3: Tắt Bật vị trí cho app không cần. Bước 4: Dùng Wi-Fi thay vì 4G/5G khi có thể. Bước 5: Bật chế độ Tiết kiệm pin khi dưới 30%.',
        time: '5 phút đọc',
      },
      {
        title: 'Sạc pin đúng cách giúp pin bền theo năm tháng',
        desc: 'Tránh sạc qua đêm liên tục → bật "Sạc pin tối ưu" (Cài đặt → Pin). Không nên sạc khi máy quá nóng. Dùng củ sạc Apple hoặc MFi. Giữ pin trong khoảng 20-80% là tốt nhất. Kiểm tra độ chai: Cài đặt → Pin → Tình trạng pin. Trên 80% sau 2 năm là bình thường.',
        time: '4 phút đọc',
      },
      {
        title: 'iPhone chạy chậm? Đây là cách khắc phục',
        desc: 'Bước 1: Khởi động lại máy (giữ nút nguồn + âm lượng). Bước 2: Xóa app không dùng. Bước 3: Dọn cache Safari (Cài đặt → Safari → Xóa lịch sử). Bước 4: Cập nhật iOS mới nhất. Bước 5: Tắt Hiệu ứng chuyển động (Trợ năng → Chuyển động → Giảm chuyển động).',
        time: '4 phút đọc',
      },
    ],
  },
  {
    icon: <Camera size={24} className="text-primary" />,
    title: 'Camera & Nhiếp ảnh',
    description: 'Chụp ảnh đẹp như studio ngay trên iPhone.',
    items: [
      {
        title: 'Cách chụp chân dung xóa phông đẹp trên iPhone',
        desc: 'Mở Camera → chọn chế độ Chân dung → giữ máy cách mặt 40-60cm → iPhone sẽ tự lấy nét vào mắt. Sau khi chụp, vào Ảnh → Sửa → điều chỉnh f-number (1.4 đến 16) để thay đổi độ xóa phông. Từ iPhone 15 Pro, chụp ở chế độ thường cũng tự detect khuôn mặt và tạo hiệu ứng xóa phông.',
        time: '6 phút đọc',
      },
      {
        title: 'Quay video Cinematic Mode chuyên nghiệp',
        desc: 'Mở Camera → Video → Cinematic. Chạm vào chủ thể để khóa nét. Chạm vào nền để chuyển nét một cách mượt mà. Sau khi quay, vào Ảnh → Sửa → thay đổi điểm nét bất kỳ lúc nào. Hỗ trợ quay 4K 30fps từ iPhone 14 Pro trở lên. Ánh sáng tốt = kết quả tốt nhất.',
        time: '7 phút đọc',
      },
      {
        title: 'Chụp đêm không cần flash với Night Mode',
        desc: 'Night Mode tự bật khi môi trường thiếu sáng (biểu tượng trăng lưỡi liềm vàng). Giữ máy thật yên trong 1-3 giây để máy ghép nhiều khung hình lại. Mẹo: dựa máy vào tường hoặc dùng tripod. Trên iPhone 14 Pro, Night Mode hoạt động trên cả camera Ultra Wide và Telephoto.',
        time: '4 phút đọc',
      },
    ],
  },
  {
    icon: <Wifi size={24} className="text-primary" />,
    title: 'Kết nối & Phụ kiện',
    description: 'Kết nối AirPods, Apple Watch và nhiều hơn.',
    items: [
      {
        title: 'Kết nối AirPods với iPhone trong 5 giây',
        desc: 'Mở nắp hộp AirPods → đặt cạnh iPhone → bảng kết nối tự hiện → nhấn "Kết nối". Xong! AirPods sẽ tự đồng bộ với tất cả thiết bị Apple cùng Apple ID (iPad, Mac, Apple Watch). Nếu không hiện, giữ nút sau hộp 15 giây cho đèn nháy trắng → vào Cài đặt → Bluetooth → chọn kết nối.',
        time: '3 phút đọc',
      },
      {
        title: 'Chia sẻ Wi-Fi nhanh giữa các iPhone',
        desc: 'Đảm bảo cả 2 iPhone đều bật Bluetooth + Wi-Fi, và email/SĐT lưu trong Danh bạ của nhau. Khi người kia nhập mật khẩu Wi-Fi → trên máy bạn tự hiện thông báo "Chia sẻ Wi-Fi?" → nhấn OK. Mật khẩu tự động điền, không cần đọc hay gõ.',
        time: '2 phút đọc',
      },
    ],
  },
  {
    icon: <Settings size={24} className="text-primary" />,
    title: 'Mẹo & Thủ thuật',
    description: 'Những tính năng ẩn ít người biết.',
    items: [
      {
        title: 'Back Tap — Gõ mặt lưng để thực hiện thao tác',
        desc: 'Cài đặt → Trợ năng → Chạm → Back Tap. Chạm 2 lần hoặc 3 lần vào mặt lưng iPhone để: chụp màn hình, bật đèn pin, mở camera, tắt tiếng, cuộn lên đầu trang. Hoạt động từ iPhone 8 trở lên với iOS 14+. Rất tiện khi tay bận hoặc đeo găng tay.',
        time: '3 phút đọc',
      },
      {
        title: 'Cách scan tài liệu và chữ ký trên iPhone',
        desc: 'Mở app Ghi chú → nhấn biểu tượng camera → "Quét Tài liệu". iPhone sẽ tự detect viền giấy, chụp, crop và chỉnh sáng. Lưu dưới dạng PDF. Để ký tài liệu: mở file PDF → biểu tượng bút → "Chữ ký" → ký bằng ngón tay → kéo vào vị trí cần ký.',
        time: '4 phút đọc',
      },
      {
        title: 'Tạo Tập trung (Focus Mode) tùy chỉnh',
        desc: 'Cài đặt → Tập trung → tạo chế độ Tập trung mới (VD: "Làm việc", "Ngủ", "Gym"). Chọn ai có thể liên lạc, app nào được thông báo. Thiết lập lịch tự bật (VD: 22h-7h cho chế độ Ngủ). Tùy chỉnh Màn hình chính và Lock Screen khác nhau cho mỗi chế độ.',
        time: '5 phút đọc',
      },
    ],
  },
];

export default function GuidePage() {
  return (
    <div className="pt-(--header-height-mobile) lg:pt-(--header-height-desktop)">
      <PageHero
        titlePrefix="Hướng dẫn"
        titleHighlight="sử dụng"
        description="Cẩm nang chi tiết dành cho khách vừa mua iPhone — từ mở hộp, thiết lập, bảo mật đến chụp ảnh chuyên nghiệp."
        subtitle="Cập nhật cho iOS 17 / iOS 18 • Áp dụng cho iPhone 12 trở lên"
      />

      {/* Guide Categories */}
      <AnimatedContainer className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-14 sm:space-y-20">
          {guideCategories.map((cat, ci) => (
            <AnimatedItem key={ci}>
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-full flex items-center justify-center">
                  {cat.icon}
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-gray-900">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">{cat.description}</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                {cat.items.map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-primary-light hover:bg-primary/10 transition-all duration-200 cursor-pointer group border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors text-sm sm:text-lg mb-1.5 sm:mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                          {item.desc}
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-400 mt-2">{item.time}</p>
                      </div>
                      <ChevronRight className="text-gray-400 group-hover:text-primary transition-colors shrink-0 mt-1" size={18} />
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary-light border-t border-primary/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4">Không tìm thấy hướng dẫn cần thiết?</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">Liên hệ đội ngũ tư vấn Jon Táo, chúng tôi sẵn sàng hỗ trợ bạn bất cứ lúc nào.</p>
          <a href="tel:0987654321" className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all text-sm sm:text-base">
            Gọi tư vấn: 0987.654.321
          </a>
        </div>
      </section>
    </div>
  );
}
