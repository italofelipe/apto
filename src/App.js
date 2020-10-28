import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Org from './pages/Org/Org';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/org" component={Org} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
