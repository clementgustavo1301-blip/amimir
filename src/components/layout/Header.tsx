"use client";

import { useState, useEffect } from 'react';
import { MimirLogo } from '@/components/MimirLogo';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-3"
      )}>
        <div className="container mx-auto px-4">
          <div className={cn(
            "flex items-center justify-between h-16 rounded-2xl px-6 transition-all duration-500",
            scrolled
              ? "glass-strong shadow-lg shadow-black/20"
              : "bg-transparent"
          )}>
            <a href="#home" aria-label="Voltar ao topo" className="group">
              <MimirLogo className={cn(
                "h-5 w-auto transition-colors duration-300",
                scrolled ? "text-foreground" : "text-white"
              )} />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    'relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300',
                    activeId === href.substring(1)
                      ? 'text-accent'
                      : scrolled
                        ? 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                >
                  {label}
                  {activeId === href.substring(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-foreground hover:bg-white/10" : "text-white hover:bg-white/10"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 transition-all duration-500 md:hidden",
        mobileOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div className={cn(
          "absolute top-24 left-4 right-4 glass-strong rounded-2xl p-6 transition-all duration-500 transform",
          mobileOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"
        )}>
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'text-base font-medium px-4 py-3 rounded-xl transition-all duration-300',
                  activeId === href.substring(1)
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                )}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
