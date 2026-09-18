import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CenlaroLogo } from '@/components/ui/CenlaroLogo';
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
        {/* Stage 1: Pure Full-Screen Cinematic Hero — Text Directly on Image */}
        <section className="relative min-h-[92vh] flex flex-col justify-between text-[#F4EFE7] px-4 sm:px-6 lg:px-8 overflow-hidden">
          
          {/* 1. Full-screen Coffee Masterpiece Photo */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS === 'true' ? '/cenlaro-site' : '')}/images/hero-coffee-bg.jpg`}
              alt="CENLARO Selected Origins Vietnamese Coffee Beans and Highland Plantation"
              className="w-full h-full object-cover object-center scale-[1.02] transform"
            />
            {/* Soft filmic lighting vignette: keeps coffee beans & sun bright, darkens top/bottom gently for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#20150F] via-transparent to-[#20150F]/70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#20150F]/80 via-transparent to-transparent h-40 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(32,21,15,0.75)_100%)] pointer-events-none" />
          </div>

          {/* 2. Top spacer for navbar breathing room */}
          <div className="pt-8 relative z-10" />

          {/* 3. Main Center Editorial Typography — Directly on the Coffee Photo */}
          <div className="max-w-5xl mx-auto w-full text-center relative z-10 py-12">
            
            {/* Brand Emblem & Name organically integrated */}
            <div className="mb-8 flex justify-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              <CenlaroLogo theme="dark" variant="stacked" />
            </div>

            {/* Majestic Headline directly over the photograph */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] mb-6 drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
              COFFEE WITH <span className="italic font-normal text-[#E2BA6C]">CHARACTER</span>
            </h1>

            {/* Editorial subhead with subtle text shadow for perfect contrast */}
            <p className="text-base sm:text-xl text-stone-100 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              Direct export of high-altitude Cau Dat Arabica, Screen 18 Buon Ma Thuot Robusta, and master-calibrated espresso blends.
            </p>

            {/* Luxury Call-to-Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/coffee"
                className="w-full sm:w-auto px-10 py-4 bg-[#C7A05A] hover:bg-[#B38B42] text-[#20150F] text-xs uppercase tracking-[0.28em] font-semibold transition-all shadow-[0_8px_25px_rgba(199,160,90,0.35)] hover:shadow-[0_12px_35px_rgba(199,160,90,0.5)] transform hover:-translate-y-0.5"
              >
                Explore Catalogue
              </Link>
              <Link
                href="#quote-section"
                className="w-full sm:w-auto px-10 py-4 bg-[#20150F]/70 hover:bg-[#20150F]/90 backdrop-blur-md border border-[#C7A05A]/60 hover:border-[#C7A05A] text-[#F4EFE7] text-xs uppercase tracking-[0.28em] font-medium transition-all shadow-xl transform hover:-translate-y-0.5"
              >
                Request Current Price
              </Link>
            </div>
          </div>

          {/* 4. Bottom Editorial Highlights strip directly over bottom of photo */}
          <div className="relative z-10 max-w-5xl mx-auto w-full pb-16 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#C7A05A]/25 text-center">
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">1,500m+</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">Cau Dat Elevation</span>
              </div>
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">S16 / S18</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">Screen Calibration</span>
              </div>
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">OEM / Private</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">Custom Blends</span>
              </div>
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">B2B Direct</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">FCL &amp; Pallets</span>
              </div>
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
              <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
                Featured Coffee Lots
              </h2>
            </div>
            <Link
              href="/coffee"
              className="text-xs uppercase tracking-widest font-semibold text-[#98733C] hover:text-[#20150F] transition-colors"
            >
              View Complete Catalogue →
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
