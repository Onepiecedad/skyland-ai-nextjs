import { Building2, Hotel, Phone, Briefcase } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const industries = [
  {
    icon: <Building2 className="w-7 h-7 text-blue-500/80" />,
    title: "AI-Powered Real Estate Sales",
    description: "Never miss a lead with AI that qualifies buyers, schedules viewings, and follows up instantly, 24/7.",
    solution: "Our AI agents respond to inquiries 24/7, qualify leads, schedule viewings, and even provide virtual property tours. Results show a 40% increase in booked viewings and instant response times.",
    demoComponent: <div className="text-center text-sm text-white/60">Real Estate AI Demo Coming Soon</div>
  },
  {
    icon: <Hotel className="w-7 h-7 text-blue-400/80" />,
    title: "24/7 AI Hotel Concierge",
    description: "Boost direct bookings while your AI concierge handles guest inquiries and recommendations instantly.",
    solution: "Our AI concierge manages bookings, answers guest questions, provides local recommendations, and handles special requests - reducing front desk workload by 70% while increasing direct bookings by 25%.",
    demoComponent: <div className="text-center text-sm text-white/60">Hospitality AI Demo Coming Soon</div>
  },
  {
    icon: <Phone className="w-7 h-7 text-blue-300/80" />,
    title: "Instant AI Call Response",
    description: "Eliminate wait times with AI that answers calls in seconds and resolves 80% of inquiries instantly.",
    solution: "Our AI voice agents answer calls immediately, resolve common inquiries, and seamlessly escalate complex issues. Wait times dropped from 5 minutes to 5 seconds, with AI resolving 80% of inquiries.",
    demoComponent: <div className="text-center text-sm text-white/60">Call Center AI Demo Coming Soon</div>
  },
  {
    icon: <Briefcase className="w-7 h-7 text-blue-200/80" />,
    title: "AI Workflow Automation",
    description: "Save 15+ hours weekly with AI that handles your contracts, invoices, and client communications.",
    solution: "Our AI assistants handle document processing, automate client communications, and streamline workflows - reducing document processing time by 80% and saving firms 15+ hours per week.",
    demoComponent: <div className="text-center text-sm text-white/60">Professional Services AI Demo Coming Soon</div>
  }
];

export function IndustrySpecific() {
  return (
    <section id="industry-specific" className="relative py-14 sm:py-16 font-inter">
      {/* Section Title */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
          AI Driving Growth in Your Industry <br className="hidden sm:block" />– Try It Live
        </h2>
      </div>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[1120px] mx-auto px-4 sm:px-6">
        {industries.map((industry, index) => (
          <ExpandableCard
            key={index}
            icon={industry.icon}
            title={industry.title}
            description={industry.description}
            solution={industry.solution}
            demoComponent={industry.demoComponent}
          />
        ))}
      </div>
    </section>
  );
} 