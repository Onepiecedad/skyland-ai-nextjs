import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { Bot, Zap, Building2 } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const pricingTiers = [
  {
    icon: <Bot className="w-7 h-7 text-blue-400/80" />,
    title: "Starter Plan",
    description: "Perfect for small businesses & solopreneurs",
    solution: "Our Starter Plan is designed for businesses taking their first steps into AI automation. Get instant access to powerful AI tools that save you valuable time and resources.",
    demoComponent: (
      <div className="space-y-5 text-white/80">
        <div className="space-y-4">
          <h4 className="text-[18px] text-white/90 font-medium">Core Features:</h4>
          <ul className="space-y-2.5 text-[16px]">
            <li>• AI-Powered Chatbot & Voice Assistant</li>
            <li>• Basic inquiries & task automation</li>
            <li>• Saves ~10+ hours per week</li>
            <li>• 24/7 Customer Support</li>
            <li>• Basic CRM Integration</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-white/90">Investment:</p>
          <p className="text-2xl font-normal text-white flex items-baseline gap-2">
            $299 <span className="text-sm text-white/70">/month</span>
          </p>
        </div>
        <div className="pt-4 border-t border-white/10">
          <p className="text-blue-400/90">Bonus: Free AI Optimization Guide</p>
        </div>
        <div className="pt-4">
          <Button 
            variant="primary"
            onClick={() => window.open('#contact', '_self')}
            className={cn(
              "w-full py-3",
              "bg-blue-600/20 hover:bg-blue-500/30",
              "text-blue-200/90 hover:text-blue-100",
              "transition-all duration-300",
              "rounded-xl border border-blue-500/20 hover:border-blue-400/30"
            )}
          >
            Try Starter Plan – Free for 14 Days
          </Button>
        </div>
      </div>
    )
  },
  {
    icon: <Zap className="w-7 h-7 text-blue-400/80" />,
    title: "Growth Plan",
    description: "Ideal for scaling businesses & teams",
    solution: "The Growth Plan unlocks advanced AI capabilities, perfect for businesses ready to scale their operations and automate complex workflows.",
    demoComponent: (
      <div className="space-y-5 text-white/80">
        <div className="space-y-4">
          <h4 className="text-[18px] text-white/90 font-medium">Advanced Features:</h4>
          <ul className="space-y-2.5 text-[16px]">
            <li>• AI Chat & Voice with CRM Integration</li>
            <li>• Lead Qualification & AI scheduling</li>
            <li>• Saves ~20+ hours per week</li>
            <li>• Priority 24/7 Support</li>
            <li>• Advanced Analytics Dashboard</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-white/90">Investment:</p>
          <p className="text-2xl font-normal text-white flex items-baseline gap-2">
            $599 <span className="text-sm text-white/70">/month</span>
          </p>
        </div>
        <div className="pt-4 border-t border-white/10">
          <p className="text-blue-400/90">Bonus: Free Competitor AI Analysis</p>
        </div>
        <div className="pt-4">
          <Button 
            variant="primary"
            onClick={() => window.open('#contact', '_self')}
            className={cn(
              "w-full py-3",
              "bg-blue-600/20 hover:bg-blue-500/30",
              "text-blue-200/90 hover:text-blue-100",
              "transition-all duration-300",
              "rounded-xl border border-blue-500/20 hover:border-blue-400/30"
            )}
          >
            Get Growth Plan – Start Today
          </Button>
        </div>
      </div>
    )
  },
  {
    icon: <Building2 className="w-7 h-7 text-blue-400/80" />,
    title: "Enterprise Plan",
    description: "For large businesses needing full automation",
    solution: "Custom-built AI solutions designed for enterprise-scale operations. Get a fully tailored AI system that integrates seamlessly with your existing workflows.",
    demoComponent: (
      <div className="space-y-5 text-white/80">
        <div className="space-y-4">
          <h4 className="text-[18px] text-white/90 font-medium">Enterprise Features:</h4>
          <ul className="space-y-2.5 text-[16px]">
            <li>• Full AI Business Automation</li>
            <li>• Custom workflows & integrations</li>
            <li>• 24/7 AI support & consultant</li>
            <li>• Dedicated Account Manager</li>
            <li>• Custom AI Model Training</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-white/90">Investment:</p>
          <p className="text-2xl font-normal text-white">
            Custom Pricing
          </p>
        </div>
        <div className="pt-4 border-t border-white/10">
          <p className="text-blue-400/90">Bonus: Free AI Strategy Session</p>
        </div>
        <div className="pt-4">
          <Button 
            variant="primary"
            onClick={() => window.open('#contact', '_self')}
            className={cn(
              "w-full py-3",
              "bg-blue-600/20 hover:bg-blue-500/30",
              "text-blue-200/90 hover:text-blue-100",
              "transition-all duration-300",
              "rounded-xl border border-blue-500/20 hover:border-blue-400/30"
            )}
          >
            Request a Custom AI Quote
          </Button>
        </div>
      </div>
    )
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-14 sm:py-16 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            AI That Pays for Itself
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.4] text-white/80 mt-4 max-w-3xl mx-auto">
            Limited Free Trials Available! Choose the plan that fits your business needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {pricingTiers.map((tier, index) => (
            <ExpandableCard
              key={index}
              icon={tier.icon}
              title={tier.title}
              description={tier.description}
              solution={tier.solution}
              demoComponent={tier.demoComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 