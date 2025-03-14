import React from 'react';
import { Brain, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { AuroraBackground } from './components/aurora-background';

function App() {
  return (
    <AuroraBackground>
      {/* Content Layer */}
      <div className="relative backdrop-blur-sm">
        {/* Hero Section */}
        <header className="relative z-10 px-6 pt-32 pb-20 md:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-light tracking-wider text-white">SKYLAND AI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Elevate Your Business<br />
              Through AI Automation
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-12">
              Transform your operations with cutting-edge AI solutions. We turn complex processes into seamless automated workflows.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="relative z-10 px-6 py-32 md:px-20 bg-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg">
              <Bot className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Process Automation</h3>
              <p className="text-slate-300">Streamline your workflow with intelligent automation that learns and adapts to your business needs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg">
              <Brain className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">AI Integration</h3>
              <p className="text-slate-300">Seamlessly integrate advanced AI capabilities into your existing systems and processes.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg">
              <Sparkles className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Smart Analytics</h3>
              <p className="text-slate-300">Gain actionable insights with our advanced AI-powered analytics and reporting tools.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 px-6 py-32 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
              Join the future of business automation. Let's create intelligent solutions together.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto transition-all">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}

export default App;