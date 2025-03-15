import { PhoneCall, Clock, Users, TrendingDown } from 'lucide-react';
import { PainPointCard } from '../ui/PainPointCard';

const painPoints = [
  {
    icon: <PhoneCall className="w-6 h-6 text-blue-400" />,
    title: "Too Many Customer Calls & Repetitive Inquiries?",
    description: "Customers hate waiting. Every second you delay costs you money.",
    solution: "Our AI voice agents handle customer inquiries 24/7, providing instant responses and reducing wait times by 90%. Automate common questions while maintaining personalized service.",
    demoComponent: <div className="text-center text-sm text-zinc-500">AI Voice Demo Coming Soon</div>
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-400" />,
    title: "Wasting Hours on Admin & Manual Work?",
    description: "Every hour lost is revenue gone.",
    solution: "Our AI automation tools handle repetitive tasks like data entry, scheduling, and document processing. Free up your team for high-value work that grows your business.",
    demoComponent: <div className="text-center text-sm text-zinc-500">Workflow Demo Coming Soon</div>
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-red-400" />,
    title: "Losing Leads Because of Slow Response Times?",
    description: "Prospects expect instant replies. Delay = lost sales.",
    solution: "AI-powered lead qualification and instant response system ensures no lead goes cold. Engage prospects 24/7 with personalized follow-ups.",
    demoComponent: <div className="text-center text-sm text-zinc-500">Lead Response Demo Coming Soon</div>
  },
  {
    icon: <Users className="w-6 h-6 text-green-400" />,
    title: "Scaling Feels Impossible Without Hiring More Staff?",
    description: "Stop burning cash on hiring—AI scales instantly without payroll headaches.",
    solution: "Scale your operations without the overhead. Our AI solutions handle increasing workload without adding headcount, maintaining quality while reducing costs.",
    demoComponent: <div className="text-center text-sm text-zinc-500">Scaling Demo Coming Soon</div>
  }
];

export function PainPoints() {
  return (
    <section className="relative py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Are These Problems Slowing Down Your Business?
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Click on any challenge to see how AI can solve it for you.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {painPoints.map((point, index) => (
          <PainPointCard
            key={index}
            icon={point.icon}
            title={point.title}
            description={point.description}
            solution={point.solution}
            demoComponent={point.demoComponent}
            onDemoClick={() => {
              // TODO: Implement demo logic
              console.log(`Showing demo for: ${point.title}`);
            }}
          />
        ))}
      </div>
    </section>
  );
} 