import { t } from 'i18next';
import React from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

type PropsType = {
  lang: string;
};

const activeLinkStyle = 'text-destructive-foreground';
const linkStyle = 'text-muted-foreground hover:text-foreground';

const handleActiveNav = ({ isActive }: NavLinkRenderProps) => {
  return isActive ? activeLinkStyle : linkStyle;
};

const HeaderNavigation: React.FC<PropsType> = ({ lang }) => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li className="flex gap-5">
          <NavLink to={`/${lang}`} end className={handleActiveNav}>
            {t('header.navItems.home')}
          </NavLink>
          <NavLink to="write" className={handleActiveNav}>
            {t('header.navItems.write')}
          </NavLink>
          <NavLink to="about" className={handleActiveNav}>
            {t('header.navItems.about')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
