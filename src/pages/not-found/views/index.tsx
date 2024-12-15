import GoBackButton from '@/components/buttons/GoBackButton';
import Container from '@/components/layout/container/Container';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container>
        <div className="px-6 py-24 text-center sm:py-32 lg:px-8">
          <p className="font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            {t('notFound.not')}
          </h1>
          <p className="mt-6 text-lg font-medium sm:text-xl/8">
            {t('notFound.sorry')}
          </p>
          <div className="mt-10">
            <GoBackButton />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFoundView;
