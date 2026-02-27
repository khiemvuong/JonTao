'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '@/shared/components/ui/Logo';

/**
 * IntroLoader — Cinematic splash screen.
 *
 * 1. Preloads critical hero frame images in the background.
 * 2. Shows a branded animation with the Jon Táo logo.
 * 3. Once loaded (or after a max timeout), reveals the page with a smooth transition.
 */

interface IntroLoaderProps {
  /** Called when the intro is done and page should be revealed */
  onComplete: () => void;
  /** Critical image URLs to preload */
  imagesToPreload?: string[];
}

const IntroLoader = ({ onComplete, imagesToPreload = [] }: IntroLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const finish = useCallback(() => {
    setDone(true);
    // Wait for exit animation before calling onComplete
    setTimeout(onComplete, 900);
  }, [onComplete]);

  useEffect(() => {
    let cancelled = false;

    // Minimum display time for branding impact (ms)
    const MIN_DISPLAY = 2200;
    const MAX_TIMEOUT = 6000;
    const startTime = Date.now();

    // Safety timeout — always finish
    const safetyTimer = setTimeout(() => {
      if (!cancelled) finish();
    }, MAX_TIMEOUT);

    if (imagesToPreload.length === 0) {
      // No images to preload — just show branding
      const fakeProgress = setInterval(() => {
        if (cancelled) return;
        setProgress((p) => Math.min(p + 0.15, 1));
      }, 100);

      setTimeout(() => {
        if (!cancelled) {
          clearInterval(fakeProgress);
          setProgress(1);
          finish();
        }
      }, MIN_DISPLAY);

      return () => {
        cancelled = true;
        clearInterval(fakeProgress);
        clearTimeout(safetyTimer);
      };
    }

    // Preload images
    let loaded = 0;
    const total = imagesToPreload.length;

    const onImageDone = () => {
      if (cancelled) return;
      loaded++;
      setProgress(loaded / total);

      if (loaded >= total) {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_DISPLAY - elapsed);
        setTimeout(() => {
          if (!cancelled) finish();
        }, remaining);
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = onImageDone;
      img.onerror = onImageDone;
    });

    return () => {
      cancelled = true;
      clearTimeout(safetyTimer);
    };
  }, [imagesToPreload, finish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#1a0b2e] overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125500px] bg-primary/30 rounded-full blur-[180px]"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-[60%] left-[30%] w-80 h-80 bg-pink-400/20 rounded-full blur-[150px]"
            />
          </div>

          {/* Logo + Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Logo with glow */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Logo width={200} height={60} className="brightness-0 invert drop-shadow-[0_0_30px_rgba(168,117,210,0.5)]" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white/40 text-sm sm:text-base font-light tracking-wider"
            >
              Công nghệ đỉnh cao. Giá trị thật sự.
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-linear-to-r from-primary to-pink-400 rounded-full"
                animate={{ width: `${Math.round(progress * 100)}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
