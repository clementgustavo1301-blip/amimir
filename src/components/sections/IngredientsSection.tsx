"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const ingredients = [
  {
    name: "Melatonina Pura",
    description: "Nosso principal ingrediente, para regular seu sono de forma natural e eficaz.",
    image: PlaceHolderImages.find(p => p.id === 'ingredient-melatonin'),
    badge: "01",
  },
  {
    name: "Aromas Naturais",
    description: "Extratos de frutas reais que proporcionam uma experiência de sabor autêntica e suave.",
    image: PlaceHolderImages.find(p => p.id === 'ingredient-fruit'),
    badge: "02",
  },
  {
    name: "Pectina Vegetal",
    description: "Uma alternativa à base de plantas à gelatina, tornando nossas gomas veganas e acessíveis.",
    image: PlaceHolderImages.find(p => p.id === 'ingredient-pectin'),
    badge: "03",
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredientes" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="glow-orb glow-orb-gold w-[350px] h-[350px] bottom-0 right-0" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow">Composição</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-headline">
            Ingredientes Naturais,{' '}
            <span className="gradient-text">Efeitos Reais</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Acreditamos na pureza. Usamos apenas ingredientes de alta qualidade, sem aditivos desnecessários.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_hsla(251,100%,70%,0.08)]">
                {/* Image */}
                {ingredient.image && (
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={ingredient.image.imageUrl}
                      alt={ingredient.image.description}
                      width={600}
                      height={450}
                      data-ai-hint={ingredient.image.imageHint}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                    {/* Badge number */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass flex items-center justify-center">
                      <span className="text-xs font-bold text-accent">{ingredient.badge}</span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6 -mt-6 sm:-mt-8 relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 font-headline">{ingredient.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">{ingredient.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
