import AIWidget from '../AIWidget';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center -mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left Side - Headlines */}
          <div className="space-y-8 sm:space-y-14">
            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-[-0.03em] leading-[1.15] text-white/90 transition-colors duration-300">
              What If Growing Your Business Didn't Mean More Work?
            </h1>

            {/* Supporting Headlines */}
            <div className="space-y-6 sm:space-y-10 text-white/75">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extralight tracking-[-0.02em] leading-[1.3]">
                What If AI Could Handle 80% of Your Work—Effortlessly?
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extralight tracking-[-0.015em] leading-[1.4]">
                What If You Had an Employee That Worked 24/7—For Free?
              </h3>
            </div>
          </div>

          {/* Right Side - AI Widget */}
          <div className="lg:pt-4 lg:-mr-8">
            <AIWidget />
          </div>
        </div>
      </div>
    </section>
  );
} 