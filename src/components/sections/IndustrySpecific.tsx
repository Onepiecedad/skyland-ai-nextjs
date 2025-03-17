import { Building2, Hotel, Phone, Briefcase } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const industries = [
  {
    icon: <Building2 className="w-12 h-12 text-blue-500/80" />,
    title: "Never Lose Another Lead – AI That Sells Properties 24/7",
    description: "Missed leads = lost revenue. AI follows up instantly, qualifies buyers, and books viewings for you",
    solution: "Our AI agents respond to inquiries 24/7, qualify leads, schedule viewings, and even provide virtual property tours. Results show a 40% increase in booked viewings and instant response times.",
    demoComponent: <div className="text-center text-sm text-white/60">Real Estate AI Demo Coming Soon</div>
  },
  {
    icon: <Hotel className="w-12 h-12 text-blue-400/80" />,
    title: "AI Concierge That Works 24/7 – Boost Direct Bookings & Reduce Workload",
    description: "Free up your front desk – AI handles bookings, guest inquiries & recommendations instantly",
    solution: "Our AI concierge manages bookings, answers guest questions, provides local recommendations, and handles special requests - reducing front desk workload by 70% while increasing direct bookings by 25%.",
    demoComponent: <div className="text-center text-sm text-white/60">Hospitality AI Demo Coming Soon</div>
  },
  {
    icon: <Phone className="w-12 h-12 text-blue-300/80" />,
    title: "AI That Answers Calls in Seconds – No Wait Time, No Stress",
    description: "Stop losing customers to long wait times. AI handles 80% of calls instantly, 24/7",
    solution: "Our AI voice agents answer calls immediately, resolve common inquiries, and seamlessly escalate complex issues. Wait times dropped from 5 minutes to 5 seconds, with AI resolving 80% of inquiries.",
    demoComponent: <div className="text-center text-sm text-white/60">Call Center AI Demo Coming Soon</div>
  },
  {
    icon: <Briefcase className="w-12 h-12 text-blue-200/80" />,
    title: "Spend Less Time on Admin, More Time on Clients – AI That Handles Workflows",
    description: "AI-powered automation for contracts, invoices, and client communications",
    solution: "Our AI assistants handle document processing, automate client communications, and streamline workflows - reducing document processing time by 80% and saving firms 15+ hours per week.",
    demoComponent: <div className="text-center text-sm text-white/60">Professional Services AI Demo Coming Soon</div>
  }
];

export function IndustrySpecific() {
  return (
    <section id="industry-specific" className="relative py-24 font-inter">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.15] text-center text-white/90">
          AI That's Driving Growth in Your Industry <br className="hidden sm:block" />– Try It Live
        </h2>
      </div>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-8">
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