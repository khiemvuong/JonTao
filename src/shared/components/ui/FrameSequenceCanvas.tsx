'use client';

import { useFrameSequence } from '@/shared/hooks/useFrameSequence';
import { MotionValue } from 'motion/react';

interface FrameSequenceCanvasProps {
  /** Folder path, e.g. "/assets/3d-frame" */
  folder: string;
  /** File prefix, e.g. "frame-" */
  prefix: string;
  /** Total frame count */
  frameCount: number;
  /** Scroll progress (0→1) MotionValue */
  scrollProgress: MotionValue<number>;
  /** Starting index of first frame file */
  startIndex?: number;
  /** Zero-pad length for frame index */
  padLength?: number;
  /** File extension */
  ext?: string;
  /** CSS classes for the wrapper div */
  className?: string;
}

/**
 * Renders a scroll-driven frame sequence on a <canvas>.
 * Displays a loading skeleton while frames are preloading.
 */
const FrameSequenceCanvas = ({
  folder,
  prefix,
  frameCount,
  scrollProgress,
  startIndex = 1,
  padLength = 3,
  ext = 'png',
  className = '',
}: FrameSequenceCanvasProps) => {
  const { canvasRef, loaded, progress } = useFrameSequence({
    folder,
    prefix,
    frameCount,
    scrollProgress,
    startIndex,
    padLength,
    ext,
  });

  return (
    <div className={`relative ${className}`}>
      {/* Canvas — always rendered but hidden until loaded */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ display: 'block' }}
      />

      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          {/* Pulsing placeholder */}
          <div className="w-40 h-72 sm:w-56 sm:h-96 rounded-[2.5rem] bg-primary/10 animate-pulse" />
          {/* Progress bar */}
          <div className="w-32 h-1 bg-primary/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="text-xs text-gray-400">
            {Math.round(progress * 100)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default FrameSequenceCanvas;
