import { Metadata } from 'next';
import Link from 'next/link';
import { CenlaroLogo } from '@/components/ui/CenlaroLogo';
import { getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ArrowRight, Check, Mountain, Flame, Sparkles } from 'lucide-react';
import { getAssetUrl } from '@/lib/basePath';
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
    title: `${dict.home.hero.headline} ${dict.home.hero.headlineAccent}`,
    description: dict.home.hero.subhead,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}`,
      languages: {
        ru: 'https://cenlaro.com/ru',
        en: 'https://cenlaro.com/en',
        vi: 'https://cenlaro.com/vi',
      },
    },
    openGraph: {
      siteName: 'CENLARO SELECTED ORIGINS',
      locale: validLang === 'ru' ? 'ru_RU' : validLang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);
  const featured = getFeaturedProducts().slice(0, 6);

  // Organization Schema with strict VIET BRIDGE legal entity details
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CENLARO SELECTED ORIGINS',
    legalName: 'VIET BRIDGE TRADING IMPORT EXPORT COMPANY LIMITED',
    url: `https://cenlaro.com/${validLang}`,
    logo: 'https://cenlaro.com/logo.png',
    description: dict.footer.brandDesc,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2/11 Ba Diem 4D St, Tien Lan 3, Ba Diem',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'VN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales & export',
      email: 'export@cenlaro.com',
      telephone: '+84-794-689-910',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="bg-[#FAF7F2] min-h-screen">
        {/* Stage 1: Full-Screen Cinematic Hero */}
        <section className="relative min-h-[92vh] flex flex-col justify-between text-[#F4EFE7] px-4 sm:px-6 lg:px-8 overflow-hidden">
          
          {/* Full-screen Background Coffee Photo */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetUrl('/images/hero-coffee-bg.jpg')}
              alt="CENLARO Selected Origins Vietnamese Coffee Plantation"
              className="w-full h-full object-cover object-center scale-[1.02] transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20150F] via-transparent to-[#20150F]/70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#20150F]/80 via-transparent to-transparent h-40 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(32,21,15,0.75)_100%)] pointer-events-none" />
          </div>

          {/* Top spacer */}
          <div className="pt-8 relative z-10" />

          {/* Center Editorial Typography */}
          <div className="max-w-5xl mx-auto w-full text-center relative z-10 py-12">
            <div className="mb-8 flex justify-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              <CenlaroLogo theme="dark" variant="stacked" />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] mb-6 drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
              {dict.home.hero.headline}{' '}
              <span className="italic font-normal text-[#E2BA6C]">
                {dict.home.hero.headlineAccent}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-stone-100 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              {dict.home.hero.subhead}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href={`/${validLang}/coffee`}
                className="w-full sm:w-auto px-10 py-4 bg-[#C7A05A] hover:bg-[#B38B42] text-[#20150F] text-xs uppercase tracking-[0.28em] font-semibold transition-all shadow-[0_8px_25px_rgba(199,160,90,0.35)] hover:shadow-[0_12px_35px_rgba(199,160,90,0.5)] transform hover:-translate-y-0.5"
              >
                {dict.home.hero.exploreBtn}
              </Link>
              <Link
                href="#quote-section"
                className="w-full sm:w-auto px-10 py-4 bg-[#20150F]/70 hover:bg-[#20150F]/90 backdrop-blur-md border border-[#C7A05A]/60 hover:border-[#C7A05A] text-[#F4EFE7] text-xs uppercase tracking-[0.28em] font-medium transition-all shadow-xl transform hover:-translate-y-0.5"
              >
                {dict.home.hero.quoteBtn}
              </Link>
            </div>
          </div>

          {/* Bottom Editorial Highlights Strip */}
          <div className="relative z-10 max-w-5xl mx-auto w-full pb-16 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#C7A05A]/25 text-center">
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">
                  {dict.home.hero.stats.elevation}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">
                  {dict.home.hero.stats.elevationLabel}
                </span>
              </div>
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">
                  {dict.home.hero.stats.screen}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">
                  {dict.home.hero.stats.screenLabel}
                </span>
              </div>
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">
                  {dict.home.hero.stats.custom}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">
                  {dict.home.hero.stats.customLabel}
                </span>
              </div>
              <div className="px-2">
                <span className="block font-serif text-xl sm:text-2xl text-[#E2BA6C] drop-shadow-md">
                  {dict.home.hero.stats.b2b}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone-200 drop-shadow">
                  {dict.home.hero.stats.b2bLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Editorial Section: Focus on Arabica & Robusta (What kind of Arabica, What kind of Robusta without dry specs) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#C7A05A] font-semibold block mb-2">
              {dict.home.varieties.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#20150F] font-normal tracking-tight mb-4">
              {dict.home.varieties.title}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              {dict.home.varieties.subtitle}
            </p>
          </div>

          {/* Two Pillars Grid: Highland Arabica vs Fine Robusta */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Pillar 1: Highland Cau Dat Arabica */}
            <div className="bg-white border border-[#3A2418]/10 p-8 sm:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#C7A05A]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#C7A05A]/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-[#98733C]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#98733C] font-semibold">
                      {dict.home.varieties.arabica.badge}
                    </span>
                  </div>
                  <span className="text-xs font-serif italic text-stone-400">
                    {dict.home.varieties.arabica.origin}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#20150F] font-normal mb-4">
                  {dict.home.varieties.arabica.title}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {dict.home.varieties.arabica.desc}
                </p>

                {/* Sensory Notes */}
                <div className="mb-6 pt-4 border-t border-[#3A2418]/10">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-3">
                    {dict.home.varieties.arabica.notesTitle}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dict.home.varieties.arabica.notes.map((note) => (
                      <span
                        key={note}
                        className="px-3 py-1.5 bg-[#FAF7F2] border border-[#3A2418]/10 text-[#20150F] text-xs font-serif italic"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#3A2418]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#98733C] font-medium tracking-wide">
                  {dict.home.varieties.arabica.character}
                </span>
                <Link
                  href={`/${validLang}/coffee`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#20150F] hover:text-[#C7A05A] transition-colors"
                >
                  {dict.home.varieties.arabica.link} →
                </Link>
              </div>
            </div>

            {/* Pillar 2: Fine Robusta Buon Ma Thuot */}
            <div className="bg-[#20150F] text-[#F4EFE7] border border-[#3A2418] p-8 sm:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#C7A05A]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#C7A05A]/10 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#E2BA6C]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2BA6C] font-semibold">
                      {dict.home.varieties.robusta.badge}
                    </span>
                  </div>
                  <span className="text-xs font-serif italic text-stone-400">
                    {dict.home.varieties.robusta.origin}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4">
                  {dict.home.varieties.robusta.title}
                </h3>

                <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {dict.home.varieties.robusta.desc}
                </p>

                {/* Sensory Notes */}
                <div className="mb-6 pt-4 border-t border-[#3A2418]/60">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold block mb-3">
                    {dict.home.varieties.robusta.notesTitle}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dict.home.varieties.robusta.notes.map((note) => (
                      <span
                        key={note}
                        className="px-3 py-1.5 bg-[#180F0B] border border-[#3A2418] text-[#E2BA6C] text-xs font-serif italic"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#3A2418]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#E2BA6C] font-medium tracking-wide">
                  {dict.home.varieties.robusta.character}
                </span>
                <Link
                  href={`/${validLang}/coffee`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-[#C7A05A] transition-colors"
                >
                  {dict.home.varieties.robusta.link} →
                </Link>
              </div>
            </div>
          </div>

          {/* Master Blends Harmony Banner */}
          <div className="mt-10 bg-white border border-[#3A2418]/10 p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C7A05A]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block">
                    {dict.home.varieties.blendHarmony.badge}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#20150F] font-normal leading-snug">
                  {dict.home.varieties.blendHarmony.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {dict.home.varieties.blendHarmony.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/${validLang}/coffee`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#20150F] hover:bg-[#3A2418] text-[#F4EFE7] text-xs uppercase tracking-widest font-semibold transition-all"
                  >
                    {dict.home.varieties.blendHarmony.link} →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.home.varieties.blendHarmony.items.map((item) => (
                  <div key={item.ratio} className="p-4 bg-[#FAF7F2] border border-[#3A2418]/10">
                    <span className="font-serif text-lg font-bold text-[#98733C] block mb-1">
                      {item.ratio}
                    </span>
                    <h4 className="font-serif text-sm text-[#20150F] font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories 3-Cards Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href={`/${validLang}/green-coffee`}
              className="group bg-white border border-[#3A2418]/10 p-8 shadow-sm hover:border-[#C7A05A] transition-all"
            >
              <h3 className="font-serif text-2xl text-[#20150F] mb-3 group-hover:text-[#98733C] transition-colors">
                {dict.home.categories.greenTitle}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {dict.home.categories.greenDesc}
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#20150F] group-hover:text-[#C7A05A] flex items-center gap-1">
                {dict.home.categories.greenLink} →
              </span>
            </Link>

            <Link
              href={`/${validLang}/coffee`}
              className="group bg-white border border-[#3A2418]/10 p-8 shadow-sm hover:border-[#C7A05A] transition-all"
            >
              <h3 className="font-serif text-2xl text-[#20150F] mb-3 group-hover:text-[#98733C] transition-colors">
                {dict.home.categories.blendsTitle}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {dict.home.categories.blendsDesc}
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#20150F] group-hover:text-[#C7A05A] flex items-center gap-1">
                {dict.home.categories.blendsLink} →
              </span>
            </Link>

            <Link
              href={`/${validLang}/private-label`}
              className="group bg-white border border-[#3A2418]/10 p-8 shadow-sm hover:border-[#C7A05A] transition-all"
            >
              <h3 className="font-serif text-2xl text-[#20150F] mb-3 group-hover:text-[#98733C] transition-colors">
                {dict.home.categories.oemTitle}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {dict.home.categories.oemDesc}
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#20150F] group-hover:text-[#C7A05A] flex items-center gap-1">
                {dict.home.categories.oemLink} →
              </span>
            </Link>
          </div>
        </section>

        {/* Featured Blends Showcase */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 pb-4 border-b border-[#3A2418]/10 gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
                {dict.home.featured.title}
              </h2>
            </div>
            <Link
              href={`/${validLang}/coffee`}
              className="text-xs uppercase tracking-widest font-semibold text-[#98733C] hover:text-[#20150F] transition-colors"
            >
              {dict.home.featured.viewAll} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                lang={validLang}
                dict={dict.catalog}
              />
            ))}
          </div>
        </section>

        {/* B2B / Wholesale Capabilities Section */}
        <section className="bg-[#20150F] text-[#F4EFE7] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#3A2418]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-5xl font-light text-white mb-6 leading-tight">
                  {dict.home.b2b.title}
                </h2>
                <p className="text-sm text-stone-300 font-light leading-relaxed mb-8">
                  {dict.home.b2b.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs font-light">
                  <div className="p-4 bg-[#180F0B] border border-[#3A2418]">
                    <span className="font-serif text-xl text-[#C7A05A] block mb-1">
                      {dict.home.b2b.fclTitle}
                    </span>
                    <p className="text-stone-400">
                      {dict.home.b2b.fclDesc}
                    </p>
                  </div>
                  <div className="p-4 bg-[#180F0B] border border-[#3A2418]">
                    <span className="font-serif text-xl text-[#C7A05A] block mb-1">
                      {dict.home.b2b.moqTitle}
                    </span>
                    <p className="text-stone-400">
                      {dict.home.b2b.moqDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/${validLang}/wholesale`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-xs uppercase tracking-widest font-semibold transition-all"
                  >
                    {dict.home.b2b.exploreBtn}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#180F0B] p-8 border border-[#C7A05A]/30">
                <h3 className="font-serif text-xl text-white mb-4">
                  {dict.home.b2b.exportStandardsTitle}
                </h3>
                <ul className="space-y-3 text-xs text-stone-300 font-light divide-y divide-[#3A2418]/60">
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{dict.home.b2b.stdUniformityLabel}:</strong>{' '}
                      {dict.home.b2b.stdUniformityDesc}
                    </span>
                  </li>
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{dict.home.b2b.stdMoistureLabel}:</strong>{' '}
                      {dict.home.b2b.stdMoistureDesc}
                    </span>
                  </li>
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{dict.home.b2b.stdPackagingLabel}:</strong>{' '}
                      {dict.home.b2b.stdPackagingDesc}
                    </span>
                  </li>
                  <li className="pt-3 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C7A05A] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{dict.home.b2b.stdDocsLabel}:</strong>{' '}
                      {dict.home.b2b.stdDocsDesc}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Commercial Quote Form */}
        <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <QuoteForm dict={dict.quoteForm} lang={validLang} />
        </section>
      </div>
    </>
  );
}
