/**
 * (routes) layout — Route group wrapper
 * 
 * Đây là layout chung cho tất cả các routes trong ứng dụng.
 * Sử dụng Route Groups () để không ảnh hưởng URL path.
 */
export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
