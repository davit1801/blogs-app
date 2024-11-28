import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import i18next, { t } from 'i18next';
import { register } from '@/supabase/auth';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type RegisterFormValues = {
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const lang = i18next.language;
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: register,
    onSuccess: () => {
      alert('You have successfully registered, you can log in');
      navigate(`/${lang}/login`);
    },
  });

  const handleFormSubmit: SubmitHandler<RegisterFormValues> = (inputFields) => {
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
            required: 'auth.email-required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'auth.invalid-email',
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
          <p className="text-sm text-red-500">{t(`${errors.email.message}`)}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="block text-sm/6 font-medium">
          {t('auth.password')}
        </Label>

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'auth.password-required',
            minLength: {
              value: 8,
              message: 'auth.password-minlength',
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
              />
            );
          }}
        />
        {errors.password && (
          <p className="text-sm text-red-500">
            {t(`${errors.password.message}`)}
          </p>
        )}
      </div>

      <Button className="w-full" type="submit">
        {t('auth.sign-up')}
      </Button>
    </form>
  );
};

export default RegisterForm;
