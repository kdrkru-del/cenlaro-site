import { Metadata } from 'next';
import { PRODUCTS } from '@/data/products';
import { CatalogExplorer } from '@/components/catalog/CatalogExplorer';
import { QuoteForm } from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Coffee Catalogue | Wholesale Beans, Blends & Green Coffee | CENLARO',
  description:
    'Comprehensive catalogue of Vietnamese coffee: 100% Arabica, 100% Robusta, Signature Blends (90/10 to 20/80), Ground Coffee, and Green Beans. Request current export price.',
  keywords: [
    'Vietnam coffee supplier',
    'wholesale coffee Vietnam',
    'coffee beans supplier',
    'roasted coffee supplier',
    'ground coffee supplier',
    'Vietnam Robusta supplier',
    'Vietnam Arabica coffee',
  ],
  alternates: {
    canonical: 'https://cenlaro.com/coffee',
  },
  openGraph: {
    title: 'CENLARO Premium Coffee Catalogue | Sourced in Vietnam',
    description: 'B2B export catalogue of premium Robusta, highland Arabica, and signature blends.',
    url: 'https://cenlaro.com/coffee',
    siteName: 'CENLARO',
    locale: 'en_US',
    type: 'website',
  },
};

export const dynamic = 'force-static';

export default function CoffeeCatalogPage() {

  // JSON-LD Product & Breadcrumb Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CENLARO Coffee Catalogue',
    description: 'Direct export portfolio of Vietnamese whole bean, ground and green coffee lots.',
    itemListElement: PRODUCTS.map((prod, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: prod.name,
        description: prod.shortDescription,
        category: prod.category,
        brand: {
          '@type': 'Brand',
          name: 'CENLARO',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '0.00',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'PriceSpecification',
            description: 'Price on request based on container volume and packaging options.',
          },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#FAF7F2] min-h-screen">
        {/* Editorial Catalogue Hero */}
        <section className="bg-[#20150F] text-[#F4EFE7] pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3A2418]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C7A05A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-start max-w-3xl">
              <span className="editorial-badge text-[#C7A05A] mb-4">
                Export Grade Collection
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                Coffee Catalogue
              </h1>
              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-6">
                From high-altitude Cau Dat Arabica to dense Screen 18 Buon Ma Thuot Robusta. Sourced with integrity, calibrated for world-class espresso extractions and commercial distribution.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-stone-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                  No Consumer Cart • B2B Direct
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                  Container &amp; Pallet Allocations
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                  Private Label Ready
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Main Explorer with Sidebar & Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <CatalogExplorer
            initialProducts={PRODUCTS}
          />
        </section>

        {/* Global Commercial Quote Form Section */}
        <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <QuoteForm />
        </section>
      </div>
    </>
  );
}
