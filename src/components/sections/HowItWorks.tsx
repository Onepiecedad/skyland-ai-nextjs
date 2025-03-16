import { Search, Settings, Rocket, TrendingUp } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const steps = [
  {
    icon: <Search className="w-12 h-12 text-blue-500/80" />,
    title: "Find Hidden Inefficiencies & Automate Instantly",
    description: "Find Out Where AI Can Save You Time & Money",
    solution: "Our AI audit tool analyzes your business processes, identifies bottlenecks, and suggests automation opportunities. We'll show you exactly where AI can make the biggest impact on your bottom line.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Audit Quiz Coming Soon</div>
  },
  {
    icon: <Settings className="w-12 h-12 text-blue-400/80" />,
    title: "Your AI, Your Rules – Built for Your Business",
    description: "We Build AI Assistants That Fit Your Workflows",
    solution: "Our AI solutions are customized to your specific needs, integrating seamlessly with your existing processes. You set the rules, preferences, and boundaries - we make it happen.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Customization Demo Coming Soon</div>
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-300/80" />,
    title: "AI Setup Done for You – No Tech Headaches",
    description: "AI Set Up in Days, Not Months – No Tech Skills Required",
    solution: "Our team handles everything from integration to training. You get a fully operational AI system without dealing with technical complexities. Most clients are up and running within days.",
    demoComponent: <div className="text-center text-sm text-white/60">Integration Timeline Demo Coming Soon</div>
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-blue-200/80" />,
    title: "AI That Grows With You – Smarter Every Day",
    description: "AI That Learns & Grows with Your Business",
    solution: "Your AI assistant continuously learns from interactions, adapting to your business's evolving needs. Regular optimizations ensure you're always getting maximum value and efficiency.",
    demoComponent: <div className="text-center text-sm text-white/60">AI Learning Process Demo Coming Soon</div>
  }
];

export function HowItWorks() {
  return (
    <section className="relative py-24 font-inter">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.15] text-center text-white/90">
          Your AI Employee, Ready in Just Days <br className="hidden sm:block" />– No Effort Required
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
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
    </section>
  );
} 