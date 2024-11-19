import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loading from '@/components/Loading';
import i18next from 'i18next';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const defaultLang = 'ka';

const RoutesComponent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const lang = pathParts[1] || 'ka';
    if (i18next.language !== lang) {
      i18next.changeLanguage(lang);
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path=":lang">
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<Loading />}>
              <RegisterPage />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        }
      />
      <Route path="/" element={<Navigate to={`/${defaultLang}`} />} />
    </Routes>
  );
};

export default RoutesComponent;
