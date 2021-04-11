import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App(): JSX.Element {
  return (
    <div className="font-en">
      <NavigationBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
