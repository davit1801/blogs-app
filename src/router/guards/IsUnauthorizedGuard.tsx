// import Loading from '@/components/Loading';
import { userAtom } from '@/store/auth';
import i18next from 'i18next';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const IsUnauthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const location = useLocation();
  const lang = i18next.language;

  if (!user) {
    return <Navigate state={{ from: location }} to={`/${lang}/login`} />;
  }

  return children || <Outlet />;
};

export default IsUnauthorizedGuard;
