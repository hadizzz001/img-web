import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic'; // Important: ensure it renders fresh each time (for bots)

async function getProductById(id: string) {
  const res = await fetch(`https://abbasbaba.com/api/products/${id}`, {
    cache: 'no-store', // Make sure it doesn't cache if you're updating often
  });

  const data = await res.json();
  return Array.isArray(data) ? data[0] : data;
}

export default async function RedirectPage({ searchParams }: { searchParams: { id?: string } }) {
  const { id } = searchParams;

  if (!id) {
    return (
      <html>
        <head>
          <title>Missing ID</title>
        </head>
        <body>
          <p>Error: Missing product ID in URL.</p>
        </body>
      </html>
    );
  }

  const product = await getProductById(id);

  if (!product) {
    return (
      <html>
        <head>
          <title>Product Not Found</title>
        </head>
        <body>
          <p>Error: Product not found.</p>
        </body>
      </html>
    );
  }

  const firstImage = product.img?.[0] || '';
  const redirectUrl = `https://abbasbaba.com/product?id=${id}&&imgg=${encodeURIComponent(product.img[0])}`;

  // Inject OG meta tags for bots
  return (
    <html>
      <head>
        <title>{product.title || 'Check this out!'}</title>
        <meta property="og:title" content={product.title || 'Check this out!'} />
        <meta property="og:image" content={product.img[0]} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://re.abbasbaba.com/redirect?id=${id}`} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="refresh" content={`0;url=${redirectUrl}`} />
      </head>
      <body>
        <p>Redirecting to <a href={redirectUrl}>{redirectUrl}</a>...</p>
      </body>
    </html>
  );
}
