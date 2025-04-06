import { useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { withThemeValidation } from '@/lib/hoc/withThemeValidation';
import { typography } from '@/lib/theme/tokens/typography';
import { colors } from '@/lib/theme/tokens/colors';
import { layout } from '@/lib/theme/tokens/layout';
import { effects } from '@/lib/theme/tokens/effects';
import { radius } from '@/lib/theme/tokens/radius';
import { Modal } from './Modal';

interface CardProps {
  title: string;
  description: string;
  expandedContent?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  variant?: 'three' | 'four' | 'six';
  centerText?: boolean;
}

function CardBase({
  title,
  description,
  expandedContent,
  className,
  ariaLabel,
  variant = 'three',
  centerText = false
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const generatedId = useId();
  const descriptionId = `${generatedId}-description`;

  const handleOpenModal = () => {
    if (expandedContent) {
      setIsModalOpen(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (expandedContent && (e.key === 'Enter' || e.key === ' ' || e.key === 'Space')) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const textAlignment = centerText ? 'text-center' : 'text-left';

  // Anpassa rubriken beroende på variant och textlängd
  const getTitleElement = () => {
    // Specialhantering för kortare titlar eller speciella varianter
    if (variant === 'four' && title.length <= 15) {
      return (
        <h3 className={cn(
          typography.heading.h3,
          colors.text.primary,
          'mb-3 tracking-tight break-words hyphens-auto'
        )}>
          {title}
        </h3>
      );
    }

    // Anpassa rubrikstorleken baserat på variant
    const headingSize = 
      variant === 'four' ? typography.heading.h4 : 
      variant === 'six' ? typography.heading.h5 : 
      typography.heading.h3;

    return (
      <h3 className={cn(
        headingSize,
        colors.text.primary,
        'mb-3 tracking-tight break-words hyphens-auto whitespace-normal'
      )}>
        {title}
      </h3>
    );
  };

  const cardContent = (
    <div className={cn(
      'flex flex-col justify-between h-full',
      typography.text.base, 
      colors.text.primary,
      textAlignment,
      'break-words hyphens-auto overflow-hidden',
      centerText ? 'items-center' : ''
    )}>
      {getTitleElement()}
      <p
        id={descriptionId}
        className={cn(
          variant === 'four' ? typography.text.sm : typography.text.base,
          colors.text.secondary,
          'max-w-prose break-words hyphens-auto whitespace-normal',
          centerText ? 'mx-auto' : ''
        )}
      >
        {description}
      </p>
    </div>
  );

  // Standardklasser för alla kort
  const standardCardClasses = cn(
    // Grundlayout men utan bakgrund
    'flex flex-col justify-between rounded-xl min-w-[220px]',
    layout.card.responsive[variant],
    // Premium effekter för korten
    "backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20",
    effects.shadow.premium,
    effects.hover.premium,
    effects.transition.base,
    radius.lg,
    // Typografi
    typography.text.base,
    colors.text.primary,
    // Ytterligare anpassning
    textAlignment,
    'h-full',
    className
  );

  // If there's expandedContent, make the card a button for better accessibility
  if (expandedContent) {
    return (
      <>
        <button
          type="button"
          onClick={handleOpenModal}
          onKeyDown={handleKeyDown}
          aria-label={ariaLabel || title}
          aria-expanded={isModalOpen}
          aria-controls={`${descriptionId}-modal`}
          className={cn(
            standardCardClasses,
            'cursor-pointer w-full',
            typography.weight.normal,
            'hover:shadow-xl hover:border-white/20'
          )}
        >
          {cardContent}
        </button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          closeButtonLabel="Close"
          aria-labelledby={`${descriptionId}-title`}
        >
          {expandedContent}
        </Modal>
      </>
    );
  }

  // For cards without expandedContent, use a regular div
  return (
    <div
      role="article"
      aria-label={ariaLabel || title}
      className={standardCardClasses}
    >
      {cardContent}
    </div>
  );
}

export const Card = withThemeValidation<CardProps>(
  CardBase,
  'Card',
  ['typography', 'colors', 'layout', 'effects', 'radius']
); 
