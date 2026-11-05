import { redirect } from 'next/navigation';
import { PRODUCTS } from '@/data/products';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function CoffeeDetailRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/ru/coffee/${slug}`);
}
