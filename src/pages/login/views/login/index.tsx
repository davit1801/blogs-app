import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/blog-logo.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import GoBackButton from '@/components/buttons/GoBackButton';
import ChangeLang from '@/components/buttons/ChangeLang';
import { ModeToggle } from '@/components/buttons/mode-toggle';
import LoginForm from '@/pages/login/components/LoginForm';
import Container from '@/components/layout/container/Container';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <Container>
      <div className="flex min-h-screen items-center justify-center px-6 py-8">
        <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight">
              {t('auth.login-title')}
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm />

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              {t('auth.dont-have')}{' '}
              <Link
                to={`/${lang}/register`}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                {t('auth.sign-up')}
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute right-12 top-2 mt-10 flex items-center justify-center gap-3">
          <GoBackButton />
          <ModeToggle />
          <ChangeLang />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
