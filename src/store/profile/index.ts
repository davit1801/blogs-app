import { userProfileTypes } from '@/supabase/profile/index.types';
import { atom } from 'jotai';

export const userProfileAtom = atom<userProfileTypes | null>(null);
