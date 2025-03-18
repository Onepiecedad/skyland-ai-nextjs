import React from 'react';
import { Brain, Mail, Linkedin } from 'lucide-react';
import { cn } from '../../lib/utils';

// Reduced to 4 essential links
const navigation = [
  { name: 'AI Solutions', href: '#ai-solutions' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10">
      <div className="py-8 px-6 md:px-8">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-6 md:gap-4 items-center">
            {/* Left Side - Company Info */}
            <div className="text-center md:text-left">
              {/* Logo & Mission */}
              <a 
                href="#" 
                className="flex items-center gap-2 justify-center md:justify-start group mb-3"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Brain className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.6)]" />
                <span className="text-base font-light tracking-wider text-white group-hover:text-white/90 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">SKYLAND AI</span>
              </a>
              
              {/* Contact Info - Moved closer to logo */}
              <div className="flex items-center justify-center md:justify-start gap-6 mt-3">
                <a href="mailto:info@skylandai.se" className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  <Mail className="w-3.5 h-3.5" />
                  info@skylandai.se
                </a>
                <a 
                  href="https://linkedin.com/company/skylandai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Side - Navigation */}
            <div className="flex flex-col items-center md:items-end">
              {/* Navigation Links */}
              <div className="flex gap-6 text-xs tracking-normal text-gray-400 pt-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-[10px] text-gray-500 mt-3">
                © {new Date().getFullYear()} Skyland AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 