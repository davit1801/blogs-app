import React from 'react';
import { useParams, Navigate, Outlet } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '@/i18n';

const LangGuard: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();

  if (!SUPPORTED_LANGUAGES.includes(lang || '')) {
    return <Navigate to={'/ka'} replace />;
  }

  return <Outlet />;
};

export default LangGuard;
