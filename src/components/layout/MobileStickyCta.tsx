'use client';

import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Dictionary, Locale } from '@/dictionaries/types';

interface MobileStickyCtaProps {
  lang?: Locale;
  dict?: Dictionary['nav'];
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({
  lang = 'ru',
  dict,
}) => {
  const pathname = usePathname();

  const isQuoteInView = pathname?.includes('#quote-section');
  if (isQuoteInView) return null;

  const buttonText = dict?.mobileQuote || (lang === 'ru' ? 'Запросить расчет' : lang === 'vi' ? 'Báo giá' : 'Request Price');
  const subtitle = lang === 'ru' ? 'Прямой опт и OEM' : lang === 'vi' ? 'Bán sỉ & OEM trực tiếp' : 'Direct Wholesale & OEM';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#20150F]/95 backdrop-blur-md border-t border-[#C7A05A]/30 p-3 px-4 flex items-center justify-between shadow-2xl">
      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#C7A05A] font-semibold">
          CENLARO B2B DESK
        </span>
        <span className="text-xs text-[#F4EFE7] font-medium truncate max-w-[190px]">
          {subtitle}
        </span>
      </div>

      <Link
        href={`/${lang}/coffee#quote-section`}
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-[10px] tracking-widest uppercase font-bold transition-all shadow-md active:scale-95"
      >
        <FileText className="w-3.5 h-3.5" />
        {buttonText}
      </Link>
    </div>
  );
};
