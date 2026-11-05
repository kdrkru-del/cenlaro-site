import { Metadata } from 'next';
import { PRODUCTS } from '@/data/products';
import { CatalogExplorer } from '@/components/catalog/CatalogExplorer';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { getDictionary } from '@/dictionaries/getDictionary';
import { Locale } from '@/dictionaries/types';
import { getProductTranslation } from '@/data/productTranslations';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'en' }, { lang: 'vi' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);

  return {
    title: dict.catalog.title,
    description: dict.catalog.subtitle,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}/coffee`,
    },
    openGraph: {
      title: `${dict.catalog.title} | Sourced in Vietnam`,
      description: dict.catalog.subtitle,
      url: `https://cenlaro.com/${validLang}/coffee`,
      siteName: 'CENLARO SELECTED ORIGINS',
      locale: validLang === 'ru' ? 'ru_RU' : validLang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocalizedCoffeeCatalogPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);

  // JSON-LD ItemList Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: dict.catalog.title,
    description: dict.catalog.subtitle,
    itemListElement: PRODUCTS.map((prod, index) => {
      const trans = getProductTranslation(prod.slug, validLang);
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: trans?.name || prod.name,
          description: trans?.shortDescription || prod.shortDescription,
          category: trans?.category || prod.category,
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
              description: 'Commercial wholesale quotation on request for containers and bulk lots.',
            },
          },
        },
      };
    }),
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
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                {dict.catalog.title}
              </h1>
              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-6">
                {dict.catalog.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-stone-400">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                  {validLang === 'ru' ? 'B2B поставки без розничной наценки' : validLang === 'vi' ? 'B2B Trực tiếp từ xưởng' : 'Direct B2B Supply'}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                  {validLang === 'ru' ? 'Партии от паллеты до FCL' : validLang === 'vi' ? 'Giao hàng pallet & container FCL' : 'Pallet & Container Allocations'}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                  {validLang === 'ru' ? 'Готово под Private Label' : validLang === 'vi' ? 'Sẵn sàng sản xuất OEM' : 'Private Label Ready'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Main Explorer with Sidebar & Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <CatalogExplorer
            initialProducts={PRODUCTS}
            lang={validLang}
            dict={dict.catalog}
          />
        </section>

        {/* Commercial Quote Form Section */}
        <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <QuoteForm dict={dict.quoteForm} lang={validLang} />
        </section>
      </div>
    </>
  );
}
