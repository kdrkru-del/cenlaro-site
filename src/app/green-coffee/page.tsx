import { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ShieldCheck, Anchor, Award, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vietnam Green Coffee Exporter | Robusta Screen 16/18 & Highland Arabica | CENLARO',
  description:
    'Direct container shipments of Vietnamese Green Coffee: Screen 16 & Screen 18 Wet Polished Robusta from Buon Ma Thuot, Commercial & Specialty Cau Dat Arabica. Request current price.',
  keywords: [
    'Vietnam green coffee exporter',
    'Vietnam Robusta supplier',
    'green coffee beans Vietnam',
    'Vietnam Arabica coffee',
    'wholesale green coffee',
    'Screen 18 Robusta Vietnam',
    'Cau Dat Arabica green beans',
  ],
  alternates: {
    canonical: 'https://cenlaro.com/green-coffee',
  },
};

export default function GreenCoffeeCategoryPage() {
  const greenProducts = getProductsByCategory('Green Coffee');

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Category Hero */}
      <section className="bg-[#1C2419] text-[#F4EFE7] pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#44523B]/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="editorial-badge text-[#C7A05A] border-[#C7A05A]/40 mb-4 inline-block">
              Origin Raw Commodities
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-4">
              Vietnam Green Coffee
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-8">
              Screen 16 &amp; 18 Robusta from Buon Ma Thuot and high-altitude Cau Dat Arabica. Calibrated for international importers, roasters, and soluble extraction facilities.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#44523B]/40 text-xs">
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">Standard MOQ</span>
                <span className="text-white font-medium">1 x 20ft FCL (~19.2 MT)</span>
              </div>
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">Moisture Control</span>
                <span className="text-white font-medium">Max 12.5%</span>
              </div>
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">Export Packaging</span>
                <span className="text-white font-medium">60kg Jute / GrainPro</span>
              </div>
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">Incoterms</span>
                <span className="text-white font-medium">FOB HCMC / CIF Global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Green Lots Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#3A2418]/10">
          <div>
            <h2 className="font-serif text-2xl text-[#20150F] font-normal">
              Available Green Coffee Lots
            </h2>
            <p className="text-xs text-stone-500 font-light mt-1">
              Direct origin contracts and spot shipment availability from Vietnam.
            </p>
          </div>
          <span className="text-xs font-serif text-[#98733C]">
            {greenProducts.length} Lots Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {greenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Specifications & Export Readiness */}
      <section className="bg-white border-y border-[#3A2418]/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
              Export Assurance
            </span>
            <h3 className="font-serif text-3xl text-[#20150F] font-normal">
              Quality Compliance &amp; Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FAF7F2] border border-[#3A2418]/10 space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#C7A05A]" />
              <h4 className="font-serif text-lg text-[#20150F]">Uniform Screen Calibration</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Rigorous mechanical grading ensures Screen 16 (6.3mm) and Screen 18 (7.1mm) standards with 90% minimum round-screen compliance.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#3A2418]/10 space-y-3">
              <Award className="w-6 h-6 text-[#C7A05A]" />
              <h4 className="font-serif text-lg text-[#20150F]">Phytosanitary &amp; Moisture</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Every container undergoes pre-shipment lab inspection, certified moisture verification under 12.5%, and standard phytosanitary clearance.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#3A2418]/10 space-y-3">
              <Anchor className="w-6 h-6 text-[#C7A05A]" />
              <h4 className="font-serif text-lg text-[#20150F]">Liner Protection</h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Supplied in traditional 60kg jute bags equipped with hermetic GrainPro liners or container dry-bags to eliminate maritime condensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <QuoteForm
          initialProductSlug="robusta-screen-18"
          initialProductName="VIETNAM GREEN ROBUSTA SCREEN 18"
        />
      </section>
    </div>
  );
}
