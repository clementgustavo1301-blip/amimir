import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    question: "Posso tomar Mimir todas as noites?",
    answer: "Mimir é projetado para uso ocasional ou para ajudar a regular seu ciclo de sono. Para uso contínuo, é melhor consultar um profissional de saúde para garantir que é a melhor abordagem para você.",
  },
  {
    question: "Quanto tempo antes de dormir devo tomar?",
    answer: "Recomendamos tomar uma goma de Mimir cerca de 30 a 60 minutos antes da hora de dormir para permitir que a melatonina comece a fazer efeito.",
  },
  {
    question: "Mimir tem efeitos colaterais?",
    answer: "A melatonina é geralmente bem tolerada, mas alguns indivíduos podem sentir sonolência diurna, tontura ou dores de cabeça. Se ocorrerem efeitos adversos, interrompa o uso e consulte um médico.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa saber sobre Mimir.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
