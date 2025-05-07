import { redirect } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Fetch product data using ID
  const product = await fetch(`https://abbasbaba.com/api/products/${params.id}`).then(res => res.json());

  return {
    title: 'Check this out!',
    openGraph: {
      title: product.title || 'Check this out!',
      images: [product.image],
      type: 'website',
      url: `https://re.abbasbaba.com/p/${params.id}`,
    },
  };
}

export default async function ProductRedirect({ params }: { params: { id: string } }) {
  const product = await fetch(`https://abbasbaba.com/api/products/${params.id}`).then(res => res.json());
  const redirectTo = `https://abbasbaba.com/product?id=${params.id}&imgg=${encodeURIComponent(product.image)}`;

  redirect(redirectTo); // Redirect users immediately (but bots still read OG tags)
}
