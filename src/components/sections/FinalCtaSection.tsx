"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const FinalCtaSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 5000);
  };

  return (
    <section className="py-32 sm:py-44 relative overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-[100px]" />
      </div>

      {/* Floating orbs */}
      <div className="glow-orb glow-orb-accent w-[200px] h-[200px] top-10 left-[20%]" style={{ animationDelay: '0s' }} />
      <div className="glow-orb glow-orb-gold w-[150px] h-[150px] bottom-10 right-[25%]" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <span className="section-eyebrow">Comece Agora</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 font-headline leading-[1.1]">
            Durma melhor.{' '}
            <span className="gradient-text">Viva melhor.</span>
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground mb-12 font-light px-4 md:px-0">
            Sua jornada para noites restauradoras e dias mais produtivos começa aqui.
          </p>

          <button
            id="btnAmimir"
            className={cn('botao-amimir-interativo', { 'ativo': isAnimating })}
            onClick={handleClick}
            aria-live="polite"
          >
            <div className="estado-comprar">
              <span className="btn-texto">Garantir meu sono</span>
              <svg className="btn-icone" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>

            <div className="estado-dormindo">
              <div className="personagem-nuvem">
                <span className="emoji-sono">😴</span>
              </div>
              <div className="zzz-container">
                <span className="z-flutuante z1">Z</span>
                <span className="z-flutuante z2">z</span>
                <span className="z-flutuante z3">z</span>
              </div>
              <span className="texto-final">Bons sonhos...</span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
