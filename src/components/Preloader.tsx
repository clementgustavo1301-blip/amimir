"use client";

import { useEffect, useCallback } from 'react';
import { MimirLogo } from '@/components/MimirLogo';
import { Progress } from '@/components/ui/progress';
import { ProductVariant } from '@/lib/variants';

type PreloaderProps = {
  progress: number;
  variant: ProductVariant;
  onLoadComplete: () => void;
  onProgress: (progress: number) => void;
};

const Preloader = ({ progress, variant, onLoadComplete, onProgress }: PreloaderProps) => {

  const preloadInitialImages = useCallback(() => {
    let loadedCount = 0;
    const numImages = variant.frameCount;
    
    const imageLoaded = () => {
      loadedCount++;
      const currentProgress = (loadedCount / numImages) * 100;
      onProgress(currentProgress);
      if (loadedCount === numImages) {
        setTimeout(onLoadComplete, 500); // Small delay for smooth transition
      }
    };

    for (let i = 0; i < numImages; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, '0');
      img.src = `${variant.framesPath}frame_${frameNumber}_delay-0.042s.webp`;
      img.onload = imageLoaded;
      img.onerror = imageLoaded;
    }
  }, [variant, onLoadComplete, onProgress]);

  useEffect(() => {
    preloadInitialImages();
  }, [preloadInitialImages]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[100]">
      <div className="w-full max-w-xs flex flex-col items-center gap-6">
        <MimirLogo className="h-10 w-auto text-primary" />
        <div className="w-full">
          <Progress value={progress} className="h-1 bg-primary/20" />
          <p className="text-center text-sm text-muted-foreground mt-2 font-mono">
            Loading {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
