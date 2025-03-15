import { Bot, Sparkles, Brain } from 'lucide-react';

export function Features() {
  return (
    <section id="solutions" className="py-32 bg-black/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Meet Your AI Team
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Automate. Scale. Grow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors group">
            <Bot className="w-12 h-12 text-indigo-500 mb-6 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-white mb-4">AI Voice Agents</h3>
            <p className="text-zinc-400">
              Handle customer inquiries & calls 24/7 with intelligent voice assistants that understand context and provide accurate responses.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors group">
            <Brain className="w-12 h-12 text-indigo-400 mb-6 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-white mb-4">Custom AI Assistants</h3>
            <p className="text-zinc-400">
              Automate lead generation & customer interactions with AI that learns your business and speaks your language.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors group">
            <Sparkles className="w-12 h-12 text-indigo-300 mb-6 transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-semibold text-white mb-4">Process Automation</h3>
            <p className="text-zinc-400">
              Eliminate repetitive admin tasks and streamline operations with intelligent workflow automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 