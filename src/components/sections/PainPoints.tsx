import { PhoneCall, Clock, Users, TrendingDown } from 'lucide-react';
import { PainPointCard } from '../ui/PainPointCard';

const painPoints = [
  {
    icon: <PhoneCall className="w-12 h-12 text-indigo-500" />,
    title: "Customer Service Automation",
    description: "Too many calls and repetitive inquiries slowing you down?",
    solution: "Our AI voice agents handle customer inquiries 24/7, providing instant responses and reducing wait times by 90%. Automate common questions while maintaining personalized service.",
    demoComponent: <div className="text-center text-sm text-zinc-500">AI Voice Demo Coming Soon</div>
  },
  {
    icon: <Clock className="w-12 h-12 text-indigo-400" />,
    title: "Administrative Efficiency",
    description: "Wasting precious hours on manual, repetitive work?",
    solution: "Our AI automation tools handle repetitive tasks like data entry, scheduling, and document processing. Free up your team for high-value work that grows your business.",
    demoComponent: <div className="text-center text-sm text-zinc-500">Workflow Demo Coming Soon</div>
  },
  {
    icon: <TrendingDown className="w-12 h-12 text-indigo-400" />,
    title: "Lead Response Time",
    description: "Losing opportunities due to slow follow-ups?",
    solution: "AI-powered lead qualification and instant response system ensures no lead goes cold. Engage prospects 24/7 with personalized follow-ups.",
    demoComponent: <div className="text-center text-sm text-zinc-500">Lead Response Demo Coming Soon</div>
  },
  {
    icon: <Users className="w-12 h-12 text-indigo-300" />,
    title: "Scalable Operations",
    description: "Growth bottlenecked by staffing limitations?",
    solution: "Scale your operations without the overhead. Our AI solutions handle increasing workload without adding headcount, maintaining quality while reducing costs.",
    demoComponent: <div className="text-center text-sm text-zinc-500">Scaling Demo Coming Soon</div>
  }
];

export function PainPoints() {
  return (
    <section className="relative py-32 bg-black/5 backdrop-blur-sm">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
          Common Business Challenges
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Click any challenge to see how AI automation can help.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {painPoints.map((point, index) => (
          <div 
            key={index}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 border border-indigo-500/10 group"
          >
            {/* Icon and Title */}
            <div className="flex items-start gap-6 mb-6">
              <div className="transition-transform group-hover:scale-110">
                {point.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-zinc-400">{point.description}</p>
              </div>
            </div>

            {/* Solution Preview */}
            <div className="pl-[72px]">
              <p className="text-zinc-500 text-sm">
                {point.solution.split('.')[0] + '.'}
              </p>
              <button 
                onClick={() => console.log(`Showing solution for: ${point.title}`)}
                className="text-indigo-400 text-sm mt-2 hover:text-indigo-300 transition-colors"
              >
                Learn how →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 