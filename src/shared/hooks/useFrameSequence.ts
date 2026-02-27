'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { MotionValue, useMotionValueEvent } from 'motion/react';

interface UseFrameSequenceOptions {
  /** Folder path under /public, e.g. "/assets/3d-frame" */
  folder: string;
  /** File name template, e.g. "ezgif-frame-" */
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

  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

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
    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(frameCount);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = frameUrl(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCount++;
        setProgress(loadedCount / frameCount);
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        loadedCount++;
        setProgress(loadedCount / frameCount);
        if (loadedCount === frameCount) setLoaded(true);
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [frameCount, frameUrl]);

  // Draw the current frame on canvas (contain-fit, preserving aspect ratio)
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
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
    if (loaded) {
      drawFrame(0);
    }
  }, [loaded, drawFrame]);

  // Cleanup rAF
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { canvasRef, loaded, progress };
}
