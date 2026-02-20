import { Card } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Prepare-se",
    description: "30-60 minutos antes de dormir, prepare seu ambiente para relaxar.",
  },
  {
    step: "02",
    title: "Desfrute",
    description: "Tome uma goma de melatonina Mimir e aprecie o sabor.",
  },
  {
    step: "03",
    title: "Relaxe",
    description: "Deite-se, respire fundo e deixe a melatonina guiar você para um sono profundo.",
  },
];

const HowToUseSection = () => {
  return (
    <section id="como-usar" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">
            Seu Ritual Noturno Simplificado
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrar Mimir à sua rotina é fácil e prazeroso.
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-border/50 hidden md:block" aria-hidden="true"></div>
          <div className="relative grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 flex items-center justify-center bg-card border-2 border-border rounded-full mb-6">
                  <span className="text-4xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-headline">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
