import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import i18next, { t } from 'i18next';
import { login } from '@/supabase/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

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

  const handleFormSubmit: SubmitHandler<LoginFormValues> = (inputFields) => {
    mutate(inputFields);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="block text-sm/6 font-medium">
          {t('auth.email')}
        </Label>

        <Controller
          name="email"
          control={control}
          rules={{
            required: t('auth.email-required'),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t('auth.invalid-email'),
            },
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                id="email"
                name="email"
                value={value}
                onChange={onChange}
                autoComplete="email"
              />
            );
          }}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="block text-sm/6 font-medium">
            {t('auth.password')}
          </Label>
          <div className="text-sm">
            <a className="text- font-semibold text-indigo-600 hover:text-indigo-500">
              {t('auth.forgot')}
            </a>
          </div>
        </div>

        <Controller
          name="password"
          control={control}
          rules={{
            required: t('auth.password-required'),
            minLength: {
              value: 8,
              message: t('auth.password-minlength', { min: 8 }),
            },
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                id="password"
                name="password"
                type="password"
                value={value}
                onChange={onChange}
                autoComplete="current-password"
              />
            );
          }}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {isError && (
        <p className="font-semibold text-red-500">{t('auth.login-error')}</p>
      )}

      <Button type="submit" className="w-full">
        {t('auth.sign-in')}
      </Button>
    </form>
  );
};

export default LoginForm;
