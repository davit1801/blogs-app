import React, { lazy, Suspense } from 'react';
import LoadingPage from '@/components/loaders/LoadingPage';
import IsUnauthorizedGuard from '@/router/guards/IsUnauthorizedGuard';

const ProfilePageView = lazy(
  () => import('@/pages/profile/views/profile/index'),
);

const ProfilePageViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <IsUnauthorizedGuard>
      <ProfilePageView />
    </IsUnauthorizedGuard>
  </Suspense>
);

export default ProfilePageViewLoader;
