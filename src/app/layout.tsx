import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/shared/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Jon Táo | Tiệm iPhone & Hoa Tươi",
  description:
    "Không chỉ là công nghệ. Đó là một trải nghiệm thơ mộng. iPhone Cũ & Mới - Cam kết nguyên bản, bảo hành dài hạn.",
  keywords: ["iPhone", "Apple", "Jon Táo", "Hoa Tươi", "Trả góp", "iPhone cũ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
