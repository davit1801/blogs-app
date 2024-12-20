import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { userAtom } from '@/store/auth';
import { userProfileAtom } from '@/store/profile';
import { useAtomValue } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';
import { AvatarImage } from '@radix-ui/react-avatar';
import { DEFAULT_PATHS } from '@/router/routes/default/index.enum';

const ProfileAvatar: React.FC = () => {
  const user = useAtomValue(userAtom);
  const profile = useAtomValue(userProfileAtom);
  const avatarFallBack = user?.user.email?.at(0)?.toUpperCase();

  return (
    <Link to={DEFAULT_PATHS.PROFILE}>
      <Avatar>
        <AvatarImage src={profile?.avatar_url || ''} alt="user avatar" />
        <AvatarFallback>{avatarFallBack}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default ProfileAvatar;
