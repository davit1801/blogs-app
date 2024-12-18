import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import i18next from 'i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const ChangeLang: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);

    const pathParts = location.pathname.split('/');
    pathParts[1] = lang;
    const newPath = pathParts.join('/');
    navigate(newPath, { replace: true });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="language selection menu"
        >
          <GrLanguage />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLanguage('ka')}>
          ქართული
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage('en')}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeLang;
