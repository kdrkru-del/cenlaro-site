# CENLARO

Premium Coffee Catalogue & International Export Portal.

## Tech stack:
— Next.js 15 (App Router)
— TypeScript
— Tailwind CSS
— Framer Motion / Lucide Icons

## Key Architecture & Features
- **Design System:** Editorial Luxury (Dark Espresso `#20150F`, Coffee Brown `#3A2418`, Warm Brown `#65402B`, Cream `#F4EFE7`, Warm Ivory `#FBF8F2`, Gold `#C7A05A`, Dark Gold `#98733C`, Green `#44523B`).
- **Product Portfolio:**
  - Green Coffee: Vietnam Green Robusta (Screen 16, Screen 18), Commercial & Premium Cau Dat Arabica.
  - Roasted Whole Bean: 100% Arabica, 100% Robusta.
  - Signature Blends: Complete series (90/10, 80/20, 70/30, 60/40, 50/50, 30/70, 20/80).
  - Ground Coffee: Fine, Medium & Coarse calibrated for Espresso, Moka Pot, Phin, Filter, French Press.
- **B2B Interaction:** Strictly quotation and export focused (`REQUEST A QUOTE`, `REQUEST CURRENT PRICE`, `GET PRICE`). No consumer eCommerce cart.
- **SEO & Performance:** Server Components, dynamic `sitemap.xml`, `robots.txt`, Schema.org (Organization, ItemList, Product), OpenGraph, Twitter Cards.
- **Commercial API:** `/api/quote` with modular adapter architecture for CRM, Telegram, and SMTP notifications.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the catalogue.

## Production Build

```bash
npm run build
```

## Production Start

```bash
npm run start
```
