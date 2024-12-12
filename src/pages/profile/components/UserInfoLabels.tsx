import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Session } from '@supabase/supabase-js';
import { userProfileTypes } from '@/supabase/profile/index.types';

type componentPropsType = {
  user: Session | null;
  profile: userProfileTypes;
};

const UserInfoLabels: React.FC<componentPropsType> = ({ user, profile }) => {
  const { t } = useTranslation();
  return (
    <dl className="">
      <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium">{t('profile.email')}</dt>
        <dd className="mt-1 break-words text-sm/6 text-muted-foreground sm:mt-0">
          {user?.user.email}
        </dd>
      </div>
      <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium">{t('profile.full_name_ka')}</dt>
        <dd className="mt-1 break-words text-sm/6 text-muted-foreground sm:mt-0">
          {profile?.full_name_ka}
        </dd>
      </div>
      <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium">{t('profile.full_name_en')}</dt>
        <dd className="mt-1 break-words text-sm/6 text-muted-foreground sm:mt-0">
          {profile?.full_name_en}
        </dd>
      </div>
      <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium">{t('profile.avatar-url')}</dt>
        <dd className="2 mt-1 break-words text-sm/6 text-muted-foreground sm:mt-0">
          {profile?.avatar_url}
        </dd>
      </div>
      <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium">{t('profile.phone-number')}</dt>
        <dd className="mt-1 break-words text-sm/6 text-muted-foreground sm:mt-0">
          {profile?.phone_number}
        </dd>
      </div>
    </dl>
  );
};

export default UserInfoLabels;
