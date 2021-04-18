import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));

function App(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/entherapy.com" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
