import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import { TasteProfile } from '@/components/product/TasteProfile';
import { RoastIndicator } from '@/components/product/RoastIndicator';
import { ProductGallery } from '@/components/product/ProductGallery';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Check, Box } from 'lucide-react';
import { getDictionary } from '@/dictionaries/getDictionary';
import { Locale } from '@/dictionaries/types';
import { getProductTranslation } from '@/data/productTranslations';

interface ProductPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ['ru', 'en', 'vi'];
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const product of PRODUCTS) {
      params.push({ lang, slug: product.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found | CENLARO' };
  }

  const trans = getProductTranslation(slug, validLang);
  const title = trans?.name || product.name;
  const desc = trans?.shortDescription || product.shortDescription;

  return {
    title: `${title} | CENLARO`,
    description: desc,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}/coffee/${product.slug}`,
    },
    openGraph: {
      title,
      description: desc,
      url: `https://cenlaro.com/${validLang}/coffee/${product.slug}`,
      siteName: 'CENLARO SELECTED ORIGINS',
      locale: validLang === 'ru' ? 'ru_RU' : validLang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'article',
    },
  };
}

export default async function LocalizedProductDetailPage({ params }: ProductPageProps) {
  const { lang, slug } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const trans = getProductTranslation(slug, validLang);
  const displayName = trans?.name || product.name;
  const displayShortName = trans?.name?.split('•')[0]?.trim() || product.shortName;
  const displayDesc = trans?.description || product.description;
  const displayOrigin = trans?.origin || product.origin;
  const displayCategory = trans?.category || product.category;
  const displayNotes = trans?.flavorNotes || product.flavorNotes;
  const displayProfile = trans?.profile || product.profile;

  const isBlend = product.coffeeType === 'Blend';
  const ratioLabel = isBlend ? `${product.arabica} / ${product.robusta}` : undefined;

  // JSON-LD Product Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: displayName,
    description: displayDesc,
    brand: {
      '@type': 'Brand',
      name: 'CENLARO',
    },
    category: displayCategory,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0.00',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        description: 'Wholesale quotation on request.',
      },
    },
  };

  const arabicaLabel = validLang === 'ru' ? 'Высокогорная арабика' : validLang === 'vi' ? 'Arabica Cầu Đất' : 'Highland Arabica';
  const robustaLabel = validLang === 'ru' ? 'Отборная робуста' : validLang === 'vi' ? 'Robusta Buôn Ma Thuột' : 'Selected Robusta';

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
            <Link href={`/${validLang}`} className="hover:text-[#20150F]">
              {validLang === 'ru' ? 'Главная' : validLang === 'vi' ? 'Trang chủ' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`/${validLang}/coffee`} className="hover:text-[#20150F]">
              {dict.catalog.title}
            </Link>
            <span>/</span>
            <span className="text-[#98733C] font-medium">{displayShortName}</span>
          </nav>
        </div>

        {/* First Screen: 2-Column Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white border border-[#3A2418]/10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 shadow-sm">
            {/* Left: Large High-Resolution Visual */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="sticky top-28">
                <ProductGallery
                  name={displayShortName}
                  category={displayCategory}
                  images={product.images}
                  ratio={ratioLabel}
                  roast={product.roast !== 'Unroasted' ? product.roast : undefined}
                />

                <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500 px-1 font-mono">
                  <span>LOT REF: #{product.id.slice(0, 14).toUpperCase()}</span>
                  <span>ORIGIN: {displayOrigin.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Product Details & Commercial Summary */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C7A05A]">
                    {displayCategory}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-xs tracking-wider text-stone-500">
                    {product.region}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal tracking-tight leading-snug mb-4">
                  {displayName}
                </h1>

                {/* Blend Ratio Banner if applicable */}
                {isBlend && (
                  <div className="inline-flex items-center gap-4 bg-[#F4EFE7] border border-[#3A2418]/15 px-4 py-2 rounded mb-5">
                    <span className="font-serif text-lg text-[#20150F] font-semibold">
                      {product.arabica} / {product.robusta}
                    </span>
                    <span className="text-xs text-stone-600 border-l border-[#3A2418]/20 pl-4 font-mono">
                      {product.arabica}% {arabicaLabel} • {product.robusta}% {robustaLabel}
                    </span>
                  </div>
                )}

                {/* Roast Indicator */}
                <div className="mb-6 flex items-center gap-4">
                  <RoastIndicator roast={product.roast} />
                </div>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6">
                  {displayDesc}
                </p>

                {/* Flavor Notes Pills */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                    {dict.productDetail.flavorNotesTitle}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {displayNotes.map((note) => (
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
                    {validLang === 'ru' ? 'Условия экспорта' : validLang === 'vi' ? 'Giá xuất khẩu' : 'Export Pricing'}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#98733C] font-medium tracking-wide">
                    {validLang === 'ru' ? 'РАСЧЕТ ПО ЗАПРОСУ' : validLang === 'vi' ? 'BÁO GIÁ THEO LÔ' : 'PRICE ON REQUEST'}
                  </span>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    {validLang === 'ru' ? 'Оптовые дифференциалы в зависимости от объема партии и Incoterms.' : validLang === 'vi' ? 'Bảng giá sỉ áp dụng theo thể tích container và điều kiện Incoterms.' : 'Tiered wholesale rates based on shipment volume & Incoterms.'}
                  </p>
                </div>

                <a
                  href="#quote-section"
                  className="w-full sm:w-auto px-7 py-3 bg-[#20150F] hover:bg-[#3A2418] text-[#F4EFE7] text-xs uppercase tracking-[0.2em] font-semibold transition-all text-center border border-[#C7A05A]/40 shadow hover:border-[#C7A05A]"
                >
                  {dict.productDetail.requestPrice}
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
              <h3 className="font-serif text-2xl text-[#20150F] font-normal mb-6">
                {dict.productDetail.sensoryTitle}
              </h3>

              <TasteProfile
                body={product.body}
                acidity={product.acidity}
                sweetness={product.sweetness}
                bitterness={product.bitterness}
                intensity={product.intensity}
                lang={validLang}
              />

              <div className="mt-8 pt-6 border-t border-[#3A2418]/10 text-xs text-stone-600 font-light leading-relaxed italic">
                &ldquo;{displayProfile}&rdquo;
              </div>

              {/* Recommended Preparation */}
              {product.suitableFor && product.suitableFor.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#3A2418]/10">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-3">
                    {dict.productDetail.suitableForTitle}
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
              <h3 className="font-serif text-2xl text-[#20150F] font-normal mb-6">
                {dict.productDetail.specsTitle}
              </h3>

              <div className="divide-y divide-[#3A2418]/10 text-xs">
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">{dict.productDetail.origin}</span>
                  <span className="font-medium text-[#20150F]">{displayOrigin}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">{dict.productDetail.region}</span>
                  <span className="font-medium text-[#20150F]">{product.region}</span>
                </div>
                {product.processing && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">{dict.productDetail.processing}</span>
                    <span className="font-medium text-[#20150F]">{product.processing}</span>
                  </div>
                )}
                {product.screen && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">{dict.productDetail.screen}</span>
                    <span className="font-medium text-[#20150F]">{product.screen}</span>
                  </div>
                )}
                {product.moisture && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">{dict.productDetail.moisture}</span>
                    <span className="font-medium text-[#20150F]">{product.moisture}</span>
                  </div>
                )}
                {product.crop && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">{dict.productDetail.crop}</span>
                    <span className="font-medium text-[#20150F]">{product.crop}</span>
                  </div>
                )}
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">{dict.productDetail.format}</span>
                  <span className="font-medium text-[#20150F]">{product.format} {product.grind ? `(${product.grind})` : ''}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">{dict.productDetail.moq}</span>
                  <span className="font-medium text-[#20150F]">{product.MOQ}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">{validLang === 'ru' ? 'Доступность к опту' : validLang === 'vi' ? 'Khả năng cung ứng' : 'Wholesale Availability'}</span>
                  <span className="font-medium text-[#44523B] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> {validLang === 'ru' ? 'В наличии под контейнер / паллеты' : validLang === 'vi' ? 'Sẵn sàng giao container / pallet' : 'Available for Container/Pallet'}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">{validLang === 'ru' ? 'Контрактное производство СТМ' : validLang === 'vi' ? 'Sản xuất OEM thương hiệu riêng' : 'Private Label / OEM'}</span>
                  <span className="font-medium text-[#C7A05A] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> {validLang === 'ru' ? 'Поддерживается в брендированной упаковке' : validLang === 'vi' ? 'Hỗ trợ bao bì riêng' : 'Supported with Custom Packaging'}
                  </span>
                </div>
              </div>

              {/* Packaging Variations */}
              <div className="mt-8 pt-6 border-t border-[#3A2418]/10">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                  {dict.productDetail.packaging}
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
                  {validLang === 'ru'
                    ? 'Возможна индивидуальная фасовка в брендированные пакеты для торговых сетей и дистрибьюторов.'
                    : validLang === 'vi'
                    ? 'Hỗ trợ đóng gói theo quy cách riêng cho các chuỗi phân phối và thương hiệu đối tác.'
                    : 'Custom packaging available for retail and private label distributors.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Dedicated Quote Form with this product selected */}
        <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <QuoteForm
            dict={dict.quoteForm}
            lang={validLang}
            initialProductSlug={product.slug}
            initialProductName={displayName}
          />
        </section>
      </div>
    </>
  );
}
