import { useSetAtom } from 'jotai';
import { userAtom } from '@/store/auth';
import { getProfileInfo } from '@/supabase/profile';
import { userProfileAtom } from '@/store/profile';
import { getSession } from '@/supabase/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/supabase';
import { useEffect } from 'react';

const useAuth = () => {
  const setUser = useSetAtom(userAtom);
  const setProfile = useSetAtom(userProfileAtom);

  const {
    data: session,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['get-session'],
    queryFn: getSession,
  });

  if (isSuccess && session) {
    setUser(session);
  }

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session);

      const fetchProfile = async () => {
        if (session) {
          const profile = await getProfileInfo(session.user.id);
          setProfile(profile);
        }
      };

      fetchProfile();
    });

    return () => subscription.unsubscribe();
  }, [setUser, setProfile]);

  return { isLoading };
};

export default useAuth;
