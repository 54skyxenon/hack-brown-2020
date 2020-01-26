import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Unauthorized from './Unauthorized';
import RegisterForm from '../components/forms/RegisterForm';
import Home from '../components/Home';
// import List from './pages/List';
import Mission from '../components/Mission';
import Community from '../components/Community';
import Profile from '../components/Profile';
import Login from '../components/Login';

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
      <RegisterForm />
    </Unauthorized>
  </>
)
export default App;
