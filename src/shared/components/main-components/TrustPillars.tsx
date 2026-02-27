"use client";

import { motion } from "motion/react";
import { ShieldCheck, Battery, Smartphone, BadgeCheck } from "lucide-react";

const pillars = [
    {
        icon: ShieldCheck,
        title: "Bảo Hành 12 Tháng",
        desc: "Lỗi phần cứng đổi máy ngay trong 30 ngày đầu. Không hỏi nhiều, không làm khó.",
        accent: "from-violet-400/20 to-primary/20",
        iconColor: "text-violet-300",
    },
    {
        icon: Battery,
        title: "Pin Zin — Cam Kết 85%+",
        desc: "Kiểm định dung lượng pin trước khi bán. Không có pin thay rởm, không có pin chai.",
        accent: "from-emerald-400/20 to-teal-400/20",
        iconColor: "text-emerald-300",
    },
    {
        icon: Smartphone,
        title: "Màn Hình Apple Chính Hãng",
        desc: "100% màn hình zin Apple, không aftermarket. Màu sắc chuẩn, cảm ứng mượt như máy mới.",
        accent: "from-sky-400/20 to-blue-400/20",
        iconColor: "text-sky-300",
    },
    {
        icon: BadgeCheck,
        title: "iCloud Sạch 100%",
        desc: "Máy không lock, không tranh chấp tài khoản, đăng nhập Apple ID của bạn ngay lập tức.",
        accent: "from-pink-400/20 to-rose-400/20",
        iconColor: "text-pink-300",
    },
];

const TrustPillars = () => {
    return (
        <section
            data-navbar-dark
            className="bg-[#0d0720] py-20 sm:py-32 relative overflow-hidden"
        >
            {/* Background glow blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-125 h-125 bg-primary/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-violet-500/6 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <p className="text-emerald-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                        Cam kết của Jon Táo
                    </p>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-5">
                        Vì sao bạn có thể{" "}
                        <span className="text-primary italic">tin tưởng chúng tôi?</span>
                    </h2>
                    <p className="text-base sm:text-xl text-white/40 font-light max-w-2xl mx-auto">
                        Nỗi lo khi mua máy cũ là hoàn toàn có cơ sở. Vì vậy mỗi iPhone tại
                        Jon Táo đều trải qua{" "}
                        <strong className="text-white/70 font-medium">
                            kiểm tra 30 điểm kỹ thuật
                        </strong>{" "}
                        trước khi đến tay bạn — không ngoại lệ.
                    </p>
                </motion.div>

                {/* Pillar grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {pillars.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative group"
                            >
                                <div className="h-full bg-white/4 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col gap-4 hover:bg-white/7 hover:border-white/20 transition-all duration-300">
                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 rounded-2xl bg-linear-to-br ${p.accent} flex items-center justify-center border border-white/10`}
                                    >
                                        <Icon size={24} className={p.iconColor} />
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <h3 className="font-display text-white text-lg sm:text-xl font-medium mb-2">
                                            {p.title}
                                        </h3>
                                        <p className="text-white/40 text-sm leading-relaxed font-light">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom trust strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-10 sm:mt-14 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-3 text-white/30 text-sm"
                >
                    {[
                        "Kiểm tra 30 điểm kỹ thuật",
                        "Đổi trả 7 ngày",
                        "Hỗ trợ sau bán hàng trọn đời",
                        "Chứng nhận nguồn gốc rõ ràng",
                    ].map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary/60 inline-block" />
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustPillars;
