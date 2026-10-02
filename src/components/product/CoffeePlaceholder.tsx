'use client';

import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '@/lib/basePath';

interface CoffeePlaceholderProps {
  name: string;
  category: string;
  ratio?: string;
  roast?: string;
  image?: string;
  className?: string;
}

export const CoffeePlaceholder: React.FC<CoffeePlaceholderProps> = ({
  name,
  category,
  ratio,
  roast,
  image,
  className = 'aspect-square w-full',
}) => {
  const isGreen = category.toLowerCase().includes('green');
  const initialUrl = image ? getAssetUrl(image) : undefined;
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(initialUrl);
  const [hasError, setHasError] = useState(false);
  const [hasRetried, setHasRetried] = useState(false);

  useEffect(() => {
    setHasError(false);
    setHasRetried(false);
    setCurrentSrc(image ? getAssetUrl(image) : undefined);
  }, [image]);

  const handleImageError = () => {
    // If it failed and hasn't retried yet, test if toggling /cenlaro-site helps
    if (!hasRetried && currentSrc) {
      setHasRetried(true);
      if (currentSrc.startsWith('/cenlaro-site/')) {
        setCurrentSrc(currentSrc.replace('/cenlaro-site', ''));
        return;
      } else if (!currentSrc.startsWith('http')) {
        setCurrentSrc(`/cenlaro-site${currentSrc.startsWith('/') ? '' : '/'}${currentSrc}`);
        return;
      }
    }
    // If retry also failed, switch gracefully to elegant branded placeholder
    setHasError(true);
  };

  if (currentSrc && !hasError) {
    return (
      <div
        className={`relative w-full aspect-square overflow-hidden bg-[#180F0B] select-none ${className}`}
      >
        {/* Pure Clean Coffee Photograph — No text or badges on photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentSrc}
          alt={name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          onError={handleImageError}
        />
        {/* Subtle luxury edge border */}
        <div className="absolute inset-0 border border-[#3A2418]/10 pointer-events-none group-hover:border-[#C7A05A]/40 transition-colors duration-500" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-square overflow-hidden flex flex-col items-center justify-center p-6 text-center transition-all duration-700 select-none ${
        isGreen ? 'bg-gradient-to-br from-[#2D3827] to-[#1F261B]' : 'bg-gradient-to-br from-[#261A13] via-[#1D130E] to-[#120B08]'
      } ${className}`}
    >
      {/* Editorial geometric frame background */}
      <div className="absolute inset-3 border border-[#C7A05A]/20 pointer-events-none" />
      <div className="absolute inset-5 border border-[#C7A05A]/10 pointer-events-none" />

      {/* Authentic CENLARO Gold Emblem */}
      <div className="relative w-14 h-8 mb-2 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getAssetUrl('/images/cenlaro-emblem.png')}
          alt="CENLARO Gold Emblem"
          className="w-full h-full object-contain drop-shadow"
        />
      </div>

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
