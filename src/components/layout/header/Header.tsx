import Container from '@/components/layout/container/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/blog-logo.png';
import { ModeToggle } from '@/components/buttons/mode-toggle';
import ChangeLang from '@/components/buttons/ChangeLang';
import HeaderNavigation from '@/components/layout/header/navigation/HeaderNavigation';
import LogoutButton from '@/components/buttons/LogoutButton';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/store/auth';
import ProfileAvatar from '@/components/buttons/ProfileAvatar';
// import { userProfileAtom } from '@/store/profile';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const lang = i18next.language;
  const user = useAtomValue(userAtom);
  // const profile = useAtomValue(userProfileAtom)

  // console.log(profile)

  return (
    <header className="border-b border-solid">
      <Container>
        <div className="flex items-center justify-between p-4">
          <Link to={`/${lang}`}>
            <img src={logo} alt="blog logo" className="w-10" />
          </Link>

          <HeaderNavigation lang={lang} />

          <div className="flex items-center gap-3">
            <ModeToggle />
            <ChangeLang />
            {user ? (
              <div className="flex items-center gap-4">
                <ProfileAvatar />
                <LogoutButton />
              </div>
            ) : (
              <Button asChild>
                <Link to={'login'}>{t('header.login')}</Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
