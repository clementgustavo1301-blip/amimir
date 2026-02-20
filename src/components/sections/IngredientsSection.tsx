import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ingredients = [
  {
    name: "Melatonina Pura",
    description: "Nosso principal ingrediente, para regular seu sono de forma natural e eficaz.",
    image: PlaceHolderImages.find(p => p.id === 'ingredient-melatonin'),
  },
  {
    name: "Aromas Naturais",
    description: "Extratos de frutas reais que proporcionam uma experiência de sabor autêntica e suave.",
    image: PlaceHolderImages.find(p => p.id === 'ingredient-fruit'),
  },
  {
    name: "Pectina Vegetal",
    description: "Uma alternativa à base de plantas à gelatina, tornando nossas gomas veganas e acessíveis.",
    image: PlaceHolderImages.find(p => p.id === 'ingredient-pectin'),
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredientes" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-headline">
            Ingredientes Naturais, Efeitos Reais
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Acreditamos na pureza. Usamos apenas ingredientes de alta qualidade, sem aditivos desnecessários.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="group">
              {ingredient.image && (
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={ingredient.image.imageUrl}
                    alt={ingredient.image.description}
                    width={600}
                    height={450}
                    data-ai-hint={ingredient.image.imageHint}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 font-headline">{ingredient.name}</h3>
              <p className="text-muted-foreground">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
