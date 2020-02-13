import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './publicViews/Main';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route render={() => <Redirect to="/main"> </Redirect>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
