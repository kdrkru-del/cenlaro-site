import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS === 'true' ? '/cenlaro-site' : '');

export const metadata: Metadata = {
  metadataBase: new URL('https://cenlaro.com'),
  title: {
    default: 'CENLARO | International Coffee Brand & Vietnamese Coffee Exporter',
    template: '%s | CENLARO',
  },
  description:
    'CENLARO is an international coffee brand focused on selected origins, reliable sourcing and flexible coffee solutions for retail and business partners.',
  openGraph: {
    siteName: 'CENLARO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CENLARO | International Coffee Brand',
    description: 'Selected origins. Coffee with character.',
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
    shortcut: `${basePath}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#20150F]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
