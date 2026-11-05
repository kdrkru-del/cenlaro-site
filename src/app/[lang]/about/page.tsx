import { Metadata } from 'next';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { MapPin } from 'lucide-react';
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
    title: `${dict.about.heroTitle} | CENLARO`,
    description: dict.about.heroSubtitle,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}/about`,
    },
  };
}

export default async function LocalizedAboutPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Brand Hero */}
      <section className="bg-[#20150F] text-[#F4EFE7] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3A2418]">
        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-6">
            {dict.about.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-6">
            {dict.about.heroSubtitle}
          </p>
          <div className="pt-2 text-xs font-serif text-[#C7A05A] tracking-widest uppercase">
            {dict.about.heroTagline}
          </div>
        </div>
      </section>

      {/* Origin Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal leading-tight">
              {dict.about.terroirsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              {dict.about.terroirsSubtitle}
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-white border border-[#3A2418]/10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#C7A05A]" />
                  <h4 className="font-serif text-base text-[#20150F] font-semibold">
                    {dict.about.dalatTitle}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  {dict.about.dalatDesc}
                </p>
              </div>

              <div className="p-4 bg-white border border-[#3A2418]/10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#C7A05A]" />
                  <h4 className="font-serif text-base text-[#20150F] font-semibold">
                    {dict.about.bmtTitle}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  {dict.about.bmtDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#20150F] p-8 sm:p-12 text-[#F4EFE7] border border-[#C7A05A]/30 relative">
            <div className="absolute inset-3 border border-[#C7A05A]/15 pointer-events-none" />
            <h3 className="font-serif text-2xl text-white mb-4">
              {dict.about.qualityTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
              {dict.about.qualityDesc1}
            </p>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              {dict.about.qualityDesc2}
            </p>
          </div>
        </div>
      </section>

      {/* Quality at Every Stage Timeline */}
      <section className="bg-white border-y border-[#3A2418]/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
              Verification Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
              {dict.about.timelineTitle}
            </h2>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:grid grid-cols-6 gap-4 relative">
            <div className="absolute top-3 left-8 right-8 h-[2px] bg-[#C7A05A]/30 -z-0" />

            {dict.about.timeline.map((item) => (
              <div key={item.title} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#20150F] border-2 border-[#C7A05A] flex items-center justify-center mb-4 shadow">
                  <span className="w-2 h-2 rounded-full bg-[#C7A05A]" />
                </div>
                <h4 className="font-serif text-base text-[#20150F] font-medium mb-2">{item.title}</h4>
                <p className="text-[11px] text-stone-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-6 relative border-l-2 border-[#C7A05A]/40 ml-4 pl-6">
            {dict.about.timeline.map((item) => (
              <div key={item.title} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#20150F] border-2 border-[#C7A05A]" />
                <h4 className="font-serif text-lg text-[#20150F] font-medium mb-1">{item.title}</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Inquiry Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <QuoteForm
          dict={dict.quoteForm}
          lang={validLang}
          initialProductSlug="corporate-inquiry"
          initialProductName="CENLARO Corporate Sourcing Partnership Inquiry"
        />
      </section>
    </div>
  );
}
