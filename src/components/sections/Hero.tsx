import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Your AI Employee,<br />
          Ready in Minutes
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mb-12">
          Skyland AI helps businesses save time, increase revenue, and streamline operations with AI-powered automation.
        </p>
        <div className="flex gap-6">
          <Button 
            size="lg" 
            className="group"
            icon={<ArrowRight className="transition-transform group-hover:translate-x-1" />}
          >
            See AI in Action Now
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="group"
          >
            Get My AI Growth Plan
          </Button>
        </div>
        <p className="mt-4 text-sm text-zinc-400">
          No credit card required. See results in minutes.
        </p>
      </div>
    </section>
  );
} 