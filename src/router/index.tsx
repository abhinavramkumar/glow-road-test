import * as React from 'react';
import {Router, Route, Switch} from 'react-router';
import Header from '../screens/Home/Header';
import createHistory from 'history/createBrowserHistory';
import Home from '../screens/Home';

const history = createHistory();

interface IProps {}

const AppRouter = (props: IProps) => (
  <Router history={history}>
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/cart" component={() => <div />} exact={true} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
