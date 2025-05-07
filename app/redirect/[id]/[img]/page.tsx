// app/redirect/[id]/[img]/page.tsx
import { Suspense } from 'react';
import RedirectHandler from './redirect-handler';

export default function Page({
  params,
}: {
  params: { id: string; img: string };
}) {
  return (
    <Suspense fallback={<p>Redirecting...</p>}>
      <RedirectHandler id={params.id} img={params.img} />
    </Suspense>
  );
}
