import { Metadata } from 'next';
import Link from 'next/link';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Container, Truck, Check, FileSpreadsheet, Anchor, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wholesale & B2B Coffee Supply | Container Shipments & Bulk | CENLARO',
  description:
    'Direct B2B supply of Vietnamese coffee: Wholesale beans, bulk green coffee, container shipments, and contract manufacturing. Flexible volume tiers from 100 kg to 20+ tons.',
  keywords: [
    'wholesale coffee Vietnam',
    'bulk coffee beans supplier',
    'container shipment coffee',
    'commercial coffee roaster B2B',
    'wholesale roasted coffee beans',
  ],
  alternates: {
    canonical: 'https://cenlaro.com/wholesale',
  },
};

export default function WholesaleB2BPage() {
  const volumeTiers = [
    { tier: 'Samples', desc: 'Pre-shipment cupping lots & green bean samples for sensory evaluation.', moq: '350g – 2kg' },
    { tier: '10–100 kg', desc: 'Trial batch roasting, test launches for specialty coffee bars & boutique distributors.', moq: '10 kg' },
    { tier: '100–500 kg', desc: 'Regional roasters, hotel chains, and multi-location espresso coffee shops.', moq: '100 kg' },
    { tier: '500 kg–1 ton', desc: 'Wholesale roasted bean contracts, private label initial production runs.', moq: '500 kg' },
    { tier: '1–5 tons', desc: 'National food service distributors, supermarket retail lines, and supermarket brands.', moq: '1,000 kg' },
    { tier: '5–20 tons', desc: 'Multi-pallet roasted container orders or multi-origin green bean shipments.', moq: '5,000 kg' },
    { tier: '20+ tons (FCL)', desc: 'Full Container Loads (20ft / 40ft FCL) green coffee or large-scale private label.', moq: '19.2 MT (1 FCL)' },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#20150F] text-[#F4EFE7] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3A2418]">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none mb-6">
            COFFEE FOR YOUR BUSINESS
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Direct export supply, volume predictability, and meticulous quality control for roasters, retailers, and commodity buyers globally.
          </p>
          <a
            href="#b2b-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Request Wholesale Quotation
          </a>
        </div>
      </section>

      {/* Core B2B Supply Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
            Commercial Supply Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
            <h3 className="font-serif text-xl text-[#20150F]">Wholesale Supply</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Continuous delivery schedules with fixed-price or differential-indexed contracts across Arabica and Robusta lots.
            </p>
          </div>

          <div className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
            <h3 className="font-serif text-xl text-[#20150F]">Bulk Orders</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Heavy-duty valve packaging (5kg, 10kg, 25kg) and bulk palletization tailored for high-output industrial roasteries.
            </p>
          </div>

          <div className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
            <h3 className="font-serif text-xl text-[#20150F]">Container Shipments</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Standard 20ft and 40ft High-Cube container dispatch from Cat Lai port, Ho Chi Minh City with moisture-guard dry liners.
            </p>
          </div>

          <div className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
            <h3 className="font-serif text-xl text-[#20150F]">Custom Blends</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Formulation of exclusive ratios from 90/10 to 20/80 Arabica/Robusta calibrated to match target margin and extraction specs.
            </p>
          </div>

          <div className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
            <h3 className="font-serif text-xl text-[#20150F]">Flexible Packaging</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              From nitrogen-flushed 250g retail bags to 60kg traditional jute bags with GrainPro hermetic protection.
            </p>
          </div>

          <div className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
            <h3 className="font-serif text-xl text-[#20150F]">Export Documentation</h3>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Full customs package: Bill of Lading, Certificate of Origin, Phytosanitary, Certificate of Analysis, Weight and Quality Certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Volume Tiers (Non-fictional, clear B2B order formats) */}
      <section className="bg-white border-y border-[#3A2418]/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
              Commercial Order Formats
            </h2>
            <p className="text-xs text-stone-500 font-light mt-2">
              Transparent tier classifications without invented price tags. Exact quotation provided per shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volumeTiers.map((t) => (
              <div
                key={t.tier}
                className="bg-[#FAF7F2] border border-[#3A2418]/10 p-6 flex flex-col justify-between hover:border-[#C7A05A]/50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#98733C] uppercase tracking-widest block mb-1">
                    Standard Tier
                  </span>
                  <h3 className="font-serif text-xl text-[#20150F] font-semibold mb-3">
                    {t.tier}
                  </h3>
                  <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                    {t.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#3A2418]/10 flex items-center justify-between text-xs">
                  <span className="text-stone-400">MOQ:</span>
                  <span className="font-medium text-[#20150F]">{t.moq}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section id="b2b-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <QuoteForm
          initialProductSlug="wholesale-inquiry"
          initialProductName="B2B Wholesale & Container Allocation Inquiry"
        />
      </section>
    </div>
  );
}
