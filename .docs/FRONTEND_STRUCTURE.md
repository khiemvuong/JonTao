# Cấu Trúc Thư Mục Frontend (PizzaFe)

Dưới đây là tài liệu mô tả chi tiết về cấu trúc thư mục của dự án Frontend (`fe`). Dự án được xây dựng dựa trên kiến trúc **Next.js App Router** kết hợp với các best practices về việc phân chia modules, components và quản lý state.

---

## 📂 Sơ đồ cấu trúc tổng quan

```text
src/
├── apiRequests/          # Chứa các hàm gọi API tới Backend
├── app/                  # Next.js App Router (các trang và layout chính)
│   └── (routes)/         # Nhóm các route
│       ├── (main)/       # Các trang dành cho Khách hàng (User-facing)
│       └── dashboard/    # Các trang quản trị (Admin/Manager-facing)
├── configs/              # Các file cấu hình hệ thống (axios, môi trường, constants...)
├── hooks/                # Custom React Hooks
├── lib/                  # Các thư viện, helpers và tiện ích dùng chung
├── queries/              # Các hooks cho data fetching (React Query / Tanstack Query)
├── schemaValidations/    # Khai báo schema chuẩn hóa và validate dữ liệu (Zod, Yup...)
├── services/             # Lớp dịch vụ, chứa logic nghiệp vụ và xử lý trung gian
├── shared/               # Chứa các thành phần được sử dụng lại ở nhiều nơi (Components, UI...)
│   ├── components/       # Các React Components
│   └── widgets/          # Các components phức tạp ghép từ nhiều component nhỏ hơn
├── store/                # Nơi quản lý Global State (Zustand, Redux, Context API...)
└── types/                # Các file định nghĩa kiểu dữ liệu TypeScript (Interfaces, Types)
```

---

## 📖 Chi tiết các thư mục

### 1. `apiRequests/`

Nơi tập trung định nghĩa tất cả các hàm để tương tác với Backend (REST API). Mỗi file thường đại diện cho một module hoặc 1 entity nhất định (ví dụ: `authApi.ts`, `productApi.ts`). Việc tách riêng `apiRequests` giúp dự án dễ dàng quản lý endpoints và tái sử dụng code gọi API.

### 2. `app/` (Next.js App Router)

Thư mục trái tim của ứng dụng Next.js theo kiến trúc App Router:

- **`(routes)/(main)/`**: Chứa tất cả các trang hướng tới người dùng (khách hàng), bao gồm:
  - Xác thực: `login`, `signup`, `forgot-password`
  - Cửa hàng: `products`, `product/[id]`
  - Người dùng: `profile`, `payment`, `order-success`, `track-order`
  - Khác: `about`, `events`, `policy`
- **`(routes)/dashboard/`**: Chứa tất cả các trang phục vụ cho việc quản trị (Admin Panel), bao gồm:
  - `all-products`, `categories`, `orders`, `users`, `vouchers`

_(Ghi chú: Việc dùng ngoặc đơn `(routes)` hoặc `(main)` là một kỹ thuật **Route Groups** trong Next.js nhằm gom nhóm code theo logic mà không làm thay đổi đường dẫn URL thực tế)._

### 3. `configs/`

Chứa các thông tin cấu hình mang tính chất hệ thống. Ví dụ như cấu hình baseUrl cho Axios, các thông số mặc định (constants), thiết lập các third-party.

### 4. `hooks/`

Nơi chứa tất cả các **Custom React Hooks** nhằm có thể tái sử dụng logic ở nhiều component khác nhau (ví dụ: `useDebounce`, `useClickOutside`, `useWindowScroll`...).

### 5. `lib/`

Chứa các đoạn mã tiện ích nhỏ (utilities) hoặc bọc (wrapper) lại các thư viện của bên thứ ba. Điển hình như `utils.ts` để gộp tailwind class (`cn`), cấu hình format ngày tháng, format tiền tệ, ...

### 6. `queries/`

Chứa các function và custom hooks chuyên dùng làm data fetching/caching bằng thư viện như **React Query** (Tanstack Query). Các hooks này thường sẽ gọi xuống hàm ở tầng `apiRequests` và trả ra các state `isLoading`, `isError`, `data` cho Component mảng frontend sử dụng.

### 7. `schemaValidations/`

Rất quan trọng cho việc validate dữ liệu người dùng (Forms, API responses). Nơi này chứa các schema được định nghĩa qua công cụ như **Zod** hoặc **Yup**. Giúp tập trung logic kiểm tra tính đúng đắn của dữ liệu một cách độc lập với giao diện.

### 8. `services/`

Tầng nghiệp vụ (Business Logic). Nơi đây thường chứa các logic phức tạp, thao tác với third-party (như Firebase, Stripe) hoặc xử lý logic data trước khi đưa lên Component.

### 9. `shared/`

Chứa tất cả những phần có thể dùng chung của giao diện hệ thống:

- **`components/`**:
  - `ui/`: Các UI Primitives cơ bản (ví dụ: Button, Input, Select, QuantityInput, Dialog...) - Thường được dựng theo Shadcn UI hoặc UI toolkit tự Build.
  - `main-components/`: Các component lớn dành riêng cho giao diện khách hàng (như các Card chứa sản phẩm, PopUp Modals, ...).
  - `dashboard_components/`: Các component dành riêng cho layout admin/dashboard (như Sidebar, Skeleton loading...).
- **`widgets/`**:
  - Chứa các tổ hợp giao diện phức tạp như `header`, `footer` - thường được ghép lại từ nhiều UI component nhỏ.

### 10. `store/`

Quản lý trạng thái toàn cục (Global State Management) của ứng dụng. Có thể chứa cấu hình và các slice của `Zustand` (hoặc Redux/Context).

### 11. `types/`

Nơi "neo" hệ thống TypeScript. Toàn bộ các định nghĩa về kiểu dự liệu, ví dụ thông tin một `User`, cấu trúc của `Product`, payload `Login` đều sẽ được đặt tại đây. Việc này giúp các developer sử dụng lại Interface 1 cách xuyên suốt, tránh việc định nghĩa trùng lặp hay lộn xộn các types trong cùng dự án.
