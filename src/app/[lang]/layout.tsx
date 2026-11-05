import React from 'react';
import { getDictionary } from '@/dictionaries/getDictionary';
import { Locale } from '@/dictionaries/types';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';

export function generateStaticParams() {
  return [
    { lang: 'ru' },
    { lang: 'en' },
    { lang: 'vi' },
  ];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Locale = (lang === 'en' || lang === 'vi' || lang === 'ru') ? (lang as Locale) : 'ru';
  const dict = getDictionary(validLang);

  return (
    <>
      <Header lang={validLang} dict={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer lang={validLang} dict={dict.footer} />
      <MobileStickyCta lang={validLang} dict={dict.nav} />
    </>
  );
}
