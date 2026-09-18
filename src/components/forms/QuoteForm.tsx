'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface QuoteFormProps {
  initialProductSlug?: string;
  initialProductName?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProductSlug = '',
  initialProductName = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productName: initialProductName || (initialProductSlug ? `Product: ${initialProductSlug}` : ''),
    volumeNeeded: '100-500 kg',
    packagingPreference: '1kg Valve Bags',
    destinationCountry: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setResponseMsg('Your quote inquiry has been received. Our export trade director will contact you with wholesale pricing within 24 business hours.');
      } else {
        setStatus('error');
        setResponseMsg(data.message || 'Failed to submit quote request. Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('A network error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-[#20150F] text-[#F4EFE7] p-8 sm:p-12 border border-[#C7A05A]/30 relative overflow-hidden">
      {/* Decorative luxury hairline frame */}
      <div className="absolute inset-2 border border-[#C7A05A]/15 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C7A05A] font-medium block mb-2">
            B2B Commercial Desk
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-3">
            Request Current Price &amp; Specifications
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-light max-w-lg mx-auto">
            Direct export pricing, container manifests, and custom OEM blend formulations tailored to your market.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-[#44523B]/30 border border-[#44523B] p-8 text-center rounded">
            <CheckCircle className="w-10 h-10 text-[#C7A05A] mx-auto mb-4" />
            <h3 className="font-serif text-xl text-white mb-2">Inquiry Successfully Transmitted</h3>
            <p className="text-sm text-stone-300 font-light">{responseMsg}</p>
            <button
              onClick={() => {
                setStatus('idle');
                setFormData(prev => ({ ...prev, message: '' }));
              }}
              className="mt-6 px-6 py-2 border border-[#C7A05A] text-[#C7A05A] text-xs uppercase tracking-widest hover:bg-[#C7A05A] hover:text-[#20150F] transition-all"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {status === 'error' && (
              <div className="bg-red-950/50 border border-red-800 p-4 text-red-200 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                <span>{responseMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Johnathan Vance"
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white placeholder:text-stone-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Company / Roastery
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Nordic Roasters Ltd"
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white placeholder:text-stone-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="purchasing@company.com"
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white placeholder:text-stone-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white placeholder:text-stone-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Product Selected
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="e.g. CENLARO 70 / 30"
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white placeholder:text-stone-600 outline-none transition-colors font-medium text-[#C7A05A]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Estimated Order Volume
                </label>
                <select
                  value={formData.volumeNeeded}
                  onChange={(e) => setFormData({ ...formData, volumeNeeded: e.target.value })}
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white outline-none transition-colors"
                >
                  <option value="Samples">Samples (Trial Evaluation)</option>
                  <option value="10–100 kg">10–100 kg</option>
                  <option value="100–500 kg">100–500 kg</option>
                  <option value="500 kg–1 ton">500 kg–1 ton</option>
                  <option value="1–5 tons">1–5 tons</option>
                  <option value="5–20 tons">5–20 tons</option>
                  <option value="20+ tons (FCL)">20+ tons (Container FCL)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Packaging Specification
                </label>
                <select
                  value={formData.packagingPreference}
                  onChange={(e) => setFormData({ ...formData, packagingPreference: e.target.value })}
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white outline-none transition-colors"
                >
                  <option value="1kg Valve Bags">1 kg Retail Valve Bags</option>
                  <option value="250g / 500g Bags">250g / 500g Retail Bags</option>
                  <option value="5kg / 10kg B2B Bags">5 kg / 10 kg B2B Bags</option>
                  <option value="60kg Jute Bags (Green)">60 kg Jute Bags (Green Coffee)</option>
                  <option value="Custom OEM / Private Label">Custom OEM / Private Label Branding</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                  Destination Country / Port
                </label>
                <input
                  type="text"
                  value={formData.destinationCountry}
                  onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                  placeholder="e.g. Hamburg, Rotterdam, Dubai, Tokyo"
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] px-3.5 py-2.5 text-white placeholder:text-stone-600 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                Project Specifics or Custom Blend Requirements
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail roast curve preferences, custom ratio requirements, delivery terms (FOB/CIF), or target timeline..."
                className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] p-3 text-white placeholder:text-stone-600 outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-3 text-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] hover:text-white font-medium uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Transmitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Current Price
                  </>
                )}
              </button>
              <p className="mt-2 text-[10px] text-stone-500 tracking-wider">
                Direct export quote • Strict confidentiality • International commercial terms (FOB / CIF)
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
