import { useTranslation } from 'react-i18next';

import NavigationBar from '../../Components/NavigationBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Main from '../../Components/Main';

function Home(): JSX.Element {
  const { i18n } = useTranslation();

  const currentLng: 'en' | 'zh' = i18n.language || window.localStorage.i18nextLng || '';

  return (
    <div className={`font-${currentLng}`}>
      <NavigationBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
