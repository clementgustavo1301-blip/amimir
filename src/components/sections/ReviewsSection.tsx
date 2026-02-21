"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Juliana S.",
    avatar: "JS",
    review: "Nunca dormi tão bem. O sabor de maracujá é delicioso e relaxante. Acordo me sentindo completamente renovada.",
    rating: 5,
    role: "Designer, São Paulo",
  },
  {
    name: "Marcos P.",
    avatar: "MP",
    review: "Amimir se tornou parte essencial do meu ritual noturno. A qualidade é notável. Recomendo a todos que buscam melhorar o sono.",
    rating: 5,
    role: "Empresário, Rio de Janeiro",
  },
  {
    name: "Carla B.",
    avatar: "CB",
    review: "Finalmente uma melatonina que funciona sem me deixar sonolenta no dia seguinte. O design do produto é um bônus!",
    rating: 5,
    role: "Médica, Curitiba",
  },
];

const ReviewsSection = () => {
  return (
    <section id="avaliacoes" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="glow-orb glow-orb-accent w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-headline">
            O que Nossos Clientes{' '}
            <span className="gradient-text">Dizem</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Experiências reais de noites bem dormidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <Card className="relative group bg-card/50 backdrop-blur-sm border-border/50 p-6 flex flex-col justify-between h-full hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_hsla(251,100%,70%,0.08)]">
                {/* Decorative quote */}
                <div className="absolute top-6 right-6 text-accent/10">
                  <Quote className="h-10 w-10" />
                </div>

                <CardContent className="p-0 relative z-10">
                  <div className="flex mb-4 gap-0.5">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[hsl(var(--gold))] fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed font-light text-[0.95rem]">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                </CardContent>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/50">
                  <Avatar className="h-10 w-10 border border-accent/20">
                    <AvatarFallback className="bg-accent/10 text-accent text-xs font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
