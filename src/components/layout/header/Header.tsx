import Container from '@/components/container/Container';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/blog-logo.png';
import { ModeToggle } from '@/components/buttons/mode-toggle';
import ChangeLang from '@/components/buttons/ChangeLang';
import HeaderNavigation from '@/components/layout/header/navigation/HeaderNavigation';
import { t } from 'i18next';
import { useAuth } from '@/hooks/useAuth';
import LogoutButton from '@/components/buttons/LogoutButton';

const Header: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const lang = pathParts[1] || 'ka';
  const { data: authData } = useAuth();

  return (
    <header className="border-b border-solid">
      <Container>
        <div className="flex items-center justify-between p-4">
          <Link to={`/${lang}`}>
            <img src={logo} alt="blog logo" className="w-10" />
          </Link>

          <HeaderNavigation lang={lang} />

          <div className="flex gap-3">
            {authData?.isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm">{authData?.email}</span>
                <LogoutButton />
              </div>
            ) : (
              <Button asChild>
                <Link to={'login'}>{t('header.login')}</Link>
              </Button>
            )}

            <ModeToggle />
            <ChangeLang />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
