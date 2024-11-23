import { supabase } from '@/supabase';

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error('Registration error:', error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error('An unexpected error occurred during registration:', err);
    throw err;
  }
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error('An unexpected error occurred during login:', err);
    throw err;
  }
};

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
      throw new Error(error.message);
    }
  } catch (err) {
    console.error('An unexpected error occurred during logout:', err);
    throw err;
  }
};
