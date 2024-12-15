import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import i18next, { t } from 'i18next';
import { register } from '@/supabase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import ControlledInput from '@/components/inputs/ControlledInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema } from '@/pages/register/utils/schema';

type RegisterFormValues = {
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const lang = i18next.language;
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isError, isPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: register,
    onSuccess: () => {
      alert(t('auth.succes-register'));
      navigate(`/${lang}/login`);
    },
  });

  const handleFormSubmit: SubmitHandler<RegisterFormValues> = (inputFields) => {
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

      {isError && (
        <p className="font-semibold text-red-500">{t('auth.register-error')}</p>
      )}

      <Button className="w-full" type="submit" disabled={isPending}>
        {t('auth.sign-up')}
      </Button>
    </form>
  );
};

export default RegisterForm;
