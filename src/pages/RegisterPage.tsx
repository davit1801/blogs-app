import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/blog-logo.png';
import { useTranslation } from 'react-i18next';

import i18next from 'i18next';
import GoBackButton from '@/components/buttons/GoBackButton';
import RegisterForm from '@/components/pages/registerPage/RegisterForm';
import ChangeLang from '@/components/buttons/ChangeLang';
import { ModeToggle } from '@/components/buttons/mode-toggle';

const RegisterPage: React.FC = () => {
  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center py-8">
      <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight">
            {t('auth.register-title')}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm />
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {t('auth.already-have')}{' '}
            <Link
              to={`/${lang}/login`}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {t('auth.sign-in')}
            </Link>
          </p>
        </div>

        <div className="absolute right-12 top-2 mt-10 flex items-center justify-center gap-3">
          <GoBackButton />
          <ModeToggle />
          <ChangeLang />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
