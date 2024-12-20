import React, { lazy, Suspense } from 'react';
import LoadingPage from '@/components/loaders/LoadingPage';
import IsUnauthorizedGuard from '@/router/guards/IsUnauthorizedGuard';

const AuthorPageView = lazy(() => import('@/pages/author/views/author/index'));

const AuthorPageViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <IsUnauthorizedGuard>
      <AuthorPageView />
    </IsUnauthorizedGuard>
  </Suspense>
);

export default AuthorPageViewLoader;
