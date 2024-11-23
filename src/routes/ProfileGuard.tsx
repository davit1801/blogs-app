import Loading from '@/components/Loading';
import { userAtom } from '@/store/auth';
import i18next from 'i18next';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);
  const lang = i18next.language;

  const isLoading = user === null;

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={`/${lang}`} />;
  }

  return children || <Outlet />;
};

export default ProfileGuard;
