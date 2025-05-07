import { Suspense } from 'react';
import RedirectHandler from './redirect-handler';

export default function RedirectPage() {
  return (
    <Suspense fallback={<p>Redirecting...</p>}>
      <RedirectHandler />
    </Suspense>
  );
}
