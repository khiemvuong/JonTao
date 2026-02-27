import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-(--header-height-mobile) lg:pt-(--header-height-desktop) flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="font-display text-8xl md:text-[10rem] text-primary/20 font-bold mb-6">
        404
      </h1>
      <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mb-6">
        Lạc vào cõi <span className="font-script font-normal text-pink-400 text-[1.3em] leading-normal px-2">mộng</span>
      </h2>
      <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
        Trang bạn đang tìm kiếm dường như không tồn tại hoặc đã được chuyển đi chỗ khác mất rồi.
      </p>
      <Link 
        href="/" 
        className="px-8 py-4 rounded-full bg-primary text-white font-medium shadow-lg hover:shadow-xl hover:bg-primary-hover hover:-translate-y-1 transition-all"
      >
        Trở về trang chủ
      </Link>
    </div>
  );
}
