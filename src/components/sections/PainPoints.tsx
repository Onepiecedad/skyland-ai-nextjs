import { PhoneCall, Clock, Users, TrendingDown } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const painPoints = [
  {
    icon: <PhoneCall className="w-7 h-7 text-blue-400" />,
    title: "Too Many Customer Calls & Repetitive Inquiries?",
    description: "Every missed call is a missed opportunity—how many potential clients have you lost today?",
    solution: "Let AI handle routine inquiries 24/7 while you focus on growth",
    demoComponent: <div className="text-center text-sm text-white/60">AI Voice Demo Coming Soon</div>
  },
  {
    icon: <Clock className="w-7 h-7 text-blue-400" />,
    title: "Wasting Hours on Admin & Manual Work?",
    description: "Time spent on paperwork is time lost on scaling your business",
    solution: "Automate your repetitive tasks and free up your time for real business",
    demoComponent: <div className="text-center text-sm text-white/60">Workflow Demo Coming Soon</div>
  },
  {
    icon: <TrendingDown className="w-7 h-7 text-blue-400" />,
    title: "Losing Leads Because of Slow Response Times?",
    description: "Leads go cold fast—if you don't respond instantly, your competitors will",
    solution: "AI responds instantly to leads, converting more customers without delay",
    demoComponent: <div className="text-center text-sm text-white/60">Lead Response Demo Coming Soon</div>
  },
  {
    icon: <Users className="w-7 h-7 text-blue-400" />,
    title: "Scaling Feels Impossible Without Hiring More Staff?",
    description: "Growing should mean more revenue, not more expenses",
    solution: "Skyland AI helps you scale without increasing headcount or payroll costs",
    demoComponent: <div className="text-center text-sm text-white/60">Scaling Demo Coming Soon</div>
  }
];

export function PainPoints() {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center py-12 sm:py-14 font-inter">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-[42px] md:text-[48px] lg:text-[54px] font-extralight tracking-[-0.03em] leading-[1.15] text-center text-white/90 px-4 sm:px-0">
          Are These Problems Slowing <br className="hidden sm:block" />Down Your Business?
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto px-4 md:px-5">
        {painPoints.map((point, index) => (
          <ExpandableCard
            key={index}
            icon={point.icon}
            title={point.title}
            description={point.description}
            solution={point.solution}
            demoComponent={point.demoComponent}
            className="p-4 md:p-5"
          />
        ))}
      </div>
    </section>
  );
} 