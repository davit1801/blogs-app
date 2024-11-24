import React from 'react';
import UserInfoEditForm from '@/components/profilePage/UserInfoEditForm';
import { userAtom } from '@/store/auth';
import { userProfileAtom } from '@/store/profile';
import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const user = useAtomValue(userAtom);
  const data = useAtomValue(userProfileAtom);

  return (
    <>
      {!data ? (
        <p>Profil Not Found!</p>
      ) : (
        <div className="mx-auto max-w-lg px-4 py-8">
          <div className="">
            <div className="flex items-center justify-between px-4 sm:px-0">
              <h2 className="text-base/7 font-semibold">
                {t('profile.profile-info')}
              </h2>
              <UserInfoEditForm profile={data} />
            </div>
            <div className="mt-6">
              <dl className="">
                <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium">
                    {t('profile.email')}
                  </dt>
                  <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                    {user?.user.email}
                  </dd>
                </div>
                <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium">Full name</dt>
                  <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                    {data?.full_name_en}
                  </dd>
                </div>
                <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium">სახელი გვარი</dt>
                  <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                    {data?.full_name_ka}
                  </dd>
                </div>

                <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium">
                    {t('profile.avatar-url')}
                  </dt>
                  <dd className="2 mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                    {data?.avatar_url}
                  </dd>
                </div>
                <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium">
                    {t('profile.phone-number')}
                  </dt>
                  <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                    {data?.phone_number}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
