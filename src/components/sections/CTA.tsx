import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          AI That Pays for Itself
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          Hiring an admin costs $3,500/month. AI does it for a fraction of the cost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="group"
            icon={<ArrowRight className="transition-transform group-hover:translate-x-1" />}
          >
            Book My Free AI Strategy Call
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group"
          >
            Start Automating Now – Try AI Free
          </Button>
        </div>
      </div>
    </section>
  );
} 