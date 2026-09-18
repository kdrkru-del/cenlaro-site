import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CenlaroLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  variant?: 'full' | 'mark' | 'horizontal';
  showTagline?: boolean;
}

export const CenlaroLogo: React.FC<CenlaroLogoProps> = ({
  className = '',
  theme = 'dark',
  variant = 'full',
  showTagline = true,
}) => {
  const isDarkBg = theme === 'dark';

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        {/* Authentic Emblem */}
        <div className="relative w-28 sm:w-32 h-14 sm:h-16 mb-1 overflow-hidden">
          <Image
            src="/images/cenlaro-logo.jpg"
            alt="CENLARO Emblem"
            fill
            sizes="(max-width: 640px) 112px, 128px"
            className="object-contain object-top"
            priority
          />
        </div>
      </div>
    );
  }

  // Horizontal Header/Footer Variant: retains exact original typography and emblem
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C7A05A]/40 bg-[#FBF8F2] flex-shrink-0 shadow-inner">
        <Image
          src="/images/cenlaro-logo.jpg"
          alt="CENLARO Logo"
          fill
          sizes="44px"
          className="object-cover scale-[1.7] translate-y-[2px]"
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-[0.24em] text-lg sm:text-xl font-medium leading-tight transition-colors ${
            isDarkBg ? 'text-[#F4EFE7]' : 'text-[#20150F]'
          }`}
        >
          CENLARO
        </span>
        {showTagline && (
          <span className="text-[8px] tracking-[0.32em] text-[#C7A05A] uppercase font-medium mt-0.5">
            SELECTED ORIGINS
          </span>
        )}
      </div>
    </div>
  );
};
