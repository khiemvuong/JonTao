/**
 * configs/
 * 
 * Chứa các thông tin cấu hình mang tính chất hệ thống.
 * Ví dụ: baseUrl cho Axios, constants, thiết lập third-party.
 * 
 * Ví dụ:
 * export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
 */

export const APP_CONFIG = {
  appName: 'Jon Táo',
  appDescription: 'Tiệm iPhone & Hoa Tươi',
} as const;
