import { ArrowRight, Bot } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Your AI Employee,{' '}
            <span className="block mt-2">Ready in Minutes</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Skyland AI helps businesses save time, increase revenue, and streamline operations with AI-powered automation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              className="group bg-indigo-500/10 hover:bg-indigo-500/20 backdrop-blur-sm border-0"
              icon={<ArrowRight className="transition-transform group-hover:translate-x-1" />}
            >
              See AI in Action Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="group border-indigo-500/20 hover:bg-indigo-500/10 backdrop-blur-sm"
            >
              Get My AI Growth Plan
            </Button>
          </div>
          
          {/* Trust Indicator */}
          <p className="text-sm text-zinc-500 flex items-center justify-center gap-2">
            <Bot className="w-4 h-4 text-indigo-400" />
            No credit card required. See results in minutes.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-indigo-500/10 text-center group hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">30+</div>
            <div className="text-zinc-400">Hours Saved Monthly</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-indigo-500/10 text-center group hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">90%</div>
            <div className="text-zinc-400">Faster Response Time</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-indigo-500/10 text-center group hover:bg-white/10 transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">24/7</div>
            <div className="text-zinc-400">AI Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
} 