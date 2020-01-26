import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Authentication from './Authentication';
import Mission from '../components/Mission';
import Community from '../components/Community';
import Profile from '../components/Profile';
import LoginForm from '../components/forms/LoginForm';
import Navbar from '../components/Navbar';

import './App.css';

const App = () => (
  <>
    <Navbar />
    <section id="main-content">
      <Switch>
        <Route exact path='/' component={Authentication}/>
        <Route path="/mission" component={Mission} />
        <Route path="/community" component={Community} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </section>
  </>
)
export default App;
