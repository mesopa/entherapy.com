import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    backend: {
      /* translation file path */
      loadPath: `${process.env.PUBLIC_URL}/localization/i18n/{{ns}}/{{lng}}.json`,
    },

    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
    },
  });

export default i18n;
