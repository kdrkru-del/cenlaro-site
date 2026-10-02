import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { RoastIndicator } from '@/components/product/RoastIndicator';
import { CoffeePlaceholder } from '@/components/product/CoffeePlaceholder';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isGreen = product.category === 'Green Coffee';
  const detailHref = isGreen ? `/green-coffee/${product.slug}` : `/coffee/${product.slug}`;
  const quoteHref = `/coffee?product=${product.slug}#quote-section`;

  // Display name is product.name
  // Clean country label (display Vietnam cleanly as label)
  const originLabel = product.origin || 'Vietnam';

  return (
    <article className="group relative flex flex-col h-full bg-white border border-[#3A2418]/10 hover:border-[#C7A05A]/60 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
      {/* Visual Header / Synchronized 1:1 Square Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#180F0B]">
        <Link href={detailHref} className="block w-full h-full" tabIndex={-1}>
          <CoffeePlaceholder
            name={product.shortName}
            category={product.category}
            roast={product.roast !== 'Unroasted' ? product.roast : undefined}
            image={product.images?.[0]}
            className="w-full h-full"
          />
        </Link>

        {/* Subtle Gold line indicator on hover */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C7A05A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content — Fixed rhythm and synchronized heights */}
      <div className="flex-1 flex flex-col p-5 bg-[#FCFAF7] group-hover:bg-white transition-colors duration-300">
        
        {/* Country Label (Vietnam) + Category */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#C7A05A]">
            {originLabel}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-stone-400 font-mono">
            {product.category}
          </span>
        </div>

        {/* Short, Clean Main Title with fixed min-height for uniform alignment */}
        <h3 className="font-serif text-base sm:text-lg text-[#20150F] font-medium leading-snug group-hover:text-[#98733C] transition-colors duration-200 min-h-[2.8rem] flex items-center">
          <Link href={detailHref} className="line-clamp-2">
            {product.name}
          </Link>
        </h3>

        {/* Subtle Characteristic Badge or Ratio */}
        <div className="mt-2 min-h-[1.5rem] flex items-center">
          {product.coffeeType === 'Blend' ? (
            <span className="font-mono text-[11px] text-[#3A2418] bg-[#F4EFE7] px-2 py-0.5 rounded border border-[#3A2418]/10">
              {product.arabica}% Arabica • {product.robusta}% Robusta
            </span>
          ) : product.roast && product.roast !== 'Unroasted' ? (
            <RoastIndicator roast={product.roast} />
          ) : (
            <span className="text-[11px] text-stone-500 font-mono">
              {product.coffeeType} • {product.format}
            </span>
          )}
        </div>

        {/* Sensory Notes */}
        <p className="mt-2.5 text-xs text-stone-600 line-clamp-1 italic font-serif">
          {product.flavorNotes.join(' • ')}
        </p>

        {/* Synchronized Actions CTA locked to bottom */}
        <div className="mt-auto pt-4 border-t border-[#3A2418]/10 flex items-center justify-between gap-2">
          <Link
            href={detailHref}
            className="text-[11px] uppercase tracking-widest font-medium text-[#20150F] hover:text-[#98733C] transition-colors flex items-center gap-1"
          >
            View Details
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href={quoteHref}
            className="px-3 py-1.5 bg-[#20150F] hover:bg-[#3A2418] text-[#F4EFE7] text-[10px] tracking-widest uppercase font-medium transition-all duration-300 border border-[#C7A05A]/30 hover:border-[#C7A05A]"
          >
            Request Price
          </Link>
        </div>
      </div>
    </article>
  );
};
