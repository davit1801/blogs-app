import React from 'react';
import Layout from '@/components/layout/Layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from '@/components/Loading';
import i18next from 'i18next';
import LangGuard from '@/routes/LangGuard';
import AuthorPage from '@/pages/AuthorPage';
import AuthGuard from '@/routes/AuthGuard';
import ProfileGuard from '@/routes/ProfileGuard';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path=":lang" element={<LangGuard />}>
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
          <Route
            path="author/:id"
            element={
              <Suspense fallback={<Loading />}>
                <AuthorPage />
              </Suspense>
            }
          />

          <Route
            path="profile"
            element={
              <Suspense fallback={<Loading />}>
                <ProfileGuard>
                  <ProfilePage />
                </ProfileGuard>
              </Suspense>
            }
          />
        </Route>

        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <AuthGuard>
                <LoginPage />
              </AuthGuard>
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense fallback={<Loading />}>
              <AuthGuard>
                <RegisterPage />
              </AuthGuard>
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

      <Route
        path="/"
        element={<Navigate to={`/${i18next.language || 'ka'}`} replace />}
      />
    </Routes>
  );
};

export default RoutesComponent;
