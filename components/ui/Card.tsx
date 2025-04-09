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
  debugMode?: boolean;
}

function CardBase({
  title,
  description,
  expandedContent,
  className,
  ariaLabel,
  variant = 'three',
  centerText = false,
  debugMode = false,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const generatedId = useId();
  const descriptionId = `${generatedId}-description`;

  const handleOpenModal = () => {
    if (debugMode) {
      console.log('Card clicked, expandedContent exists:', !!expandedContent);
    }

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
    // Dynamic font size based on title length
    let fontSizeClass = 'text-xl sm:text-2xl'; // Reduced default size

    if (title.length > 50) {
      fontSizeClass = 'text-lg sm:text-xl';
    } else if (title.length > 30) {
      fontSizeClass = 'text-lg sm:text-xl';
    }

    // Specialhantering för kortare titlar eller speciella varianter
    if (variant === 'four' && title.length <= 15) {
      return (
        <h3
          className={cn(
            colors.text.primary,
            'mb-2 tracking-tight break-words hyphens-auto', // Reduced margin
            'font-normal',
            fontSizeClass
          )}
        >
          {title}
        </h3>
      );
    }

    // Anpassa rubrikstorleken baserat på variant och title length
    const headingSize =
      variant === 'four'
        ? typography.heading.h4
        : variant === 'six'
          ? typography.heading.h5
          : 'text-xl sm:text-2xl'; // Using custom size instead of typography.heading.h3

    return (
      <h3
        className={cn(
          colors.text.primary,
          'mb-2 tracking-tight break-words hyphens-auto whitespace-normal', // Reduced margin
          'font-normal',
          headingSize,
          fontSizeClass // Dynamic font size class
        )}
      >
        {title}
      </h3>
    );
  };

  // Also adjust description text size based on length
  const getDescriptionClass = () => {
    const baseClass = variant === 'four' ? 'text-xs sm:text-sm' : 'text-sm';

    // If the description has two sentences (likely two "what if" questions)
    const sentences = description.split(/\?\s+/);
    if (sentences.length > 1) {
      return cn(baseClass, 'leading-relaxed');
    }

    if (description.length > 80) {
      return cn(baseClass, 'leading-relaxed');
    }

    return baseClass;
  };

  // Format the description to add line breaks between questions
  const formattedDescription = () => {
    // Check if the description contains multiple questions
    if (description.includes('? What if')) {
      // Split at '? What if' and join with line break
      return description.replace(/\? What if/, '?\n\nWhat if');
    }
    return description;
  };

  const cardContent = (
    <div
      className={cn(
        'flex flex-col justify-between h-full',
        typography.text.base,
        colors.text.primary,
        textAlignment,
        'break-words hyphens-auto overflow-hidden',
        centerText ? 'items-center' : ''
      )}
    >
      {getTitleElement()}
      <p
        id={descriptionId}
        className={cn(
          getDescriptionClass(),
          colors.text.secondary,
          'max-w-prose break-words hyphens-auto whitespace-pre-line', // Changed to pre-line for line breaks
          centerText ? 'mx-auto' : ''
        )}
      >
        {formattedDescription()}
      </p>
    </div>
  );

  // Standardklasser för alla kort
  const standardCardClasses = cn(
    // Grundlayout men utan bakgrund
    'flex flex-col justify-between rounded-xl min-w-[220px]',
    layout.card.responsive[variant],
    // Premium effekter för korten
    'backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20',
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
        <div
          role="button"
          tabIndex={0}
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
        </div>

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
    <div role="article" aria-label={ariaLabel || title} className={standardCardClasses}>
      {cardContent}
    </div>
  );
}

export const Card = withThemeValidation<CardProps>(CardBase, 'Card', [
  'typography',
  'colors',
  'layout',
  'effects',
  'radius',
]);
