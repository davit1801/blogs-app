import { userAtom } from '@/store/auth';
import i18next from 'i18next';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const lang = i18next.language;

  if (user) {
    return <Navigate to={`/${lang}`} />;
  }

  return children || <Outlet />;
};

export default AuthGuard;
