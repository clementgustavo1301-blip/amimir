"use client";

import { useState, useEffect } from 'react';
import { variants, type ProductVariant } from '@/lib/variants';
import Preloader from '@/components/Preloader';
import Header from '@/components/layout/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/sections/AboutSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import IngredientsSection from '@/components/sections/IngredientsSection';
import HowToUseSection from '@/components/sections/HowToUseSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';
import Footer from '@/components/layout/Footer';

const sectionIds = ['home', 'sobre', 'beneficios', 'ingredientes', 'como-usar', 'avaliacoes', 'faq', 'contato'];

export default function Home() {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [initialLoadingProgress, setInitialLoadingProgress] = useState(0);
  
  const currentVariant = variants[currentVariantIndex];

  useEffect(() => {
    document.documentElement.style.setProperty('--variant-color-hsl', currentVariant.themeColor);
  }, [currentVariant]);

  const handleSwitchVariant = (direction: 'next' | 'prev') => {
    setCurrentVariantIndex(prevIndex => {
      if (direction === 'next') {
        return (prevIndex + 1) % variants.length;
      } else {
        return (prevIndex - 1 + variants.length) % variants.length;
      }
    });
  };
  
  if (isInitialLoading) {
    return (
      <Preloader
        progress={initialLoadingProgress}
        variant={currentVariant}
        onLoadComplete={() => setIsInitialLoading(false)}
        onProgress={setInitialLoadingProgress}
      />
    );
  }

  return (
    <>
      <Header sectionIds={sectionIds} />
      <main>
        <Hero
          variant={currentVariant}
          variantIndex={currentVariantIndex}
          onSwitchVariant={handleSwitchVariant}
          totalVariants={variants.length}
        />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <BenefitsSection />
          <IngredientsSection />
          <HowToUseSection />
          <ReviewsSection />
          <FaqSection />
          <FinalCtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
