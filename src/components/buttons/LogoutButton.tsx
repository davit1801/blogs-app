import { Button } from '@/components/ui/button';
import { logout } from '@/supabase/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const lang = pathParts[1] || 'ka';
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_email');

      navigate(`/${lang}`);
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleLogout = async () => {
    mutate();
  };
  return <Button onClick={handleLogout}>გამოსვლა</Button>;
};

export default LogoutButton;
