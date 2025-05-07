// app/redirect/metadata.ts
import { Metadata } from 'next';

export async function generateMetadata({ searchParams }: { searchParams: { id?: string; imgg?: string } }): Promise<Metadata> {
  const id = encodeURIComponent(searchParams.id || '');
  const imgg = searchParams.imgg || '';
  const fullUrl = `https://abbasbaba.com/product?id=${id}&imgg=${encodeURIComponent(imgg)}`;

  return {
    title: 'Check this out!',
    openGraph: {
      title: 'Check this out!',
      images: imgg ? [imgg] : [],
      type: 'website',
      url: fullUrl,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
