import React from 'react';

interface RoastIndicatorProps {
  roast: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark' | 'Unroasted';
  showLabel?: boolean;
}

export const RoastIndicator: React.FC<RoastIndicatorProps> = ({ roast, showLabel = true }) => {
  if (roast === 'Unroasted') {
    return (
      <div className="inline-flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#44523B]" />
        {showLabel && <span className="text-[11px] tracking-widest uppercase font-medium text-[#44523B]">Raw Green Coffee</span>}
      </div>
    );
  }

  const levels: Array<'Light' | 'Medium' | 'Medium-Dark' | 'Dark'> = ['Light', 'Medium', 'Medium-Dark', 'Dark'];
  const currentIndex = levels.indexOf(roast);

  return (
    <div className="inline-flex items-center gap-2.5">
      <div className="flex items-center gap-1.5" aria-label={`Roast level: ${roast}`}>
        {levels.map((level, idx) => {
          const filled = idx <= currentIndex;
          return (
            <div
              key={level}
              title={level}
              className={`w-3 h-4 rounded-full border transition-all duration-300 relative flex items-center justify-center ${
                filled
                  ? 'bg-[#3A2418] border-[#3A2418] ring-1 ring-[#C7A05A]/40'
                  : 'bg-transparent border-[#20150F]/25'
              }`}
            >
              {/* Minimalist central crease to represent coffee bean anatomy without emojis */}
              <div
                className={`w-[1px] h-2.5 rounded-full ${
                  filled ? 'bg-[#F4EFE7]/40' : 'bg-[#20150F]/20'
                }`}
              />
            </div>
          );
        })}
      </div>
      {showLabel && (
        <span className="text-[11px] uppercase tracking-widest font-medium text-[#65402B]">
          {roast} Roast
        </span>
      )}
    </div>
  );
};
