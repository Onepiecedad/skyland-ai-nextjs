import { Mic, MessageSquare } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const faqCards = [
  {
    icon: <Mic className="w-7 h-7 text-blue-500/80" />,
    title: "Voice Assistant (Dana)",
    description: "Get instant voice-powered answers to all your AI questions",
    solution: "Dana is our advanced AI voice assistant, trained to understand and answer complex questions about AI implementation, business automation, and digital transformation. Simply speak your question and get detailed, accurate responses instantly.",
    demoComponent: (
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <button 
            className={cn(
              "relative w-20 h-20 rounded-full",
              "bg-blue-400/[0.08]",
              "border border-blue-400/10",
              "backdrop-blur-sm",
              "flex items-center justify-center",
              "transition-all duration-500",
              "group",
              "hover:scale-[1.02]",
              "hover:border-blue-400/30",
              "hover:bg-blue-400/[0.12]",
              "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <Mic className={cn(
              "w-12 h-12",
              "text-blue-500/80",
              "transition-all duration-500",
              "transform-gpu",
              "group-hover:scale-110",
              "group-hover:animate-wiggle"
            )} />
          </button>
          <p className="text-lg font-normal text-white/90">Get instant voice answers</p>
        </div>
        <div className="text-center text-base font-normal text-white/70">Voice Demo Coming Soon</div>
      </div>
    )
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-blue-400/80" />,
    title: "Chat Assistant",
    description: "Get detailed answers instantly through our AI chat interface",
    solution: "Our AI chat assistant provides in-depth responses to your questions about AI implementation, automation possibilities, and business optimization. Get immediate, accurate answers tailored to your specific needs.",
    demoComponent: (
      <div className="space-y-6">
        <div className="relative">
          <textarea 
            className={cn(
              "w-full h-32",
              "bg-blue-400/[0.08]",
              "border border-blue-400/10",
              "backdrop-blur-sm",
              "rounded-xl",
              "p-4",
              "text-white/90",
              "resize-none",
              "transition-all duration-500",
              "focus:outline-none",
              "focus:border-blue-400/30",
              "focus:bg-blue-400/[0.12]",
              "focus:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
              "placeholder:text-white/40"
            )}
            placeholder="How can AI transform my business?"
          />
        </div>
        <div className="text-center text-base font-normal text-white/70">Chat Demo Coming Soon</div>
      </div>
    )
  }
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-14 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            Have Questions?
          </h2>
          <p className="text-xl sm:text-2xl text-white/80 font-light mt-4">
            Ask Dana or Chat with Our AI Now
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
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