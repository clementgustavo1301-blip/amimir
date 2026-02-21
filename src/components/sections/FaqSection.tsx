"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "A melatonina causa dependência?",
    answer: "Não. A melatonina não é considerada viciante e é geralmente segura para uso a curto prazo. Recomendamos sempre consultar um profissional de saúde.",
  },
  {
    question: "Qual é a dosagem recomendada?",
    answer: "A dosagem ideal pode variar. Nossas gomas são formuladas com uma dose padrão eficaz. Comece com uma goma antes de dormir e ajuste conforme necessário, ou siga a orientação do seu médico.",
  },
  {
    question: "Posso tomar Amimir todas as noites?",
    answer: "Amimir é projetado para uso ocasional ou para ajudar a regular seu ciclo de sono. Para uso contínuo, é melhor consultar um profissional de saúde para garantir que é a melhor abordagem para você.",
  },
  {
    question: "Quanto tempo antes de dormir devo tomar?",
    answer: "Recomendamos tomar uma goma de Amimir cerca de 30 a 60 minutos antes da hora de dormir para permitir que a melatonina comece a fazer efeito.",
  },
  {
    question: "Amimir tem efeitos colaterais?",
    answer: "A melatonina é geralmente bem tolerada, mas alguns indivíduos podem sentir sonolência diurna, tontura ou dores de cabeça. Se ocorrerem efeitos adversos, interrompa o uso e consulte um médico.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="glow-orb glow-orb-accent w-[300px] h-[300px] -bottom-20 -left-20" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow">Dúvidas</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-headline">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Tudo o que você precisa saber sobre Amimir.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-border/50">
                <AccordionTrigger className="text-left text-base md:text-lg hover:text-accent transition-colors py-5 font-medium">
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pl-10 md:pl-12 pb-5 font-light leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
