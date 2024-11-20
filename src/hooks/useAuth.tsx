import { useQuery } from '@tanstack/react-query';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const token = localStorage.getItem('access_token');
      const email = localStorage.getItem('user_email');
      return { isAuthenticated: !!token, email };
    },
  });
};
