'use client';

import Image from 'next/image';

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  desc: string;
  href?: string;
}

/**
 * Reusable NewsCard component.
 * Pure CSS hover — no motion whileHover to avoid scroll conflicts.
 */
const NewsCard = ({ image, category, title, desc, href }: NewsCardProps) => {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="h-40 sm:h-48 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
          {category}
        </div>
      </div>
      <div className="p-5 sm:p-8 flex-1">
        <h3 className="font-serif text-xl sm:text-2xl text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 font-light line-clamp-3 text-sm sm:text-base">{desc}</p>
      </div>
    </Wrapper>
  );
};

export default NewsCard;
export type { NewsCardProps };
