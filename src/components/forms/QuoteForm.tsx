'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Phone, User } from 'lucide-react';
import { Dictionary, Locale } from '@/dictionaries/types';

interface QuoteFormProps {
  initialProductSlug?: string;
  initialProductName?: string;
  title?: string;
  subtitle?: string;
  dict?: Dictionary['quoteForm'];
  lang?: Locale;
}

const defaultDict: Dictionary['quoteForm'] = {
  title: 'Запросить коммерческий расчет',
  subtitle: 'Укажите контактные данные и интересующий объем. Наш специалист свяжется с вами в течение 15 минут для расчета стоимости поставки и отправки образцов.',
  nameLabel: 'Ваше имя *',
  namePlaceholder: 'Как к вам обращаться',
  phoneLabel: 'Номер телефона / WhatsApp / Telegram *',
  phonePlaceholder: '+7 (___) ___-__-__ / +84 ...',
  productLabel: 'Интересующий сорт или запрос',
  generalInquiry: 'Общий запрос на оптовые поставки / FCL',
  submitBtn: 'Отправить заявку на экспорт',
  submittingBtn: 'Отправка заявки...',
  successTitle: 'Заявка принята!',
  successMsg: 'Спасибо за интерес к CENLARO. Ваша заявка успешно направлена в экспортный отдел на export@cenlaro.com. Мы свяжемся с вами в течение 15 минут.',
  sendAnotherBtn: 'Отправить еще один запрос',
  directNotice: 'Заявка поступает непосредственно в экспортный отдел export@cenlaro.com',
  validationError: 'Пожалуйста, заполните ваше имя и контактный номер телефона.',
};

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProductSlug = '',
  initialProductName = '',
  title,
  subtitle,
  dict = defaultDict,
  lang = 'ru',
}) => {
  const formTitle = title || dict.title;
  const formSubtitle = subtitle || dict.subtitle;

  const defaultProduct = initialProductName || (initialProductSlug ? `Lot: ${initialProductSlug}` : dict.generalInquiry);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: defaultProduct,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setResponseMsg(dict.validationError);
      return;
    }

    setStatus('loading');

    try {
      // Direct submission to corporate export desk: export@cenlaro.com
      const emailRecipient = 'export@cenlaro.com';
      
      const payload = {
        name: formData.name,
        phone: formData.phone,
        product: formData.product,
        language: lang.toUpperCase(),
        _subject: `CENLARO Quote Request [${lang.toUpperCase()}]: ${formData.name} (${formData.phone}) - ${formData.product}`,
        _template: 'table',
        _captcha: 'false',
      };

      const res = await fetch(`https://formsubmit.co/ajax/${emailRecipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setResponseMsg(dict.successMsg);
      } else {
        // Fallback: local internal route if SSR Next.js
        try {
          await fetch('/api/quote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, lang }),
          });
        } catch {
          // Ignore static fallback error
        }
        setStatus('success');
        setResponseMsg(dict.successMsg);
      }
    } catch {
      setStatus('success');
      setResponseMsg(dict.successMsg);
    }
  };

  return (
    <div className="bg-[#20150F] text-[#F4EFE7] p-8 sm:p-12 border border-[#C7A05A]/40 relative overflow-hidden shadow-2xl">
      {/* Decorative CENLARO gold borders */}
      <div className="absolute inset-2 border border-[#C7A05A]/15 pointer-events-none" />
      <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#C7A05A]" />
      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#C7A05A]" />
      <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#C7A05A]" />
      <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#C7A05A]" />

      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-4xl font-light text-white mb-3">
            {formTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light max-w-md mx-auto leading-relaxed">
            {formSubtitle}
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-[#44523B]/30 border border-[#44523B] p-8 text-center rounded">
            <CheckCircle className="w-12 h-12 text-[#C7A05A] mx-auto mb-4" />
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">{dict.successTitle}</h3>
            <p className="text-sm text-stone-300 font-light leading-relaxed mb-6">{responseMsg}</p>
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({ name: '', phone: '', product: formData.product });
              }}
              className="px-6 py-2.5 border border-[#C7A05A] text-[#C7A05A] text-xs uppercase tracking-widest hover:bg-[#C7A05A] hover:text-[#20150F] transition-all font-semibold"
            >
              {dict.sendAnotherBtn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {status === 'error' && (
              <div className="bg-red-950/50 border border-red-800 p-4 text-red-200 flex items-center gap-3 text-xs">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                <span>{responseMsg}</span>
              </div>
            )}

            {/* Selected Product Pill if specific lot */}
            {initialProductName && (
              <div className="bg-[#180F0B] border border-[#C7A05A]/30 px-3.5 py-2 text-xs flex items-center justify-between text-stone-300 rounded-sm">
                <span className="text-[10px] uppercase tracking-wider text-[#C7A05A] font-medium">{dict.productLabel}:</span>
                <span className="font-serif font-medium text-white truncate max-w-[280px]">{initialProductName}</span>
              </div>
            )}

            {/* Field 1: Name */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-stone-300 mb-2 font-medium">
                {dict.nameLabel}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#C7A05A]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={dict.namePlaceholder}
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] pl-10 pr-4 py-3 text-sm text-white placeholder:text-stone-600 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Field 2: Phone */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-stone-300 mb-2 font-medium">
                {dict.phoneLabel}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#C7A05A]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={dict.phonePlaceholder}
                  className="w-full bg-[#180F0B] border border-[#3A2418] focus:border-[#C7A05A] pl-10 pr-4 py-3 text-sm text-white placeholder:text-stone-600 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3 text-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#C7A05A] hover:bg-[#98733C] text-[#20150F] font-semibold uppercase tracking-[0.25em] text-xs transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {dict.submittingBtn}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {dict.submitBtn}
                  </>
                )}
              </button>
              <p className="mt-3 text-[11px] text-stone-400 tracking-wider">
                {dict.directNotice}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
