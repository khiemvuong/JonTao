import { Metadata } from "next";
import { ChevronLeft, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dữ liệu sản phẩm tạm (sau này lấy từ API)
const productsData: Record<
  string,
  {
    name: string;
    color: string;
    price: string;
    image: string;
    badge: string;
    description: string;
    specs: string[];
  }
> = {
  "iphone-15-pro-max": {
    name: "iPhone 15 Pro Max",
    color: "Titan Tự Nhiên",
    price: "29.990.000đ",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
    badge: "Mới 100%",
    description:
      "iPhone 15 Pro Max trang bị chip A17 Pro mạnh mẽ, camera 48MP với zoom quang 5x, khung titanium cực nhẹ và bền.",
    specs: [
      "Chip A17 Pro",
      "Camera 48MP",
      "Titanium",
      "USB-C",
      "Action Button",
      "iOS 17",
    ],
  },
  "iphone-14-pro-max": {
    name: "iPhone 14 Pro Max",
    color: "Tím Deep Purple",
    price: "18.590.000đ",
    image:
      "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=800&auto=format&fit=crop",
    badge: "Cũ 99%",
    description:
      "iPhone 14 Pro Max với Dynamic Island, camera 48MP, chip A16 Bionic và Always-On Display.",
    specs: [
      "Chip A16 Bionic",
      "Dynamic Island",
      "Camera 48MP",
      "Always-On Display",
      "ProRes video",
      "iOS 16",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug];
  return {
    title: product ? `${product.name} | Jon Táo` : "Sản phẩm | Jon Táo",
    description: product?.description || "Chi tiết sản phẩm tại Jon Táo.",
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    return (
      <div className="pt-(--header-height-mobile) lg:pt-(--header-height-desktop) min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-gray-900 mb-4">
            Sản phẩm không tìm thấy
          </h1>
          <Link href="/products" className="text-primary hover:underline">
            ← Quay lại danh sách sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-(--header-height-mobile) lg:pt-(--header-height-desktop)">
      {/* Breadcrumb */}
      <div className="bg-primary-light py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <ChevronLeft size={16} /> Quay lại sản phẩm
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Image */}
          <div className="bg-gray-50 rounded-4xl sm:rounded-card-xl p-8 sm:p-16 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill 
              unoptimized 
              className="w-full max-w-100 h-auto object-contain"
            />
          </div>

          {/* Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {product.badge}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-500">
                {product.color}
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
              {product.description}
            </p>

            <div className="text-3xl sm:text-4xl font-bold text-primary">
              {product.price}
            </div>

            {/* Specs */}
            <div className="flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="flex-1 py-3.5 rounded-full bg-primary text-white font-medium text-base shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all hover:shadow-primary/50">
                Đặt hàng ngay
              </button>
              <button className="flex-1 py-3.5 rounded-full border border-primary/20 text-primary font-medium text-base hover:bg-primary-light transition-all">
                Trả góp 0%
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <ShieldCheck size={24} className="mx-auto text-primary mb-2" />
                <p className="text-xs sm:text-sm text-gray-600">
                  Bảo hành 12 tháng
                </p>
              </div>
              <div className="text-center">
                <Truck size={24} className="mx-auto text-primary mb-2" />
                <p className="text-xs sm:text-sm text-gray-600">
                  Giao miễn phí
                </p>
              </div>
              <div className="text-center">
                <RefreshCw size={24} className="mx-auto text-primary mb-2" />
                <p className="text-xs sm:text-sm text-gray-600">
                  Đổi trả 7 ngày
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
