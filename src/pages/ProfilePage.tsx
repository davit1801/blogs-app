import React from 'react';
import UserInfoEditForm from '@/components/pages/profilePage/UserInfoEditForm';
import { userAtom } from '@/store/auth';
import { userProfileAtom } from '@/store/profile';
import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
import UserInfoLabels from '@/components/pages/profilePage/UserInfoLabels';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const user = useAtomValue(userAtom);
  const profile = useAtomValue(userProfileAtom);

  return (
    <>
      {!profile ? (
        <p>Profil Not Found!</p>
      ) : (
        <div className="mx-auto flex max-w-lg items-center justify-center px-4 py-12">
          <div className="">
            <div className="flex items-center justify-between px-4 sm:px-0">
              <h2 className="text-base/7 font-semibold">
                {t('profile.profile-info')}
              </h2>
              <UserInfoEditForm profile={profile} />
            </div>
            <div className="mt-6">
              <UserInfoLabels user={user} profile={profile} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
