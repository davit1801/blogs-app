import Container from '@/components/container/Container';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/blog-logo.png';
import { ModeToggle } from '@/components/mode-toggle';
import { useTranslation } from 'react-i18next';
import ChangeLang from '@/components/ChangeLang';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="border-b border-solid">
      <Container>
        <div className="flex items-center justify-between p-4">
          <Link to={'/'}>
            <img src={logo} alt="blog logo" className="w-10" />
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li className="flex gap-5">
                <NavLink to="/">{t('header.navItems.home')}</NavLink>
                <NavLink to="">{t('header.navItems.write')}</NavLink>
                <NavLink to="">{t('header.navItems.about')}</NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex gap-3">
            <Button asChild className="bg-[#3d61ff] hover:bg-[#3d61ffe5]">
              <Link to={'/login'}>{t('header.login')}</Link>
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
