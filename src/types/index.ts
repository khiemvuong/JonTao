/**
 * types/
 * 
 * Toàn bộ các định nghĩa kiểu dữ liệu TypeScript.
 * Giúp tái sử dụng Interface một cách xuyên suốt, tránh trùng lặp.
 */

// ─── Product ──────────────────────────────────
export interface Product {
  id: string;
  name: string;
  color: string;
  price: number;
  image: string;
  badge: string;
  featured?: boolean;
  description?: string;
}

// ─── News ─────────────────────────────────────
export interface NewsArticle {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  createdAt: string;
}

// ─── Guide ────────────────────────────────────
export interface GuideItem {
  title: string;
  readTime: string;
  slug: string;
}
