"use client";

import { useEffect, useRef, useState } from 'react';
import { type ProductVariant } from '@/lib/variants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

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

    setShowText(true);

    const images = preloadedImages;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    canvas.style.transition = 'filter 0.5s ease';

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

      if (frameIndex >= images.length - 3) {
        canvas.style.filter = 'blur(4px)';
      } else {
        canvas.style.filter = 'none';
      }

      const img = images[frameIndex];
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;

        // Mobile-first rendering logic: reduce zoom on mobile
        const isMobile = window.innerWidth < 768;
        const baseRatio = Math.max(hRatio, vRatio);
        const ratio = isMobile ? baseRatio * 0.75 : baseRatio;

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

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [preloadedImages]);

  return (
    <div id="home" ref={scrollRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Radial gradient overlay for depth instead of flat black */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:block hidden" />

        {/* Ambient glow orbs */}
        <div className="glow-orb glow-orb-accent w-[300px] h-[300px] md:w-[400px] md:h-[400px] top-1/4 -left-20" style={{ animationDelay: '0s' }} />
        <div className="glow-orb glow-orb-primary w-[250px] h-[250px] md:w-[300px] md:h-[300px] bottom-1/4 right-10" style={{ animationDelay: '3s' }} />

        <div className={cn(
          "absolute inset-0 flex items-center justify-center md:justify-start p-6 pl-4 md:p-24 md:pl-12 transition-opacity duration-700",
          showText ? "opacity-100" : "opacity-0"
        )}>
          <div className="max-w-none w-full text-white text-center md:text-left flex flex-col items-center md:items-start">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={showText ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-accent/90 mb-6 md:mb-8"
            >
              ● Sono Premium
            </motion.span>

            {/* Logo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={showText ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[1200px] max-w-[120vw] md:w-[2400px] aspect-[4/1.2] mb-6 -ml-4 md:-ml-32 mt-12 md:mt-32"
            >
              <Image
                src="/images/logo.png"
                alt="Amimir Logo"
                fill
                className="object-contain object-center md:object-left"
                priority
              />
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={showText ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-16 h-[2px] bg-gradient-to-r from-accent to-primary mt-2 origin-center md:origin-left mx-auto md:mx-0"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={showText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-2 text-sm md:text-lg text-white/75 font-light leading-relaxed px-4 md:px-0"
            >
              {variant.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-primary text-white hover:brightness-110 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_hsla(251,100%,70%,0.3)] tracking-wide"
              >
                Comprar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Saber Mais
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showText ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40 tracking-widest uppercase font-body">Role</span>
          <ChevronDown className="h-5 w-5 text-white/40 scroll-indicator" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
