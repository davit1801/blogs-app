import { Button } from '@/components/ui/button';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const GoBackButton: React.FC = () => {
  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <Link to={`/${lang}`}>
      <Button>{t('auth.go-back')}</Button>
    </Link>
  );
};

export default GoBackButton;
