'use client';

import { useEffect } from 'react';

export default function RedirectHandler({
  id,
  img,
}: {
  id: string;
  img: string;
}) {
  // Decode image URL (we replaced / with ___ to make it route-safe)
  const imageDecoded = img.replace(/___/g, '/');
  const redirectUrl = `https://abbasbaba.com/product?id=${encodeURIComponent(id)}&imgg=${encodeURIComponent(imageDecoded)}`;

  useEffect(() => {
    window.location.href = redirectUrl;
  }, [redirectUrl]);

  return (
    <main>
      <p>
        Redirecting to <a href={redirectUrl}>{redirectUrl}</a>...
      </p>
    </main>
  );
}
