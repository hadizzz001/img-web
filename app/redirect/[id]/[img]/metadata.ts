// app/redirect/[id]/[img]/metadata.ts
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string; img: string };
}): Promise<Metadata> {
  const decodedImage = params.img.replace(/___/g, '/');
  const fullUrl = `https://abbasbaba.com/product?id=${params.id}&imgg=${encodeURIComponent(decodedImage)}`;

  return {
    title: 'Check this out!',
    openGraph: {
      title: 'Check this out!',
      images: [decodedImage],
      type: 'website',
      url: fullUrl,
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
