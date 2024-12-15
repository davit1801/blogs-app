import React from 'react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingPage from '@/components/loaders/LoadingPage';
import i18next from 'i18next';
import LangGuard from '@/router/guards/LangGuard';
import IsUnauthorizedGuard from '@/router/guards/IsUnauthorizedGuard';
import IsAuthorizedGuard from '@/router/guards/IsAuthorizedGuard';
import DefaultLayout from '@/layouts/default';
import RootLayout from '@/layouts/root';

const HomePage = lazy(() => import('@/pages/home/views/home'));
const AboutPage = lazy(() => import('@/pages/about/views/about'));
const LoginPage = lazy(() => import('@/pages/login/views/login'));
const RegisterPage = lazy(() => import('@/pages/register/views/register'));
const NotFoundPage = lazy(() => import('@/pages/not-found/views/index'));
const ProfilePage = lazy(() => import('@/pages/profile/views/profile'));
const AuthorPage = lazy(() => import('@/pages/author/views/author'));
const WriteBlogPage = lazy(() => import('@/pages/write-blog/views/write-blog'));

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path=":lang" element={<LangGuard />}>
          <Route element={<DefaultLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingPage />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <AboutPage />
                </Suspense>
              }
            />
            <Route
              path="author/:id"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <AuthorPage />
                </Suspense>
              }
            />

            <Route
              path="profile"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <IsUnauthorizedGuard>
                    <ProfilePage />
                  </IsUnauthorizedGuard>
                </Suspense>
              }
            />
            <Route
              path="write-blog"
              element={
                <Suspense fallback={<LoadingPage />}>
                  {/* <IsUnauthorizedGuard> */}
                  <WriteBlogPage />
                  {/* </IsUnauthorizedGuard> */}
                </Suspense>
              }
            />
          </Route>

          <Route
            path="login"
            element={
              <Suspense fallback={<LoadingPage />}>
                <IsAuthorizedGuard>
                  <LoginPage />
                </IsAuthorizedGuard>
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<LoadingPage />}>
                <IsAuthorizedGuard>
                  <RegisterPage />
                </IsAuthorizedGuard>
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/"
          element={<Navigate to={`/${i18next.language || 'ka'}`} replace />}
        />
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

export default RoutesComponent;
