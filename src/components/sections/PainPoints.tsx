import { PhoneCall, Clock, Users, TrendingDown } from 'lucide-react';
import { ExpandableCard } from '../ui/ExpandableCard';

const painPoints = [
  {
    icon: <PhoneCall className="w-7 h-7 text-blue-400" />,
    title: "Too Many Customer Calls & Repetitive Inquiries?",
    description: "Every missed call is a missed opportunity—how many potential clients have you lost today?",
    solution: "Let AI handle routine inquiries 24/7 while you focus on growth. Our AI voice agents can handle multiple calls simultaneously, qualify leads, and schedule appointments - all while maintaining natural, human-like conversations.",
    showDana: true,
    danaWelcomeText: "Hi! I can help you understand how our AI voice agents can handle your customer calls. Would you like to see how it works?"
  },
  {
    icon: <Clock className="w-7 h-7 text-blue-400" />,
    title: "Wasting Hours on Admin & Manual Work?",
    description: "Time spent on paperwork is time lost on scaling your business",
    solution: "Our AI automation tools can handle your routine tasks with precision - from data entry to document processing. This frees up your valuable time to focus on growth and strategy.",
    showDana: true,
    danaWelcomeText: "Hi! I'd love to show you how our AI automation can save you hours of manual work. What tasks are taking up most of your time?"
  },
  {
    icon: <TrendingDown className="w-7 h-7 text-blue-400" />,
    title: "Losing Leads Because of Slow Response Times?",
    description: "Leads go cold fast—if you don't respond instantly, your competitors will",
    solution: "With our AI-powered lead response system, every inquiry gets instant attention. Our AI can qualify leads, answer questions, and schedule follow-ups 24/7, ensuring no opportunity slips through the cracks.",
    showDana: true,
    danaWelcomeText: "Hi! Let me show you how our AI can help you respond to leads instantly. What's your current response time to new leads?"
  },
  {
    icon: <Users className="w-7 h-7 text-blue-400" />,
    title: "Scaling Feels Impossible Without Hiring More Staff?",
    description: "Growing should mean more revenue, not more expenses",
    solution: "Our AI solutions help you scale operations without proportionally increasing headcount. Handle more customers, process more orders, and expand your business while keeping costs under control.",
    showDana: true,
    danaWelcomeText: "Hi! I can explain how our AI helps businesses scale without hiring more staff. What's your biggest scaling challenge?"
  }
];

export function PainPoints() {
  return (
    <section id="pain-points" className="relative py-14 sm:py-16 font-inter">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      
      {/* Section Content */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[42px] md:text-[48px] font-extralight tracking-[-0.03em] leading-[1.1] text-center text-white/90">
            Common Business Challenges
          </h2>
          <p className="text-xl sm:text-2xl font-light tracking-[-0.015em] leading-[1.4] text-white/80 mt-4 max-w-3xl mx-auto">
            Sound familiar? Let AI solve these problems for you.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {painPoints.map((point, index) => (
            <ExpandableCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              solution={point.solution}
              showDana={point.showDana}
              danaWelcomeText={point.danaWelcomeText}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 