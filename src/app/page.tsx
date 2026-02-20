"use client";

import { useState, useEffect } from 'react';
import { variants } from '@/lib/variants';
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
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [initialLoadingProgress, setInitialLoadingProgress] = useState(0);
  
  const currentVariant = variants[0];

  useEffect(() => {
    if (currentVariant) {
      document.documentElement.style.setProperty('--variant-color-hsl', currentVariant.themeColor);
    }
  }, [currentVariant]);
  
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
