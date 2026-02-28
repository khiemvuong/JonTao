'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { MotionValue, useMotionValueEvent } from 'motion/react';

// --- GLOBAL MEMORY CACHE ---
// Giữ lại các ảnh đã tải trên RAM (JS Memory) để khi qua trang khác rồi quay lại, 
// trình duyệt không cần gọi lại cache ổ cứng, ảnh sẽ hiện ngay lập tức không có độ trễ.
const globalFrameCache: Record<string, HTMLImageElement[]> = {};
const globalLoadedState: Record<string, boolean> = {};

interface UseFrameSequenceOptions {
  /** Folder path under /public, e.g. "/assets/3d-frame" */
  folder: string;
  /** File name template, e.g. "frame-" */
  prefix: string;
  /** Total number of frames */
  frameCount: number;
  /** Scroll progress motion value (0→1) */
  scrollProgress: MotionValue<number>;
  /** Starting index of first frame file, default 1 */
  startIndex?: number;
  /** Number of digits for zero-padded index, default 3 */
  padLength?: number;
  /** File extension, default "png" */
  ext?: string;
}

/**
 * Drives a <canvas> through a sequence of image frames
 * based on a Framer Motion scroll progress value.
 *
 * Returns:
 *   canvasRef — attach to a <canvas> element
 *   progress — 0→1 loading progress
 *   loaded   — true when all frames are ready
 */
export function useFrameSequence({
  folder,
  prefix,
  frameCount,
  scrollProgress,
  startIndex = 1,
  padLength = 3,
  ext = 'png',
}: UseFrameSequenceOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const cacheKey = `${folder}-${prefix}-${frameCount}`;

  const [loaded, setLoaded] = useState(() => !!globalLoadedState[cacheKey]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(() => !!globalLoadedState[cacheKey]);
  const [progress, setProgress] = useState(() => globalLoadedState[cacheKey] ? 1 : 0);

  // Build the URL for a given frame index (1-based)
  const frameUrl = useCallback(
    (index: number) => {
      const fileIndex = startIndex + index;
      const padded = String(fileIndex).padStart(padLength, '0');
      return `${folder}/${prefix}${padded}.${ext}`;
    },
    [folder, prefix, startIndex, padLength, ext],
  );

  // Preload all images
  useEffect(() => {
    // Nếu toàn bộ sequence này đã được nạp vào memory từ trước, tái sử dụng luôn
    if (globalLoadedState[cacheKey] && globalFrameCache[cacheKey]) {
      imagesRef.current = globalFrameCache[cacheKey];
      setLoaded(true);
      setFirstFrameLoaded(true);
      setProgress(1);
      return;
    }

    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(frameCount);
    
    // Check if device is mobile to apply optimization
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    for (let i = 0; i < frameCount; i++) {
      // Mobile optimization: skip loading 1 frame in every 3 (e.g., skip index 2, 5, 8...)
      if (isMobile && i % 3 === 2) {
        loadedCount++;
        setProgress(loadedCount / frameCount);
        if (loadedCount === frameCount) setLoaded(true);
        continue; // Skip loading this image to improve speed and reduce memory on mobile
      }

      const img = new Image();
      let handled = false;

      const handleLoad = () => {
        if (handled || cancelled) return;
        handled = true;
        loadedCount++;
        
        // Show canvas as soon as we have at least 1 image loaded
        if (loadedCount >= 1) {
          setFirstFrameLoaded(true);
        }

        setProgress(loadedCount / frameCount);
        if (loadedCount === frameCount) {
          globalLoadedState[cacheKey] = true;
          globalFrameCache[cacheKey] = images;
          setLoaded(true);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;
      img.src = frameUrl(i);

      // If already cached and complete right after assignment
      if (img.complete) {
        handleLoad();
      }

      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [frameCount, frameUrl, cacheKey]);

  // Draw the current frame on canvas (contain-fit, preserving aspect ratio)
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[index];
    
    // If exact frame skipped or incomplete, fallback to the nearest loaded previous frame
    if (!img || !img.complete) {
      for (let j = index - 1; j >= 0; j--) {
        if (imagesRef.current[j] && imagesRef.current[j].complete) {
          img = imagesRef.current[j];
          break;
        }
      }
    }
    // Try nearest next frame if no previous frame is found
    if (!img || !img.complete) {
      for (let j = index + 1; j < imagesRef.current.length; j++) {
        if (imagesRef.current[j] && imagesRef.current[j].complete) {
          img = imagesRef.current[j];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Match canvas pixel size to its CSS display size for sharpness
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = Math.round(rect.width * dpr);
    const ch = Math.round(rect.height * dpr);

    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }

    // Contain-fit: scale image to fit within canvas, centered
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.min(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, dx, dy, dw, dh);
  }, []);

  // Listen to scroll progress
  useMotionValueEvent(scrollProgress, 'change', (latest) => {
    const index = Math.min(
      Math.max(Math.floor(latest * (frameCount - 1)), 0),
      frameCount - 1,
    );

    if (index !== currentFrameRef.current) {
      currentFrameRef.current = index;

      // Use rAF for smooth rendering
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(index));
    }
  });

  // Draw first frame once loaded
  useEffect(() => {
    if (firstFrameLoaded) {
      drawFrame(currentFrameRef.current !== 0 ? currentFrameRef.current : 0);
    }
  }, [firstFrameLoaded, drawFrame]);

  // Cleanup rAF
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { canvasRef, loaded, firstFrameLoaded, progress };
}
