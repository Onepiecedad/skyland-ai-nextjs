import { Bot, Brain, Sparkles } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const solutions = [
  {
    icon: <Bot className="w-7 h-7 text-blue-500/80" />,
    title: "AI Voice Agents",
    description: "Turn missed calls into closed deals with 24/7 AI-powered voice agents that handle customer service and lead qualification.",
    solution: "Our AI voice agents can handle multiple calls simultaneously, qualify leads, answer FAQs, and schedule appointments - all while maintaining a natural, human-like conversation.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Voice Demo Coming Soon</div>
  },
  {
    icon: <Brain className="w-7 h-7 text-blue-400/80" />,
    title: "Custom AI Assistants",
    description: "Deploy intelligent chatbots that engage visitors, qualify leads, and provide instant support around the clock.",
    solution: "Customized AI assistants learn your business processes, handle customer inquiries, and automate follow-ups - ensuring no lead goes cold and every customer gets instant attention.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Chat Demo Coming Soon</div>
  },
  {
    icon: <Sparkles className="w-7 h-7 text-blue-300/80" />,
    title: "Business Automation",
    description: "Eliminate repetitive tasks with AI-powered automation that handles your routine work with precision.",
    solution: "From data entry to document processing, our AI automation tools handle your routine tasks with precision - freeing you to focus on growth and strategy.",
    demoComponent: <div className="text-center text-sm text-white/60">Workflow Demo Coming Soon</div>
  }
];

export function AISolutions() {
  return (
    <section id="ai-solutions" className="relative py-14 sm:py-16 font-inter">
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.15] text-center text-white/90">
          What If You Had a 24/7 AI Team <br className="hidden sm:block" />Handling Your Work?
        </h2>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 max-w-[1120px] mx-auto px-4 sm:px-6">
        {solutions.map((solution, index) => (
          <ExpandableCard
            key={index}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
            solution={solution.solution}
            demoComponent={solution.demoComponent}
          />
        ))}
      </div>
    </section>
  );
} 