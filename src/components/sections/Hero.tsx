import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center -mt-16 font-inter">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Headlines */}
          <div className="space-y-10">
            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-[-0.03em] leading-[1.15] text-left text-white/90 transition-colors duration-300">
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            {/* Supporting Headlines */}
            <div className="space-y-6 text-white/75">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extralight tracking-[-0.02em] leading-[1.3]">
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extralight tracking-[-0.015em] leading-[1.4]">
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Right Side - CTAs */}
          <div className="flex flex-col items-start lg:items-end gap-5 mt-6 lg:mt-0">
            <Button 
              size="lg"
              className="group bg-white/8 hover:bg-white/12 text-base font-light tracking-[-0.01em] w-full lg:w-auto transition-all duration-300 backdrop-blur-sm"
              icon={<ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
            >
              Watch AI Handle Your Work
            </Button>

            <Button 
              size="lg"
              variant="secondary"
              className="group bg-white/5 hover:bg-white/8 text-base font-light tracking-[-0.01em] w-full lg:w-auto transition-all duration-300 backdrop-blur-sm"
            >
              Get Your Growth Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 