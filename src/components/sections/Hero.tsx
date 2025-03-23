import { Brain } from 'lucide-react';
import { useRef } from 'react';
import { HeroWidget } from '../HeroWidget';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-28 pb-10 md:pb-14">
      {/* Logo */}
      <a 
        href="#" 
        className="absolute top-8 left-8 sm:left-12 flex items-center gap-2 group"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <Brain className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xl font-light tracking-wider text-white group-hover:text-white/90 transition-colors">SKYLAND AI</span>
      </a>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-8 md:gap-16 items-center">
          {/* Left Side - Headlines */}
          <div className="space-y-6 md:space-y-8">
            {/* Primary Headline */}
            <h1 className="text-[38px] sm:text-[46px] lg:text-[56px] font-extralight tracking-[-0.03em] leading-[1.1] text-white/95">
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            {/* Supporting Headlines */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/85">
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className="text-base sm:text-lg lg:text-xl font-extralight tracking-[-0.015em] leading-[1.4] text-white/75">
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Right Side - AI Assistant Widget */}
          <HeroWidget />
        </div>
      </div>
    </section>
  );
} 