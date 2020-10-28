import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Org from './pages/Org/Org';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/org" component={Org} />
          <Route path="*" render={() => <Redirect to={Main} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
