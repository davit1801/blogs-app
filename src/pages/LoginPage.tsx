import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@/assets/blog-logo.png';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/supabase/auth';
import i18next from 'i18next';
import GoBackButton from '@/components/buttons/GoBackButton';

const LoginPage: React.FC = () => {
  const [formInputData, setFormInputData] = useState({
    email: '',
    password: '',
  });

  const { t } = useTranslation();
  const lang = i18next.language;
  const navigate = useNavigate();

  const { mutate, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(`/${lang}`);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleInputChange = (inputIdentifier: string, newValue: string) => {
    setFormInputData((prevFormInputData) => ({
      ...prevFormInputData,
      [inputIdentifier]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formInputData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-8">
      <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight">
            {t('auth.login-title')}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">
                {t('auth.email')}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formInputData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  autoComplete="email"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium"
                >
                  {t('auth.password')}
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                    {t('auth.forgot')}
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                  required
                  autoComplete="current-password"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </div>
            </div>

            {isError && (
              <p className="font-semibold text-red-500">
                {t('auth.login-error')}
              </p>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t('auth.sign-in')}
              </button>
            </div>
          </form>
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
      <div className="absolute right-12 top-2 mt-10 flex items-center justify-center gap-x-6">
        <GoBackButton />
      </div>
    </div>
  );
};

export default LoginPage;
