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
  onImagesLoaded: (images: HTMLImageElement[]) => void;
};

const Preloader = ({ progress, variant, onLoadComplete, onProgress, onImagesLoaded }: PreloaderProps) => {

  const preloadInitialImages = useCallback(() => {
    const numImages = variant.frameCount;
    const images: HTMLImageElement[] = Array.from({ length: numImages });
    const promises: Promise<any>[] = [];
    let loadedCount = 0;

    const onSingleImageLoad = () => {
      loadedCount++;
      onProgress((loadedCount / numImages) * 100);
    };

    for (let i = 0; i < numImages; i++) {
      const img = new Image();
      images[i] = img;
      const frameNumber = String(i).padStart(3, '0');
      img.src = `${variant.framesPath}frame_${frameNumber}_delay-0.042s.webp`;
      
      const promise = new Promise((resolve, reject) => {
        img.onload = () => {
          onSingleImageLoad();
          resolve(img);
        };
        img.onerror = (err) => {
          console.error(`Failed to load image frame: ${i}`, err);
          onSingleImageLoad(); // Still count it to not block the preloader
          resolve(null); // Resolve with null on error
        };
      });
      promises.push(promise);
    }

    Promise.all(promises).then((loadedImageElements) => {
      const successfulImages = loadedImageElements.filter(img => img !== null) as HTMLImageElement[];
      onImagesLoaded(successfulImages);

      // Now, ensure all successfully loaded images are also fully decoded
      Promise.all(successfulImages.map(img => img.decode()))
        .then(() => {
          // All images are loaded and decoded, ready for smooth playback
          setTimeout(onLoadComplete, 300); // A small delay for a smoother transition
        })
        .catch(err => {
          console.error("Error decoding images:", err);
          // If decoding fails, still proceed. The browser might handle it.
          setTimeout(onLoadComplete, 300);
        });
    });

  }, [variant, onLoadComplete, onProgress, onImagesLoaded]);

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
