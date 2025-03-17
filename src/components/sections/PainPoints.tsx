import { PhoneCall, Clock, Users, TrendingDown } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const painPoints = [
  {
    icon: <PhoneCall className="w-12 h-12 text-blue-500/80" />,
    title: "Too Many Customer Calls & Repetitive Inquiries?",
    description: "Every missed call is a missed opportunity—how many potential clients have you lost today?",
    solution: "Let AI handle routine inquiries 24/7 while you focus on growth",
    demoComponent: <div className="text-center text-sm text-white/60">AI Voice Demo Coming Soon</div>
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-400/80" />,
    title: "Wasting Hours on Admin & Manual Work?",
    description: "Time spent on paperwork is time lost on scaling your business",
    solution: "Automate your repetitive tasks and free up your time for real business",
    demoComponent: <div className="text-center text-sm text-white/60">Workflow Demo Coming Soon</div>
  },
  {
    icon: <TrendingDown className="w-12 h-12 text-blue-300/80" />,
    title: "Losing Leads Because of Slow Response Times?",
    description: "Leads go cold fast—if you don't respond instantly, your competitors will",
    solution: "AI responds instantly to leads, converting more customers without delay",
    demoComponent: <div className="text-center text-sm text-white/60">Lead Response Demo Coming Soon</div>
  },
  {
    icon: <Users className="w-12 h-12 text-blue-200/80" />,
    title: "Scaling Feels Impossible Without Hiring More Staff?",
    description: "Growing should mean more revenue, not more expenses",
    solution: "Skyland AI helps you scale without increasing headcount or payroll costs",
    demoComponent: <div className="text-center text-sm text-white/60">Scaling Demo Coming Soon</div>
  }
];

export function PainPoints() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 font-inter">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-[-0.03em] leading-[1.15] text-center text-white/90 px-4 sm:px-0">
          Are These Problems Slowing <br className="hidden sm:block" />Down Your Business?
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {painPoints.map((point, index) => (
          <ExpandableCard
            key={index}
            icon={point.icon}
            title={point.title}
            description={point.description}
            solution={point.solution}
            demoComponent={point.demoComponent}
          />
        ))}
      </div>
    </section>
  );
} 