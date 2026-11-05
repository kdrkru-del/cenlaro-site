import { redirect } from 'next/navigation';
import { PRODUCTS } from '@/data/products';

export async function generateStaticParams() {
  return PRODUCTS.filter((p) => p.category === 'Green Coffee').map((p) => ({ slug: p.slug }));
}

export default async function GreenDetailRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/ru/green-coffee/${slug}`);
}
