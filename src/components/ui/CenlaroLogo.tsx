import React from 'react';
import Image from 'next/image';

interface CenlaroLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  variant?: 'horizontal' | 'emblem-only' | 'stacked';
  showTagline?: boolean;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS === 'true' ? '/cenlaro-site' : '');

export const CenlaroLogo: React.FC<CenlaroLogoProps> = ({
  className = '',
  theme = 'dark',
  variant = 'horizontal',
  showTagline = true,
}) => {
  const isDarkBg = theme === 'dark';
  const emblemSrc = `${basePath}/images/cenlaro-emblem.png`;

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Isolated Gold Sun & Sea/Coffee Waves Emblem */}
        <div className="relative w-24 sm:w-28 h-12 sm:h-14 mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={emblemSrc}
            alt="CENLARO Gold Emblem"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Wordmark */}
        <span
          className={`font-serif tracking-[0.28em] text-2xl sm:text-3xl font-medium uppercase leading-tight ${
            isDarkBg ? 'text-[#F4EFE7]' : 'text-[#20150F]'
          }`}
        >
          CENLARO
        </span>

        {showTagline && (
          <div className="flex items-center gap-3 mt-1.5 w-full justify-center">
            <span className="w-6 h-[1px] bg-[#C7A05A]/50" />
            <span className="text-[9px] tracking-[0.38em] text-[#C7A05A] uppercase font-medium">
              SELECTED ORIGINS
            </span>
            <span className="w-6 h-[1px] bg-[#C7A05A]/50" />
          </div>
        )}
      </div>
    );
  }

  if (variant === 'emblem-only') {
    return (
      <div className={`relative ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emblemSrc}
          alt="CENLARO Gold Emblem"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Horizontal variant for Header and Footer
  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      {/* 1. Logo Emblem: Sun arc & flowing coffee landscape */}
      <div className="relative w-12 sm:w-14 h-7 sm:h-8 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emblemSrc}
          alt="CENLARO Emblem"
          className="w-full h-full object-contain"
        />
      </div>

      {/* 2. Brand Name & Selected Origins typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-[0.26em] text-lg sm:text-xl font-medium uppercase leading-none transition-colors ${
            isDarkBg ? 'text-[#F4EFE7] group-hover:text-[#C7A05A]' : 'text-[#20150F] group-hover:text-[#98733C]'
          }`}
        >
          CENLARO
        </span>
        {showTagline && (
          <span className="text-[8px] tracking-[0.34em] text-[#C7A05A] uppercase font-semibold mt-1">
            SELECTED ORIGINS
          </span>
        )}
      </div>
    </div>
  );
};
