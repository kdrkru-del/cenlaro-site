import React from 'react';
import { Locale } from '@/dictionaries/types';

interface RoastIndicatorProps {
  roast: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark' | 'Unroasted';
  showLabel?: boolean;
  lang?: Locale;
}

const ROAST_LABELS: Record<Locale, Record<string, string>> = {
  ru: {
    Light: 'Светлая обжарка',
    Medium: 'Средняя обжарка',
    'Medium-Dark': 'Средне-темная обжарка',
    Dark: 'Темная обжарка',
    Unroasted: 'Зеленый кофе',
  },
  en: {
    Light: 'Light Roast',
    Medium: 'Medium Roast',
    'Medium-Dark': 'Medium-Dark',
    Dark: 'Dark Roast',
    Unroasted: 'Raw Green Coffee',
  },
  vi: {
    Light: 'Rang sáng (Light)',
    Medium: 'Rang vừa (Medium)',
    'Medium-Dark': 'Rang vừa-đậm',
    Dark: 'Rang đậm (Espresso)',
    Unroasted: 'Cà phê nhân xanh',
  },
};

export const RoastIndicator: React.FC<RoastIndicatorProps> = ({
  roast,
  showLabel = true,
  lang = 'ru',
}) => {
  const currentLabels = ROAST_LABELS[lang] || ROAST_LABELS.ru;
  const labelText = currentLabels[roast] || roast;

  if (roast === 'Unroasted') {
    return (
      <div className="inline-flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#44523B]" />
        {showLabel && (
          <span className="text-[11px] tracking-widest uppercase font-medium text-[#44523B]">
            {labelText}
          </span>
        )}
      </div>
    );
  }

  const levels: Array<'Light' | 'Medium' | 'Medium-Dark' | 'Dark'> = ['Light', 'Medium', 'Medium-Dark', 'Dark'];
  const currentIndex = levels.indexOf(roast);

  return (
    <div className="inline-flex items-center gap-2.5">
      <div className="flex items-center gap-1.5" aria-label={`Roast level: ${labelText}`}>
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
              {/* Minimalist central crease representing coffee bean anatomy */}
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
          {labelText}
        </span>
      )}
    </div>
  );
};
