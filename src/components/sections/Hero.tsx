import { Brain } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-28 pb-10 md:pb-14">
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

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-16 items-center">
          {/* Left Side - Headlines */}
          <div className="space-y-8 sm:space-y-10">
            {/* Primary Headline */}
            <h1 className="text-[42px] sm:text-[50px] lg:text-[64px] font-extralight tracking-[-0.03em] leading-[1.1] text-white/95 transition-colors duration-300">
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            {/* Supporting Headlines */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/85">
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extralight tracking-[-0.015em] leading-[1.4] text-white/75">
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Right Side - AI Widget */}
          <div className="flex flex-col items-center justify-center">
          </div>
        </div>
      </div>
    </section>
  );
} 