import './App.css';

import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
    </div>
  );
}

export default App;
