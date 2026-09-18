import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ArrowRight, Check, Globe, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CENLARO | International Coffee Brand & Vietnamese Coffee Exporter',
  description:
    'CENLARO is an international coffee brand focused on selected origins, reliable sourcing and flexible coffee solutions for retail and business partners. Sourced in Vietnam.',
  keywords: [
    'Vietnam coffee supplier',
    'Vietnam green coffee exporter',
    'Vietnam Robusta supplier',
    'Vietnam Arabica coffee',
    'wholesale coffee Vietnam',
    'coffee beans supplier',
    'coffee private label Vietnam',
    'OEM coffee Vietnam',
    'roasted coffee supplier',
    'ground coffee supplier',
  ],
  alternates: {
    canonical: 'https://cenlaro.com',
  },
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);

  // Organization Schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CENLARO',
    url: 'https://cenlaro.com',
    logo: 'https://cenlaro.com/logo.png',
    description: 'International coffee brand focused on selected origins, reliable sourcing and flexible coffee solutions.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VN',
      addressRegion: 'Ho Chi Minh City',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'sales@cenlaro.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="bg-[#FAF7F2] min-h-screen">
        {/* Stage 1: Hero Section */}
        <section className="relative bg-[#20150F] text-[#F4EFE7] pt-28 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#3A2418]">
          <div className="absolute inset-0 bg-[radial-gradient(#C7A05A_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
            <div className="relative w-40 sm:w-48 h-20 sm:h-24 mb-6 overflow-hidden">
              <Image
                src="/images/cenlaro-logo.jpg"
                alt="CENLARO Selected Origins"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-contain"
                priority
              />
            </div>

            <span className="editorial-badge text-[#C7A05A] mb-4 inline-block">
              Selected Origins • From Vietnam to the World
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-4xl mb-6">
              COFFEE WITH CHARACTER
            </h1>

            <p className="text-sm sm:text-lg text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              CENLARO bridges high-altitude volcanic terroirs with international roasters and retail brands. Export-grade Robusta, Cau Dat Arabica, and signature espresso blends.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/coffee"
                className="w-full sm:w-auto px-8 py-4 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-md"
              >
                Explore Catalogue
              </Link>
              <Link
                href="#quote-section"
                className="w-full sm:w-auto px-8 py-4 border border-[#C7A05A]/50 hover:border-[#C7A05A] text-[#F4EFE7] text-xs uppercase tracking-[0.25em] font-medium transition-all"
              >
                Request Current Price
              </Link>
            </div>
          </div>
        </section>

        {/* Stage 1: Categories Block */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/green-coffee"
              className="group bg-white border border-[#3A2418]/10 p-8 shadow-lg hover:border-[#C7A05A] transition-all"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#44523B] block mb-2">
                Commodity Raw Supply
              </span>
              <h3 className="font-serif text-2xl text-[#20150F] mb-3 group-hover:text-[#98733C] transition-colors">
                Green Coffee
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                Screen 16 &amp; 18 Robusta and washed Arabica for commercial roasters and soluble plants. Container load deliveries.
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#20150F] group-hover:text-[#C7A05A] flex items-center gap-1">
                View Lots →
              </span>
            </Link>

            <Link
              href="/coffee"
              className="group bg-white border border-[#3A2418]/10 p-8 shadow-lg hover:border-[#C7A05A] transition-all"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C7A05A] block mb-2">
                Precision Roasts
              </span>
              <h3 className="font-serif text-2xl text-[#20150F] mb-3 group-hover:text-[#98733C] transition-colors">
                Signature Blends
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                Calibrated Arabica/Robusta ratios from 90/10 to 20/80 engineered for dense crema and rich chocolate depth.
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#20150F] group-hover:text-[#C7A05A] flex items-center gap-1">
                View Blends →
              </span>
            </Link>

            <Link
              href="/private-label"
              className="group bg-white border border-[#3A2418]/10 p-8 shadow-lg hover:border-[#C7A05A] transition-all"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#98733C] block mb-2">
                Custom Manufacturing
              </span>
              <h3 className="font-serif text-2xl text-[#20150F] mb-3 group-hover:text-[#98733C] transition-colors">
                Private Label &amp; OEM
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                Full-cycle OEM manufacturing: custom roasting curves, granulation, packaging, and export clearance.
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#20150F] group-hover:text-[#C7A05A] flex items-center gap-1">
                Start Project →
              </span>
            </Link>
          </div>
        </section>

        {/* Featured Blends Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 pb-4 border-b border-[#3A2418]/10 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-1">
                Selected Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
                Featured Coffee Lots
              </h2>
            </div>
            <Link
              href="/coffee"
              className="text-xs uppercase tracking-widest font-semibold text-[#98733C] hover:text-[#20150F] transition-colors"
            >
              View Complete Catalogue (16 Products) →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* B2B / Wholesale Capabilities Section */}
        <section className="bg-[#20150F] text-[#F4EFE7] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#3A2418]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="editorial-badge text-[#C7A05A] mb-4 inline-block">
                  Wholesale &amp; International Trade
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-light text-white mb-6 leading-tight">
                  Reliable Sourcing for Global Roasters
                </h2>
                <p className="text-sm text-stone-300 font-light leading-relaxed mb-8">
                  We supply roasted whole bean and green coffee lots on clear commercial terms. Every harvest lot is tested for moisture, screen distribution, and cup score to provide seamless supply continuity.
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs font-light">
                  <div className="p-4 bg-[#180F0B] border border-[#3A2418]">
                    <span className="font-serif text-xl text-[#C7A05A] block mb-1">FCL Shipments</span>
                    <p className="text-stone-400">Ocean container freight from Cat Lai port to Europe, Asia, Middle East &amp; Americas.</p>
                  </div>
                  <div className="p-4 bg-[#180F0B] border border-[#3A2418]">
                    <span className="font-serif text-xl text-[#C7A05A] block mb-1">Flexible MOQ</span>
                    <p className="text-stone-400">From 100 kg roasted trial batches to 20+ ton green coffee allocations.</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/wholesale"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-xs uppercase tracking-widest font-semibold transition-all"
                  >
                    Explore Wholesale Terms
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#180F0B] p-8 border border-[#C7A05A]/30">
                <h3 className="font-serif text-xl text-white mb-4">Export Standards</h3>
                <ul className="space-y-3 text-xs text-stone-300 font-light divide-y divide-[#3A2418]/60">
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span><strong>Uniformity:</strong> Screen 16 (6.3mm) and Screen 18 (7.1mm) mechanical calibration.</span>
                  </li>
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span><strong>Moisture:</strong> Controlled below 12.5% to prevent transit degradation.</span>
                  </li>
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span><strong>Packaging:</strong> Multi-layer nitrogen flushed valve bags and GrainPro lined jute bags.</span>
                  </li>
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span><strong>Documentation:</strong> Full export clearance (CO, Phytosanitary, Bill of Lading).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Commercial Quote Form */}
        <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <QuoteForm />
        </section>
      </div>
    </>
  );
}
