'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/catalog/ProductCard';
import { Filter, X, RotateCcw } from 'lucide-react';

interface CatalogExplorerProps {
  initialProducts: Product[];
  categoryFilterDefault?: string;
  initialProductQuery?: string;
}

export const CatalogExplorer: React.FC<CatalogExplorerProps> = ({
  initialProducts,
  categoryFilterDefault,
}) => {
  // Filters State
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>(categoryFilterDefault || 'All');
  const [selectedRoast, setSelectedRoast] = useState<string>('All');
  const [selectedBlend, setSelectedBlend] = useState<string>('All');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('All');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);

  // Filter definitions
  const coffeeTypes = ['All', 'Arabica', 'Robusta', 'Blend'];
  const formats = ['All', 'Green', 'Whole Bean', 'Ground'];
  const roasts = ['All', 'Light', 'Medium', 'Medium-Dark', 'Dark', 'Unroasted'];
  const blendRatios = [
    'All',
    '100% Arabica',
    '90/10',
    '80/20',
    '70/30',
    '60/40',
    '50/50',
    '30/70',
    '20/80',
    '100% Robusta',
  ];
  const origins = ['All', 'Vietnam', 'Other Origins'];

  // Reset all filters
  const resetFilters = () => {
    setSelectedType('All');
    setSelectedFormat('All');
    setSelectedRoast('All');
    setSelectedBlend('All');
    setSelectedOrigin('All');
  };

  const hasActiveFilters =
    selectedType !== 'All' ||
    selectedFormat !== 'All' ||
    selectedRoast !== 'All' ||
    selectedBlend !== 'All' ||
    selectedOrigin !== 'All';

  // Filter application logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Coffee Type filter
      if (selectedType !== 'All' && product.coffeeType !== selectedType) {
        return false;
      }

      // Format filter
      if (selectedFormat !== 'All' && product.format !== selectedFormat) {
        return false;
      }

      // Roast filter
      if (selectedRoast !== 'All' && product.roast !== selectedRoast) {
        return false;
      }

      // Origin filter
      if (selectedOrigin !== 'All') {
        if (selectedOrigin === 'Vietnam' && !product.origin.includes('Vietnam')) return false;
        if (selectedOrigin === 'Other Origins' && product.origin.includes('Vietnam')) return false;
      }

      // Blend ratio filter
      if (selectedBlend !== 'All') {
        if (selectedBlend === '100% Arabica' && (product.arabica !== 100 || product.robusta !== 0)) return false;
        if (selectedBlend === '100% Robusta' && (product.robusta !== 100 || product.arabica !== 0)) return false;
        if (selectedBlend === '90/10' && !(product.arabica === 90 && product.robusta === 10)) return false;
        if (selectedBlend === '80/20' && !(product.arabica === 80 && product.robusta === 20)) return false;
        if (selectedBlend === '70/30' && !(product.arabica === 70 && product.robusta === 30)) return false;
        if (selectedBlend === '60/40' && !(product.arabica === 60 && product.robusta === 40)) return false;
        if (selectedBlend === '50/50' && !(product.arabica === 50 && product.robusta === 50)) return false;
        if (selectedBlend === '30/70' && !(product.arabica === 30 && product.robusta === 70)) return false;
        if (selectedBlend === '20/80' && !(product.arabica === 20 && product.robusta === 80)) return false;
      }

      return true;
    });
  }, [initialProducts, selectedType, selectedFormat, selectedRoast, selectedBlend, selectedOrigin]);

  return (
    <div className="w-full">
      {/* Mobile Filters Button & Status */}
      <div className="lg:hidden flex items-center justify-between pb-6 mb-6 border-b border-[#3A2418]/10">
        <button
          onClick={() => setIsMobileDrawerOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#20150F] text-[#F4EFE7] text-xs uppercase tracking-widest font-semibold border border-[#C7A05A]/30"
        >
          <Filter className="w-3.5 h-3.5 text-[#C7A05A]" />
          Filters
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-[#C7A05A] animate-pulse" />
          )}
        </button>

        <span className="text-xs text-stone-500 font-serif">
          Showing {filteredProducts.length} Lots
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Desktop Editorial Left Filter Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#3A2418]/10">
            <h3 className="font-serif text-lg text-[#20150F] font-medium tracking-wide">
              Filter Selection
            </h3>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-[10px] tracking-widest uppercase font-semibold text-[#98733C] hover:text-[#20150F] flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Coffee Type */}
          <div className="space-y-2.5">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-400 block">
              Coffee Type
            </span>
            <div className="space-y-1">
              {coffeeTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left text-xs py-1 px-2 rounded transition-colors flex items-center justify-between ${
                    selectedType === type
                      ? 'bg-[#20150F] text-[#C7A05A] font-medium'
                      : 'text-stone-700 hover:bg-[#F4EFE7]'
                  }`}
                >
                  <span>{type}</span>
                  {selectedType === type && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Format */}
          <div className="space-y-2.5">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-400 block">
              Format
            </span>
            <div className="space-y-1">
              {formats.map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`w-full text-left text-xs py-1 px-2 rounded transition-colors flex items-center justify-between ${
                    selectedFormat === fmt
                      ? 'bg-[#20150F] text-[#C7A05A] font-medium'
                      : 'text-stone-700 hover:bg-[#F4EFE7]'
                  }`}
                >
                  <span>{fmt}</span>
                  {selectedFormat === fmt && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Roast */}
          <div className="space-y-2.5">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-400 block">
              Roast Level
            </span>
            <div className="space-y-1">
              {roasts.map((roast) => (
                <button
                  key={roast}
                  onClick={() => setSelectedRoast(roast)}
                  className={`w-full text-left text-xs py-1 px-2 rounded transition-colors flex items-center justify-between ${
                    selectedRoast === roast
                      ? 'bg-[#20150F] text-[#C7A05A] font-medium'
                      : 'text-stone-700 hover:bg-[#F4EFE7]'
                  }`}
                >
                  <span>{roast}</span>
                  {selectedRoast === roast && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Blend Ratio */}
          <div className="space-y-2.5">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-400 block">
              Blend Ratio (Arabica / Robusta)
            </span>
            <div className="space-y-1">
              {blendRatios.map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setSelectedBlend(ratio)}
                  className={`w-full text-left text-xs py-1 px-2 rounded transition-colors flex items-center justify-between ${
                    selectedBlend === ratio
                      ? 'bg-[#20150F] text-[#C7A05A] font-medium'
                      : 'text-stone-700 hover:bg-[#F4EFE7]'
                  }`}
                >
                  <span>{ratio}</span>
                  {selectedBlend === ratio && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Origin */}
          <div className="space-y-2.5">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-stone-400 block">
              Origin
            </span>
            <div className="space-y-1">
              {origins.map((orig) => (
                <button
                  key={orig}
                  onClick={() => setSelectedOrigin(orig)}
                  className={`w-full text-left text-xs py-1 px-2 rounded transition-colors flex items-center justify-between ${
                    selectedOrigin === orig
                      ? 'bg-[#20150F] text-[#C7A05A] font-medium'
                      : 'text-stone-700 hover:bg-[#F4EFE7]'
                  }`}
                >
                  <span>{orig}</span>
                  {selectedOrigin === orig && <span className="text-[10px]">●</span>}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="flex-1">
          {/* Active filter pills summary */}
          <div className="hidden lg:flex items-center justify-between pb-6 mb-6 border-b border-[#3A2418]/10 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-stone-400 uppercase tracking-widest text-[10px]">Active Filters:</span>
              {!hasActiveFilters && <span className="text-stone-500 italic">Showing full collection</span>}
              {selectedType !== 'All' && (
                <span className="px-2.5 py-1 bg-[#20150F] text-[#C7A05A] text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                  Type: {selectedType}
                  <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedType('All')} />
                </span>
              )}
              {selectedFormat !== 'All' && (
                <span className="px-2.5 py-1 bg-[#20150F] text-[#C7A05A] text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                  Format: {selectedFormat}
                  <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedFormat('All')} />
                </span>
              )}
              {selectedRoast !== 'All' && (
                <span className="px-2.5 py-1 bg-[#20150F] text-[#C7A05A] text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                  Roast: {selectedRoast}
                  <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedRoast('All')} />
                </span>
              )}
              {selectedBlend !== 'All' && (
                <span className="px-2.5 py-1 bg-[#20150F] text-[#C7A05A] text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                  Ratio: {selectedBlend}
                  <X className="w-3 h-3 cursor-pointer hover:text-white" onClick={() => setSelectedBlend('All')} />
                </span>
              )}
            </div>

            <span className="text-stone-500 font-serif">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
            </span>
          </div>

          {/* Catalog Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white border border-[#3A2418]/10 p-8">
              <h3 className="font-serif text-xl text-[#20150F] mb-2">No Matching Lots Found</h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto mb-6">
                Adjust your filter criteria or reset to view our full export range of Arabica, Robusta, and Blends.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2 bg-[#20150F] text-[#C7A05A] text-xs uppercase tracking-widest hover:bg-[#3A2418] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer Filter (Bottom Sheet / Drawer) */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FAF7F2] rounded-t-2xl max-h-[85vh] overflow-y-auto p-6 space-y-6 border-t border-[#C7A05A]">
            <div className="flex items-center justify-between pb-3 border-b border-[#3A2418]/15">
              <h3 className="font-serif text-xl text-[#20150F]">Filter Catalogue</h3>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 text-stone-500 hover:text-black"
                aria-label="Close Filters"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Coffee Type */}
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 block mb-2">
                Coffee Type
              </span>
              <div className="grid grid-cols-2 gap-2">
                {coffeeTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={`py-2 px-3 text-xs uppercase tracking-wider border text-center transition-colors ${
                      selectedType === t
                        ? 'bg-[#20150F] text-[#C7A05A] border-[#20150F]'
                        : 'bg-white text-stone-700 border-stone-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Format */}
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 block mb-2">
                Format
              </span>
              <div className="grid grid-cols-2 gap-2">
                {formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`py-2 px-3 text-xs uppercase tracking-wider border text-center transition-colors ${
                      selectedFormat === fmt
                        ? 'bg-[#20150F] text-[#C7A05A] border-[#20150F]'
                        : 'bg-white text-stone-700 border-stone-300'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Blend */}
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 block mb-2">
                Blend Ratio
              </span>
              <div className="grid grid-cols-2 gap-2">
                {blendRatios.map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setSelectedBlend(ratio)}
                    className={`py-2 px-2 text-[11px] font-mono border text-center transition-colors ${
                      selectedBlend === ratio
                        ? 'bg-[#20150F] text-[#C7A05A] border-[#20150F]'
                        : 'bg-white text-stone-700 border-stone-300'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Actions */}
            <div className="pt-4 flex gap-3 border-t border-[#3A2418]/15">
              <button
                onClick={resetFilters}
                className="flex-1 py-3 text-xs uppercase tracking-widest border border-stone-400 text-stone-700"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="flex-1 py-3 text-xs uppercase tracking-widest bg-[#20150F] text-[#C7A05A] font-semibold"
              >
                Show ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
