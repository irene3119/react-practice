import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UserListPage from './pages/UserListPage/UserListPage'
import Logout from './components/Logout'

export default () =>
  <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={UserListPage} />
      <Route path="/logout" exact component={Logout} />
  </Switch>;
