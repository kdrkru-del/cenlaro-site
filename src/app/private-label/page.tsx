import { Metadata } from 'next';
import Link from 'next/link';
import { QuoteForm } from '@/components/forms/QuoteForm';
import {
  Package,
  Layers,
  Flame,
  FileCheck,
  CheckCircle2,
  Boxes,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Label & OEM Coffee Solutions | CENLARO',
  description:
    'Create your own coffee line with CENLARO: Custom blend formulation, precise roasting, grinding, packaging design, and export preparation. Minimum MOQ 100 kg.',
  keywords: [
    'coffee private label Vietnam',
    'OEM coffee Vietnam',
    'custom coffee blend roaster',
    'white label coffee beans',
    'contract roasting Vietnam',
  ],
  alternates: {
    canonical: 'https://cenlaro.com/private-label',
  },
};

export default function PrivateLabelPage() {
  const steps = [
    {
      num: '01',
      title: 'Coffee Selection',
      desc: 'Selecting single origin Arabica lots from Cau Dat (Da Lat) and Screen 16/18 Robusta from Buon Ma Thuot based on target cup profile.',
    },
    {
      num: '02',
      title: 'Custom Blend Development',
      desc: 'Developing proprietary Arabica/Robusta ratios (e.g. 80/20, 70/30, 50/50, or custom proportions) tailored to your brand’s extraction standard.',
    },
    {
      num: '03',
      title: 'Precision Roasting',
      desc: 'Calibration of custom roasting curves from Light to Dark Espresso profiles on commercial industrial batch roasters.',
    },
    {
      num: '04',
      title: 'Grinding & Milling',
      desc: 'Precision industrial granulation calibrated for Espresso, Moka pot, Vietnamese Phin, or Drip Filter, or whole bean delivery.',
    },
    {
      num: '05',
      title: 'Packaging Selection',
      desc: 'Choice of foil valve bags, tin-tie bags, quad-seal pouches, nitrogen flush, biodegradable materials in 250g, 500g, 1kg or bulk.',
    },
    {
      num: '06',
      title: 'Label / Packaging Design',
      desc: 'Application of client artwork, customized rotogravure printed pouches, custom labels, barcodes, and export compliance data.',
    },
    {
      num: '07',
      title: 'Production & QC',
      desc: 'Batch cupping, automated degassing valve sealing, check-weighing, and secondary packing in heavy-duty master cartons.',
    },
    {
      num: '08',
      title: 'Export Preparation',
      desc: 'Palletization, phytosanitary certificates, Certificate of Origin (Form A/B/EUR1), customs clearance, and container shipping.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#20150F] text-[#F4EFE7] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3A2418]">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="editorial-badge text-[#C7A05A] mb-4 inline-block">
            Full-Cycle OEM &amp; Contract Manufacturing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none mb-6">
            YOUR BRAND.<br />OUR COFFEE.
          </h1>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Create your own coffee line with CENLARO. We engineer bespoke coffee products for retail chains, specialty brands, hotels, and roasters worldwide.
          </p>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Private Label Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* OEM Process Steps (01 to 08) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C7A05A] font-semibold block mb-2">
            The CENLARO Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#20150F] font-normal">
            8 Stages from Bean to Shelf
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-[#3A2418]/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#C7A05A]/40 transition-colors shadow-sm"
            >
              <div>
                <span className="font-serif text-3xl text-[#C7A05A] font-light block mb-3">
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
                Stage Verified
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
              <h3 className="font-serif text-xl text-[#20150F]">Packaging Diversity</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Full customization: matte, gloss, kraft or metallic foils. One-way aroma valves, resealable zip locks, nitrogen flushing, and custom retail display caddies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C7A05A]/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#98733C]" />
              </div>
              <h3 className="font-serif text-xl text-[#20150F]">Sensory Formulation</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Benchmarking against international market leaders or creating an exclusive flavor signature. From sweet floral Italian roasts to intense Asian iced coffee profiles.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C7A05A]/30 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-[#98733C]" />
              </div>
              <h3 className="font-serif text-xl text-[#20150F]">Global Regulatory Compliance</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Complete export dossier: FDA registration, Certificate of Origin, Phytosanitary certification, lab test reports (heavy metals, ochratoxin, pesticide residue).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <QuoteForm
          initialProductSlug="private-label-oem"
          initialProductName="Private Label & OEM Project Inquiry"
        />
      </section>
    </div>
  );
}
