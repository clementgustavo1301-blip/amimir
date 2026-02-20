import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-gummy');

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 font-headline">
              A Simplicidade de uma Boa Noite de Sono.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mimir nasceu da crença de que o sono de qualidade é a base para uma vida plena. Nossas gomas de melatonina são formuladas com ingredientes premium, em um design elegante e minimalista, para transformar seu ritual noturno em um momento de puro bem-estar e restauração.
            </p>
          </div>
          <div>
            {aboutImage && (
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={600}
                  data-ai-hint={aboutImage.imageHint}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
