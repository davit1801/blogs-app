import React, { lazy, Suspense } from 'react';
import LoadingPage from '@/components/loaders/LoadingPage';

const AuthLoginView = lazy(
  () => import('@/pages/register/views/register/index'),
);

const AuthRegisterViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <AuthLoginView />
  </Suspense>
);

export default AuthRegisterViewLoader;
