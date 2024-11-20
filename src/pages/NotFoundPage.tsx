import Container from '@/components/container/Container';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const lang = pathParts[1] || 'ka';

  return (
    <Container>
      <>
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={`/${lang}`}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    </Container>
  );
};

export default NotFoundPage;
