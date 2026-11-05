import { Metadata } from 'next';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Boxes, Flame, FileCheck, ArrowRight } from 'lucide-react';
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
    title: `${dict.privateLabel.heroTitle} | CENLARO`,
    description: dict.privateLabel.heroSubtitle,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}/private-label`,
    },
    openGraph: {
      title: `${dict.privateLabel.heroTitle} | Vietnamese Coffee OEM`,
      description: dict.privateLabel.heroSubtitle,
      url: `https://cenlaro.com/${validLang}/private-label`,
      siteName: 'CENLARO SELECTED ORIGINS',
      locale: validLang === 'ru' ? 'ru_RU' : validLang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocalizedPrivateLabelPage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#20150F] text-[#F4EFE7] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3A2418]">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none mb-6">
            {dict.privateLabel.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.privateLabel.heroSubtitle}
          </p>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            {dict.privateLabel.heroCta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* OEM Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
            {dict.privateLabel.stepsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.privateLabel.steps.map((step) => (
            <div
              key={step.title}
              className="bg-white border border-[#3A2418]/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#C7A05A]/40 transition-colors shadow-sm"
            >
              <div>
                <span className="font-serif text-2xl text-[#C7A05A] block mb-2">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg text-[#20150F] font-normal mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#3A2418]/5 flex items-center text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                {validLang === 'ru' ? 'Контроль этапа' : validLang === 'vi' ? 'Quy chuẩn' : 'Stage Verified'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="bg-white border-y border-[#3A2418]/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C7A05A]/30 flex items-center justify-center">
                <Boxes className="w-5 h-5 text-[#98733C]" />
              </div>
              <h3 className="font-serif text-xl text-[#20150F]">
                {dict.privateLabel.packagingTitle}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {dict.privateLabel.packagingDesc}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C7A05A]/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#98733C]" />
              </div>
              <h3 className="font-serif text-xl text-[#20150F]">
                {validLang === 'ru' ? 'Разработка сенсорного профиля' : validLang === 'vi' ? 'Hiệu chỉnh hương vị theo yêu cầu' : 'Sensory Formulation'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {validLang === 'ru'
                  ? 'Калибровка вкуса под стандарты вашей кофейни, ритейл-бренда или рынка сбыта: от мягких деликатных нот до плотного бархатного эспрессо.'
                  : validLang === 'vi'
                  ? 'Nghiên cứu tỷ lệ phối trộn theo đúng gu tiêu dùng của thị trường mục tiêu hoặc thương hiệu đối tác.'
                  : 'Benchmarking against international market leaders or creating an exclusive flavor signature tailored to extraction standards.'}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C7A05A]/30 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-[#98733C]" />
              </div>
              <h3 className="font-serif text-xl text-[#20150F]">
                {validLang === 'ru' ? 'Экспортные документы и сертификаты' : validLang === 'vi' ? 'Hồ sơ pháp lý xuất khẩu đầy đủ' : 'Global Regulatory Compliance'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {validLang === 'ru'
                  ? 'Полный пакет документов от экспортной компании VIET BRIDGE: фитосанитарный сертификат, сертификат происхождения, протоколы лабораторных испытаний.'
                  : validLang === 'vi'
                  ? 'Bộ chứng từ xuất khẩu hoàn chỉnh từ VIET BRIDGE: C/O, Phytosanitary, kiểm nghiệm vi sinh và an toàn thực phẩm.'
                  : 'Complete export dossier issued by VIET BRIDGE: Certificate of Origin, Phytosanitary, microbiological and residue laboratory analyses.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <QuoteForm
          dict={dict.quoteForm}
          lang={validLang}
          initialProductSlug="private-label-oem"
          initialProductName="Private Label & OEM Project Inquiry"
        />
      </section>
    </div>
  );
}
