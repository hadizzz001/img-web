'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function MetaAndRedirect() {
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
    return <p>Missing parameters.</p>;
  }

  return (
    <>
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
    </>
  );
}

export default function RedirectPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MetaAndRedirect />
    </Suspense>
  );
}
