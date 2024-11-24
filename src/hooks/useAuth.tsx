import { useEffect } from 'react';
import { supabase } from '@/supabase';
import { useSetAtom } from 'jotai';
import { userAtom } from '@/store/auth';
import { getProfileInfo } from '@/supabase/profile';
import { userProfileAtom } from '@/store/profile';

const useAuth = () => {
  const setUser = useSetAtom(userAtom);
  const setProfile = useSetAtom(userProfileAtom);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session);

      if (session) {
        const profile = await getProfileInfo(session.user.id);
        setProfile(profile);
      }
    };

    getSession();

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
};

export default useAuth;
