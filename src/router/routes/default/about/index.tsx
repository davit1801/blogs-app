import React, { lazy, Suspense } from 'react';
import LoadingPage from '@/components/loaders/LoadingPage';

const AboutPageView = lazy(() => import('@/pages/about/views/about/index'));

const AboutPageViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <AboutPageView />
  </Suspense>
);

export default AboutPageViewLoader;
