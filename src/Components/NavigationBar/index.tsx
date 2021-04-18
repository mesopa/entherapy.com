import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import logo from '../../Assets/images/entherapy-logo-orange-white-inline.svg';

function NavigationBar(): JSX.Element {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const currentLng: 'en' | 'zh' = i18n.language || window.localStorage.i18nextLng || '';

  const handleLanguageOnClick = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  return (
    <div className="fixed top-0 inset-x-0 w-full py-2 bg-secondary-500 z-50 navigationBar">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center text-sm font-light text-white">
          <div
            className="flex-initial logo"
            style={{ backgroundImage: `url("${logo}")`, height: '60px', width: '210px' }}
          />

          <ul className="hidden md:flex flex-initial items-center">
            <li className="flex-initial">
              <ul className="flex">
                <li className="flex-initial mx-2">
                  <a href="#home" className="uppercase">
                    {`${t('home')}`}
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#about" className="uppercase">
                    {`${t('about')}`}
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#team" className="uppercase">
                    {`${t('team')}`}
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#clients" className="uppercase">
                    {`${t('clients')}`}
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#contactus" className="uppercase">
                    {`${t('contactus')}`}
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#physioacademy" className="uppercase">
                    {`${t('physioacademy')}`}
                  </a>
                </li>
              </ul>
            </li>

            <li className="flex-initial">
              <ul className="flex language">
                <li className="flex-initial mx-2">
                  <button
                    type="button"
                    className={`uppercase py-1 px-2 ${currentLng === 'en' && 'rounded-sm bg-primary-500'}`}
                    onClick={() => {
                      handleLanguageOnClick('en');
                    }}
                  >
                    English
                  </button>
                </li>
                <li className="flex-initial">
                  <button
                    type="button"
                    className={`uppercase py-1 px-2 ${currentLng === 'zh' && 'rounded-sm bg-primary-500'}`}
                    onClick={() => {
                      handleLanguageOnClick('zh');
                    }}
                  >
                    中文
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
