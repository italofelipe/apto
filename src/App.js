import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Repository from './pages/Repository/Repository';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/rep" component={Repository} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
