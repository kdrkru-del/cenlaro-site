import React from 'react';
import Link from 'next/link';
import { CenlaroLogo } from '@/components/ui/CenlaroLogo';
import { Dictionary, Locale } from '@/dictionaries/types';
import { Mail, Phone, MapPin, FileText, Building2 } from 'lucide-react';

interface FooterProps {
  lang?: Locale;
  dict?: Dictionary['footer'];
}

const defaultFooter: Dictionary['footer'] = {
  brandDesc: 'CENLARO — международный кофейный бренд отобранных терруаров. Прямые поставки отборного зерна, оптовая обжарка и гибкие контрактные решения для ритейла и обжарщиков по всему миру.',
  tagline: 'Отобранные терруары • Кофе с характером',
  colCatalogue: 'Каталог',
  allProducts: 'Все сорта и бленды',
  greenRobustaArabica: 'Зеленая робуста и арабика',
  signature7030: 'Фирменный бленд 70 / 30',
  signature8020: 'Фирменный бленд 80 / 20',
  signature5050: 'Фирменный бленд 50 / 50',
  groundCoffeeRange: 'Молотый кофе для финов',
  colBusiness: 'B2B решения',
  wholesaleBulk: 'Оптовые поставки в мешках',
  privateLabelOem: 'Private Label / OEM',
  containerShipments: 'Контейнерные партии (FCL)',
  exportDocs: 'Экспортная документация',
  qualityStages: 'Контроль качества зерна',
  colExport: 'Экспортный отдел',
  exportDesc: 'По вопросам выделения контейнерных партий, разработки индивидуальных профилей обжарки или заказа образцов:',
  requestPriceBtn: 'Запросить расчет цен',
  legalTitle: 'Юридическое лицо и реквизиты',
  companyName: 'VIET BRIDGE TRADING IMPORT EXPORT COMPANY LIMITED',
  commercialBrand: 'CENLARO SELECTED ORIGINS',
  taxCodeLabel: 'ИНН / Tax Code',
  taxCodeValue: '0319519047',
  legalAddressLabel: 'Юридический адрес',
  legalAddressValue: '2/11 Ba Diem 4D St, Tien Lan 3, Ba Diem, Ho Chi Minh City, Vietnam',
  phoneRuLabel: 'Отдел стран СНГ (русский)',
  phoneRuValue: '+84 794 689 910',
  phoneEnViLabel: 'Международный отдел',
  phoneEnViValue: '+84 779 199 274',
  emailLabel: 'Официальный Email',
  emailValue: 'export@cenlaro.com',
  hubsTitle: 'Логистические хабы',
  hubsValue: 'Вьетнам: Хошимин (порт Кэт Лай) • Далат (Кау Дат) • Буонметхуот (Дак Лак)',
  rightsReserved: 'Все права защищены. Международные поставки вьетнамского кофе.',
};

export const Footer: React.FC<FooterProps> = ({
  lang = 'ru',
  dict = defaultFooter,
}) => {
  return (
    <footer className="bg-[#180F0B] text-[#F4EFE7] border-t border-[#3A2418] pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#3A2418]/60">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={`/${lang}`} className="inline-block">
              <CenlaroLogo theme="dark" variant="horizontal" />
            </Link>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              {dict.brandDesc}
            </p>
            <div className="pt-2 text-[11px] text-[#C7A05A] tracking-widest uppercase font-medium">
              {dict.tagline}
            </div>
          </div>

          {/* Col 2: Coffee Catalogue */}
          <div className="space-y-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C7A05A]">
              {dict.colCatalogue}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <Link href={`/${lang}/coffee`} className="hover:text-white transition-colors">
                  {dict.allProducts}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/green-coffee`} className="hover:text-white transition-colors">
                  {dict.greenRobustaArabica}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/coffee/blend-70-30`} className="hover:text-white transition-colors">
                  {dict.signature7030}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/coffee/blend-80-20`} className="hover:text-white transition-colors">
                  {dict.signature8020}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/coffee/blend-50-50`} className="hover:text-white transition-colors">
                  {dict.signature5050}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/coffee/ground-blend-70-30`} className="hover:text-white transition-colors">
                  {dict.groundCoffeeRange}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business & OEM */}
          <div className="space-y-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C7A05A]">
              {dict.colBusiness}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <Link href={`/${lang}/wholesale`} className="hover:text-white transition-colors">
                  {dict.wholesaleBulk}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/private-label`} className="hover:text-white transition-colors">
                  {dict.privateLabelOem}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/wholesale#container-shipments`} className="hover:text-white transition-colors">
                  {dict.containerShipments}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/wholesale#specifications`} className="hover:text-white transition-colors">
                  {dict.exportDocs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="hover:text-white transition-colors">
                  {dict.qualityStages}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Commercial Inquiries */}
          <div className="space-y-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C7A05A]">
              {dict.colExport}
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              {dict.exportDesc}
            </p>
            <div className="pt-2">
              <Link
                href={`/${lang}/coffee#quote-section`}
                className="inline-block px-4 py-2 border border-[#C7A05A]/50 text-[#C7A05A] text-[10px] tracking-widest uppercase hover:bg-[#C7A05A] hover:text-[#20150F] transition-all font-semibold"
              >
                {dict.requestPriceBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Compliance Section — STRICT VIET BRIDGE DETAILS */}
        <div className="py-8 border-b border-[#3A2418]/60 text-xs text-stone-400 font-light space-y-4">
          <div className="flex items-center gap-2 text-[#C7A05A] font-medium text-[11px] tracking-widest uppercase">
            <Building2 className="w-4 h-4" />
            <span>{dict.legalTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Legal Entity Name & Brand */}
            <div className="space-y-1.5 bg-[#20150F]/70 p-4 border border-[#3A2418]/80">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block">Legal Entity</span>
              <p className="text-white font-medium text-xs tracking-wide">
                {dict.companyName}
              </p>
              <p className="text-[#C7A05A] text-[11px] font-mono tracking-wider pt-1">
                {dict.commercialBrand}
              </p>
              <div className="pt-2 text-[11px] text-stone-300">
                <span className="text-stone-500 mr-2">{dict.taxCodeLabel}:</span>
                <span className="font-mono text-[#C7A05A] font-semibold">{dict.taxCodeValue}</span>
              </div>
            </div>

            {/* Registered Address */}
            <div className="space-y-1.5 bg-[#20150F]/70 p-4 border border-[#3A2418]/80">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-stone-500">
                <MapPin className="w-3.5 h-3.5 text-[#C7A05A]" />
                <span>{dict.legalAddressLabel}</span>
              </div>
              <p className="text-stone-300 text-xs leading-relaxed">
                {dict.legalAddressValue}
              </p>
              <div className="pt-2 text-[10px] text-stone-400">
                <span className="text-stone-500 block mb-0.5">{dict.hubsTitle}:</span>
                <span>{dict.hubsValue}</span>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-2 bg-[#20150F]/70 p-4 border border-[#3A2418]/80">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-stone-500">
                <Mail className="w-3.5 h-3.5 text-[#C7A05A]" />
                <span>{dict.emailLabel}</span>
              </div>
              <a
                href={`mailto:${dict.emailValue}`}
                className="text-[#C7A05A] hover:underline font-mono text-xs block font-semibold"
              >
                {dict.emailValue}
              </a>

              <div className="pt-2 space-y-1 text-xs">
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-500 text-[10px]">{dict.phoneRuLabel}:</span>
                  <a href={`tel:${dict.phoneRuValue.replace(/\s+/g, '')}`} className="font-mono hover:text-white">
                    {dict.phoneRuValue}
                  </a>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-500 text-[10px]">{dict.phoneEnViLabel}:</span>
                  <a href={`tel:${dict.phoneEnViValue.replace(/\s+/g, '')}`} className="font-mono hover:text-white">
                    {dict.phoneEnViValue}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {dict.commercialBrand} • {dict.rightsReserved}</p>
          <div className="flex items-center gap-4 text-[10px] font-mono text-stone-500">
            <span>Cat Lai Port (HCMC)</span>
            <span>•</span>
            <span>Cau Dat (Da Lat)</span>
            <span>•</span>
            <span>Buon Ma Thuot (Dak Lak)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
