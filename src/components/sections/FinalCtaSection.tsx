import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="py-24 sm:py-40 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Durma melhor. Viva melhor.
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
          Sua jornada para noites restauradoras e dias mais produtivos começa aqui.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            Comprar Agora
          </Button>
          <Button size="lg" variant="outline" className="font-bold">
            Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
