"use client";

import { useEffect, useRef, useState } from 'react';
import { type ProductVariant } from '@/lib/variants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type HeroProps = {
  variant: ProductVariant;
  preloadedImages: HTMLImageElement[];
};

const Hero = ({ variant, preloadedImages }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (!preloadedImages.length) return;

    // Show text once images are loaded
    setShowText(true);

    const images = preloadedImages;
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
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      requestAnimationFrame(render);
    };
    
    const handleScroll = () => {
      requestAnimationFrame(render);
    };

    handleResize(); // Initial setup and render
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [preloadedImages]);

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
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-full">
                Comprar Agora
              </Button>
              <Button size="lg" className="bg-[var(--variant-color)] text-black font-bold rounded-full">
                Saber Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
