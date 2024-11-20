import { supabase } from '@/supabase';

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error('Registration error:', error.message);
    throw new Error(error.message);
  }
  return data;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error('Login error:', error.message);
    throw new Error(error.message);
  }

  if (data.session) {
    localStorage.setItem('access_token', data.session.access_token);
  }

  return data;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
};
