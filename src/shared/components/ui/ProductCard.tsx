'use client';

import Image from "next/image";

interface ProductCardProps {
  name: string;
  color: string;
  price: string;
  image: string;
  badge: string;
  tags?: string[];
  featured?: boolean;
  href?: string;
}

/**
 * Reusable ProductCard component.
 * Hover dùng CSS transition (không dùng motion whileHover để tránh conflict với scroll).
 */
const ProductCard = ({
  name,
  color,
  price,
  image,
  badge,
  tags,
  featured,
  href,
}: ProductCardProps) => {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={`rounded-3xl sm:rounded-4xl overflow-hidden border ${
        featured
          ? 'border-primary shadow-xl shadow-primary/20'
          : 'border-gray-100 shadow-sm'
      } bg-white group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
    >
      <div className="relative h-52 sm:h-72 overflow-hidden bg-gray-50 p-4 sm:p-6 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          fill 
          unoptimized 
          className="w-auto h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
          {badge}
        </div>
        {featured && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-sm">
            Best Seller
          </div>
        )}
      </div>
      <div className="p-5 sm:p-8 flex-1 flex flex-col">
        <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 font-medium">{color}</p>
        <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-2 sm:mb-3">{name}</h3>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-primary/8 text-primary font-medium border border-primary/15">
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-lg sm:text-xl font-bold text-primary mt-auto">{price}</p>
        <div className="w-full mt-4 sm:mt-6 py-2.5 sm:py-3 rounded-xl bg-primary-light text-primary font-medium group-hover:bg-primary group-hover:text-white transition-colors border border-primary/20 group-hover:border-primary text-sm sm:text-base text-center">
          Đặt hàng ngay
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
export type { ProductCardProps };
