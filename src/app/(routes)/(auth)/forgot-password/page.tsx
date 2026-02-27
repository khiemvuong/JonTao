import { Metadata } from 'next';
import { Apple, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quên mật khẩu | Jon Táo',
  description: 'Khôi phục mật khẩu tài khoản Jon Táo.',
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-4xl sm:rounded-card-lg shadow-xl p-8 sm:p-10 border border-gray-100">
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl font-bold text-primary">
            <Apple size={28} className="fill-primary" />
            JON TÁO
          </a>
          <p className="text-gray-500 text-sm mt-2">Khôi phục mật khẩu</p>
        </div>

        <form className="space-y-5">
          <p className="text-sm text-gray-600 leading-relaxed">
            Nhập email đã đăng ký, chúng tôi sẽ gửi cho bạn đường dẫn để đặt lại mật khẩu.
          </p>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm sm:text-base"
            />
          </div>

          <button type="submit" className="w-full py-3.5 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all">
            Gửi link khôi phục
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="/login" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            <ArrowLeft size={14} /> Quay lại đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
}
