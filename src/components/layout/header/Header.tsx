import Container from '@/components/layout/container/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/blog-logo.png';
import HeaderNavigation from '@/components/layout/header/navigation/HeaderNavigation';
import i18next from 'i18next';
import MenuButtons from '@/components/MenuButtons';

const Header: React.FC = () => {
  const lang = i18next.language;

  return (
    <header className="border-b border-solid">
      <Container>
        <div className="flex items-center justify-between p-4">
          <Link to={`/${lang}`}>
            <img src={logo} alt="blog logo" className="w-10" />
          </Link>

          <HeaderNavigation />

          <MenuButtons />
        </div>
      </Container>
    </header>
  );
};

export default Header;
