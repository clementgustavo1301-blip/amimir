"use client";

import { MimirLogo } from '@/components/MimirLogo';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#ingredientes', label: 'Ingredientes' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

type HeaderProps = {
  sectionIds: string[];
};

const Header = ({ sectionIds }: HeaderProps) => {
  const activeId = useScrollSpy(sectionIds.map(id => `#${id}`), {
    rootMargin: '-50% 0px -50% 0px',
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 bg-background/80 backdrop-blur-sm rounded-b-lg border-b border-x border-border/50 px-6">
          <a href="#home" aria-label="Voltar ao topo">
            <MimirLogo className="h-6 w-auto text-primary" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  activeId === href.substring(1) ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
