import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import headerKa from '@/i18n/ka/header.json';
import headerEn from '@/i18n/en/header.json';
import footerKa from '@/i18n/ka/footer.json';
import footerEn from '@/i18n/en/footer.json';
import homeKa from '@/i18n/ka/home.json';
import homeEn from '@/i18n/en/home.json';
import authKa from '@/i18n/ka/auth.json';
import authEn from '@/i18n/en/auth.json';
import aboutKa from '@/i18n/ka/about.json';
import aboutEn from '@/i18n/en/about.json';
import notFoundKa from '@/i18n/ka/notFound.json';
import notFoundEn from '@/i18n/en/notFound.json';
import profileKa from '@/i18n/ka/profile.json';
import profileEn from '@/i18n/en/profile.json';
import writeKa from '@/i18n/ka/write.json';
import writeEn from '@/i18n/en/write.json';

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
          home: homeKa,
          auth: authKa,
          about: aboutKa,
          notFound: notFoundKa,
          profile: profileKa,
          write: writeKa,
        },
      },
      en: {
        translation: {
          header: headerEn,
          footer: footerEn,
          home: homeEn,
          auth: authEn,
          about: aboutEn,
          notFound: notFoundEn,
          profile: profileEn,
          write: writeEn,
        },
      },
    },
    fallbackLng: 'ka',

    interpolation: {
      escapeValue: false,
    },
  });
