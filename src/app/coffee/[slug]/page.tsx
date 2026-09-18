import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import { TasteProfile } from '@/components/product/TasteProfile';
import { RoastIndicator } from '@/components/product/RoastIndicator';
import { CoffeePlaceholder } from '@/components/product/CoffeePlaceholder';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Check, ShieldCheck, Box, PackageCheck, ArrowLeft, ArrowRight } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found | CENLARO' };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical: `https://cenlaro.com/coffee/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `https://cenlaro.com/coffee/${product.slug}`,
      siteName: 'CENLARO',
      locale: 'en_US',
      type: 'article',
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isBlend = product.coffeeType === 'Blend';
  const ratioLabel = isBlend ? `${product.arabica} / ${product.robusta}` : undefined;

  // JSON-LD Product & Breadcrumb Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'CENLARO',
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0.00',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Price on request for wholesale containers and OEM private label.',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#FAF7F2] min-h-screen pb-20">
        {/* Breadcrumb row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-light">
            <Link href="/" className="hover:text-[#20150F]">Home</Link>
            <span>/</span>
            <Link href="/coffee" className="hover:text-[#20150F]">Coffee Catalogue</Link>
            <span>/</span>
            <span className="text-[#98733C] font-medium">{product.shortName}</span>
          </nav>
        </div>

        {/* First Screen: 2-Column Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white border border-[#3A2418]/10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 shadow-sm">
            {/* Left: Large High-Resolution Visual */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="sticky top-28">
                <CoffeePlaceholder
                  name={product.shortName}
                  category={product.category}
                  ratio={ratioLabel}
                  roast={product.roast !== 'Unroasted' ? product.roast : undefined}
                  className="h-80 sm:h-96 lg:h-[420px] shadow-lg rounded-sm"
                />

                <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500 px-1 font-mono">
                  <span>LOT REF: #{product.id.slice(0, 14).toUpperCase()}</span>
                  <span>ORIGIN: {product.origin.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Product Details & Commercial Summary */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C7A05A]">
                    {product.category}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-xs tracking-wider text-stone-500">
                    {product.region}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal tracking-tight leading-snug mb-4">
                  {product.name}
                </h1>

                {/* Blend Ratio Banner if applicable */}
                {isBlend && (
                  <div className="inline-flex items-center gap-4 bg-[#F4EFE7] border border-[#3A2418]/15 px-4 py-2 rounded mb-5">
                    <span className="font-serif text-lg text-[#20150F] font-semibold">
                      {product.arabica} / {product.robusta}
                    </span>
                    <span className="text-xs text-stone-600 border-l border-[#3A2418]/20 pl-4 font-mono">
                      {product.arabica}% Highland Arabica • {product.robusta}% Selected Robusta
                    </span>
                  </div>
                )}

                {/* Roast Indicator */}
                <div className="mb-6 flex items-center gap-4">
                  <RoastIndicator roast={product.roast} />
                </div>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Flavor Notes Pills */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                    Sensory Notes
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

              {/* Price on Request & CTA Banner */}
              <div className="pt-6 border-t border-[#3A2418]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF7F2] p-5 rounded">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 block">
                    Export Pricing
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#98733C] font-medium tracking-wide">
                    PRICE ON REQUEST
                  </span>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    Tiered wholesale rates based on shipment volume &amp; Incoterms.
                  </p>
                </div>

                <a
                  href="#quote-section"
                  className="w-full sm:w-auto px-7 py-3 bg-[#20150F] hover:bg-[#3A2418] text-[#F4EFE7] text-xs uppercase tracking-[0.2em] font-semibold transition-all text-center border border-[#C7A05A]/40 shadow hover:border-[#C7A05A]"
                >
                  Request Current Price
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Taste Profile Visualization & Technical Specifications */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Taste Profile Visualization */}
            <div className="lg:col-span-5 bg-white border border-[#3A2418]/10 p-6 sm:p-8 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
                Sensory Architecture
              </span>
              <h3 className="font-serif text-2xl text-[#20150F] font-normal mb-6">
                Taste &amp; Cup Profile
              </h3>

              <TasteProfile
                body={product.body}
                acidity={product.acidity}
                sweetness={product.sweetness}
                bitterness={product.bitterness}
                intensity={product.intensity}
              />

              <div className="mt-8 pt-6 border-t border-[#3A2418]/10 text-xs text-stone-600 font-light leading-relaxed italic">
                &ldquo;{product.profile}&rdquo;
              </div>

              {/* Recommended Preparation */}
              {product.suitableFor && product.suitableFor.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#3A2418]/10">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-3">
                    Suitable For Extraction
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.suitableFor.map((method) => (
                      <span
                        key={method}
                        className="px-2.5 py-1 bg-[#F4EFE7] border border-[#3A2418]/10 text-[#3A2418] text-[11px] font-medium"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Technical Specifications Table */}
            <div className="lg:col-span-7 bg-white border border-[#3A2418]/10 p-6 sm:p-8 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
                Commodity &amp; Roast Specs
              </span>
              <h3 className="font-serif text-2xl text-[#20150F] font-normal mb-6">
                Technical Specifications
              </h3>

              <div className="divide-y divide-[#3A2418]/10 text-xs">
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Origin / Country</span>
                  <span className="font-medium text-[#20150F]">{product.origin}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Growing Region</span>
                  <span className="font-medium text-[#20150F]">{product.region}</span>
                </div>
                {product.processing && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">Processing Method</span>
                    <span className="font-medium text-[#20150F]">{product.processing}</span>
                  </div>
                )}
                {product.screen && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">Bean Screen Size</span>
                    <span className="font-medium text-[#20150F]">{product.screen}</span>
                  </div>
                )}
                {product.moisture && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">Moisture Content</span>
                    <span className="font-medium text-[#20150F]">{product.moisture}</span>
                  </div>
                )}
                {product.crop && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">Harvest / Crop</span>
                    <span className="font-medium text-[#20150F]">{product.crop}</span>
                  </div>
                )}
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Format &amp; Grind</span>
                  <span className="font-medium text-[#20150F]">{product.format} {product.grind ? `(${product.grind})` : ''}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Minimum Order Quantity (MOQ)</span>
                  <span className="font-medium text-[#20150F]">{product.MOQ}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Wholesale Availability</span>
                  <span className="font-medium text-[#44523B] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Available for Container/Pallet
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Private Label / OEM</span>
                  <span className="font-medium text-[#C7A05A] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Supported with Custom Packaging
                  </span>
                </div>
              </div>

              {/* Packaging Variations */}
              <div className="mt-8 pt-6 border-t border-[#3A2418]/10">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                  Available Packaging Formats
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.packaging.map((pack) => (
                    <div
                      key={pack}
                      className="p-2.5 bg-[#FAF7F2] border border-[#3A2418]/10 text-xs text-stone-700 flex items-center gap-2"
                    >
                      <Box className="w-3.5 h-3.5 text-[#C7A05A]" />
                      <span>{pack}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-[#98733C] tracking-wide font-medium">
                  Custom packaging available for retail and private label distributors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Dedicated Quote Form with this product selected */}
        <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <QuoteForm
            initialProductSlug={product.slug}
            initialProductName={product.name}
          />
        </section>
      </div>
    </>
  );
}
