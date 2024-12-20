import { DEFAULT_PATHS } from '@/router/routes/default/index.enum';
import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

const activeLinkStyle = 'text-primary';
const linkStyle = 'text-muted-foreground hover:text-foreground';

const handleActiveNav = ({ isActive }: NavLinkRenderProps) => {
  return isActive ? activeLinkStyle : linkStyle;
};

const HeaderNavigation: React.FC = () => {
  const lang = i18next.language;
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex gap-4">
        <li className="flex gap-5">
          <NavLink to={`/${lang}`} end className={handleActiveNav}>
            {t('header.navItems.home')}
          </NavLink>
          <NavLink to={DEFAULT_PATHS.WRITE} className={handleActiveNav}>
            {t('header.navItems.write')}
          </NavLink>
          <NavLink to={DEFAULT_PATHS.ABOUT} className={handleActiveNav}>
            {t('header.navItems.about')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
