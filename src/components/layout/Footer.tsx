import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#180F0B] text-[#F4EFE7] border-t border-[#3A2418] pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#3A2418]/60">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#C7A05A] flex items-center justify-center">
                <span className="font-serif text-[#C7A05A] text-sm">C</span>
              </div>
              <span className="font-serif tracking-[0.28em] text-xl font-medium text-white">
                CENLARO
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              CENLARO is an international coffee brand focused on selected origins, reliable sourcing and flexible coffee solutions for retail and business partners. From Vietnam to the world.
            </p>
            <div className="pt-2 text-[11px] text-[#C7A05A] tracking-widest uppercase font-medium">
              Selected origins • Coffee with character
            </div>
          </div>

          {/* Col 2: Coffee Catalogue */}
          <div className="space-y-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C7A05A]">
              Catalogue
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <Link href="/coffee" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/green-coffee" className="hover:text-white transition-colors">
                  Green Robusta &amp; Arabica
                </Link>
              </li>
              <li>
                <Link href="/coffee/blend-70-30" className="hover:text-white transition-colors">
                  Signature 70 / 30
                </Link>
              </li>
              <li>
                <Link href="/coffee/blend-80-20" className="hover:text-white transition-colors">
                  Signature 80 / 20
                </Link>
              </li>
              <li>
                <Link href="/coffee/blend-50-50" className="hover:text-white transition-colors">
                  Signature 50 / 50
                </Link>
              </li>
              <li>
                <Link href="/coffee/ground-blend-70-30" className="hover:text-white transition-colors">
                  Ground Coffee Range
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business & OEM */}
          <div className="space-y-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C7A05A]">
              Business Solutions
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <Link href="/wholesale" className="hover:text-white transition-colors">
                  Wholesale &amp; Bulk Supply
                </Link>
              </li>
              <li>
                <Link href="/private-label" className="hover:text-white transition-colors">
                  Private Label &amp; OEM
                </Link>
              </li>
              <li>
                <Link href="/wholesale#container-shipments" className="hover:text-white transition-colors">
                  Container Shipments (FCL)
                </Link>
              </li>
              <li>
                <Link href="/wholesale#specifications" className="hover:text-white transition-colors">
                  Export Documentation
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Quality at Every Stage
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Commercial Inquiries */}
          <div className="space-y-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C7A05A]">
              Export Desk
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Inquiries regarding container allocation, custom blend roasting, or official samples:
            </p>
            <div className="pt-1">
              <Link
                href="/coffee#quote-section"
                className="inline-block px-4 py-2 border border-[#C7A05A]/50 text-[#C7A05A] text-[10px] tracking-widest uppercase hover:bg-[#C7A05A] hover:text-[#20150F] transition-all"
              >
                Request Current Price
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} CENLARO. All rights reserved. International Coffee Solutions.</p>
          <div className="flex items-center gap-6">
            <span>Vietnam: Ho Chi Minh City • Da Lat • Buon Ma Thuot</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
