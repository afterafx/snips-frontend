import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Pages from './components/pages';
import './css/style.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Pages.Home} />
          <Route path="/about" exact component={Pages.About} />
          <Route path="/snippets" component={Pages.Snippets} />
          <Route path="/account" component={Pages.Account} />
          <Route component={Pages.FourOhFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
