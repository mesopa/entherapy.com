import { useTranslation } from 'react-i18next';

import '@fontsource/roboto/latin-300.css';
import '@fontsource/roboto/latin-400.css';
import '@fontsource/roboto/latin-700.css';

import '@fontsource-variable/montserrat';

import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main/';

function App() {
  const { i18n } = useTranslation();

  const currentLng: 'en' | 'zh' = i18n.language || window.localStorage.i18nextLng || '';

  const languageFonts = {
    en: 'font-en',
    zh: 'font-zh',
  };

  return (
    <div className={`${languageFonts[currentLng]}`}>
      <NavigationBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

