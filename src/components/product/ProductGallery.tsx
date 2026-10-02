'use client';

import React, { useState } from 'react';
import { CoffeePlaceholder } from './CoffeePlaceholder';

interface ProductGalleryProps {
  name: string;
  category: string;
  images: string[];
  ratio?: string;
  roast?: string;
}

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_ACTIONS === 'true' ? '/cenlaro-site' : '');

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  name,
  category,
  images,
  ratio,
  roast,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <CoffeePlaceholder
        name={name}
        category={category}
        ratio={ratio}
        roast={roast}
        className="h-80 sm:h-96 lg:h-[420px] shadow-lg rounded-sm"
      />
    );
  }

  const activeImage = images[activeIndex] || images[0];
  const resolvedActive = activeImage.startsWith('http')
    ? activeImage
    : `${basePath}${activeImage}`;

  return (
    <div className="space-y-3">
      {/* Main High-Resolution Image */}
      <div className="relative w-full h-80 sm:h-96 lg:h-[420px] overflow-hidden bg-[#180F0B] shadow-lg rounded-sm border border-[#3A2418]/15">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedActive}
          alt={`${name} - View ${activeIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-500"
        />
        <div className="absolute inset-2.5 border border-[#C7A05A]/25 pointer-events-none" />
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5">
          {images.map((img, idx) => {
            const resolvedThumb = img.startsWith('http') ? img : `${basePath}${img}`;
            const isSelected = idx === activeIndex;
            return (
              <button
                key={`${img}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative h-16 sm:h-20 overflow-hidden rounded-sm border transition-all ${
                  isSelected
                    ? 'border-[#C7A05A] ring-2 ring-[#C7A05A]/40 opacity-100'
                    : 'border-[#3A2418]/15 opacity-70 hover:opacity-100 hover:border-[#C7A05A]/50'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolvedThumb}
                  alt={`${name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
