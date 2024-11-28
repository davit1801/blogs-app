import { supabase } from '@/supabase';
import { userProfileTypes } from '@/supabase/profile/index.types';

export const fillProfileInfo = async (payload: userProfileTypes) => {
  try {
    const { data, error } = await supabase.from('profiles').upsert(payload);

    if (error) {
      console.error('Error updating profile:', error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error(
      'An unexpected error occurred while updating the profile:',
      err,
    );
    throw err;
  }
};

export const getProfileInfo = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching profile information:', error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error(
      'An unexpected error occurred while fetching profile information:',
      err,
    );
    throw err;
  }
};
