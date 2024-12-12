import React from 'react';
import { Button } from '@/components/ui/button';
import i18next, { t } from 'i18next';
import { login } from '@/supabase/auth';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import ControlledInput from '@/components/inputs/ControlledInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '@/pages/login/utils/schema';

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const lang = i18next.language;
  const navigate = useNavigate();
  const location = useLocation();
  const toNavigate = location?.state?.from?.pathname || `/${lang}`;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isError, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: () => {
      navigate(toNavigate);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleFormSubmit: SubmitHandler<LoginFormValues> = (inputFields) => {
    mutate(inputFields);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <ControlledInput
        name="email"
        label="auth.email"
        control={control}
        autoComplete="email"
        error={errors.email}
      />

      <ControlledInput
        name="password"
        type="password"
        label="auth.password"
        control={control}
        autoComplete="password"
        error={errors.password}
      />

      <div className="text-end text-sm">
        <a className="text- font-semibold text-indigo-600 hover:text-indigo-500">
          {t('auth.forgot')}
        </a>
      </div>

      {isError && (
        <p className="font-semibold text-red-500">{t('auth.login-error')}</p>
      )}

      <Button type="submit" className="w-full" disabled={isPending}>
        {t('auth.sign-in')}
      </Button>
    </form>
  );
};

export default LoginForm;
