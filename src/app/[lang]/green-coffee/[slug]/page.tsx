import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import { TasteProfile } from '@/components/product/TasteProfile';
import { ProductGallery } from '@/components/product/ProductGallery';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { getDictionary } from '@/dictionaries/getDictionary';
import { Locale } from '@/dictionaries/types';
import { getProductTranslation } from '@/data/productTranslations';

interface GreenProductPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const greenLots = PRODUCTS.filter((p) => p.category === 'Green Coffee');
  const locales = ['ru', 'en', 'vi'];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of locales) {
    for (const p of greenLots) {
      params.push({ lang, slug: p.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: GreenProductPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const product = getProductBySlug(slug);

  if (!product || product.category !== 'Green Coffee') {
    return { title: 'Green Coffee Not Found | CENLARO' };
  }

  const trans = getProductTranslation(slug, validLang);
  const title = trans?.name || product.name;
  const desc = trans?.shortDescription || product.shortDescription;

  return {
    title: `${title} | Direct Vietnam Export`,
    description: desc,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}/green-coffee/${product.slug}`,
    },
    openGraph: {
      title,
      description: desc,
      url: `https://cenlaro.com/${validLang}/green-coffee/${product.slug}`,
      siteName: 'CENLARO SELECTED ORIGINS',
      locale: validLang === 'ru' ? 'ru_RU' : validLang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'article',
    },
  };
}

export default async function LocalizedGreenProductDetailPage({ params }: GreenProductPageProps) {
  const { lang, slug } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);
  const product = getProductBySlug(slug);

  if (!product || product.category !== 'Green Coffee') {
    notFound();
  }

  const trans = getProductTranslation(slug, validLang);
  const displayName = trans?.name || product.name;
  const displayShortName = trans?.name?.split('•')[0]?.trim() || product.shortName;
  const displayDesc = trans?.description || product.description;
  const displayOrigin = trans?.origin || product.origin;
  const displayNotes = trans?.flavorNotes || product.flavorNotes;

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-light">
          <Link href={`/${validLang}`} className="hover:text-[#20150F]">
            {validLang === 'ru' ? 'Главная' : validLang === 'vi' ? 'Trang chủ' : 'Home'}
          </Link>
          <span>/</span>
          <Link href={`/${validLang}/green-coffee`} className="hover:text-[#20150F]">
            {dict.catalog.greenTitle}
          </Link>
          <span>/</span>
          <span className="text-[#44523B] font-medium">{displayShortName}</span>
        </nav>
      </div>

      {/* Hero 2-Column Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white border border-[#3A2418]/10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 shadow-sm">
          {/* Left: Green Coffee Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="sticky top-28">
              <ProductGallery
                name={displayShortName}
                category="Vietnam Green Raw Commodity"
                images={product.images}
              />

              <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500 px-1 font-mono">
                <span>SPECIES: {product.coffeeType.toUpperCase()}</span>
                <span>ORIGIN: {displayOrigin.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Commercial CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#44523B]">
                  {validLang === 'ru' ? 'Экспортный лот зеленого кофе' : validLang === 'vi' ? 'Cà phê nhân xuất khẩu' : 'Unroasted Export Lot'}
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs tracking-wider text-stone-500 font-mono">
                  {product.screen || product.grade}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal tracking-tight leading-snug mb-4">
                {displayName}
              </h1>

              <div className="inline-flex items-center gap-3 bg-[#44523B]/10 border border-[#44523B]/20 px-3.5 py-1.5 rounded mb-5 text-xs text-[#44523B] font-medium font-mono">
                <span>MOQ: {product.MOQ}</span>
                <span>•</span>
                <span>{dict.productDetail.moisture}: {product.moisture}</span>
              </div>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6">
                {displayDesc}
              </p>

              {/* Sensory Notes */}
              <div className="mb-6">
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

            {/* Price on Request Callout */}
            <div className="pt-6 border-t border-[#3A2418]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF7F2] p-5 rounded">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 block">
                  {validLang === 'ru' ? 'Экспортные котировки' : validLang === 'vi' ? 'Giá xuất khẩu' : 'Commodity Export Pricing'}
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#98733C] font-medium tracking-wide">
                  {validLang === 'ru' ? 'РАСЧЕТ ПО ЗАПРОСУ' : validLang === 'vi' ? 'BÁO GIÁ THEO LÔ' : 'REQUEST CURRENT PRICE'}
                </span>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  {validLang === 'ru' ? 'Расчет на базе биржевых котировок Robusta London / Arabica New York на условиях FOB Cat Lai.' : validLang === 'vi' ? 'Báo giá dựa trên sàn Robusta London / Arabica New York theo điều kiện FOB Cát Lái.' : 'Quoted based on current London Robusta / NY Arabica differentials & FOB terms.'}
                </p>
              </div>

              <a
                href="#quote-section"
                className="w-full sm:w-auto px-7 py-3 bg-[#44523B] hover:bg-[#20150F] text-[#F4EFE7] text-xs uppercase tracking-[0.2em] font-semibold transition-all text-center border border-[#C7A05A]/40 shadow"
              >
                {dict.productDetail.requestPrice}
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
              {dict.productDetail.specsTitle}
            </h3>

            <div className="divide-y divide-[#3A2418]/10 text-xs">
              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-stone-500">{dict.productDetail.origin}</span>
                <span className="font-medium text-[#20150F] text-right">{displayOrigin}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-stone-500">{dict.productDetail.region}</span>
                <span className="font-medium text-[#20150F] text-right">{product.region}</span>
              </div>
              {product.screen && (
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <span className="text-stone-500">{dict.productDetail.screen}</span>
                  <span className="font-medium text-[#20150F] text-right">{product.screen}</span>
                </div>
              )}
              {product.grade && (
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <span className="text-stone-500">{dict.productDetail.grade}</span>
                  <span className="font-medium text-[#20150F] text-right">{product.grade}</span>
                </div>
              )}
              {product.moisture && (
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <span className="text-stone-500">{dict.productDetail.moisture}</span>
                  <span className="font-medium text-[#20150F] text-right">{product.moisture}</span>
                </div>
              )}
              {product.processing && (
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <span className="text-stone-500">{dict.productDetail.processing}</span>
                  <span className="font-medium text-[#20150F] text-right">{product.processing}</span>
                </div>
              )}
              {product.crop && (
                <div className="py-2.5 flex items-center justify-between gap-4">
                  <span className="text-stone-500">{dict.productDetail.crop}</span>
                  <span className="font-medium text-[#20150F] text-right">{product.crop}</span>
                </div>
              )}
              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-stone-500">{dict.productDetail.packaging}</span>
                <span className="font-medium text-[#20150F] text-right">{product.packaging.join(' / ')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#3A2418]/10 p-6 sm:p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
              {validLang === 'ru' ? 'Каппинг-профиль зерна' : validLang === 'vi' ? 'Thuộc tính thử nếm' : 'Roaster Cupping Profile'}
            </span>
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

            <div className="mt-8 p-4 bg-[#FAF7F2] border border-[#3A2418]/10 rounded text-xs text-stone-600 font-light">
              <span className="font-medium text-[#20150F] block mb-1">
                {validLang === 'ru' ? 'Условия отправки образцов:' : validLang === 'vi' ? 'Lưu ý gửi mẫu thử:' : 'Export Note:'}
              </span>
              {validLang === 'ru'
                ? 'Образцы сырого зеленого кофе (350г – 1кг) отправляются курьерской авиадоставкой (DHL / FedEx) для производственного каппинга и лабораторных тестов.'
                : validLang === 'vi'
                ? 'Mẫu cà phê nhân thử nghiệm (350g – 1kg) được gửi chuyển phát nhanh hàng không (DHL / FedEx) cho các đơn vị rang xay và phòng kiểm định.'
                : 'Green coffee samples (350g–1kg) are prepared via express courier for verified industrial roasters and commodity traders.'}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <QuoteForm
          dict={dict.quoteForm}
          lang={validLang}
          initialProductSlug={product.slug}
          initialProductName={displayName}
        />
      </section>
    </div>
  );
}
