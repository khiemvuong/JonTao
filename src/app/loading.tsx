export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-transparent">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
      <p className="font-serif italic text-gray-500 text-lg animate-pulse">
        Đang tải...
      </p>
    </div>
  );
}
