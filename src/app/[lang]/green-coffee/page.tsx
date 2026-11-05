import { Metadata } from 'next';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { ShieldCheck, Anchor, Award, Layers } from 'lucide-react';
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
    title: dict.catalog.greenTitle,
    description: dict.catalog.greenSubtitle,
    alternates: {
      canonical: `https://cenlaro.com/${validLang}/green-coffee`,
    },
    openGraph: {
      title: `${dict.catalog.greenTitle} | Vietnamese Origin`,
      description: dict.catalog.greenSubtitle,
      url: `https://cenlaro.com/${validLang}/green-coffee`,
      siteName: 'CENLARO SELECTED ORIGINS',
      locale: validLang === 'ru' ? 'ru_RU' : validLang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocalizedGreenCoffeePage({ params }: PageProps) {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);
  const greenProducts = getProductsByCategory('Green Coffee');

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Category Hero */}
      <section className="bg-[#1C2419] text-[#F4EFE7] pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#44523B]/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-4">
              {dict.catalog.greenTitle}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-8">
              {dict.catalog.greenSubtitle}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#44523B]/40 text-xs">
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">
                  {validLang === 'ru' ? 'Минимальная партия' : validLang === 'vi' ? 'MOQ tiêu chuẩn' : 'Standard MOQ'}
                </span>
                <span className="text-white font-medium">1 x 20ft FCL (~19.2 MT)</span>
              </div>
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">
                  {validLang === 'ru' ? 'Влажность зерна' : validLang === 'vi' ? 'Độ ẩm tối đa' : 'Moisture Control'}
                </span>
                <span className="text-white font-medium">Max 12.5%</span>
              </div>
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">
                  {validLang === 'ru' ? 'Фасовка экспорта' : validLang === 'vi' ? 'Bao bì xuất khẩu' : 'Export Packaging'}
                </span>
                <span className="text-white font-medium">60kg Jute / GrainPro</span>
              </div>
              <div>
                <span className="text-[10px] text-[#C7A05A] uppercase tracking-widest block font-semibold">
                  {validLang === 'ru' ? 'Базис поставки' : validLang === 'vi' ? 'Điều kiện giao hàng' : 'Incoterms'}
                </span>
                <span className="text-white font-medium">FOB HCMC / CIF Global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Coffee Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#3A2418]/10">
          <div>
            <h2 className="font-serif text-2xl text-[#20150F] font-normal">
              {validLang === 'ru' ? 'Экспортные лоты зеленого кофе' : validLang === 'vi' ? 'Các lô cà phê nhân xuất khẩu' : 'Export Green Coffee Lots'}
            </h2>
            <p className="text-xs text-stone-500 font-light mt-1">
              {validLang === 'ru' ? 'Урожай 2025/2026. Прямой контракт с производителем VIET BRIDGE.' : validLang === 'vi' ? 'Vụ mùa 2025/2026. Hợp đồng trực tiếp từ VIET BRIDGE.' : 'Crop 2025/2026. Direct contract with exporter VIET BRIDGE.'}
            </p>
          </div>
          <span className="text-xs text-stone-400 font-mono">
            {greenProducts.length} {validLang === 'ru' ? 'лотов' : validLang === 'vi' ? 'lô' : 'lots'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {greenProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={validLang}
              dict={dict.catalog}
            />
          ))}
        </div>
      </section>

      {/* Green Coffee Supply Specifications & Quality Protocol */}
      <section className="bg-white border-y border-[#3A2418]/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl text-[#20150F] font-normal mb-3">
              {validLang === 'ru' ? 'Стандарты зеленого зерна CENLARO' : validLang === 'vi' ? 'Tiêu chuẩn cà phê nhân CENLARO' : 'Green Coffee Quality Protocol'}
            </h2>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              {validLang === 'ru'
                ? 'Каждая партия зеленого кофе проходит предэкспортную инспекцию по международным стандартам ICO и ГОСТ.'
                : validLang === 'vi'
                ? 'Mỗi lô hàng xuất khẩu đều trải qua kiểm định độc lập theo tiêu chuẩn quốc tế ICO và kiểm dịch thực vật.'
                : 'Every harvest batch undergo strict pre-shipment cupping and physical grading compliant with ICO export standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FAF7F2] border border-[#3A2418]/10">
              <ShieldCheck className="w-6 h-6 text-[#C7A05A] mb-3" />
              <h4 className="font-serif text-base text-[#20150F] font-semibold mb-2">
                {validLang === 'ru' ? 'Скрин 16 / 18' : validLang === 'vi' ? 'Sàng 16 / 18' : 'Screen 16 & 18'}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {validLang === 'ru' ? 'Более 90% зерна на сите 18 (7.1 мм) или 16 (6.3 мм). Механическая сортировка на вибростолах.' : validLang === 'vi' ? 'Tỉ lệ trên sàng 18 (7.1mm) và 16 (6.3mm) trên 90%. Phân loại qua bàn rung cơ học.' : '90%+ retention on screen 18 (7.1mm) or screen 16 (6.3mm). Density separator sorted.'}
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#3A2418]/10">
              <Award className="w-6 h-6 text-[#C7A05A] mb-3" />
              <h4 className="font-serif text-base text-[#20150F] font-semibold mb-2">
                {validLang === 'ru' ? 'Полировка водой' : validLang === 'vi' ? 'Đánh bóng ướt' : 'Wet Polished'}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {validLang === 'ru' ? 'Экспортная робуста Clean Wet Polished удаляет серебристую пленку для равномерной обжарки.' : validLang === 'vi' ? 'Công nghệ đánh bóng ướt loại bỏ sạch màng bạc, đảm bảo hạt rang nở đều đẹp.' : 'Wet polishing removes silverskin to ensure uniform convective heat absorption.'}
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#3A2418]/10">
              <Layers className="w-6 h-6 text-[#C7A05A] mb-3" />
              <h4 className="font-serif text-base text-[#20150F] font-semibold mb-2">
                {validLang === 'ru' ? 'Защита GrainPro' : validLang === 'vi' ? 'Bao lót GrainPro' : 'GrainPro Lined'}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {validLang === 'ru' ? 'Герметичные вкладыши GrainPro в джутовых мешках 60 кг сохраняют свежесть при морском фрахте.' : validLang === 'vi' ? 'Bao đay 60kg lót màng kín khí GrainPro ngăn ngừa ẩm mốc trong suốt hành trình đường biển.' : 'High-barrier hermetic GrainPro inner liners preserve moisture stability during ocean transit.'}
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#3A2418]/10">
              <Anchor className="w-6 h-6 text-[#C7A05A] mb-3" />
              <h4 className="font-serif text-base text-[#20150F] font-semibold mb-2">
                {validLang === 'ru' ? 'Отгрузка Кэт Лай' : validLang === 'vi' ? 'Cảng Cát Lái' : 'Cat Lai Loading'}
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {validLang === 'ru' ? 'Прямая отгрузка контейнеров из крупнейшего порта Вьетнама в любую точку мира за 10-14 дней.' : validLang === 'vi' ? 'Xếp container trực tiếp tại cảng Cát Lái (TP.HCM) với lịch tàu thường xuyên đến các châu lục.' : 'Rapid container stuff and customs clearance through Cat Lai port terminal in Ho Chi Minh City.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Green Coffee Quote Section */}
      <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <QuoteForm
          dict={dict.quoteForm}
          lang={validLang}
          initialProductSlug="green-coffee-fcl"
          initialProductName={
            validLang === 'ru'
              ? 'Зеленый кофе из Вьетнама (FCL контейнерная партия)'
              : validLang === 'vi'
              ? 'Cà phê nhân xuất khẩu (Container FCL)'
              : 'Vietnam Green Coffee FCL Container Allocation'
          }
        />
      </section>
    </div>
  );
}
