'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'RU' | 'VN'>('EN');

  return (
    <header className="sticky top-0 z-50 bg-[#20150F]/95 backdrop-blur-md border-b border-[#3A2418] text-[#F4EFE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - CENLARO proportions strictly maintained */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-[#C7A05A] flex items-center justify-center bg-[#20150F] group-hover:border-white transition-colors duration-300">
            <span className="font-serif text-[#C7A05A] group-hover:text-white text-base tracking-wider font-light">
              C
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.28em] text-lg sm:text-xl font-medium text-[#F4EFE7] group-hover:text-[#C7A05A] transition-colors duration-300">
              CENLARO
            </span>
            <span className="text-[8px] tracking-[0.32em] text-[#C7A05A] uppercase -mt-0.5">
              Selected Origins
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-medium">
          <Link href="/coffee" className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1">
            Catalogue
          </Link>
          <Link href="/green-coffee" className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1">
            Green Coffee
          </Link>
          <Link href="/wholesale" className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1">
            Wholesale / B2B
          </Link>
          <Link href="/private-label" className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1">
            Private Label
          </Link>
          <Link href="/about" className="text-stone-300 hover:text-[#C7A05A] transition-colors py-1">
            About
          </Link>
        </nav>

        {/* Right side controls: Language switcher & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher prepared for EN/RU/VN */}
          <div className="flex items-center gap-1.5 text-[10px] tracking-wider border border-[#3A2418] px-2 py-1 bg-[#180F0B]">
            <Globe className="w-3 h-3 text-[#C7A05A]" />
            {(['EN', 'RU', 'VN'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                className={`px-1.5 py-0.5 transition-colors ${
                  currentLang === lang ? 'text-[#C7A05A] font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <Link
            href="/coffee#quote-section"
            className="px-5 py-2.5 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/coffee#quote-section"
            className="px-3 py-1.5 bg-[#C7A05A] text-[#20150F] text-[10px] tracking-widest uppercase font-semibold"
          >
            Quote
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
              href="/coffee"
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              All Coffee Catalogue
            </Link>
            <Link
              href="/green-coffee"
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              Green Coffee Lots
            </Link>
            <Link
              href="/wholesale"
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              Wholesale / B2B Supply
            </Link>
            <Link
              href="/private-label"
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              Private Label &amp; OEM
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-[#C7A05A] py-2 border-b border-[#3A2418]/50"
            >
              About CENLARO
            </Link>
          </nav>

          <div className="pt-4 flex items-center justify-between border-t border-[#3A2418]">
            <span className="text-[10px] text-stone-400 tracking-wider uppercase">Language</span>
            <div className="flex gap-2">
              {(['EN', 'RU', 'VN'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-1 text-xs border ${
                    currentLang === lang
                      ? 'border-[#C7A05A] text-[#C7A05A]'
                      : 'border-[#3A2418] text-stone-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
