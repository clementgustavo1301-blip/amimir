import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Clock, Leaf, Moon } from "lucide-react";

const benefits = [
  {
    icon: Moon,
    title: "Indução Rápida do Sono",
    description: "Ajuda a regular seu ciclo circadiano, sinalizando ao corpo que é hora de dormir.",
  },
  {
    icon: BrainCircuit,
    title: "Qualidade de Sono Superior",
    description: "Promove um sono mais profundo e restaurador, para que você acorde renovado.",
  },
  {
    icon: Clock,
    title: "Alívio do Jet Lag",
    description: "Auxilia na adaptação a novos fusos horários, minimizando os efeitos do jet lag.",
  },
  {
    icon: Leaf,
    title: "Apoio Antioxidante",
    description: "A melatonina possui propriedades antioxidantes que protegem as células.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">
            Benefícios para sua Noite e seu Dia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que apenas dormir, é sobre restaurar corpo e mente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border/50 text-center flex flex-col items-center hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-headline">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
