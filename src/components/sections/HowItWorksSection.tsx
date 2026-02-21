"use client";

import {
  TestTube,
  Citrus,
  Leaf,
  ShieldCheck,
  Clock,
  BedDouble,
  Sunrise,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Ingredientes",
    items: [
      { icon: TestTube, label: "Melatonina Pura", color: "text-accent", desc: "Regula o ciclo circadiano" },
      { icon: Citrus, label: "Aromas Naturais", color: "text-[hsl(var(--gold))]", desc: "Sabor autêntico de maracujá" },
      { icon: Leaf, label: "Pectina Vegetal", color: "text-emerald-400", desc: "Base 100% vegana" },
    ],
  },
  {
    phase: "Fórmula Amimir",
    center: true,
    icon: ShieldCheck,
    desc: "Combinação exclusiva testada e aprovada",
  },
  {
    phase: "Resultados",
    items: [
      { icon: Clock, label: "Sono Rápido", color: "text-accent", desc: "Adormeça em minutos" },
      { icon: BedDouble, label: "Sono Profundo", color: "text-accent", desc: "Noites restauradoras" },
      { icon: Sunrise, label: "Acordar Renovado", color: "text-[hsl(var(--gold))]", desc: "Disposição e energia" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-28 sm:py-36 bg-background relative overflow-hidden">
      <div className="glow-orb glow-orb-primary w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <span className="section-eyebrow">Processo</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-headline">
            Como Amimir{' '}
            <span className="gradient-text">Transforma</span> Sua Noite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Da fórmula à absorção, veja a jornada para um sono perfeito.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto flex flex-col items-center gap-0"
        >
          {/* Phase 1: Ingredients */}
          <motion.div variants={itemVariants} className="w-full">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 text-center mb-4 font-semibold">{steps[0].phase}</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {steps[0].items!.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-accent/30 hover:bg-card/60 transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-background/80 border border-border/60 flex items-center justify-center mb-3 group-hover:border-accent/30 group-hover:shadow-[0_0_20px_hsla(251,100%,70%,0.1)] transition-all duration-500">
                    <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                  </div>
                  <p className="font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground/70 font-light leading-relaxed hidden sm:block">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connector 1 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center py-4">
            <div className="w-px h-8 bg-gradient-to-b from-border/60 to-accent/40" />
            <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
              <ArrowDown className="h-3.5 w-3.5 text-accent/60" />
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-accent/60" />
          </motion.div>

          {/* Phase 2: Center Hub */}
          <motion.div variants={itemVariants} className="w-full max-w-md">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/30 to-accent/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="relative flex items-center gap-5 p-6 sm:p-8 rounded-2xl border border-accent/30 bg-card/60 backdrop-blur-sm">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center animate-glow-pulse">
                  <ShieldCheck className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent/70 mb-1 font-semibold">{steps[1].phase}</p>
                  <p className="font-bold text-lg font-headline">Fórmula Exclusiva</p>
                  <p className="text-sm text-muted-foreground/70 font-light mt-0.5">{steps[1].desc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector 2 */}
          <motion.div variants={itemVariants} className="flex flex-col items-center py-4">
            <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-accent/40" />
            <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
              <ArrowDown className="h-3.5 w-3.5 text-accent/60" />
            </div>
            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-border/60" />
          </motion.div>

          {/* Phase 3: Results */}
          <motion.div variants={itemVariants} className="w-full">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 text-center mb-4 font-semibold">{steps[2].phase}</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {steps[2].items!.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-accent/30 hover:bg-card/60 transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-background/80 border border-border/60 flex items-center justify-center mb-3 group-hover:border-accent/30 group-hover:shadow-[0_0_20px_hsla(251,100%,70%,0.1)] transition-all duration-500">
                    <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                  </div>
                  <p className="font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground/70 font-light leading-relaxed hidden sm:block">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
