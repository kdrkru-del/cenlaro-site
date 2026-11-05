import { Metadata } from 'next';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { getDictionary } from '@/dictionaries/getDictionary';
import { Locale } from '@/dictionaries/types';

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
    title: `${dict.wholesale.heroTitle} | CENLARO`,
    description: dict.wholesale.heroSubtitle,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}/wholesale`,
    },
    openGraph: {
      title: `${dict.wholesale.heroTitle} | B2B Vietnamese Coffee Exporter`,
      description: dict.wholesale.heroSubtitle,
      url: `https://cenlaro.com/${validLang}/wholesale`,
      siteName: 'CENLARO SELECTED ORIGINS',
      locale: validLang === 'ru' ? 'ru_RU' : validLang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocalizedWholesalePage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#20150F] text-[#F4EFE7] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3A2418]">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none mb-6">
            {dict.wholesale.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.wholesale.heroSubtitle}
          </p>
          <a
            href="#b2b-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            {dict.wholesale.heroCta}
          </a>
        </div>
      </section>

      {/* Core B2B Supply Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
            {dict.wholesale.pillarsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.wholesale.pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
              <h3 className="font-serif text-xl text-[#20150F]">{pillar.title}</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Volume Tiers */}
      <section className="bg-white border-y border-[#3A2418]/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
              {dict.wholesale.volumeTiersTitle}
            </h2>
            <p className="text-xs text-stone-500 font-light mt-2">
              {validLang === 'ru'
                ? 'Прозрачные форматы поставок от образцов до морских контейнеров FCL.'
                : validLang === 'vi'
                ? 'Quy cách đơn hàng minh bạch từ mẫu thử đến container FCL đường biển.'
                : 'Transparent tier classifications without invented price tags. Exact quotation provided per shipment.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.wholesale.volumeTiers.map((t) => (
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

      {/* Logistics & Shipping Section */}
      <section id="container-shipments" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
            {dict.wholesale.logisticsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.wholesale.logistics.map((log) => (
            <div key={log.title} className="bg-white border border-[#3A2418]/10 p-7 shadow-sm space-y-3">
              <h3 className="font-serif text-xl text-[#20150F]">{log.title}</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {log.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote section */}
      <section id="b2b-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <QuoteForm
          dict={dict.quoteForm}
          lang={validLang}
          initialProductSlug="wholesale-inquiry"
          initialProductName="B2B Wholesale & Container Allocation Inquiry"
        />
      </section>
    </div>
  );
}
