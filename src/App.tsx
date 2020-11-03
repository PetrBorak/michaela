import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router'
import { createBrowserHistory } from 'history'

import Shell from './containers/Shell/Shell';

import './App.css';

const publicUrl = process.env.PUBLIC_URL;
const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${publicUrl}/homepage`} component={Shell} />
        <Route exact path={`${publicUrl}/test`} component={Shell} />
        <Route path={`${publicUrl}/*`} render={() => <Redirect to={`${publicUrl}/test`} />} />
      </Switch>
    </Router>
  );
}

export default App;
