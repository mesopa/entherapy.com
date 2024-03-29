import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(
    new LanguageDetector(null, {
      order: ['localStorage', 'sessionStorage', 'navigator'],
      caches: ['localStorage'],
    }),
  )
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    backend: {
      /* translation file path */
      loadPath: `/entherapy.com/localization/i18n/{{ns}}/{{lng}}.json`,
    },

    fallbackLng: code => {
      const fallbacks = [code];

      // If user language is not zh-Hans or en-US
      fallbacks.push('en');

      return fallbacks;
    },

    supportedLngs: ['en', 'zh'],

    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
