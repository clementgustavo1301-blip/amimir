import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Juliana S.",
    avatar: "JS",
    review: "Nunca dormi tão bem. O sabor de maracujá é delicioso e relaxante. Acordo me sentindo completamente renovada.",
    rating: 5,
  },
  {
    name: "Marcos P.",
    avatar: "MP",
    review: "Mimir se tornou parte essencial do meu ritual noturno. A qualidade é notável. Recomendo a todos que buscam melhorar o sono.",
    rating: 5,
  },
  {
    name: "Carla B.",
    avatar: "CB",
    review: "Finalmente uma melatonina que funciona sem me deixar sonolenta no dia seguinte. O design do produto é um bônus!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">
            O que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de noites bem dormidas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background p-6 flex flex-col justify-between">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6">&ldquo;{testimonial.review}&rdquo;</p>
              </CardContent>
              <div className="flex items-center gap-4 mt-auto">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <p className="font-bold text-sm">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
