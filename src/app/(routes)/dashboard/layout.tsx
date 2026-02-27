/**
 * Dashboard layout
 * 
 * Layout dành riêng cho các trang quản trị (Admin/Manager).
 * Sẽ có sidebar, header riêng khi phát triển sau.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Dashboard sidebar + header */}
      <main className="p-6">{children}</main>
    </div>
  );
}
