import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import headerKa from '@/i18n/ka/header.json';
import headerEn from '@/i18n/en/header.json';
import footerKa from '@/i18n/ka/footer.json';
import footerEn from '@/i18n/en/footer.json';
import authKa from '@/i18n/ka/auth.json';
import authEn from '@/i18n/en/auth.json';
import aboutKa from '@/i18n/ka/about.json';
import aboutEn from '@/i18n/en/about.json';
import notFoundKa from '@/i18n/ka/notFound.json';
import notFoundEn from '@/i18n/en/notFound.json';

export const SUPPORTED_LANGUAGES = ['ka', 'en'];

const options = {
  order: ['path'],

  lookupQuerystring: 'lang',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      ka: {
        translation: {
          header: headerKa,
          footer: footerKa,
          auth: authKa,
          about: aboutKa,
          notFound: notFoundKa,
        },
      },
      en: {
        translation: {
          header: headerEn,
          footer: footerEn,
          auth: authEn,
          about: aboutEn,
          notFound: notFoundEn,
        },
      },
    },
    fallbackLng: 'ka',

    interpolation: {
      escapeValue: false,
    },
  });
