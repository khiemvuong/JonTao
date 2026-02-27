"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Facebook, Instagram, PhoneCall, MapPin } from "lucide-react";
import Logo from "@/shared/components/ui/Logo";

const Footer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.footer
      ref={ref}
      style={{ y, opacity }}
      className="bg-dark text-white pt-16 sm:pt-24 pb-8 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-16">
        {/* Brand */}
        <div>
          <div className="mb-4 sm:mb-6">
            <Logo
              width={260}
              height={78}
              className="brightness-0 invert w-full h-auto max-w-55"
            />
          </div>
          <p className="text-gray-400 font-light mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
            Không chỉ bán iPhone, chúng tôi trao gửi những trải nghiệm tinh tế
            nhất. Mua sắm như dạo bước trong vườn hoa.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
            >
              <Facebook size={17} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
            >
              <Instagram size={17} />
            </a>
          </div>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6 text-white">
            Liên hệ
          </h3>
          <ul className="space-y-3 sm:space-y-4 text-gray-400 font-light text-sm sm:text-base">
            <li className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer">
              <PhoneCall size={15} className="shrink-0" /> 0987.654.321
            </li>
            <li className="flex items-start gap-3 hover:text-primary transition-colors cursor-pointer">
              <MapPin size={15} className="shrink-0 mt-0.5" /> ĐT743/68/15 A,
              Khu Phố Bình Phước, Thuận An, Bình Dương, Vietnam
            </li>
          </ul>
        </div>

        {/* Chính sách */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl mb-4 sm:mb-6 text-white">
            Chính sách
          </h3>
          <ul className="space-y-3 sm:space-y-4 text-gray-400 font-light text-sm sm:text-base">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Bảo hành 12 tháng
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Thu cũ đổi mới trợ giá
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Trả góp 0% lãi suất
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 border-t border-white/10 text-center text-gray-500 font-light text-xs sm:text-sm">
        © {new Date().getFullYear()} Jon Táo. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
