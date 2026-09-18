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

  // Ratio calculation if blend
  const ratioLabel =
    product.coffeeType === 'Blend' ? `${product.arabica} / ${product.robusta}` : undefined;

  return (
    <article className="group relative flex flex-col bg-white border border-[#3A2418]/10 hover:border-[#C7A05A]/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
      {/* Visual Header / Product Image Container */}
      <div className="relative overflow-hidden bg-[#20150F]">
        <Link href={detailHref} className="block overflow-hidden" tabIndex={-1}>
          <div className="transform group-hover:scale-105 transition-transform duration-700 ease-out">
            <CoffeePlaceholder
              name={product.shortName}
              category={product.category}
              ratio={ratioLabel}
              roast={product.roast !== 'Unroasted' ? product.roast : undefined}
            />
          </div>
        </Link>

        {/* Subtle Gold line indicator on hover */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C7A05A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category pill */}
        <div className="absolute top-3 left-3 bg-[#20150F]/80 backdrop-blur-sm border border-[#C7A05A]/30 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#F4EFE7]">
          {product.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col p-5 sm:p-6 bg-[#FCFAF7] group-hover:bg-white transition-colors duration-300">
        <div className="flex items-center justify-end gap-2 mb-2">
          <span className="text-[11px] font-medium text-stone-500">
            {product.origin}
          </span>
        </div>

        <h3 className="font-serif text-lg text-[#20150F] font-normal leading-snug group-hover:text-[#98733C] transition-colors duration-200">
          <Link href={detailHref}>
            {product.name}
          </Link>
        </h3>

        {/* Key Characteristics */}
        <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-stone-600">
          {product.coffeeType === 'Blend' && (
            <div className="flex items-center gap-1 font-mono text-[11px] text-[#3A2418] bg-[#F4EFE7] px-2 py-0.5 rounded border border-[#3A2418]/10">
              <span>{product.arabica}% Arabica</span>
              <span className="text-stone-400">•</span>
              <span>{product.robusta}% Robusta</span>
            </div>
          )}

          {isGreen && product.screen && (
            <span className="font-mono text-[11px] text-[#44523B] bg-[#44523B]/10 px-2 py-0.5 rounded">
              {product.screen}
            </span>
          )}

          {product.format === 'Ground' && product.grind && (
            <span className="font-mono text-[11px] text-[#65402B] bg-[#65402B]/10 px-2 py-0.5 rounded">
              {product.grind} Grind
            </span>
          )}
        </div>

        {/* Roast level */}
        <div className="mt-3 pt-2 border-t border-[#3A2418]/5">
          <RoastIndicator roast={product.roast} />
        </div>

        {/* Flavor Notes */}
        <p className="mt-3 text-xs text-stone-600 line-clamp-1 italic font-serif">
          {product.flavorNotes.join(' • ')}
        </p>

        {/* Actions CTA */}
        <div className="mt-auto pt-5 flex items-center justify-between gap-3 border-t border-[#3A2418]/10">
          <Link
            href={detailHref}
            className="text-[11px] uppercase tracking-widest font-medium text-[#20150F] hover:text-[#98733C] transition-colors flex items-center gap-1"
          >
            View Details
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href={quoteHref}
            className="px-3.5 py-1.5 bg-[#20150F] hover:bg-[#3A2418] text-[#F4EFE7] text-[10px] tracking-widest uppercase font-medium transition-all duration-300 border border-[#C7A05A]/30 hover:border-[#C7A05A]"
          >
            Request Price
          </Link>
        </div>
      </div>
    </article>
  );
};
