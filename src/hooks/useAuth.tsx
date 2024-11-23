import { useEffect } from 'react';
import { supabase } from '@/supabase';
import { useSetAtom } from 'jotai';
import { userAtom } from '@/store/auth';

const useAuth = () => {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
};

export default useAuth;
