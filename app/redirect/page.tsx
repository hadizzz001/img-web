'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const imgg = searchParams.get('imgg');

  const redirectUrl = `https://abbasbaba.com/product?id=${id}&imgg=${encodeURIComponent(imgg || '')}`;

  useEffect(() => {
    if (id && imgg) {
      window.location.href = redirectUrl;
    }
  }, [id, imgg]);

  if (!id || !imgg) {
    return <p>Missing required parameters.</p>;
  }

  return (
    <html>
      <head>
        <title>Check this out!</title>
        <meta property="og:title" content="Check this out!" />
        <meta property="og:image" content={imgg} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://re.abbasbaba.com/redirect?id=${id}&imgg=${encodeURIComponent(imgg)}`} />
      </head>
      <body>
        <p>Redirecting to <a href={redirectUrl}>{redirectUrl}</a>...</p>
      </body>
    </html>
  );
}
