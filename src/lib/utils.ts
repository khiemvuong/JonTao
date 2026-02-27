/**
 * lib/
 * 
 * Chứa các utilities, helper functions và wrappers cho third-party libraries.
 * 
 * Ví dụ: cn() for Tailwind class merging, format date, format currency, ...
 */

import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes safely
 * Requires `clsx` package: npm install clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format giá tiền VND
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
}
