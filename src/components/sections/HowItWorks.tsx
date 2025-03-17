import { Search, Settings, Rocket, TrendingUp } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const steps = [
  {
    icon: <Search className="w-7 h-7 text-blue-500/80" />,
    title: "Find Hidden Inefficiencies",
    description: "Discover where AI can save you time and money with our automated business process analysis.",
    solution: "Our AI audit tool analyzes your business processes, identifies bottlenecks, and suggests automation opportunities. We'll show you exactly where AI can make the biggest impact on your bottom line.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Audit Quiz Coming Soon</div>
  },
  {
    icon: <Settings className="w-7 h-7 text-blue-400/80" />,
    title: "Custom AI Integration",
    description: "Get AI assistants tailored to your workflows, with your rules and preferences built-in.",
    solution: "Our AI solutions are customized to your specific needs, integrating seamlessly with your existing processes. You set the rules, preferences, and boundaries - we make it happen.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Customization Demo Coming Soon</div>
  },
  {
    icon: <Rocket className="w-7 h-7 text-blue-300/80" />,
    title: "Effortless Setup",
    description: "Have your AI system up and running in days with our full-service implementation team.",
    solution: "Our team handles everything from integration to training. You get a fully operational AI system without dealing with technical complexities. Most clients are up and running within days.",
    demoComponent: <div className="text-center text-sm text-white/60">Integration Timeline Demo Coming Soon</div>
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-blue-200/80" />,
    title: "Continuous Improvement",
    description: "Watch your AI assistant grow smarter as it learns from every interaction with your business.",
    solution: "Your AI assistant continuously learns from interactions, adapting to your business's evolving needs. Regular optimizations ensure you're always getting maximum value and efficiency.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Learning Process Demo Coming Soon</div>
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-14 sm:py-16 font-inter z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="relative z-20 max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            Your AI Employee, Ready in Days <br className="hidden sm:block" />– No Effort Required
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.4] text-white/80 mt-4 max-w-3xl mx-auto">
            Get started in 4 simple steps – we handle all the complexity
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, index) => (
            <ExpandableCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              solution={step.solution}
              demoComponent={step.demoComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 