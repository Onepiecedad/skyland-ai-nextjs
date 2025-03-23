import { Bot, Brain, Sparkles } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const solutions = [
  {
    icon: <Bot className="w-7 h-7 text-blue-500/80" />,
    title: "AI Voice Agents",
    description: "Turn missed calls into closed deals with 24/7 AI-powered voice agents that handle customer service and lead qualification.",
    solution: "Our AI voice agents can handle multiple calls simultaneously, qualify leads, answer FAQs, and schedule appointments - all while maintaining a natural, human-like conversation. They learn from each interaction to provide increasingly personalized service.",
    showDana: true,
    danaWelcomeText: "Hi! I'm actually an example of our AI voice agent technology. Would you like to learn more about how I can help your business?"
  },
  {
    icon: <Brain className="w-7 h-7 text-blue-400/80" />,
    title: "Custom AI Assistants",
    description: "Deploy intelligent chatbots that engage visitors, qualify leads, and provide instant support around the clock.",
    solution: "Our customized AI assistants are trained on your specific business processes and industry knowledge. They can handle customer inquiries, automate follow-ups, and ensure consistent communication across all channels.",
    showDana: true,
    danaWelcomeText: "Hi! I can demonstrate how our custom AI assistants work. What type of tasks would you like to automate?"
  },
  {
    icon: <Sparkles className="w-7 h-7 text-blue-300/80" />,
    title: "Business Automation",
    description: "Eliminate repetitive tasks with AI-powered automation that handles your routine work with precision.",
    solution: "From data entry and document processing to workflow automation and reporting, our AI tools streamline your operations. We analyze your current processes and implement custom automation solutions that save time and reduce errors.",
    showDana: true,
    danaWelcomeText: "Hi! Let me show you how our business automation can transform your workflows. What processes would you like to automate?"
  }
];

export function AISolutions() {
  return (
    <section id="solutions" className="relative py-14 sm:py-16 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            AI Solutions That Work
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.4] text-white/80 mt-4 max-w-3xl mx-auto">
            Powerful AI tools that transform how you do business.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {solutions.map((solution, index) => (
            <ExpandableCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              solution={solution.solution}
              showDana={solution.showDana}
              danaWelcomeText={solution.danaWelcomeText}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 