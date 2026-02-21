import { MimirLogo } from '@/components/MimirLogo';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-border/30 py-16">
      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <MimirLogo className="h-7 w-auto mb-4 text-foreground" />
            <p className="text-muted-foreground text-sm max-w-xs font-light leading-relaxed">
              Durma melhor. Viva melhor. Gomas de melatonina premium para noites restauradoras.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <h3 className="font-semibold text-foreground mb-1 text-xs tracking-widest uppercase">Links</h3>
            <a href="#sobre" className="text-muted-foreground hover:text-accent transition-colors duration-300 font-light">Sobre</a>
            <a href="#contato" className="text-muted-foreground hover:text-accent transition-colors duration-300 font-light">Contato</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 font-light">Termos de Uso</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 font-light">Política de Privacidade</a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-foreground mb-4 text-xs tracking-widest uppercase">Siga-nos</h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Instagram"
                className="rounded-full border border-border/50 hover:border-accent/40 hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="rounded-full border border-border/50 hover:border-accent/40 hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Facebook"
                className="rounded-full border border-border/50 hover:border-accent/40 hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <p className="text-sm text-muted-foreground/60 font-light">
            &copy; {new Date().getFullYear()} Amimir. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
