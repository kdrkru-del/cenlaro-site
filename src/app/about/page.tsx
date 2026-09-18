import { Metadata } from 'next';
import Link from 'next/link';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CENLARO | Selected Origins & Quality at Every Stage',
  description:
    'CENLARO is an international coffee brand focused on selected origins, reliable sourcing and flexible coffee solutions for retail and business partners. From Vietnam to the world.',
  alternates: {
    canonical: 'https://cenlaro.com/about',
  },
};

export default function AboutPage() {
  const timeline = [
    {
      step: '01',
      title: 'Selection',
      desc: 'Physical cherry sampling and moisture inspection across selected Central Highlands growing partner lots.',
    },
    {
      step: '02',
      title: 'Processing',
      desc: 'Controlled washed processing for highland Arabica and precision wet-polishing for export-grade Robusta.',
    },
    {
      step: '03',
      title: 'Roasting',
      desc: 'Artisan profile formulation using industrial automated roasters to ensure batch-to-batch consistency.',
    },
    {
      step: '04',
      title: 'Quality Control',
      desc: 'SCA cupping protocols, density checks, defect counts, and rigorous moisture verification before packing.',
    },
    {
      step: '05',
      title: 'Packing',
      desc: 'Nitrogen flush sealing, degassing valves, multi-layer barrier pouches, and export master cartons.',
    },
    {
      step: '06',
      title: 'Export',
      desc: 'Container moisture protection, rapid port forwarding from Cat Lai, and complete documentation dispatch.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Brand Hero */}
      <section className="bg-[#20150F] text-[#F4EFE7] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3A2418]">
        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-6">
            FROM VIETNAM<br />TO THE WORLD
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-6">
            CENLARO is an international coffee brand focused on selected origins, reliable sourcing and flexible coffee solutions for retail and business partners.
          </p>
          <div className="pt-2 text-xs font-serif text-[#C7A05A] tracking-widest uppercase">
            Selected origins • Coffee with character
          </div>
        </div>
      </section>

      {/* Origin Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal leading-tight">
              Selected Terroirs of Vietnam
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Vietnam is the global powerhouse of coffee production. Our sourcing partnerships focus on the country&apos;s two most revered microclimates:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-white border border-[#3A2418]/10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#C7A05A]" />
                  <h4 className="font-serif text-base text-[#20150F] font-semibold">Da Lat &amp; Cau Dat</h4>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Elevated at over 1,500 meters, Cau Dat produces delicate Arabica characterized by crisp malic acidity, floral sweetness, and refined body.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#3A2418]/10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#C7A05A]" />
                  <h4 className="font-serif text-base text-[#20150F] font-semibold">Buon Ma Thuot (Central Highlands)</h4>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  The capital of Vietnamese coffee. Rich red basalt soil yielding Screen 16 and Screen 18 Robusta beans renowned for dense crema and dark cocoa power.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#20150F] p-8 sm:p-12 text-[#F4EFE7] border border-[#C7A05A]/30 relative">
            <div className="absolute inset-3 border border-[#C7A05A]/15 pointer-events-none" />
            <h3 className="font-serif text-2xl text-white mb-4">Sourcing Integrity</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
              We work directly with established processing mills and regional farming cooperatives in Lam Dong and Dak Lak. By eliminating intermediate handling layers, CENLARO delivers certified traceability, uniform sizing, and predictable supply contracts.
            </p>
            <ul className="space-y-3 text-xs text-stone-300 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                Strict physical grading with zero tolerance for secondary mold or foreign matter.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                Cold storage warehousing in Ho Chi Minh City prior to ocean stuffing.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A05A]" />
                Transparent lot traceability from provincial processing station to destination port.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quality at Every Stage (Horizontal timeline on desktop, vertical on mobile) */}
      <section className="bg-white border-y border-[#3A2418]/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
              Verification Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
              QUALITY AT EVERY STAGE
            </h2>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:grid grid-cols-6 gap-4 relative">
            <div className="absolute top-7 left-8 right-8 h-[2px] bg-[#C7A05A]/30 -z-0" />

            {timeline.map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#20150F] border-2 border-[#C7A05A] flex items-center justify-center text-white font-serif text-sm font-semibold mb-4 shadow">
                  {item.step}
                </div>
                <h4 className="font-serif text-base text-[#20150F] font-medium mb-2">{item.title}</h4>
                <p className="text-[11px] text-stone-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-6 relative border-l-2 border-[#C7A05A]/40 ml-4 pl-6">
            {timeline.map((item) => (
              <div key={item.step} className="relative">
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#20150F] border border-[#C7A05A] flex items-center justify-center text-white font-serif text-xs">
                  {item.step}
                </div>
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
          initialProductSlug="corporate-inquiry"
          initialProductName="CENLARO Corporate / Sourcing Partnership Inquiry"
        />
      </section>
    </div>
  );
}
