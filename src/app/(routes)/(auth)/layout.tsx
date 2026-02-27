/**
 * Auth layout — Không có Navbar/Footer
 * Các trang xác thực có layout riêng biệt, tối giản.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary-light via-white to-primary-light flex items-center justify-center p-4 sm:p-6">
      {children}
    </div>
  );
}
