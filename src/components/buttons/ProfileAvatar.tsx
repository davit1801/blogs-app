import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { userAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileAvatar: React.FC = () => {
  const user = useAtomValue(userAtom);
  const avatarFallBack = user?.user.email?.at(0)?.toUpperCase();

  return (
    <Link to={'profile'}>
      <Avatar>
        <AvatarFallback>{avatarFallBack}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default ProfileAvatar;
