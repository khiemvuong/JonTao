/**
 * schemaValidations/
 * 
 * Chứa các schema validate dữ liệu (sử dụng Zod, Yup, ...).
 * Tập trung logic kiểm tra tính đúng đắn của dữ liệu, độc lập với UI.
 * 
 * Ví dụ:
 * export const loginSchema = z.object({
 *   email: z.string().email(),
 *   password: z.string().min(6),
 * });
 */
