import React, { lazy, Suspense } from 'react';
import LoadingPage from '@/components/loaders/LoadingPage';

const AuthLoginView = lazy(() => import('@/pages/login/views/login/index'));

const AuthLoginViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <AuthLoginView />
  </Suspense>
);

export default AuthLoginViewLoader;
