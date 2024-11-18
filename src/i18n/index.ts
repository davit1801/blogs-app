import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import headerKa from '@/i18n/ka/header.json';
import headerEn from '@/i18n/en/header.json';
import footerKa from '@/i18n/ka/footer.json';
import footerEn from '@/i18n/en/footer.json';

i18n.use(initReactI18next).init({
  resources: {
    ka: {
      translation: {
        header: headerKa,
        footer: footerKa,
      },
    },
    en: {
      translation: {
        header: headerEn,
        footer: footerEn,
      },
    },
  },
  lng: 'ka',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});
