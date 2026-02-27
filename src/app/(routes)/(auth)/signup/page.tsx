import { Metadata } from 'next';
import { Apple } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Đăng ký | Jon Táo',
  description: 'Tạo tài khoản Jon Táo để nhận ưu đãi đặc biệt và quản lý đơn hàng dễ dàng.',
};

export default function SignupPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-4xl sm:rounded-card-lg shadow-xl p-8 sm:p-10 border border-gray-100">
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl font-bold text-primary">
            <Apple size={28} className="fill-primary" />
            JON TÁO
          </a>
          <p className="text-gray-500 text-sm mt-2">Tạo tài khoản mới</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Họ và tên</label>
            <input
              id="name"
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Số điện thoại</label>
            <input
              id="phone"
              type="tel"
              placeholder="0987 654 321"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">Mật khẩu</label>
            <input
              id="password"
              type="password"
              placeholder="Tối thiểu 8 ký tự"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <button type="submit" className="w-full py-3.5 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all">
            Đăng ký
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Đã có tài khoản?{' '}
          <a href="/login" className="text-primary font-medium hover:underline">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
}
