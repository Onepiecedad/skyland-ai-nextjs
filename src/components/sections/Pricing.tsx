import { useState } from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { Bot, Zap, Building2 } from 'lucide-react';

interface PricingTierProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features: string[];
  bonus: string;
  cta: string;
  isPopular?: boolean;
}

const pricingTiers: PricingTierProps[] = [
  {
    icon: <Bot className="w-12 h-12 text-blue-400/80" />,
    title: "Starter Plan",
    price: "$299",
    description: "Perfect for small businesses & solopreneurs",
    features: [
      "AI-Powered Chatbot & Voice Assistant",
      "Basic inquiries & task automation",
      "Saves ~10+ hours per week",
      "24/7 Customer Support",
      "Basic CRM Integration"
    ],
    bonus: "Free AI Optimization Guide",
    cta: "Try Starter Plan – Free for 14 Days"
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-400/80" />,
    title: "Growth Plan",
    price: "$599",
    description: "Ideal for scaling businesses & teams",
    features: [
      "AI Chat & Voice with CRM Integration",
      "Lead Qualification & AI scheduling",
      "Saves ~20+ hours per week",
      "Priority 24/7 Support",
      "Advanced Analytics Dashboard"
    ],
    bonus: "Free Competitor AI Analysis",
    cta: "Get Growth Plan – Start Today",
    isPopular: true
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-400/80" />,
    title: "Enterprise Plan",
    price: "Custom",
    description: "For large businesses needing full automation",
    features: [
      "Full AI Business Automation",
      "Custom workflows & integrations",
      "24/7 AI support & consultant",
      "Dedicated Account Manager",
      "Custom AI Model Training"
    ],
    bonus: "Free AI Strategy Session",
    cta: "Request a Custom AI Quote"
  }
];

export function Pricing() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-5xl mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extralight tracking-[-0.03em] leading-[1.15] text-white/90">
            AI That Pays for Itself
          </h2>
          <p className="text-lg text-white/80 font-light mt-3">
            Limited Free Trials Available!
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={cn(
                "relative group rounded-2xl backdrop-blur-lg transition-all duration-500",
                "bg-blue-500/[0.03] hover:bg-blue-500/[0.05]",
                "border border-white/[0.03] hover:border-white/[0.08]",
                "hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.15)]",
                tier.isPopular && "border-blue-500/20"
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-500/80 rounded-full text-xs font-medium text-white/90 backdrop-blur-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 h-full flex flex-col">
                {/* Header & Content */}
                <div className="space-y-4 flex-1">
                  {/* Header */}
                  <div className="flex items-start gap-6">
                    <div className="transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3">
                      {tier.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-extralight tracking-[-0.02em] leading-[1.3] text-white/80 transition-colors duration-300 group-hover:text-white">
                        {tier.title}
                      </h3>
                      <div>
                        <div className="flex items-end gap-1">
                          <span className="text-2xl font-light text-white/90">{tier.price}</span>
                          {tier.price !== "Custom" && <span className="text-sm text-white/60 mb-0.5">/month</span>}
                        </div>
                        <p className="text-lg font-extralight tracking-[-0.015em] leading-[1.4] text-white/60 transition-colors duration-300 group-hover:text-white/90">
                          {tier.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 py-4 border-y border-white/[0.08]">
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2">
                      <p className="text-sm text-blue-400/90 font-light">
                        Bonus: {tier.bonus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="primary"
                    onClick={() => window.open('#contact', '_self')}
                    className={cn(
                      "w-full py-3 text-sm font-light",
                      "bg-blue-600/20 hover:bg-blue-500/30",
                      "text-blue-200/90 hover:text-blue-100",
                      "transition-all duration-300",
                      "rounded-xl border border-blue-500/20 hover:border-blue-400/30"
                    )}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compare Plans Button */}
        <div className="text-center mt-8">
          <Button 
            variant="outline"
            className="text-sm font-light py-2 px-6 border-white/10 hover:bg-white/5 rounded-xl text-white/70 hover:text-white/90"
            onClick={() => setShowComparison(true)}
          >
            See Full Feature Comparison
          </Button>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-base text-white/90 mb-3">Your AI Team Is Ready – Limited Spots for Free Trials!</p>
          <Button 
            variant="primary"
            size="lg"
            onClick={() => window.open('#contact', '_self')}
            className={cn(
              "px-6 py-3",
              "bg-blue-600/20 hover:bg-blue-500/30",
              "text-blue-200/90 hover:text-blue-100",
              "transition-all duration-300",
              "rounded-xl text-sm font-light",
              "border border-blue-500/20 hover:border-blue-400/30"
            )}
          >
            <span>Start AI Free – No Risk, Just Results</span>
          </Button>
        </div>
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900/90 border border-white/10 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-auto p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-light text-white/90">Full Feature Comparison</h3>
              <Button variant="outline" onClick={() => setShowComparison(false)}>✕</Button>
            </div>
            <div className="text-center text-white/60 py-8">
              Detailed comparison coming soon...
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 