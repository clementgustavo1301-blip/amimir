"use client";

import { Bed, Award, Plane, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Bed,
    title: "Indução Rápida do Sono",
    description: "Ajuda a regular seu ciclo circadiano, sinalizando ao corpo que é hora de dormir.",
  },
  {
    icon: Award,
    title: "Qualidade de Sono Superior",
    description: "Promove um sono mais profundo e restaurador, para que você acorde renovado.",
  },
  {
    icon: Plane,
    title: "Alívio do Jet Lag",
    description: "Auxilia na adaptação a novos fusos horários, minimizando os efeitos do jet lag.",
  },
  {
    icon: Shield,
    title: "Apoio Antioxidante",
    description: "A melatonina possui propriedades antioxidantes que protegem as células.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-28 sm:py-36 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="section-eyebrow">Vantagens</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-headline">
            Benefícios para sua{' '}
            <span className="gradient-text">Noite e seu Dia</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Mais do que apenas dormir, é sobre restaurar corpo e mente.
          </p>
        </motion.div>

        <div className="deck-container">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="deck-card group"
              style={{ '--index': index + 1 } as React.CSSProperties}
            >
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_hsla(251,100%,70%,0.15)] transition-all duration-500">
                <benefit.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="card-tag">Benefício {index + 1}</span>
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
