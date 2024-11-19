import Container from '@/components/container/Container';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/blog-logo.png';
import { ModeToggle } from '@/components/mode-toggle';
import { useTranslation } from 'react-i18next';
import ChangeLang from '@/components/ChangeLang';

const Header: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const lang = pathParts[1] || 'ka';
  const { t } = useTranslation();

  return (
    <header className="border-b border-solid">
      <Container>
        <div className="flex items-center justify-between p-4">
          <Link to={`/${lang}`}>
            <img src={logo} alt="blog logo" className="w-10" />
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li className="flex gap-5">
                <NavLink
                  to={`/${lang}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t('header.navItems.home')}
                </NavLink>
                <NavLink
                  to=""
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t('header.navItems.write')}
                </NavLink>
                <NavLink
                  to="about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t('header.navItems.about')}
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex gap-3">
            <Button asChild>
              <Link to={'login'}>{t('header.login')}</Link>
            </Button>
            <ModeToggle />
            <ChangeLang />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
