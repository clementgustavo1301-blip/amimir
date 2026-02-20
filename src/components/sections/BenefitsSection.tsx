const benefits = [
  {
    title: "Indução Rápida do Sono",
    description: "Ajuda a regular seu ciclo circadiano, sinalizando ao corpo que é hora de dormir.",
  },
  {
    title: "Qualidade de Sono Superior",
    description: "Promove um sono mais profundo e restaurador, para que você acorde renovado.",
  },
  {
    title: "Alívio do Jet Lag",
    description: "Auxilia na adaptação a novos fusos horários, minimizando os efeitos do jet lag.",
  },
  {
    title: "Apoio Antioxidante",
    description: "A melatonina possui propriedades antioxidantes que protegem as células.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">
            Benefícios para sua Noite e seu Dia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mais do que apenas dormir, é sobre restaurar corpo e mente.
          </p>
        </div>
        
        <div className="deck-container">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="deck-card"
              style={{ '--index': index } as React.CSSProperties}
            >
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
