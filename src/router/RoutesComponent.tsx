import React from 'react';
import Layout from '@/components/layout/Layout';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from '@/components/Loading';
import i18next from 'i18next';
import LangGuard from '@/router/LangGuard';
import AuthGuard from '@/router/AuthGuard';
import IsUnauthorizedGuard from '@/router/guards/IsUnauthorizedGuard';

const HomePage = lazy(() => import('@/pages/home/views/home'));
const AboutPage = lazy(() => import('@/pages/about/views/about'));
const LoginPage = lazy(() => import('@/pages/login/views/login'));
const RegisterPage = lazy(() => import('@/pages/register/views/register'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const ProfilePage = lazy(() => import('@/pages/profile/views/profile'));
const AuthorPage = lazy(() => import('@/pages/author/views/author'));
const WriteBlogPage = lazy(() => import('@/pages/write-blog/views/write-blog'));

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
                <IsUnauthorizedGuard>
                  <ProfilePage />
                </IsUnauthorizedGuard>
              </Suspense>
            }
          />
          <Route
            path="write-blog"
            element={
              <Suspense fallback={<Loading />}>
                <IsUnauthorizedGuard>
                  <WriteBlogPage />
                </IsUnauthorizedGuard>
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
