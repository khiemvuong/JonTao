'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen pt-(--header-height-mobile) lg:pt-(--header-height-desktop) flex flex-col items-center justify-center bg-primary-light text-center px-4">
      <div className="w-24 h-24 bg-white text-primary rounded-full shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="font-display text-4xl text-gray-900 mb-4">Đã có lỗi xảy ra!</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
        Thành thật xin lỗi vì sự bất tiện này. Chúng tôi đang xử lý sự cố. Bạn có muốn thử lại không?
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3.5 rounded-full bg-primary text-white font-medium shadow-lg hover:shadow-xl hover:bg-primary-hover hover:-translate-y-1 transition-all"
      >
        Thử lại
      </button>
    </div>
  );
}
