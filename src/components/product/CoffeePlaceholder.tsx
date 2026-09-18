import React from 'react';

interface CoffeePlaceholderProps {
  name: string;
  category: string;
  ratio?: string;
  roast?: string;
  className?: string;
}

export const CoffeePlaceholder: React.FC<CoffeePlaceholderProps> = ({
  name,
  category,
  ratio,
  roast,
  className = 'h-64 sm:h-72',
}) => {
  const isGreen = category.toLowerCase().includes('green');

  return (
    <div
      className={`relative w-full overflow-hidden flex flex-col items-center justify-center p-6 text-center transition-all duration-700 select-none ${
        isGreen ? 'bg-gradient-to-br from-[#2D3827] to-[#1F261B]' : 'bg-gradient-to-br from-[#261A13] via-[#1D130E] to-[#120B08]'
      } ${className}`}
    >
      {/* Editorial geometric frame background */}
      <div className="absolute inset-3 border border-[#C7A05A]/20 pointer-events-none" />
      <div className="absolute inset-5 border border-[#C7A05A]/10 pointer-events-none" />

      {/* Subtle brand crest monogram */}
      <div className="w-12 h-12 rounded-full border border-[#C7A05A]/40 flex items-center justify-center mb-3">
        <span className="font-serif text-[#C7A05A] text-lg tracking-widest font-light">C</span>
      </div>

      <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#C7A05A]/80 mb-1">
        {category}
      </span>

      <h4 className="font-serif text-white text-base sm:text-lg font-normal tracking-wide max-w-[200px] leading-tight">
        {name}
      </h4>

      {ratio && (
        <div className="mt-3 px-3 py-0.5 bg-[#C7A05A]/15 border border-[#C7A05A]/30 rounded text-[11px] font-mono tracking-widest text-[#F4EFE7]">
          {ratio}
        </div>
      )}

      {roast && (
        <span className="mt-2 text-[10px] uppercase tracking-widest text-[#F4EFE7]/50 font-medium">
          {roast}
        </span>
      )}

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-[#C7A05A]/60" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-[#C7A05A]/60" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-[#C7A05A]/60" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-[#C7A05A]/60" />
    </div>
  );
};
