import React, { lazy, Suspense } from 'react';
import LoadingPage from '@/components/loaders/LoadingPage';

const HomePageView = lazy(() => import('@/pages/home/views/home/index'));

const HomePageViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <HomePageView />
  </Suspense>
);

export default HomePageViewLoader;
