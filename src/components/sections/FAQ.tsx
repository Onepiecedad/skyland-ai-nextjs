import { Mic, MessageSquare } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const faqCards = [
  {
    icon: <Mic className="w-12 h-12 text-blue-500/80" />,
    title: "Voice Assistant (Dana)",
    description: "Get instant voice-powered answers to all your AI questions",
    solution: "Dana is our advanced AI voice assistant, trained to understand and answer complex questions about AI implementation, business automation, and digital transformation. Simply speak your question and get detailed, accurate responses instantly.",
    demoComponent: (
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <button className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/20 hover:from-blue-500/30 hover:to-blue-400/30 flex items-center justify-center transition-all duration-300 group">
            <Mic className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </button>
          <p className="text-lg text-white/90">Get instant voice answers</p>
        </div>
        <div className="text-center text-sm text-white/60">Voice Demo Coming Soon</div>
      </div>
    )
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-400/80" />,
    title: "Chat Assistant",
    description: "Get detailed answers instantly through our AI chat interface",
    solution: "Our AI chat assistant provides in-depth responses to your questions about AI implementation, automation possibilities, and business optimization. Get immediate, accurate answers tailored to your specific needs.",
    demoComponent: (
      <div className="space-y-6">
        <div className="relative">
          <textarea 
            className="w-full h-32 bg-slate-800/50 border border-white/10 rounded-lg p-4 text-white/90 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder:text-white/40"
            placeholder="How can AI transform my business?"
          />
        </div>
        <div className="text-center text-sm text-white/60">Chat Demo Coming Soon</div>
      </div>
    )
  }
];

export function FAQ() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-5xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.15] text-center text-white/90">
            Have Questions?
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 font-light mt-4">
            Ask Dana or Chat with Our AI Now
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqCards.map((card, index) => (
            <ExpandableCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              solution={card.solution}
              demoComponent={card.demoComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 