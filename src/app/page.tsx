"use client";

import { useState, useEffect, useCallback } from 'react';
import { variants } from '@/lib/variants';
import Header from '@/components/layout/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/sections/AboutSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import IngredientsSection from '@/components/sections/IngredientsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';
import Footer from '@/components/layout/Footer';

const sectionIds = ['home', 'sobre', 'avaliacoes', 'ingredientes', 'como-funciona', 'beneficios', 'faq', 'contato'];

export default function Home() {
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);
  
  const currentVariant = variants[0];

  const preloadInitialImages = useCallback(() => {
    if (!currentVariant) return;
    const numImages = currentVariant.frameCount;
    const promises: Promise<HTMLImageElement | null>[] = [];

    for (let i = 0; i < numImages; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, '0');
      img.src = `${currentVariant.framesPath}frame_${frameNumber}_delay-0.042s.webp`;
      
      const promise = new Promise<HTMLImageElement | null>((resolve) => {
        img.onload = () => resolve(img);
        img.onerror = (err) => {
          console.error(`Failed to load image frame: ${i}`, err);
          resolve(null);
        };
      });
      promises.push(promise);
    }

    Promise.all(promises).then((loadedImageElements) => {
      const successfulImages = loadedImageElements.filter((img): img is HTMLImageElement => img !== null);
      
      Promise.all(successfulImages.map(img => img.decode()))
        .then(() => {
          setPreloadedImages(successfulImages);
        })
        .catch(err => {
          console.error("Error decoding images:", err);
          setPreloadedImages(successfulImages);
        });
    });
  }, [currentVariant]);

  useEffect(() => {
    if (currentVariant) {
      document.documentElement.style.setProperty('--variant-color-hsl', currentVariant.themeColor);
    }
    preloadInitialImages();
  }, [currentVariant, preloadInitialImages]);

  return (
    <>
      <Header sectionIds={sectionIds} />
      <main>
        <Hero
          variant={currentVariant}
          preloadedImages={preloadedImages}
        />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <ReviewsSection />
          <IngredientsSection />
          <HowItWorksSection />
          <BenefitsSection />
          <FaqSection />
          <FinalCtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
