import { AmimirLogo } from '@/components/MimirLogo';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <AmimirLogo className="h-8 w-auto mb-4 text-primary" />
            <p className="text-muted-foreground text-sm max-w-xs">
              Durma melhor. Viva melhor.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-bold text-foreground mb-2">Links</h3>
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-foreground mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Amimir. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
