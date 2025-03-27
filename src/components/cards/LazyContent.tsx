import React from 'react';

interface LazyContentProps {
  content: React.ReactNode;
}

const LazyContent: React.FC<LazyContentProps> = ({ content }) => {
  return (
    <div className="lazy-content animate-fade-in">
      {content}
    </div>
  );
};

export default LazyContent; 