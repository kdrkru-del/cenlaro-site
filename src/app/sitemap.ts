import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cenlaro.com';
  const locales = ['ru', 'en', 'vi'] as const;

  const routes: MetadataRoute.Sitemap = [];

  // Root entry
  routes.push({
    url: `${baseUrl}/ru`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // Localized static pages
  for (const lang of locales) {
    routes.push(
      {
        url: `${baseUrl}/${lang}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: lang === 'ru' ? 1.0 : 0.9,
      },
      {
        url: `${baseUrl}/${lang}/coffee`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${lang}/green-coffee`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${lang}/wholesale`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${lang}/private-label`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${lang}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }
    );

    // Localized product detail pages
    for (const product of PRODUCTS) {
      const isGreen = product.category === 'Green Coffee';
      const subpath = isGreen ? `/green-coffee/${product.slug}` : `/coffee/${product.slug}`;
      routes.push({
        url: `${baseUrl}/${lang}${subpath}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: isGreen ? 0.85 : 0.8,
      });
    }
  }

  return routes;
}
