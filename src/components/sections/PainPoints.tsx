import { typography, combinedStyles } from '../../styles/shared';
import {
  Phone,
  FileText,
  Clock,
  BarChart4,
} from 'lucide-react';

const painPoints = [
  {
    icon: <Phone className="w-5 h-5 text-sky-400" />,
    title: "Every missed call could be a lost client. How many did you miss today?",
    lines: [
      "What if your business could respond instantly—even when you can't?",
      "What if you could have fewer lost leads—and more clients saying yes?",
    ],
  },
  {
    icon: <FileText className="w-5 h-5 text-sky-400" />,
    title: "Still buried in admin that doesn't grow your business?",
    lines: [
      "What if your daily busywork ran itself—without extra staff?",
      "What if you could free up hours and finally focus on real growth?",
    ],
  },
  {
    icon: <Clock className="w-5 h-5 text-sky-400" />,
    title: "Losing leads because you didn't respond fast enough?",
    lines: [
      "What if your leads got a reply in seconds—not hours?",
      "What if your leads never went cold again?",
    ],
  },
  {
    icon: <BarChart4 className="w-5 h-5 text-sky-400" />,
    title: "Scaling feels impossible without hiring more staff?",
    lines: [
      "What if your operations scaled automatically as your business grew?",
      "What if you could serve more clients—without growing your team?",
    ],
  },
];

export function PainPoints() {
  return (
    <section className={combinedStyles.sectionWrapper}>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className={typography.sectionHeadline}>
          Which of These Problems Is Costing You the Most Right Now?
        </h2>
        <p className={typography.sectionSubheadline}>
          These issues don't just slow you down—they quietly drain your time, energy, and profit.
        </p>
        <p className={typography.sectionSubheadline}>
          AI can start fixing them in days—not months.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {painPoints.map((point, index) => (
          <div
            key={index}
            className="relative group p-6 rounded-2xl bg-slate-900/70 border border-white/10 text-white hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 ease-in-out backdrop-blur-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              {point.icon}
              <h3 className="text-white text-base font-medium leading-snug">
                {point.title}
              </h3>
            </div>
            <ul className="space-y-1 pl-8 list-disc text-slate-300 text-[15px] leading-relaxed">
              {point.lines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 