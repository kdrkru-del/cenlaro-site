import React from 'react';

interface TasteProfileProps {
  body: number; // 1-5
  acidity: number; // 1-5
  sweetness: number; // 1-5
  bitterness: number; // 1-5
  intensity: number; // 1-5
  compact?: boolean;
}

export const TasteProfile: React.FC<TasteProfileProps> = ({
  body,
  acidity,
  sweetness,
  bitterness,
  intensity,
  compact = false,
}) => {
  const metrics = [
    { label: 'Intensity', value: intensity },
    { label: 'Body', value: body },
    { label: 'Acidity', value: acidity },
    { label: 'Sweetness', value: sweetness },
    { label: 'Bitterness', value: bitterness },
  ];

  return (
    <div className={`w-full ${compact ? 'space-y-2' : 'space-y-3.5'}`}>
      {metrics.map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between text-xs tracking-wider">
          <span className="w-24 uppercase font-medium text-stone-600 text-[11px] tracking-widest">{label}</span>
          <div className="flex-1 max-w-[200px] flex items-center justify-between px-2 gap-1.5">
            {[1, 2, 3, 4, 5].map((step) => {
              const isActive = step <= value;
              return (
                <div key={step} className="flex-1 flex flex-col items-center">
                  <div
                    className={`h-[2px] w-full transition-all duration-300 ${
                      isActive ? 'bg-[#C7A05A]' : 'bg-[#20150F]/10'
                    }`}
                  />
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-1 transition-all ${
                      isActive ? 'bg-[#98733C] scale-110 ring-2 ring-[#C7A05A]/20' : 'bg-[#20150F]/15'
                    }`}
                  />
                </div>
              );
            })}
          </div>
          <span className="w-6 text-right font-serif text-[12px] text-[#98733C] font-semibold">{value}/5</span>
        </div>
      ))}
    </div>
  );
};
