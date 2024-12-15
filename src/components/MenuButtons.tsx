import ChangeLang from '@/components/buttons/ChangeLang';
import LogoutButton from '@/components/buttons/LogoutButton';
import { ModeToggle } from '@/components/buttons/mode-toggle';
import ProfileAvatar from '@/components/buttons/ProfileAvatar';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/store/auth';
import { useTranslation } from 'react-i18next';

const MenuButtons: React.FC = () => {
  const user = useAtomValue(userAtom);
  const { t } = useTranslation();

  return (
    <menu className="flex items-center gap-3">
      <ModeToggle />
      <ChangeLang />
      {user ? (
        <div className="flex items-center gap-4">
          <ProfileAvatar />
          <LogoutButton />
        </div>
      ) : (
        <Link to={'login'}>
          <Button>{t('header.login')}</Button>
        </Link>
      )}
    </menu>
  );
};

export default MenuButtons;
