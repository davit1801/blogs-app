import React, { lazy, Suspense } from 'react';
import LoadingPage from '@/components/loaders/LoadingPage';
import IsUnauthorizedGuard from '@/router/guards/IsUnauthorizedGuard';

const WritePageView = lazy(
  () => import('@/pages/write-blog/views/write-blog/index'),
);

const WritePageViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <IsUnauthorizedGuard>
      <WritePageView />
    </IsUnauthorizedGuard>
  </Suspense>
);

export default WritePageViewLoader;
