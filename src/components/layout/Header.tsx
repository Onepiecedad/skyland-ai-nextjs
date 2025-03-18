import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'AI Solutions', href: '#ai-solutions' },
  { name: 'Industries', href: '#industry-specific' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Who We Are', href: '#who-we-are' }
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 20;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function handleContactClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const elementPosition = contactSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 20;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Menu Button */}
      <button
        type="button"
        className={cn(
          "fixed top-6 right-6 z-50",
          "rounded-full p-3",
          "bg-black/20 backdrop-blur-lg",
          "border border-white/10",
          "text-white/80 hover:text-white",
          "transition-all duration-200",
          isScrolled ? "opacity-50 hover:opacity-100" : "opacity-100"
        )}
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-50 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={cn(
            "absolute top-0 right-0 h-full w-[280px] bg-black/40 backdrop-blur-xl",
            "transform transition-transform duration-300 ease-out",
            "border-l border-white/10",
            mobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          )}
        >
          <div className="relative h-full p-6 flex flex-col">
            <button
              type="button"
              className="absolute top-6 right-6 rounded-full p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <nav className="mt-16 flex-1">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2 text-base font-light text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleNavClick(e, '#contact');
                    setMobileMenuOpen(false);
                  }}
                  className="block py-2 text-base font-light text-white/60 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
} 