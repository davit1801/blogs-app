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

const ChangeLang: React.FC = () => {
  const handleChangeLanguage = (lang: string) => i18next.changeLanguage(lang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GrLanguage />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLanguage('ka')}>
          ქართ
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage('en')}>
          Eng
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeLang;
