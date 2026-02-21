"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-gummy');

const AboutSection = () => {
  return (
    <section id="sobre" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Background accent */}
      <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-40 -right-40" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center md:text-left"
          >
            <span className="section-eyebrow">Sobre nós</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-headline leading-[1.1]">
              A Simplicidade de uma{' '}
              <span className="gradient-text">Boa Noite</span> de Sono.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Amimir nasceu da crença de que o sono de qualidade é a base para uma vida plena. Nossas gomas de melatonina são formuladas com ingredientes premium, em um design elegante e minimalista, para transformar seu ritual noturno em um momento de puro bem-estar e restauração.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 md:flex md:items-center md:gap-8 justify-center md:justify-start">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold font-headline text-accent">99%</p>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">Satisfação</p>
              </div>
              <div className="w-px h-8 bg-border hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold font-headline text-accent">100%</p>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">Natural</p>
              </div>
              <div className="w-px h-8 bg-border hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold font-headline text-accent">Vegano</p>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">Certificado</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {aboutImage && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 via-primary/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={600}
                    data-ai-hint={aboutImage.imageHint}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
