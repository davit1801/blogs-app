import { atom } from 'jotai';

export type userProfileTypes =
  | {
      avatar_url: string | null;
      full_name_en: string | null;
      full_name_ka: string | null;
      id: string;
      phone_number: string | null;
    }
  | undefined;

export const userProfileAtom = atom<userProfileTypes | null>(null);
