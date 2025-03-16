import { Bot, Brain, Sparkles } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const solutions = [
  {
    icon: <Bot className="w-12 h-12 text-blue-500/80" />,
    title: "AI Voice Agents – Answer Calls, Handle Customers, Never Miss a Lead",
    description: "Turn missed calls into closed deals with 24/7 AI-powered customer service",
    solution: "Our AI voice agents can handle multiple calls simultaneously, qualify leads, answer FAQs, and schedule appointments - all while maintaining a natural, human-like conversation.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Voice Demo Coming Soon</div>
  },
  {
    icon: <Brain className="w-12 h-12 text-blue-400/80" />,
    title: "Custom AI Assistants – Engage & Convert More Customers Instantly",
    description: "AI chatbots & assistants that qualify leads, answer questions, and automate interactions",
    solution: "Customized AI assistants learn your business processes, handle customer inquiries, and automate follow-ups - ensuring no lead goes cold and every customer gets instant attention.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Chat Demo Coming Soon</div>
  },
  {
    icon: <Sparkles className="w-12 h-12 text-blue-300/80" />,
    title: "Business Automation – No More Manual Work, AI Does It for You",
    description: "Eliminate repetitive admin tasks and let AI streamline your business",
    solution: "From data entry to document processing, our AI automation tools handle your routine tasks with precision - freeing you to focus on growth and strategy.",
    demoComponent: <div className="text-center text-sm text-white/60">Workflow Demo Coming Soon</div>
  }
];

export function AISolutions() {
  return (
    <section className="relative py-24 font-inter">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.15] text-center text-white/90">
          What If You Had a 24/7 AI Team <br className="hidden sm:block" />Handling Your Work?
        </h2>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-8">
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