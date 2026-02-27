/**
 * (main) layout — User-facing layout
 * 
 * Layout dành cho các trang hướng tới người dùng (khách hàng).
 * Bao gồm Navbar và Footer chung cho tất cả trang trong (main).
 */
import Navbar from '@/shared/widgets/Navbar';
import Footer from '@/shared/widgets/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
