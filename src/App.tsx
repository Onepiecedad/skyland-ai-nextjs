import React, { useEffect } from 'react';
import { Brain, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { Layout } from './components/layout/Layout';
import { Button } from './components/ui/Button';
import { initializeDarkMode } from './lib/theme';

function App() {
  useEffect(() => {
    initializeDarkMode();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
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
          <Button size="lg" icon={<ArrowRight />}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="py-32 bg-black/5 backdrop-blur-sm">
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
      <section id="contact" className="py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            Join the future of business automation. Let's create intelligent solutions together.
          </p>
          <Button size="lg" icon={<ArrowRight />} className="mx-auto">
            Contact Us
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default App;