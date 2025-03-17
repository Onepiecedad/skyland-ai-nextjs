import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { ExpandableCard } from '../ui/ExpandableCard';
import { Lightbulb, Rocket, Shield, Users, Target, Phone } from 'lucide-react';

const aboutCards = [
  {
    icon: <Lightbulb className="w-7 h-7 text-blue-500/80" />,
    title: "Why Skyland AI Was Built – The Future of Work Starts Here",
    description: "Breaking Free from Manual Work",
    solution: "We built Skyland AI to help businesses stop working harder and start working smarter. Our mission is to eliminate repetitive tasks and unlock limitless growth through intelligent automation.",
    demoComponent: (
      <div className="space-y-4 text-white/70">
        <p>• What if your business could respond to leads instantly—without lifting a finger?</p>
        <p>• What if AI could handle 80% of your workload—so you can focus on growth?</p>
        <p>• What if scaling didn't mean hiring more people—but making your existing systems smarter?</p>
      </div>
    )
  },
  {
    icon: <Rocket className="w-7 h-7 text-blue-400/80" />,
    title: "How AI Scales Your Business—Without Adding More Work",
    description: "AI-Powered Automation That Works 24/7",
    solution: "Our AI-powered automation acts like a full-time employee—without the overhead. We provide comprehensive solutions that handle everything from customer inquiries to complex workflows.",
    demoComponent: (
      <div className="space-y-4 text-white/70">
        <p>• AI Assistants That Work 24/7 – Instantly handling customer inquiries, lead responses, and admin tasks</p>
        <p>• AI Voice Agents That Replace Call Centers – Answering calls, qualifying leads, and booking appointments automatically</p>
        <p>• Workflow Automation That Eliminates Repetitive Tasks – From customer service to backend operations</p>
      </div>
    )
  },
  {
    icon: <Shield className="w-7 h-7 text-blue-300/80" />,
    title: "Why Businesses Choose Skyland AI – Smarter, Faster, Stronger",
    description: "Custom-Tailored AI Solutions",
    solution: "Unlike generic chatbots or automation tools, we don't just sell AI—we design AI to fit your business. Every solution is built around your specific workflows and needs.",
    demoComponent: (
      <div className="space-y-4 text-white/70">
        <p>• Custom-Tailored to Your Needs – Every AI system is built around your workflows</p>
        <p>• Fast & Effortless Implementation – AI working in days, not months</p>
        <p>• ROI That Pays for Itself – AI-powered businesses save up to 40% more time and convert leads 2x faster</p>
        <p>• Backed by Industry Insights – Our AI automation strategies are based on real-world business case studies</p>
      </div>
    )
  },
  {
    icon: <Users className="w-7 h-7 text-blue-200/80" />,
    title: "AI for Growth-Driven Businesses – Is Yours Next?",
    description: "Industries That Thrive on Efficiency",
    solution: "The industries we serve have one thing in common: They thrive on fast response times and efficiency. AI gives them an unfair advantage by eliminating the bottlenecks holding them back.",
    demoComponent: (
      <div className="space-y-4 text-white/70">
        <p>• Real Estate & Property Management – AI nurtures leads & books viewings 24/7</p>
        <p>• Call Centers & Customer Support – AI voice agents cut wait times by 70%</p>
        <p>• Hotels & Hospitality – AI-powered booking assistants increase direct reservations</p>
        <p>• Travel Agencies & E-Commerce – AI automates customer interactions & sales</p>
        <div className="mt-8 text-center">
          <p className="text-white/90 mb-4">See how AI can transform your business today</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('#contact', '_self')}
            className={cn(
              "px-6 py-3",
              "bg-blue-400/[0.1] hover:bg-blue-400/[0.15]",
              "text-white/90 hover:text-white",
              "transition-all duration-300",
              "rounded-xl text-base font-light",
              "border border-blue-400/[0.15] hover:border-blue-400/[0.25]",
              "backdrop-blur-2xl"
            )}
          >
            Book Your Free Strategy Call
          </Button>
        </div>
      </div>
    )
  }
];

export function About() {
  return (
    <section id="who-we-are" className="relative py-14 sm:py-16 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            What's Really Slowing Your Business Down?
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.4] text-white/80 mt-4 max-w-3xl mx-auto">
            The biggest growth killer in business isn't lack of customers—it's <span className="font-normal text-white relative inline-block">wasted time <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></span></span>. Every minute spent on repetitive tasks is a minute not spent growing your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {aboutCards.map((card, index) => (
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

        {/* Final CTA */}
        <div className="text-center space-y-6 mt-20 sm:mt-24">
          <h3 className="text-[32px] md:text-[36px] font-extralight tracking-[-0.02em] leading-[1.2] text-white/90">
            The Future is AI—Are You Ready?
          </h3>
          <p className="text-lg sm:text-xl font-light tracking-[-0.01em] leading-[1.6] text-white/80 max-w-2xl mx-auto">
            AI is the competitive edge separating fast-growing businesses from those stuck in outdated systems.
            We only take a handful of new clients each month—don't get left behind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 pt-8">
            <div className="flex justify-end">
              <Button 
                variant="primary"
                size="lg"
                onClick={() => window.open('#demo', '_self')}
                className={cn(
                  "px-8 py-6 w-full md:w-[90%]",
                  "bg-blue-400/[0.08]",
                  "text-white/90 hover:text-white",
                  "transition-all duration-500",
                  "rounded-2xl text-lg font-light",
                  "border border-blue-400/10",
                  "backdrop-blur-sm",
                  "flex items-center gap-3",
                  "group relative",
                  "hover:scale-[1.02]",
                  "hover:border-blue-400/30",
                  "hover:bg-blue-400/[0.12]",
                  "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
                  "overflow-hidden"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Rocket className={cn(
                  "w-12 h-12 text-blue-500/80",
                  "transition-all duration-500",
                  "group-hover:scale-110",
                  "group-hover:rotate-3",
                  "group-hover:animate-wiggle"
                )} />
                <span className="relative">Watch AI Work – Get Your Free Demo</span>
              </Button>
            </div>
            <div className="flex justify-start">
              <Button 
                variant="primary"
                size="lg"
                onClick={() => window.open('#contact', '_self')}
                className={cn(
                  "px-8 py-6 w-full md:w-[90%]",
                  "bg-blue-400/[0.08]",
                  "text-white/90 hover:text-white",
                  "transition-all duration-500",
                  "rounded-2xl text-lg font-light",
                  "border border-blue-400/10",
                  "backdrop-blur-sm",
                  "flex items-center gap-3",
                  "group relative",
                  "hover:scale-[1.02]",
                  "hover:border-blue-400/30",
                  "hover:bg-blue-400/[0.12]",
                  "hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
                  "overflow-hidden"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Phone className={cn(
                  "w-12 h-12 text-blue-500/80",
                  "transition-all duration-500",
                  "group-hover:scale-110",
                  "group-hover:rotate-3",
                  "group-hover:animate-wiggle"
                )} />
                <span className="relative">Book Your Free AI Strategy Call – Limited Spots!</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 