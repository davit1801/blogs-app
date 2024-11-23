import UserInfoEditForm from '@/components/profilePage/UserInfoEditForm';
import { userAtom } from '@/store/auth';
import { getProfileInfo } from '@/supabase/profile';
import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

import React from 'react';

const ProfilePage: React.FC = () => {
  const user = useAtomValue(userAtom);
  const { data } = useQuery({
    queryKey: ['profile-info'],
    queryFn: () => {
      if (user?.user.id) {
        return getProfileInfo(user.user.id);
      }
      return null;
    },
  });

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <div className="">
        <div className="flex items-center justify-between px-4 sm:px-0">
          <h2 className="text-base/7 font-semibold">Profile Info</h2>
          <UserInfoEditForm />
        </div>
        <div className="mt-6">
          <dl className="">
            <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium">Email address</dt>
              <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                {user?.user.email}
              </dd>
            </div>
            <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium">Full name</dt>
              <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                {data && data[0].full_name_en}
              </dd>
            </div>
            <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium">სახელი გვარი</dt>
              <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                {data && data[0].full_name_ka}
              </dd>
            </div>

            <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium">Avatar Link</dt>
              <dd className="2 mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                {data && data[0].avatar_url}
              </dd>
            </div>
            <div className="border-b px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium">Phone Number</dt>
              <dd className="mt-1 text-sm/6 text-muted-foreground sm:mt-0">
                {data && data[0].phone_number}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
