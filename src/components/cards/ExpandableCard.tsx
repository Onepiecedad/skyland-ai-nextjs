import { BaseCard } from "./BaseCard";
import { useOverlay } from "../../contexts/OverlayContext";
import { IconKey, iconMap } from "./iconMap";

interface ExpandableCardProps {
  icon: IconKey;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
  className?: string;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  icon,
  title,
  description,
  expandedContent,
  className = "",
}) => {
  const { open } = useOverlay();
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in iconMap`);
    return null;
  }

  const handleExpand = () => {
    if (!expandedContent) return;
    
    const content = (
      <div className="space-y-10">
        {/* Header Section */}
        <div className="flex items-start gap-6">
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 shadow-lg">
            <IconComponent className="w-8 h-8 text-blue-400" />
          </div>
          <div className="space-y-3 pt-1">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {title}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-8 border-t border-white/10">
          {expandedContent}
        </div>
      </div>
    );

    open(content, "max-w-3xl");
  };

  return (
    <BaseCard
      icon={<IconComponent className="w-5 h-5" />}
      title={title}
      description={description}
      expandable={true}
      expandedContent={expandedContent}
      onClick={handleExpand}
      className={`${className} ${expandedContent ? "cursor-pointer hover:bg-white/[0.07]" : ""}`}
    />
  );
}; 