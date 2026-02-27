'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '@/shared/components/ui/Logo';
import Link from 'next/link';

const navLinks = [
  { href: '/products', label: 'Sản phẩm' },
  { href: '/services', label: 'Dịch vụ' },
  { href: '/news', label: 'Tin tức' },
  { href: '/guide', label: 'Hướng dẫn' },
];

interface NavbarProps {
  /** When true, navbar starts transparent and turns white on scroll. Default false (always white). */
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(!transparent);
  const [darkSection, setDarkSection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Single scroll listener handles both: Hero transparency + dark section detection.
  // Re-queries [data-navbar-dark] on every scroll → survives hot reload, lazy mounts,
  // Suspense, and any future dynamic rendering.
  useEffect(() => {
    const NAV_HEIGHT = 88; // px — slightly more than desktop header height

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hero transparency
      if (transparent) {
        setScrolled(scrollY > window.innerHeight * 5);
      }

      // Check if any dark section currently overlaps the navbar zone
      const sections = document.querySelectorAll('[data-navbar-dark]');
      const isAnyDark = Array.from(sections).some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= NAV_HEIGHT && rect.bottom > 0;
      });
      setDarkSection(isAnyDark);
    };

    handleScroll(); // run on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

  // True when navbar should use dark/transparent style
  const isDark = (!scrolled && transparent) || darkSection;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 flex items-center h-(--header-height-mobile) lg:h-(--header-height-desktop) ${
          isDark
            ? 'bg-transparent'
            : 'bg-white/80 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
        }`}
        id="main-navbar"
      >
        <div
          className="w-full max-w-350 mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 lg:grid-cols-3 items-center"
        >
          {/* 1. Left: Logo */}
          <Link href="/" className="flex items-center justify-self-start col-span-1">
            <Logo width={260} height={78} className={`transition-[filter] duration-300 ${isDark ? 'brightness-0 invert' : ''}`} />
          </Link>

          {/* 2. Center: Desktop Nav (perfectly centered in the 3 columns) */}
          <div className={`hidden lg:flex items-center justify-center gap-8 font-medium text-[13px] uppercase tracking-[0.2em] col-span-1 transition-colors duration-300 ${
            isDark ? 'text-white/70' : 'text-gray-500'
          }`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative group py-2 transition-colors duration-300 flex items-center gap-1.5 ${
                    isActive ? 'text-primary' : 'hover:text-primary'
                  }`}
                >
                  {/* Active page: pulsing dot */}
                  {isActive && (
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                  )}
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                </a>
              );
            })}
          </div>

          {/* 3. Right: CTA Button & Mobile Toggle */}
          <div className="flex items-center justify-self-end col-span-1 gap-2 sm:gap-4">
            <Link 
              href="/products" 
              className="hidden sm:inline-flex items-center justify-center bg-primary text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary-hover hover:-translate-y-0.5 text-sm"
            >
              Đặt hàng ngay
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isDark ? 'text-white hover:text-primary' : 'text-gray-700 hover:text-primary'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
            style={{ paddingTop: 'var(--header-height-mobile)' }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`font-serif text-3xl transition-colors flex items-center gap-3 ${
                    isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {isActive && (
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                  )}
                  {link.label}
                </motion.a>
              );
            })}
            <motion.a
              href="/products"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-primary text-white px-8 py-3.5 rounded-full font-medium text-lg shadow-lg shadow-primary/30 text-center"
            >
              Đặt hàng ngay
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
