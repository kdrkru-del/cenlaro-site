'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { CenlaroLogo } from '@/components/ui/CenlaroLogo';
import { Dictionary, Locale } from '@/dictionaries/types';

interface HeaderProps {
  lang?: Locale;
  dict?: Dictionary['nav'];
}

const defaultNav: Dictionary['nav'] = {
  catalogue: 'Каталог',
  greenCoffee: 'Зеленый кофе',
  wholesale: 'Опт / B2B',
  privateLabel: 'Private Label',
  about: 'О бренде',
  requestQuote: 'Запросить расчет',
  mobileQuote: 'Заявка',
  language: 'Язык',
  allCoffeeCatalogue: 'Все сорта и бленды',
  greenCoffeeLots: 'Лоты зеленого кофе',
  wholesaleB2b: 'Оптовые поставки B2B',
  privateLabelOem: 'Private Label и OEM',
  aboutCenlaro: 'О бренде CENLARO',
};

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'vi', label: 'VI' },
];

export const Header: React.FC<HeaderProps> = ({
  lang = 'ru',
  dict = defaultNav,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || `/${lang}`;

  // Helper to switch language while preserving current sub-route
  const getLocalizedPath = (targetLang: Locale) => {
    if (!pathname) return `/${targetLang}`;
    // Replace leading /ru, /en, /vi if present
    const cleanPath = pathname.replace(/^\/(ru|en|vi)(\/|$)/, '/');
    if (cleanPath === '/' || cleanPath === '') {
      return `/${targetLang}`;
    }
    return `/${targetLang}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#20150F]/95 backdrop-blur-md border-b border-[#3A2418] text-[#F4EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - CENLARO proportions strictly maintained */}
        <Link href={`/${lang}`} className="flex items-center group">
          <CenlaroLogo theme="dark" variant="horizontal" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
          <Link
            href={`/${lang}/coffee`}
            className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1"
          >
            {dict.catalogue}
          </Link>
          <Link
            href={`/${lang}/green-coffee`}
            className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1"
          >
            {dict.greenCoffee}
          </Link>
          <Link
            href={`/${lang}/wholesale`}
            className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1"
          >
            {dict.wholesale}
          </Link>
          <Link
            href={`/${lang}/private-label`}
            className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1"
          >
            {dict.privateLabel}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1"
          >
            {dict.about}
          </Link>
        </nav>

        {/* Right side controls: Language switcher & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher with URL-based routing (RU / EN / VI) */}
          <div className="flex items-center gap-1.5 text-[10px] tracking-wider border border-[#3A2418] px-2 py-1 bg-[#180F0B]">
            <Globe className="w-3 h-3 text-[#C7A05A]" />
            {LANGUAGES.map((l) => {
              const isActive = lang === l.code;
              return (
                <Link
                  key={l.code}
                  href={getLocalizedPath(l.code)}
                  className={`px-1.5 py-0.5 transition-colors uppercase ${
                    isActive
                      ? 'text-[#C7A05A] font-bold bg-[#C7A05A]/10'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <Link
            href={`/${lang}/coffee#quote-section`}
            className="px-5 py-2.5 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow"
          >
            {dict.requestQuote}
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href={`/${lang}/coffee#quote-section`}
            className="px-3 py-1.5 bg-[#C7A05A] text-[#20150F] text-[10px] tracking-widest uppercase font-semibold"
          >
            {dict.mobileQuote}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#20150F] border-b border-[#3A2418] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-xs tracking-widest uppercase">
            <Link
              href={`/${lang}/coffee`}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              {dict.allCoffeeCatalogue}
            </Link>
            <Link
              href={`/${lang}/green-coffee`}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              {dict.greenCoffeeLots}
            </Link>
            <Link
              href={`/${lang}/wholesale`}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              {dict.wholesaleB2b}
            </Link>
            <Link
              href={`/${lang}/private-label`}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              {dict.privateLabelOem}
            </Link>
            <Link
              href={`/${lang}/about`}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              {dict.aboutCenlaro}
            </Link>
          </nav>

          <div className="pt-4 flex items-center justify-between border-t border-[#3A2418]">
            <span className="text-[10px] text-stone-400 tracking-wider uppercase">
              {dict.language}
            </span>
            <div className="flex gap-2">
              {LANGUAGES.map((l) => {
                const isActive = lang === l.code;
                return (
                  <Link
                    key={l.code}
                    href={getLocalizedPath(l.code)}
                    onClick={() => setIsOpen(false)}
                    className={`px-2.5 py-1 text-xs border ${
                      isActive
                        ? 'border-[#C7A05A] text-[#C7A05A] bg-[#C7A05A]/15 font-bold'
                        : 'border-[#3A2418] text-stone-400'
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
