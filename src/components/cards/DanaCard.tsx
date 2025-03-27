import { BaseCard } from "./BaseCard";
import { Brain, MessageCircle } from "lucide-react";
import { IconKey, iconMap } from "./iconMap";

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        variant?: string;
      }, HTMLElement>;
    }
  }
}

interface DanaCardProps {
  icon: IconKey;
  title: string;
  paragraphs: string[];
}

export const DanaCard = ({ icon, title, paragraphs = [] }: DanaCardProps) => {
  const Icon = iconMap[icon] || Brain;

  const handleTalkToDana = () => {
    const heroWidget = document.querySelector('#hero-widget');
    if (heroWidget) {
      heroWidget.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BaseCard className="p-6 md:p-6 flex flex-col gap-6 max-w-md shadow-xl">
      <div className="flex items-center gap-2 group">
        <Icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xl font-light tracking-wider text-white group-hover:text-white/90 transition-colors">SKYLAND AI</span>
      </div>

      <div className="text-white/90 space-y-3">
        <h3 className="text-lg font-semibold leading-snug tracking-tight">
          {title}
        </h3>
        <div className="text-sm text-white/70 leading-relaxed space-y-4">
          {paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <button
        onClick={handleTalkToDana}
        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-black/20 text-white/80 hover:text-white/90 border border-white/[0.08] hover:border-white/[0.15] backdrop-blur-sm transition-all duration-300"
      >
        <MessageCircle className="w-4 h-4 text-blue-400" />
        <span>Talk to Dana About This</span>
      </button>
    </BaseCard>
  );
}; 