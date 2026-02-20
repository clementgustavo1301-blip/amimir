"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

const FinalCtaSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Reset after 5 seconds for demo purposes
    setTimeout(() => {
      setIsAnimating(false);
    }, 5000); 
  };

  return (
    <section className="py-24 sm:py-40 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Durma melhor. Viva melhor.
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
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
      </div>
    </section>
  );
};

export default FinalCtaSection;
