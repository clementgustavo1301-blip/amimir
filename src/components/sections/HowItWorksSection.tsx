"use client";

import React, { forwardRef, useRef } from "react";
import {
  TestTube,
  Citrus,
  Leaf,
  ShieldCheck,
  Clock,
  BedDouble,
  Sunrise,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background p-3 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-2">
    {children}
  </div>
);

const IconLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs text-center text-muted-foreground mt-1">{children}</p>
);

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null); // Melatonina
  const div2Ref = useRef<HTMLDivElement>(null); // Maracujá
  const div3Ref = useRef<HTMLDivElement>(null); // Pectina
  const div4Ref = useRef<HTMLDivElement>(null); // Mimir Gummy (Center)
  const div5Ref = useRef<HTMLDivElement>(null); // Sono Rápido
  const div6Ref = useRef<HTMLDivElement>(null); // Sono Profundo
  const div7Ref = useRef<HTMLDivElement>(null); // Acordar Renovado

  return (
    <section id="como-funciona" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">
            Como Mimir Transforma Sua Noite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Da fórmula à absorção, veja a jornada para um sono perfeito.
          </p>
        </div>

        <div
          className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-card p-10 md:shadow-xl"
          ref={containerRef}
        >
          <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
            {/* Inputs */}
            <div className="flex w-full items-center justify-between">
              <IconWrapper>
                <Circle ref={div1Ref}>
                  <TestTube className="text-primary h-6 w-6" />
                </Circle>
                <IconLabel>Melatonina</IconLabel>
              </IconWrapper>
              <IconWrapper>
                <Circle ref={div2Ref}>
                  <Citrus className="text-primary h-6 w-6" />
                </Circle>
                <IconLabel>Maracujá</IconLabel>
              </IconWrapper>
              <IconWrapper>
                <Circle ref={div3Ref}>
                  <Leaf className="text-primary h-6 w-6" />
                </Circle>
                <IconLabel>Pectina</IconLabel>
              </IconWrapper>
            </div>

            {/* Center Hub */}
            <div className="flex w-full items-center justify-center">
              <IconWrapper>
                <Circle ref={div4Ref} className="h-20 w-20 border-accent">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                </Circle>
                <IconLabel>Fórmula Mimir</IconLabel>
              </IconWrapper>
            </div>

            {/* Outputs */}
            <div className="flex w-full items-center justify-between">
              <IconWrapper>
                <Circle ref={div5Ref}>
                  <Clock className="text-primary h-6 w-6" />
                </Circle>
                <IconLabel>Sono Rápido</IconLabel>
              </IconWrapper>
              <IconWrapper>
                <Circle ref={div6Ref}>
                  <BedDouble className="text-primary h-6 w-6" />
                </Circle>
                <IconLabel>Sono Profundo</IconLabel>
              </IconWrapper>
               <IconWrapper>
                <Circle ref={div7Ref}>
                  <Sunrise className="text-primary h-6 w-6" />
                </Circle>
                <IconLabel>Acordar Renovado</IconLabel>
              </IconWrapper>
            </div>
          </div>

          {/* Beams from Inputs to Center */}
          <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-40} startYOffset={-10} />
          <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
          <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={40} startYOffset={10} />

          {/* Beams from Center to Outputs */}
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} curvature={40} endYOffset={10} reverse />
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} reverse />
          <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div7Ref} curvature={-40} endYOffset={-10} reverse />
        </div>
      </div>
    </section>
  );
}
