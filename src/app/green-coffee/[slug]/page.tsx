import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import { TasteProfile } from '@/components/product/TasteProfile';
import { CoffeePlaceholder } from '@/components/product/CoffeePlaceholder';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ShieldCheck, Anchor, Box, Award, Check } from 'lucide-react';

interface GreenProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const greenLots = PRODUCTS.filter((p) => p.category === 'Green Coffee');
  return greenLots.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: GreenProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.category !== 'Green Coffee') {
    return { title: 'Green Coffee Not Found | CENLARO' };
  }

  return {
    title: `${product.name} | Direct Vietnam Export | CENLARO`,
    description: product.seoDescription,
    alternates: {
      canonical: `https://cenlaro.com/green-coffee/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `https://cenlaro.com/green-coffee/${product.slug}`,
      siteName: 'CENLARO',
      locale: 'en_US',
      type: 'article',
    },
  };
}

export default async function GreenProductDetailPage({ params }: GreenProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.category !== 'Green Coffee') {
    notFound();
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-light">
          <Link href="/" className="hover:text-[#20150F]">Home</Link>
          <span>/</span>
          <Link href="/green-coffee" className="hover:text-[#20150F]">Green Coffee</Link>
          <span>/</span>
          <span className="text-[#44523B] font-medium">{product.shortName}</span>
        </nav>
      </div>

      {/* Hero 2-Column Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white border border-[#3A2418]/10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 shadow-sm">
          {/* Left: Green Coffee Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="sticky top-28">
              <CoffeePlaceholder
                name={product.shortName}
                category="Vietnam Green Raw Commodity"
                className="h-80 sm:h-96 lg:h-[420px] shadow-lg rounded-sm"
              />

              <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500 px-1 font-mono">
                <span>SPECIES: {product.coffeeType.toUpperCase()}</span>
                <span>ORIGIN: {product.origin.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Commercial CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#44523B]">
                  Unroasted Export Lot
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs tracking-wider text-stone-500 font-mono">
                  {product.screen || product.grade}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal tracking-tight leading-snug mb-4">
                {product.name}
              </h1>

              <div className="inline-flex items-center gap-3 bg-[#44523B]/10 border border-[#44523B]/20 px-3.5 py-1.5 rounded mb-5 text-xs text-[#44523B] font-medium font-mono">
                <span>MOQ: {product.MOQ}</span>
                <span>•</span>
                <span>Moisture: {product.moisture}</span>
              </div>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Sensory Notes */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                  Cupping Profile Notes
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 bg-[#FAF7F2] border border-[#3A2418]/10 text-stone-800 text-xs font-serif italic"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price on Request Callout */}
            <div className="pt-6 border-t border-[#3A2418]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF7F2] p-5 rounded">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 block">
                  Commodity Export Pricing
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#98733C] font-medium tracking-wide">
                  REQUEST CURRENT PRICE
                </span>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  Quoted based on current London Robusta / NY Arabica differentials &amp; FOB terms.
                </p>
              </div>

              <a
                href="#quote-section"
                className="w-full sm:w-auto px-7 py-3 bg-[#44523B] hover:bg-[#20150F] text-[#F4EFE7] text-xs uppercase tracking-[0.2em] font-semibold transition-all text-center border border-[#C7A05A]/40 shadow"
              >
                Request Current Price
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Technical Specifications Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white border border-[#3A2418]/10 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-[#20150F] font-normal mb-6">
              Green Coffee Specifications
            </h3>

            <div className="divide-y divide-[#3A2418]/10 text-xs">
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500">Origin</span>
                <span className="font-medium text-[#20150F]">{product.origin}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500">Species</span>
                <span className="font-medium text-[#20150F]">{product.coffeeType}</span>
              </div>
              {product.screen && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Screen Size</span>
                  <span className="font-medium text-[#20150F]">{product.screen}</span>
                </div>
              )}
              {product.grade && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Export Grade</span>
                  <span className="font-medium text-[#20150F]">{product.grade}</span>
                </div>
              )}
              {product.moisture && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Moisture Content</span>
                  <span className="font-medium text-[#20150F]">{product.moisture}</span>
                </div>
              )}
              {product.processing && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Processing Method</span>
                  <span className="font-medium text-[#20150F]">{product.processing}</span>
                </div>
              )}
              {product.crop && (
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Crop Year</span>
                  <span className="font-medium text-[#20150F]">{product.crop}</span>
                </div>
              )}
              <div className="py-2.5 flex justify-between">
                <span className="text-stone-500">Packing Standard</span>
                <span className="font-medium text-[#20150F]">{product.packaging.join(' / ')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#3A2418]/10 p-6 sm:p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
              Roaster Cupping Profile
            </span>
            <h3 className="font-serif text-2xl text-[#20150F] font-normal mb-6">
              Cup Attributes
            </h3>

            <TasteProfile
              body={product.body}
              acidity={product.acidity}
              sweetness={product.sweetness}
              bitterness={product.bitterness}
              intensity={product.intensity}
            />

            <div className="mt-8 p-4 bg-[#FAF7F2] border border-[#3A2418]/10 rounded text-xs text-stone-600 font-light">
              <span className="font-medium text-[#20150F] block mb-1">Export Note:</span>
              Green coffee samples (350g–1kg) are prepared via express courier for verified industrial roasters and commodity traders.
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <QuoteForm
          initialProductSlug={product.slug}
          initialProductName={product.name}
        />
      </section>
    </div>
  );
}
