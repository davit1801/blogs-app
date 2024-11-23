import { Button } from '@/components/ui/button';
import { logout } from '@/supabase/auth';
import { useMutation } from '@tanstack/react-query';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const { t } = useTranslation();
  const lang = i18next.language;
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
    onSuccess: () => {
      navigate(`/${lang}`);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleLogout = async () => {
    mutate();
  };

  return <Button onClick={handleLogout}>{t('header.logout')}</Button>;
};

export default LogoutButton;
