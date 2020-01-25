import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Unauthorized from '../Unauthorized';
import LogIn from '../LogIn';
import Home from './pages/Home';
// import List from './pages/List';
import Mission from './pages/Mission';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Login from './pages/Login';

import './App.css';

const App = () => (
  <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/mission" component={Mission} />
      <Route path="/community" component={Community} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      { /*<Route path='/list' component={List}/> */}
    </Switch>

    <Unauthorized>
      <LogIn />
    </Unauthorized>
  </>
)
export default App;
