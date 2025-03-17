import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function About() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Intro */}
        <div className="space-y-6 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-[-0.03em] leading-[1.15] text-white/90">
            What If Growing Your Business Didn't Mean More Work?
          </h2>
          <p className="text-xl sm:text-2xl font-extralight text-white/80">
            At Skyland AI Solutions, we don't just build AI—we redefine how businesses operate.
          </p>
          <p className="text-lg sm:text-xl font-light text-white/70 max-w-3xl mx-auto">
            We believe AI isn't just a tool—it's a fundamental shift in how companies run, scale, and compete. Businesses that embrace automation today will dominate their industries tomorrow.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl sm:text-3xl font-extralight text-white/90 text-center">Why We Exist</h3>
          <p className="text-lg text-white/70 text-center">
            Too many businesses are drowning in repetitive tasks, slow lead response, and scaling struggles.
          </p>
          <div className="space-y-4 max-w-3xl mx-auto text-lg sm:text-xl font-light">
            <p className="flex items-center gap-3 text-white/80">
              <span className="text-blue-400">🔹</span>
              What if your business ran 24/7—without hiring more staff?
            </p>
            <p className="flex items-center gap-3 text-white/80">
              <span className="text-blue-400">🔹</span>
              What if AI could handle 80% of your work—instantly?
            </p>
            <p className="flex items-center gap-3 text-white/80">
              <span className="text-blue-400">🔹</span>
              What if scaling didn't mean increasing payroll?
            </p>
          </div>
          <p className="text-lg text-white/80 text-center max-w-3xl mx-auto">
            That's why we created Skyland AI: to help businesses break free from manual work and unlock limitless growth.
          </p>
        </div>

        {/* What We Do */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl sm:text-3xl font-extralight text-white/90 text-center">What We Do</h3>
          <div className="space-y-4 max-w-3xl mx-auto text-lg">
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">🚀</span>
              <span>AI Assistants That Work Like a 24/7 Employee – Handling customer inquiries, lead responses & admin tasks.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">⚡</span>
              <span>AI Voice Agents That Replace Call Centers – Answering calls, qualifying leads & booking appointments.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">📈</span>
              <span>AI Automation That Eliminates Repetitive Work – From customer service to backend workflows.</span>
            </p>
          </div>
        </div>

        {/* Why Trust Skyland AI */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl sm:text-3xl font-extralight text-white/90 text-center">Why Trust Skyland AI?</h3>
          <p className="text-lg text-white/70 text-center">
            Unlike generic automation providers, we don't sell one-size-fits-all AI. Every AI system we create is:
          </p>
          <div className="space-y-4 max-w-3xl mx-auto text-lg">
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-emerald-400 shrink-0">✅</span>
              <span>Tailored to Your Business – Designed to fit your exact workflows.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-emerald-400 shrink-0">✅</span>
              <span>Fast to Implement – No complex setup. AI working within days.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-emerald-400 shrink-0">✅</span>
              <span>Built by Automation Experts – The same AI we use to run our own business.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-emerald-400 shrink-0">✅</span>
              <span>ROI-Driven – Automation that increases revenue & cuts costs.</span>
            </p>
          </div>
        </div>

        {/* Who We Help */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl sm:text-3xl font-extralight text-white/90 text-center">Who We Help</h3>
          <p className="text-lg text-white/70 text-center">
            We specialize in service-based industries that struggle with manual tasks and scalability:
          </p>
          <div className="space-y-4 max-w-3xl mx-auto text-lg">
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">🏡</span>
              <span>Real Estate & Property Management – AI that nurtures leads & books viewings.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">📞</span>
              <span>Call Centers & Customer Support – AI voice agents that cut wait times.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">🏨</span>
              <span>Hotels & Hospitality – AI booking assistants that increase direct reservations.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">✈️</span>
              <span>Travel Agencies – AI-driven itinerary management & lead conversion.</span>
            </p>
            <p className="flex items-start gap-3 text-white/80">
              <span className="text-blue-400 shrink-0">🛒</span>
              <span>E-Commerce – AI-powered customer support & sales automation.</span>
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extralight text-white/90">The Future is AI—Are You Ready?</h3>
          <p className="text-lg text-white/80">
            AI is already changing how businesses operate. The question is: will you adapt, or be left behind?
          </p>
          <div className="space-y-4">
            <p className="text-lg text-white/90">
              🚀 We only take a handful of new clients each month. Book your free AI strategy call before spots fill up!
            </p>
            <Button 
              variant="primary"
              size="lg"
              onClick={() => window.open('#contact', '_self')}
              className={cn(
                "px-8 py-4",
                "bg-blue-600/20 hover:bg-blue-500/30",
                "text-blue-200/90 hover:text-blue-100",
                "transition-all duration-300",
                "rounded-xl text-lg font-light",
                "border border-blue-500/20 hover:border-blue-400/30"
              )}
            >
              Book a Free AI Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 