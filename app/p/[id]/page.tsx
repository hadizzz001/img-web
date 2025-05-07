import { redirect } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const res = await fetch('https://abbasbaba.com/api/products', { cache: 'no-store' });
  const data = await res.json();

  const product = data.find((item: any) => item._id === params.id);

 
  

  if (!product) return { title: 'Product not found' };

  return {
    title: product.title || 'Check this out!',
    openGraph: {
      title: product.title || 'Check this out!',
      description: stripHTML(product.description),
      images: [product.img[0]],
      type: 'website',
      url: `https://re.abbasbaba.com/p/${params.id}`,
    },
  };
}

function stripHTML(html: string) {
  return html.replace(/<[^>]+>/g, '').slice(0, 200);
}

export default async function ProductRedirect({ params }: { params: { id: string } }) {
  const res = await fetch('https://abbasbaba.com/api/products', { cache: 'no-store' });
  const data = await res.json();

  const product = data.find((item: any) => item._id === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const redirectTo = `https://abbasbaba.com/product?id=${params.id}&imgg=${encodeURIComponent(product.img[0])}`;

  redirect(redirectTo);
}
