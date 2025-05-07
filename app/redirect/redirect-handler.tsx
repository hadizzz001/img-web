'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RedirectHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = encodeURIComponent(searchParams.get('id') || '');
    const imgg = encodeURIComponent(searchParams.get('imgg') || '');
    const redirectUrl = `https://abbasbaba.com/product?id=${id}&imgg=${imgg}`;
    window.location.href = redirectUrl;
  }, [searchParams]);

  const id = encodeURIComponent(searchParams.get('id') || '');
  const imgg = searchParams.get('imgg') || '';
  const redirectUrl = `https://abbasbaba.com/product?id=${id}&imgg=${encodeURIComponent(imgg)}`;

  return (
    <main>
      <p>
        Redirecting to <a href={redirectUrl}>{redirectUrl}</a>...
      </p>
    </main>
  );
}
