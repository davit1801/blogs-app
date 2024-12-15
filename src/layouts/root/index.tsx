import LoadingPage from '@/components/loaders/LoadingPage';
import useAuth from '@/hooks/useAuth';
import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  const { isLoading } = useAuth();

  return <>{isLoading ? <LoadingPage /> : <Outlet />}</>;
};

export default RootLayout;
