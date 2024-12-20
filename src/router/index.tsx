import React from 'react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingPage from '@/components/loaders/LoadingPage';
import i18next from 'i18next';
import LangGuard from '@/router/guards/LangGuard';
import RootLayout from '@/layouts/root';
import { AUTH_ROUTES } from '@/router/routes/auth';
import { DEFAULT_ROUTES } from '@/router/routes/default';

const NotFoundPage = lazy(() => import('@/pages/not-found/views/index'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<Navigate to={`/${i18next.language || 'ka'}`} replace />}
        />
        <Route path=":lang" element={<LangGuard />}>
          {DEFAULT_ROUTES}
          {AUTH_ROUTES}
        </Route>
      </Route>

      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingPage />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
