"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { type ProductVariant } from '@/lib/variants';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type HeroProps = {
  variant: ProductVariant;
  variantIndex: number;
  totalVariants: number;
  onSwitchVariant: (direction: 'next' | 'prev') => void;
};

const Hero = ({ variant, variantIndex, totalVariants, onSwitchVariant }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isVariantLoading, setIsVariantLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const preloadImages = useCallback((v: ProductVariant) => {
    setIsVariantLoading(true);
    setShowText(false);
    
    let loadedCount = 0;
    const numImages = v.frameCount;
    const newImages: HTMLImageElement[] = [];
    
    const imageLoaded = () => {
      loadedCount++;
      if (loadedCount === numImages) {
        setImages(newImages);
        setIsVariantLoading(false);
        setTimeout(() => setShowText(true), 100);
      }
    };

    for (let i = 1; i <= numImages; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(4, '0');
      img.src = `${v.framesPath}frame_${frameNumber}.webp`;
      img.onload = imageLoaded;
      img.onerror = imageLoaded; // Count errors as loaded to not block forever
      newImages.push(img);
    }
  }, []);

  useEffect(() => {
    preloadImages(variant);
  }, [variant, preloadImages]);

  useEffect(() => {
    if (!images.length || isVariantLoading) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    
    const render = () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      const scrollTop = window.scrollY;
      const maxScrollTop = scrollElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(1, Math.max(0, scrollTop / maxScrollTop));
      
      const frameIndex = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
      );

      const img = images[frameIndex];
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      requestAnimationFrame(render);
    };
    
    const handleScroll = () => {
      requestAnimationFrame(render);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [images, isVariantLoading]);


  const handleVariantClick = (direction: 'next' | 'prev') => {
    if(isVariantLoading) return;
    onSwitchVariant(direction);
  }

  return (
    <div id="home" ref={scrollRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className={cn(
            "absolute inset-0 flex items-center justify-start p-8 md:p-24 transition-opacity duration-700",
            showText ? "opacity-100" : "opacity-0"
        )}>
          <div className="max-w-md text-white">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-headline">
              {variant.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest text-white/80 mt-2">
              {variant.subtitle}
            </h2>
            <p className="mt-6 text-lg text-white/90">
              {variant.description}
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold">
                Comprar Agora
              </Button>
              <Button size="lg" className="bg-[var(--variant-color)] text-black font-bold">
                Saber Mais
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4 md:gap-8 p-4 md:p-8">
          <div className="text-white text-center">
            <div className="text-5xl md:text-7xl font-black font-mono">
              {String(variantIndex + 1).padStart(2, '0')}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <button onClick={() => handleVariantClick('prev')} disabled={isVariantLoading} className="text-white/70 hover:text-white transition-colors" aria-label="Previous Variant">
              <span className="text-xs">PREV</span>
              <ArrowLeft className="h-6 w-6 mx-auto transform -rotate-90" />
            </button>
            <div className="h-24 w-px bg-white/30" />
            
            {isVariantLoading && <Loader2 className="h-6 w-6 text-white animate-spin my-2" />}

            <button onClick={() => handleVariantClick('next')} disabled={isVariantLoading} className="text-white/70 hover:text-white transition-colors" aria-label="Next Variant">
              <ArrowRight className="h-6 w-6 mx-auto transform -rotate-90" />
              <span className="text-xs">NEXT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
